import { NextRequest, NextResponse } from 'next/server';

const moods = [
  {
    id: '1',
    date: '2026-02-18',
    mood: 'Happy',
    intensity: 8,
    triggers: ['Good weather', 'Completed project'],
    activities: ['Walking', 'Reading'],
    journalEntry: 'Felt really productive today. Finished the report ahead of deadline.',
    cbtExercise: 'Gratitude journaling',
    sleepHours: 7.5,
    energyLevel: 9,
  },
  {
    id: '2',
    date: '2026-02-17',
    mood: 'Anxious',
    intensity: 6,
    triggers: ['Upcoming deadline', 'Traffic'],
    activities: ['Deep breathing', 'Meditation'],
    journalEntry: 'Felt overwhelmed in the morning but meditation helped calm down.',
    cbtExercise: 'Thought challenging',
    sleepHours: 5.5,
    energyLevel: 4,
  },
  {
    id: '3',
    date: '2026-02-16',
    mood: 'Calm',
    intensity: 7,
    triggers: ['Weekend relaxation'],
    activities: ['Yoga', 'Cooking', 'Socializing'],
    journalEntry: 'Spent the day with friends and cooked a nice dinner.',
    cbtExercise: 'Mindfulness',
    sleepHours: 8,
    energyLevel: 7,
  },
  {
    id: '4',
    date: '2026-02-15',
    mood: 'Sad',
    intensity: 5,
    triggers: ['Rainy weather', 'Missing family'],
    activities: ['Journaling', 'Listening to music'],
    journalEntry: 'Feeling a bit low today. Called mom which helped.',
    cbtExercise: 'Behavioral activation',
    sleepHours: 6,
    energyLevel: 3,
  },
];

export async function GET() {
  return NextResponse.json({ moods }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.mood || body.intensity === undefined || !body.date) {
      return NextResponse.json(
        { error: 'Missing required fields: mood, intensity, date' },
        { status: 400 }
      );
    }

    const newMood = {
      id: String(moods.length + 1),
      date: body.date,
      mood: body.mood,
      intensity: body.intensity,
      triggers: body.triggers ?? [],
      activities: body.activities ?? [],
      journalEntry: body.journalEntry ?? '',
      cbtExercise: body.cbtExercise ?? '',
      sleepHours: body.sleepHours ?? 0,
      energyLevel: body.energyLevel ?? 5,
    };

    moods.push(newMood);
    return NextResponse.json({ mood: newMood }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
