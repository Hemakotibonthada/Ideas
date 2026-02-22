import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "chore-001",
    chore: "Wash the dishes",
    assignee: "Alex",
    points: 15,
    dueDate: "2026-02-18T20:00:00Z",
    completed: false,
    streak: 5,
    household: "The Johnsons",
  },
  {
    id: "chore-002",
    chore: "Vacuum the living room",
    assignee: "Sam",
    points: 25,
    dueDate: "2026-02-19T18:00:00Z",
    completed: false,
    streak: 3,
    household: "The Johnsons",
  },
  {
    id: "chore-003",
    chore: "Take out the trash",
    assignee: "Jordan",
    points: 10,
    dueDate: "2026-02-18T21:00:00Z",
    completed: true,
    streak: 12,
    household: "The Johnsons",
  },
  {
    id: "chore-004",
    chore: "Mow the lawn",
    assignee: "Alex",
    points: 40,
    dueDate: "2026-02-22T10:00:00Z",
    completed: false,
    streak: 0,
    household: "The Johnsons",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `chore-${Date.now()}`,
    chore: body.chore,
    assignee: body.assignee,
    points: body.points || 10,
    dueDate: body.dueDate,
    completed: false,
    streak: 0,
    household: body.household,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
