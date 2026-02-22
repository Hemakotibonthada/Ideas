import { NextRequest, NextResponse } from 'next/server';

const lessons = [
  {
    id: '1',
    subject: 'Math',
    topic: 'Addition with Carrying',
    ageRange: '6-8',
    difficulty: 'Easy',
    duration: 15,
    learningStyle: 'Visual',
    progress: 100,
    stars: 3,
    completed: true,
    nextLesson: 'Subtraction with Borrowing',
  },
  {
    id: '2',
    subject: 'Science',
    topic: 'The Water Cycle',
    ageRange: '8-10',
    difficulty: 'Medium',
    duration: 20,
    learningStyle: 'Interactive',
    progress: 65,
    stars: 2,
    completed: false,
    nextLesson: 'States of Matter',
  },
  {
    id: '3',
    subject: 'Reading',
    topic: 'Phonics: Vowel Sounds',
    ageRange: '4-6',
    difficulty: 'Easy',
    duration: 10,
    learningStyle: 'Auditory',
    progress: 80,
    stars: 2,
    completed: false,
    nextLesson: 'Consonant Blends',
  },
  {
    id: '4',
    subject: 'Art',
    topic: 'Color Mixing Basics',
    ageRange: '5-7',
    difficulty: 'Easy',
    duration: 25,
    learningStyle: 'Kinesthetic',
    progress: 100,
    stars: 3,
    completed: true,
    nextLesson: 'Drawing Shapes',
  },
  {
    id: '5',
    subject: 'Geography',
    topic: 'Continents and Oceans',
    ageRange: '7-9',
    difficulty: 'Medium',
    duration: 20,
    learningStyle: 'Visual',
    progress: 40,
    stars: 1,
    completed: false,
    nextLesson: 'Countries of Europe',
  },
];

export async function GET() {
  return NextResponse.json({ lessons }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.subject || !body.topic || !body.ageRange) {
      return NextResponse.json(
        { error: 'Missing required fields: subject, topic, ageRange' },
        { status: 400 }
      );
    }

    const newLesson = {
      id: String(lessons.length + 1),
      subject: body.subject,
      topic: body.topic,
      ageRange: body.ageRange,
      difficulty: body.difficulty ?? 'Easy',
      duration: body.duration ?? 15,
      learningStyle: body.learningStyle ?? 'Visual',
      progress: 0,
      stars: 0,
      completed: false,
      nextLesson: body.nextLesson ?? '',
    };

    lessons.push(newLesson);
    return NextResponse.json({ lesson: newLesson }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
