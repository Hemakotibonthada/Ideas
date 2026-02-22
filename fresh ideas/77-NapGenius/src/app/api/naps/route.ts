import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "nap-001",
    scheduledAt: "2026-02-18T13:00:00Z",
    duration: 20,
    type: "POWER",
    quality: 88,
    alertnessAfter: 92,
    notes: "Quick recharge after lunch. Felt refreshed within 5 minutes of waking.",
  },
  {
    id: "nap-002",
    scheduledAt: "2026-02-17T15:30:00Z",
    duration: 45,
    type: "RECOVERY",
    quality: 74,
    alertnessAfter: 80,
    notes: "Made up for poor sleep last night. Slight grogginess for 10 minutes after.",
  },
  {
    id: "nap-003",
    scheduledAt: "2026-02-16T14:00:00Z",
    duration: 90,
    type: "FULL_CYCLE",
    quality: 95,
    alertnessAfter: 97,
    notes: "Full sleep cycle completed. Woke naturally at end of REM. Excellent cognitive boost.",
  },
  {
    id: "nap-004",
    scheduledAt: "2026-02-15T13:15:00Z",
    duration: 20,
    type: "POWER",
    quality: 65,
    alertnessAfter: 70,
    notes: "Had trouble falling asleep. Ambient noise was distracting. Only got ~10 min actual sleep.",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const currentEnergy = body.currentEnergy || 50;

  let recommendedType: string;
  let recommendedDuration: number;

  if (currentEnergy < 30) {
    recommendedType = "FULL_CYCLE";
    recommendedDuration = 90;
  } else if (currentEnergy < 60) {
    recommendedType = "RECOVERY";
    recommendedDuration = 45;
  } else {
    recommendedType = "POWER";
    recommendedDuration = 20;
  }

  const newNap = {
    id: `nap-${Date.now()}`,
    recommendedType,
    recommendedDuration,
    scheduledAt: new Date().toISOString(),
    wakeUpBy: body.wakeUpBy || null,
    lastSleep: body.lastSleep || null,
    currentEnergy,
    tips: [
      "Find a cool, dark environment (65-68°F ideal)",
      "Set an alarm to avoid oversleeping",
      recommendedType === "POWER" ? "Drink coffee right before — caffeine kicks in ~20 min" : "Use an eye mask for deeper sleep",
    ],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newNap, { status: 201 });
}
