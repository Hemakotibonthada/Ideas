import { NextRequest, NextResponse } from 'next/server';

const healthLogs = [
  {
    id: '1',
    userId: 'user_01',
    date: '2026-02-18',
    bloodPressure: '120/80',
    heartRate: 72,
    weight: 75.4,
    glucose: 95,
    spO2: 98,
    symptoms: [],
    medications: ['Vitamin D 1000 IU'],
    notes: 'Feeling well, regular morning walk completed.',
  },
  {
    id: '2',
    userId: 'user_01',
    date: '2026-02-17',
    bloodPressure: '118/78',
    heartRate: 68,
    weight: 75.6,
    glucose: 92,
    spO2: 99,
    symptoms: ['mild headache'],
    medications: ['Vitamin D 1000 IU', 'Ibuprofen 200mg'],
    notes: 'Headache after long screen time, resolved by evening.',
  },
  {
    id: '3',
    userId: 'user_02',
    date: '2026-02-18',
    bloodPressure: '135/88',
    heartRate: 80,
    weight: 92.1,
    glucose: 110,
    spO2: 97,
    symptoms: ['fatigue'],
    medications: ['Metformin 500mg', 'Lisinopril 10mg'],
    notes: 'Need to monitor glucose levels more frequently.',
  },
  {
    id: '4',
    userId: 'user_03',
    date: '2026-02-18',
    bloodPressure: '115/75',
    heartRate: 64,
    weight: 62.3,
    glucose: 88,
    spO2: 99,
    symptoms: [],
    medications: [],
    notes: 'Post-run vitals, everything normal.',
  },
];

export async function GET() {
  return NextResponse.json({ healthLogs }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.userId || !body.date) {
    return NextResponse.json(
      { error: 'Missing required fields: userId, date' },
      { status: 400 }
    );
  }

  const newLog = {
    id: String(healthLogs.length + 1),
    userId: body.userId,
    date: body.date,
    bloodPressure: body.bloodPressure ?? null,
    heartRate: body.heartRate ?? null,
    weight: body.weight ?? null,
    glucose: body.glucose ?? null,
    spO2: body.spO2 ?? null,
    symptoms: body.symptoms ?? [],
    medications: body.medications ?? [],
    notes: body.notes ?? '',
  };

  healthLogs.push(newLog);

  return NextResponse.json({ healthLog: newLog }, { status: 201 });
}
