import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "don-001",
    bloodType: "O-",
    hospital: "Harborview Medical Center",
    urgency: "CRITICAL",
    unitsNeeded: 5,
    location: "Seattle, WA",
    postedAt: "2026-02-18T06:00:00.000Z",
  },
  {
    id: "don-002",
    bloodType: "A+",
    hospital: "Swedish Medical Center",
    urgency: "HIGH",
    unitsNeeded: 3,
    location: "Seattle, WA",
    postedAt: "2026-02-17T14:30:00.000Z",
  },
  {
    id: "don-003",
    bloodType: "B+",
    hospital: "Providence Portland Medical Center",
    urgency: "NORMAL",
    unitsNeeded: 2,
    location: "Portland, OR",
    postedAt: "2026-02-17T09:15:00.000Z",
  },
  {
    id: "don-004",
    bloodType: "AB-",
    hospital: "OHSU Hospital",
    urgency: "CRITICAL",
    unitsNeeded: 4,
    location: "Portland, OR",
    postedAt: "2026-02-18T03:45:00.000Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newRequest = {
    id: `don-${Date.now()}`,
    ...body,
    postedAt: new Date().toISOString(),
  };
  return NextResponse.json(newRequest, { status: 201 });
}
