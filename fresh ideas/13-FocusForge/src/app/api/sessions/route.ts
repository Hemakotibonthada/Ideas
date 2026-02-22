import { NextRequest, NextResponse } from 'next/server';

const focusSessions = [
  {
    id: "fs-001",
    userId: "user-201",
    project: "Mobile App Redesign",
    startTime: "2026-02-17T09:00:00Z",
    endTime: "2026-02-17T10:30:00Z",
    duration: 90,
    type: "deep-work",
    distractions: 2,
    flowScore: 87,
    notes: "Completed wireframes for onboarding flow",
  },
  {
    id: "fs-002",
    userId: "user-202",
    project: "Backend API Migration",
    startTime: "2026-02-17T14:00:00Z",
    endTime: "2026-02-17T15:25:00Z",
    duration: 85,
    type: "pomodoro",
    distractions: 5,
    flowScore: 72,
    notes: "Migrated 3 endpoints to new architecture",
  },
  {
    id: "fs-003",
    userId: "user-201",
    project: "Documentation Sprint",
    startTime: "2026-02-17T16:00:00Z",
    endTime: "2026-02-17T16:45:00Z",
    duration: 45,
    type: "timeboxed",
    distractions: 0,
    flowScore: 95,
    notes: "Wrote API reference for auth module",
  },
];

export async function GET() {
  return NextResponse.json(focusSessions, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userId || !body.project || !body.startTime) {
      return NextResponse.json(
        { error: "Missing required fields: userId, project, startTime" },
        { status: 400 }
      );
    }

    const newSession = {
      id: `fs-${Date.now()}`,
      userId: body.userId,
      project: body.project,
      startTime: body.startTime,
      endTime: body.endTime ?? null,
      duration: body.duration ?? 0,
      type: body.type ?? "deep-work",
      distractions: body.distractions ?? 0,
      flowScore: body.flowScore ?? 0,
      notes: body.notes ?? "",
    };

    return NextResponse.json(newSession, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
