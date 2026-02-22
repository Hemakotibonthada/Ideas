import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "sess-001",
    duration: 45,
    postureScore: 78,
    alerts: 6,
    improvements: [
      { area: "Neck tilt", before: 22, after: 8 },
      { area: "Shoulder alignment", before: 15, after: 5 },
    ],
    date: "2026-02-18T09:00:00Z",
  },
  {
    id: "sess-002",
    duration: 60,
    postureScore: 85,
    alerts: 3,
    improvements: [
      { area: "Lower back curve", before: 30, after: 12 },
      { area: "Head forward lean", before: 18, after: 7 },
    ],
    date: "2026-02-17T10:30:00Z",
  },
  {
    id: "sess-003",
    duration: 30,
    postureScore: 62,
    alerts: 11,
    improvements: [
      { area: "Slouching", before: 45, after: 28 },
      { area: "Screen distance", before: 25, after: 15 },
      { area: "Neck tilt", before: 20, after: 14 },
    ],
    date: "2026-02-16T14:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const duration = body.duration || 30;
  const newItem = {
    id: `sess-${Date.now()}`,
    duration,
    postureScore: Math.floor(Math.random() * 30) + 60,
    alerts: Math.floor(Math.random() * 10) + 1,
    improvements: [
      { area: "Neck tilt", before: Math.floor(Math.random() * 20) + 15, after: Math.floor(Math.random() * 10) + 3 },
      { area: "Shoulder alignment", before: Math.floor(Math.random() * 15) + 10, after: Math.floor(Math.random() * 8) + 2 },
    ],
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
