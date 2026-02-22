import { NextRequest, NextResponse } from 'next/server';

const studyCards = [
  {
    id: '1',
    subject: 'Biology',
    question: 'What is the powerhouse of the cell?',
    answer: 'The mitochondria — it generates most of the cell\'s ATP through oxidative phosphorylation.',
    difficulty: 'easy',
    nextReview: '2026-02-19',
    interval: 4,
    easeFactor: 2.5,
    repetitions: 5,
    retention: 0.95,
  },
  {
    id: '2',
    subject: 'Computer Science',
    question: 'What is the time complexity of binary search?',
    answer: 'O(log n) — it halves the search space with each comparison.',
    difficulty: 'medium',
    nextReview: '2026-02-20',
    interval: 7,
    easeFactor: 2.3,
    repetitions: 8,
    retention: 0.92,
  },
  {
    id: '3',
    subject: 'History',
    question: 'In what year did the Berlin Wall fall?',
    answer: '1989 — on November 9th, after weeks of civil unrest in East Germany.',
    difficulty: 'easy',
    nextReview: '2026-02-22',
    interval: 14,
    easeFactor: 2.7,
    repetitions: 12,
    retention: 0.98,
  },
  {
    id: '4',
    subject: 'Chemistry',
    question: 'What is the difference between covalent and ionic bonds?',
    answer: 'Covalent bonds share electrons between atoms; ionic bonds transfer electrons, creating charged ions that attract each other.',
    difficulty: 'medium',
    nextReview: '2026-02-19',
    interval: 3,
    easeFactor: 2.1,
    repetitions: 4,
    retention: 0.82,
  },
  {
    id: '5',
    subject: 'Mathematics',
    question: 'State the Fundamental Theorem of Calculus.',
    answer: 'If F is an antiderivative of f on [a,b], then the definite integral of f from a to b equals F(b) - F(a).',
    difficulty: 'hard',
    nextReview: '2026-02-18',
    interval: 1,
    easeFactor: 1.8,
    repetitions: 2,
    retention: 0.68,
  },
];

export async function GET() {
  return NextResponse.json({ studyCards }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.subject || !body.question || !body.answer) {
    return NextResponse.json(
      { error: 'Missing required fields: subject, question, answer' },
      { status: 400 }
    );
  }

  const newCard = {
    id: String(studyCards.length + 1),
    subject: body.subject,
    question: body.question,
    answer: body.answer,
    difficulty: body.difficulty ?? 'medium',
    nextReview: body.nextReview ?? new Date().toISOString().slice(0, 10),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    retention: 0,
  };

  studyCards.push(newCard);

  return NextResponse.json({ studyCard: newCard }, { status: 201 });
}
