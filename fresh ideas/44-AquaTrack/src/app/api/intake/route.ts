import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "intake-001",
    amount: 350,
    unit: "ml",
    timestamp: "2026-02-18T07:00:00.000Z",
    source: "WATER",
  },
  {
    id: "intake-002",
    amount: 250,
    unit: "ml",
    timestamp: "2026-02-18T09:30:00.000Z",
    source: "COFFEE",
  },
  {
    id: "intake-003",
    amount: 12,
    unit: "oz",
    timestamp: "2026-02-18T12:15:00.000Z",
    source: "WATER",
  },
  {
    id: "intake-004",
    amount: 200,
    unit: "ml",
    timestamp: "2026-02-18T15:45:00.000Z",
    source: "TEA",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newLog = {
    id: `intake-${Date.now()}`,
    ...body,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(newLog, { status: 201 });
}
