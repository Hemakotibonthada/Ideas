import { NextRequest, NextResponse } from 'next/server';

const workouts = [
  {
    id: '1',
    name: 'Morning HIIT Blast',
    type: 'HIIT',
    equipment: ['Dumbbells', 'Jump Rope'],
    duration: 30,
    exercises: 8,
    calories: 350,
    difficulty: 'Intermediate',
    targetMuscles: ['Core', 'Legs', 'Shoulders'],
    sets: 4,
    reps: 12,
  },
  {
    id: '2',
    name: 'Upper Body Strength',
    type: 'Strength',
    equipment: ['Barbell', 'Bench', 'Pull-up Bar'],
    duration: 45,
    exercises: 6,
    calories: 280,
    difficulty: 'Advanced',
    targetMuscles: ['Chest', 'Back', 'Biceps', 'Triceps'],
    sets: 5,
    reps: 8,
  },
  {
    id: '3',
    name: 'Yoga Flow',
    type: 'Flexibility',
    equipment: ['Yoga Mat'],
    duration: 60,
    exercises: 12,
    calories: 180,
    difficulty: 'Beginner',
    targetMuscles: ['Full Body', 'Core'],
    sets: 1,
    reps: 1,
  },
  {
    id: '4',
    name: '5K Interval Run',
    type: 'Cardio',
    equipment: ['Running Shoes'],
    duration: 25,
    exercises: 1,
    calories: 400,
    difficulty: 'Intermediate',
    targetMuscles: ['Legs', 'Glutes', 'Core'],
    sets: 6,
    reps: 1,
  },
];

export async function GET() {
  return NextResponse.json({ workouts }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.type || !body.duration) {
      return NextResponse.json(
        { error: 'Missing required fields: name, type, duration' },
        { status: 400 }
      );
    }

    const newWorkout = {
      id: String(workouts.length + 1),
      name: body.name,
      type: body.type,
      equipment: body.equipment ?? [],
      duration: body.duration,
      exercises: body.exercises ?? 0,
      calories: body.calories ?? 0,
      difficulty: body.difficulty ?? 'Beginner',
      targetMuscles: body.targetMuscles ?? [],
      sets: body.sets ?? 0,
      reps: body.reps ?? 0,
    };

    workouts.push(newWorkout);
    return NextResponse.json({ workout: newWorkout }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
