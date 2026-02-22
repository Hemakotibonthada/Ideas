import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "log-001",
    babyName: "Emma",
    type: "FEED",
    timestamp: "2026-02-18T06:30:00Z",
    duration: 25,
    notes: "Breastfed, left side. Good latch, fed well.",
    quantity: "4 oz",
  },
  {
    id: "log-002",
    babyName: "Emma",
    type: "SLEEP",
    timestamp: "2026-02-18T07:15:00Z",
    duration: 90,
    notes: "Morning nap. Fell asleep in crib without fussing.",
    quantity: null,
  },
  {
    id: "log-003",
    babyName: "Emma",
    type: "DIAPER",
    timestamp: "2026-02-18T08:50:00Z",
    duration: null,
    notes: "Wet diaper only. No rash observed.",
    quantity: null,
  },
  {
    id: "log-004",
    babyName: "Emma",
    type: "MILESTONE",
    timestamp: "2026-02-17T15:00:00Z",
    duration: null,
    notes: "First time rolling from tummy to back! Happened during tummy time. Very excited!",
    quantity: null,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { babyName, type, notes, duration, quantity } = body as {
    babyName: string;
    type: string;
    notes: string;
    duration: number | null;
    quantity: string | null;
  };

  const newLog = {
    id: `log-${Date.now()}`,
    babyName,
    type,
    timestamp: new Date().toISOString(),
    duration,
    notes,
    quantity,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newLog, { status: 201 });
}
