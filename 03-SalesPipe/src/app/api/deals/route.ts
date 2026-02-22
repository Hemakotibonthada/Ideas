import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const dealSchema = z.object({
  title: z.string().min(1),
  value: z.number().min(0),
  stageId: z.string(),
  pipelineId: z.string(),
  companyId: z.string().optional(),
  contactIds: z.array(z.string()).optional(),
  expectedCloseDate: z.string().optional(),
  notes: z.string().optional(),
});

// GET /api/deals - List deals with pipeline view
export async function GET(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const pipelineId = searchParams.get('pipelineId');
    const status = searchParams.get('status') || 'OPEN';
    const ownerId = searchParams.get('ownerId');

    const where: any = {
      organizationId: (session.user as any).organizationId,
      status,
    };
    if (pipelineId) where.pipelineId = pipelineId;
    if (ownerId) where.ownerId = ownerId;

    // Get pipeline with stages and deals
    const pipeline = await prisma.pipeline.findFirst({
      where: {
        id: pipelineId || undefined,
        organizationId: (session.user as any).organizationId,
        ...(pipelineId ? {} : { isDefault: true }),
      },
      include: {
        stages: {
          orderBy: { position: 'asc' },
          include: {
            deals: {
              where: { status: status as any },
              include: {
                company: { select: { name: true, logo: true } },
                owner: { select: { name: true, image: true } },
                contacts: { include: { contact: { select: { firstName: true, lastName: true } } } },
              },
              orderBy: { position: 'asc' },
            },
          },
        },
      },
    });

    // Calculate pipeline stats
    const stats = await prisma.deal.groupBy({
      by: ['status'],
      where: { organizationId: (session.user as any).organizationId },
      _sum: { value: true },
      _count: true,
    });

    return NextResponse.json({ pipeline, stats });
  } catch (error) {
    console.error('Error fetching deals:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/deals - Create deal
export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const data = dealSchema.parse(body);

    const deal = await prisma.deal.create({
      data: {
        title: data.title,
        value: data.value,
        stageId: data.stageId,
        pipelineId: data.pipelineId,
        companyId: data.companyId,
        ownerId: (session.user as any).id,
        organizationId: (session.user as any).organizationId,
        expectedCloseDate: data.expectedCloseDate ? new Date(data.expectedCloseDate) : null,
        notes: data.notes,
        contacts: data.contactIds ? {
          create: data.contactIds.map((contactId) => ({ contactId })),
        } : undefined,
      },
      include: { company: true, stage: true, owner: true },
    });

    await prisma.activity.create({
      data: {
        type: 'DEAL_STAGE_CHANGED',
        subject: `Deal "${deal.title}" created in ${deal.stage.name}`,
        userId: (session.user as any).id,
        dealId: deal.id,
      },
    });

    return NextResponse.json(deal, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
