import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(1).max(500),
  description: z.string().optional(),
  priority: z.enum(['URGENT', 'HIGH', 'MEDIUM', 'LOW', 'NONE']).default('MEDIUM'),
  type: z.enum(['EPIC', 'STORY', 'TASK', 'BUG', 'SUBTASK']).default('TASK'),
  columnId: z.string().optional(),
  assigneeId: z.string().optional(),
  sprintId: z.string().optional(),
  parentId: z.string().optional(),
  dueDate: z.string().optional(),
  storyPoints: z.number().optional(),
  labelIds: z.array(z.string()).optional(),
});

// GET /api/projects/[projectId]/tasks
export async function GET(req: Request, { params }: { params: { projectId: string } }) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const assigneeId = searchParams.get('assigneeId');
    const sprintId = searchParams.get('sprintId');
    const priority = searchParams.get('priority');
    const search = searchParams.get('search');
    const view = searchParams.get('view') || 'board'; // board | list

    const where: any = { projectId: params.projectId };
    if (status) where.status = status;
    if (assigneeId) where.assigneeId = assigneeId;
    if (sprintId) where.sprintId = sprintId;
    if (priority) where.priority = priority;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        assignee: { select: { id: true, name: true, image: true } },
        labels: { include: { label: true } },
        column: { select: { id: true, name: true } },
        _count: { select: { subtasks: true, comments: true, attachments: true } },
      },
      orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
    });

    if (view === 'board') {
      // Group tasks by column
      const columns = await prisma.column.findMany({
        where: { board: { projectId: params.projectId } },
        orderBy: { position: 'asc' },
      });

      const board = columns.map((col) => ({
        ...col,
        tasks: tasks.filter((t) => t.columnId === col.id),
      }));

      return NextResponse.json({ board, totalTasks: tasks.length });
    }

    return NextResponse.json({ tasks, total: tasks.length });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/projects/[projectId]/tasks
export async function POST(req: Request, { params }: { params: { projectId: string } }) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const data = taskSchema.parse(body);

    // Get next task number for this project
    const lastTask = await prisma.task.findFirst({
      where: { projectId: params.projectId },
      orderBy: { number: 'desc' },
      select: { number: true },
    });

    const number = (lastTask?.number || 0) + 1;

    const task = await prisma.task.create({
      data: {
        number,
        title: data.title,
        description: data.description,
        priority: data.priority,
        type: data.type,
        projectId: params.projectId,
        columnId: data.columnId,
        assigneeId: data.assigneeId,
        sprintId: data.sprintId,
        parentId: data.parentId,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        storyPoints: data.storyPoints,
        creatorId: (session.user as any).id,
        labels: data.labelIds ? {
          create: data.labelIds.map((labelId) => ({ labelId })),
        } : undefined,
      },
      include: {
        assignee: { select: { id: true, name: true, image: true } },
        labels: { include: { label: true } },
        column: true,
      },
    });

    // Log activity
    await prisma.activity.create({
      data: {
        action: 'created',
        taskId: task.id,
        userId: (session.user as any).id,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }
    console.error('Error creating task:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
