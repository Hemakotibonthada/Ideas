import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "task-001",
    category: "EMAIL",
    itemsFound: 2340,
    itemsDeleted: 1876,
    spaceSaved: "1.2 GB",
    completedAt: "2026-02-17T14:30:00Z",
  },
  {
    id: "task-002",
    category: "FILES",
    itemsFound: 856,
    itemsDeleted: 412,
    spaceSaved: "8.7 GB",
    completedAt: "2026-02-16T09:15:00Z",
  },
  {
    id: "task-003",
    category: "APPS",
    itemsFound: 47,
    itemsDeleted: 19,
    spaceSaved: "3.4 GB",
    completedAt: "2026-02-15T20:45:00Z",
  },
  {
    id: "task-004",
    category: "PHOTOS",
    itemsFound: 5210,
    itemsDeleted: 1340,
    spaceSaved: "12.1 GB",
    completedAt: null,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const mockResults: Record<string, { found: number; deleted: number; space: string }> = {
    EMAIL: { found: 1850, deleted: 1200, space: "0.9 GB" },
    FILES: { found: 620, deleted: 310, space: "5.2 GB" },
    APPS: { found: 38, deleted: 12, space: "2.1 GB" },
    SOCIAL: { found: 430, deleted: 280, space: "0.4 GB" },
    PHOTOS: { found: 3200, deleted: 890, space: "7.8 GB" },
  };
  const result = mockResults[body.category] ?? mockResults.FILES;
  const newTask = {
    id: `task-${Date.now()}`,
    category: body.category,
    itemsFound: result.found,
    itemsDeleted: result.deleted,
    spaceSaved: result.space,
    completedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newTask, { status: 201 });
}
