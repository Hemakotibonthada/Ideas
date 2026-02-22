import { NextRequest, NextResponse } from 'next/server';

const habits = [
  {
    id: '1',
    name: 'Morning Meditation',
    category: 'Mindfulness',
    frequency: 'daily',
    streak: 42,
    longestStreak: 65,
    completedToday: true,
    cue: 'After waking up',
    routine: '10 minutes guided meditation',
    reward: 'Morning coffee',
    consistency: 0.87,
  },
  {
    id: '2',
    name: 'Read 30 Pages',
    category: 'Learning',
    frequency: 'daily',
    streak: 18,
    longestStreak: 30,
    completedToday: false,
    cue: 'Before bed',
    routine: 'Read non-fiction book',
    reward: 'Track progress in reading list',
    consistency: 0.72,
  },
  {
    id: '3',
    name: 'Gym Workout',
    category: 'Fitness',
    frequency: '3x per week',
    streak: 8,
    longestStreak: 24,
    completedToday: true,
    cue: 'Lunch break',
    routine: '45 min strength training',
    reward: 'Protein smoothie',
    consistency: 0.81,
  },
  {
    id: '4',
    name: 'Journal Writing',
    category: 'Reflection',
    frequency: 'daily',
    streak: 5,
    longestStreak: 14,
    completedToday: false,
    cue: 'After dinner',
    routine: 'Write 3 things grateful for',
    reward: 'Relaxing music session',
    consistency: 0.55,
  },
];

export async function GET() {
  return NextResponse.json({ habits }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.category || !body.frequency) {
    return NextResponse.json(
      { error: 'Missing required fields: name, category, frequency' },
      { status: 400 }
    );
  }

  const newHabit = {
    id: String(habits.length + 1),
    name: body.name,
    category: body.category,
    frequency: body.frequency,
    streak: 0,
    longestStreak: 0,
    completedToday: false,
    cue: body.cue ?? '',
    routine: body.routine ?? '',
    reward: body.reward ?? '',
    consistency: 0,
  };

  habits.push(newHabit);

  return NextResponse.json({ habit: newHabit }, { status: 201 });
}
