import { NextRequest, NextResponse } from 'next/server';

const memories = [
  {
    id: "mem-001",
    title: "Summer Road Trip 2025",
    type: "photo-album",
    date: "2025-07-15",
    unlockDate: "2026-07-15",
    locked: true,
    tags: ["travel", "friends", "summer"],
    people: ["Alex", "Jordan", "Sam"],
    emotion: "joyful",
    mediaCount: 48,
    encrypted: true,
  },
  {
    id: "mem-002",
    title: "Graduation Day",
    type: "video",
    date: "2024-05-20",
    unlockDate: null,
    locked: false,
    tags: ["milestone", "education", "family"],
    people: ["Mom", "Dad", "Sister"],
    emotion: "proud",
    mediaCount: 5,
    encrypted: false,
  },
  {
    id: "mem-003",
    title: "Letter to Future Me",
    type: "time-capsule",
    date: "2025-01-01",
    unlockDate: "2030-01-01",
    locked: true,
    tags: ["personal", "reflection", "goals"],
    people: [],
    emotion: "hopeful",
    mediaCount: 1,
    encrypted: true,
  },
];

export async function GET() {
  return NextResponse.json(memories, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.type || !body.date) {
      return NextResponse.json(
        { error: "Missing required fields: title, type, date" },
        { status: 400 }
      );
    }

    const newMemory = {
      id: `mem-${Date.now()}`,
      title: body.title,
      type: body.type,
      date: body.date,
      unlockDate: body.unlockDate ?? null,
      locked: body.locked ?? false,
      tags: body.tags ?? [],
      people: body.people ?? [],
      emotion: body.emotion ?? "neutral",
      mediaCount: body.mediaCount ?? 0,
      encrypted: body.encrypted ?? false,
    };

    return NextResponse.json(newMemory, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
