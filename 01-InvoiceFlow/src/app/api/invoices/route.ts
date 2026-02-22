import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const invoiceSchema = z.object({
  clientId: z.string().min(1, 'Client is required'),
  dueDate: z.string().min(1, 'Due date is required'),
  items: z.array(z.object({
    description: z.string().min(1),
    quantity: z.number().positive(),
    unitPrice: z.number().min(0),
    taxId: z.string().optional(),
  })).min(1, 'At least one item is required'),
  discount: z.number().min(0).default(0),
  discountType: z.enum(['FIXED', 'PERCENTAGE']).default('FIXED'),
  notes: z.string().optional(),
  terms: z.string().optional(),
});

// GET /api/invoices - List invoices with filtering & pagination
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');
    const clientId = searchParams.get('clientId');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const where: any = {
      organizationId: (session.user as any).organizationId,
    };

    if (status) where.status = status;
    if (clientId) where.clientId = clientId;
    if (search) {
      where.OR = [
        { invoiceNumber: { contains: search, mode: 'insensitive' } },
        { client: { name: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [invoices, total] = await Promise.all([
      prisma.invoice.findMany({
        where,
        include: {
          client: { select: { id: true, name: true, email: true, company: true } },
          _count: { select: { items: true, payments: true } },
        },
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.invoice.count({ where }),
    ]);

    return NextResponse.json({
      invoices,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/invoices - Create a new invoice
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = invoiceSchema.parse(body);
    const orgId = (session.user as any).organizationId;

    // Get organization for invoice number
    const org = await prisma.organization.findUnique({
      where: { id: orgId },
    });

    if (!org) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // Generate invoice number
    const invoiceNumber = `${org.invoicePrefix}-${String(org.nextInvoiceNum).padStart(5, '0')}`;

    // Calculate totals
    let subtotal = 0;
    let totalTax = 0;
    const itemsData = [];

    for (const item of validatedData.items) {
      const amount = item.quantity * item.unitPrice;
      let taxAmount = 0;

      if (item.taxId) {
        const tax = await prisma.tax.findUnique({ where: { id: item.taxId } });
        if (tax) {
          taxAmount = amount * (tax.rate / 100);
        }
      }

      subtotal += amount;
      totalTax += taxAmount;
      itemsData.push({
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        amount,
        taxAmount,
        taxId: item.taxId || null,
        sortOrder: itemsData.length,
      });
    }

    // Calculate discount
    let discountAmount = validatedData.discount;
    if (validatedData.discountType === 'PERCENTAGE') {
      discountAmount = subtotal * (validatedData.discount / 100);
    }

    const total = subtotal + totalTax - discountAmount;

    // Create invoice with items in a transaction
    const invoice = await prisma.$transaction(async (tx) => {
      const inv = await tx.invoice.create({
        data: {
          invoiceNumber,
          clientId: validatedData.clientId,
          organizationId: orgId,
          createdById: (session.user as any).id,
          dueDate: new Date(validatedData.dueDate),
          subtotal,
          taxAmount: totalTax,
          discount: discountAmount,
          discountType: validatedData.discountType,
          total,
          amountDue: total,
          notes: validatedData.notes,
          terms: validatedData.terms,
          publicToken: crypto.randomUUID(),
          items: {
            create: itemsData,
          },
        },
        include: {
          client: true,
          items: true,
        },
      });

      // Increment invoice number
      await tx.organization.update({
        where: { id: orgId },
        data: { nextInvoiceNum: { increment: 1 } },
      });

      // Log activity
      await tx.activity.create({
        data: {
          type: 'INVOICE_CREATED',
          message: `Invoice ${invoiceNumber} created for ${inv.client.name}`,
          userId: (session.user as any).id,
          invoiceId: inv.id,
        },
      });

      return inv;
    });

    return NextResponse.json(invoice, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }
    console.error('Error creating invoice:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
