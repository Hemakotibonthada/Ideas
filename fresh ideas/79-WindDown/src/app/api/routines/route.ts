import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "rt-001",
    name: "Deep Relaxation Wind-Down",
    steps: [
      { activity: "Put phone on Do Not Disturb", duration: 1, order: 1 },
      { activity: "Warm herbal tea (chamomile or valerian)", duration: 10, order: 2 },
      { activity: "Gentle stretching or yoga", duration: 15, order: 3 },
      { activity: "Journaling — 3 grateful moments", duration: 10, order: 4 },
      { activity: "Progressive muscle relaxation", duration: 10, order: 5 },
      { activity: "Read fiction (physical book)", duration: 20, order: 6 },
      { activity: "Lights out — 4-7-8 breathing", duration: 5, order: 7 },
    ],
    totalDuration: 71,
    bedtime: "22:30",
    sleepQuality: 92,
    streak: 14,
  },
  {
    id: "rt-002",
    name: "Quick Weeknight Routine",
    steps: [
      { activity: "Screen curfew — all devices off", duration: 1, order: 1 },
      { activity: "Warm shower", duration: 10, order: 2 },
      { activity: "Apply lavender essential oil", duration: 2, order: 3 },
      { activity: "Read or listen to calm podcast", duration: 15, order: 4 },
      { activity: "Lights out", duration: 1, order: 5 },
    ],
    totalDuration: 29,
    bedtime: "23:00",
    sleepQuality: 78,
    streak: 7,
  },
  {
    id: "rt-003",
    name: "Mindful Evening Protocol",
    steps: [
      { activity: "Review tomorrow's schedule", duration: 5, order: 1 },
      { activity: "Brain dump — write down lingering thoughts", duration: 10, order: 2 },
      { activity: "Guided meditation (body scan)", duration: 15, order: 3 },
      { activity: "Dim lights to 10% / candlelight", duration: 1, order: 4 },
      { activity: "Light stretching", duration: 10, order: 5 },
      { activity: "Sleep story or white noise", duration: 10, order: 6 },
    ],
    totalDuration: 51,
    bedtime: "22:00",
    sleepQuality: 88,
    streak: 21,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const bedtime = body.bedtime || "23:00";
  const preferences = body.preferences || [];

  const defaultSteps = [
    { activity: "Screen curfew — put devices away", duration: 1, order: 1 },
    { activity: "Light stretching or yoga", duration: 10, order: 2 },
    { activity: "Journaling or brain dump", duration: 10, order: 3 },
    { activity: "Deep breathing exercise", duration: 5, order: 4 },
    { activity: "Lights out", duration: 1, order: 5 },
  ];

  const newRoutine = {
    id: `rt-${Date.now()}`,
    name: "Your Personalized Wind-Down",
    steps: defaultSteps,
    totalDuration: defaultSteps.reduce((sum, s) => sum + s.duration, 0),
    bedtime,
    preferences,
    sleepQuality: null,
    streak: 0,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newRoutine, { status: 201 });
}
