import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "ss-001",
    startTime: "2026-02-18T08:00:00Z",
    endTime: "2026-02-18T12:30:00Z",
    duration: 270,
    breaks: [
      { at: "08:20", duration: 20, type: "20-20-20" },
      { at: "08:40", duration: 20, type: "20-20-20" },
      { at: "09:00", duration: 300, type: "full-break" },
      { at: "09:25", duration: 20, type: "20-20-20" },
      { at: "09:45", duration: 20, type: "20-20-20" },
      { at: "10:05", duration: 300, type: "full-break" },
    ],
    blinkRate: 14,
    strainLevel: "MEDIUM",
    exercises: ["Palming", "Figure-8 eye movement", "Focus shifting near-far"],
  },
  {
    id: "ss-002",
    startTime: "2026-02-17T13:00:00Z",
    endTime: "2026-02-17T14:30:00Z",
    duration: 90,
    breaks: [
      { at: "13:20", duration: 20, type: "20-20-20" },
      { at: "13:40", duration: 20, type: "20-20-20" },
      { at: "14:00", duration: 300, type: "full-break" },
    ],
    blinkRate: 18,
    strainLevel: "LOW",
    exercises: ["Gentle eye circles", "Blink exercise — 10 rapid blinks"],
  },
  {
    id: "ss-003",
    startTime: "2026-02-16T09:00:00Z",
    endTime: "2026-02-16T18:00:00Z",
    duration: 540,
    breaks: [
      { at: "09:20", duration: 20, type: "20-20-20" },
      { at: "10:00", duration: 600, type: "full-break" },
      { at: "11:00", duration: 20, type: "20-20-20" },
      { at: "12:00", duration: 3600, type: "lunch-break" },
    ],
    blinkRate: 9,
    strainLevel: "HIGH",
    exercises: ["Palming for 2 minutes", "Warm compress", "Look at distant objects for 5 minutes", "Close eyes and rest"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const plannedDuration = body.plannedDuration || 120;
  const breakIntervalMinutes = 20;
  const fullBreakIntervalMinutes = 60;

  const breaks = [];
  for (let m = breakIntervalMinutes; m < plannedDuration; m += breakIntervalMinutes) {
    if (m % fullBreakIntervalMinutes === 0) {
      breaks.push({ atMinute: m, duration: 300, type: "full-break" });
    } else {
      breaks.push({ atMinute: m, duration: 20, type: "20-20-20" });
    }
  }

  const newSession = {
    id: `ss-${Date.now()}`,
    plannedDuration,
    startTime: new Date().toISOString(),
    breaks,
    exercises: [
      "Every 20 min: Look at something 20 feet away for 20 seconds",
      "Every 60 min: Stand, stretch, and walk for 5 minutes",
      "Blink consciously — aim for 15-20 blinks per minute",
    ],
    tips: [
      "Position screen 20-26 inches from eyes",
      "Top of screen at or below eye level",
      "Reduce screen brightness to match ambient light",
    ],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newSession, { status: 201 });
}
