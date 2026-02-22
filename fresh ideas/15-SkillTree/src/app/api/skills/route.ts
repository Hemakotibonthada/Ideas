import { NextRequest, NextResponse } from 'next/server';

const skills = [
  {
    id: "skill-001",
    userId: "user-401",
    name: "TypeScript",
    category: "programming",
    level: 12,
    xp: 4850,
    xpToNext: 5200,
    streak: 14,
    lastPracticed: "2026-02-17",
    totalHours: 186.5,
    badges: ["First Commit", "Type Master", "100 Hours"],
  },
  {
    id: "skill-002",
    userId: "user-401",
    name: "Piano",
    category: "music",
    level: 7,
    xp: 2100,
    xpToNext: 2800,
    streak: 5,
    lastPracticed: "2026-02-16",
    totalHours: 92.0,
    badges: ["First Note", "Scale Runner"],
  },
  {
    id: "skill-003",
    userId: "user-402",
    name: "Spanish",
    category: "language",
    level: 9,
    xp: 3200,
    xpToNext: 3600,
    streak: 30,
    lastPracticed: "2026-02-17",
    totalHours: 145.0,
    badges: ["First Word", "Streak Legend", "Conversationalist"],
  },
];

export async function GET() {
  return NextResponse.json(skills, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userId || !body.name || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields: userId, name, category" },
        { status: 400 }
      );
    }

    const newSkill = {
      id: `skill-${Date.now()}`,
      userId: body.userId,
      name: body.name,
      category: body.category,
      level: body.level ?? 1,
      xp: body.xp ?? 0,
      xpToNext: body.xpToNext ?? 100,
      streak: body.streak ?? 0,
      lastPracticed: body.lastPracticed ?? new Date().toISOString().split("T")[0],
      totalHours: body.totalHours ?? 0,
      badges: body.badges ?? [],
    };

    return NextResponse.json(newSkill, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
