import { NextRequest, NextResponse } from 'next/server';

const sleepSessions = [
  {
    id: "ss-001",
    userId: "user-101",
    date: "2026-02-17",
    bedtime: "23:15",
    wakeTime: "07:05",
    duration: 470,
    quality: "good",
    deepSleep: 95,
    remSleep: 110,
    lightSleep: 265,
    sleepScore: 82,
    chronotype: "bear",
  },
  {
    id: "ss-002",
    userId: "user-102",
    date: "2026-02-17",
    bedtime: "00:30",
    wakeTime: "08:45",
    duration: 495,
    quality: "excellent",
    deepSleep: 120,
    remSleep: 100,
    lightSleep: 275,
    sleepScore: 91,
    chronotype: "wolf",
  },
  {
    id: "ss-003",
    userId: "user-103",
    date: "2026-02-16",
    bedtime: "21:45",
    wakeTime: "05:30",
    duration: 465,
    quality: "fair",
    deepSleep: 70,
    remSleep: 90,
    lightSleep: 305,
    sleepScore: 68,
    chronotype: "lion",
  },
];

export async function GET() {
  return NextResponse.json(sleepSessions, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userId || !body.date || !body.bedtime || !body.wakeTime) {
      return NextResponse.json(
        { error: "Missing required fields: userId, date, bedtime, wakeTime" },
        { status: 400 }
      );
    }

    const newSession = {
      id: `ss-${Date.now()}`,
      userId: body.userId,
      date: body.date,
      bedtime: body.bedtime,
      wakeTime: body.wakeTime,
      duration: body.duration ?? 0,
      quality: body.quality ?? "unknown",
      deepSleep: body.deepSleep ?? 0,
      remSleep: body.remSleep ?? 0,
      lightSleep: body.lightSleep ?? 0,
      sleepScore: body.sleepScore ?? 0,
      chronotype: body.chronotype ?? "bear",
    };

    return NextResponse.json(newSession, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
