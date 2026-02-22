import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "rec-001",
    date: "2026-02-17",
    duration: 27840,
    snoreEvents: 42,
    maxDecibels: 68,
    sleepQuality: 62,
    suggestions: [
      "Try sleeping on your side to reduce snoring intensity",
      "Consider elevating your head with an extra pillow",
    ],
  },
  {
    id: "rec-002",
    date: "2026-02-16",
    duration: 25200,
    snoreEvents: 18,
    maxDecibels: 52,
    sleepQuality: 78,
    suggestions: [
      "Your snoring decreased — keep up the side-sleeping position",
    ],
  },
  {
    id: "rec-003",
    date: "2026-02-15",
    duration: 30600,
    snoreEvents: 65,
    maxDecibels: 74,
    sleepQuality: 45,
    suggestions: [
      "High snoring frequency detected — consider consulting a sleep specialist",
      "Avoid alcohol before bedtime to reduce snoring",
      "Nasal strips may help improve airflow",
    ],
  },
  {
    id: "rec-004",
    date: "2026-02-14",
    duration: 28800,
    snoreEvents: 30,
    maxDecibels: 58,
    sleepQuality: 70,
    suggestions: [
      "Moderate snoring — maintaining a healthy weight can help reduce it",
    ],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newRecording = {
    id: `rec-${Date.now()}`,
    ...body,
    sleepQuality: Math.max(0, 100 - body.snoreEvents),
    suggestions: [],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newRecording, { status: 201 });
}
