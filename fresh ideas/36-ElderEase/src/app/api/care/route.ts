import { NextRequest, NextResponse } from 'next/server';

const careTasks = [
  {
    id: '1',
    seniorName: 'Margaret Johnson',
    type: 'Medication',
    medication: 'Lisinopril 10mg',
    dosage: '1 tablet',
    scheduledTime: '08:00 AM',
    completed: true,
    caregiver: 'Sarah Chen',
    notes: 'Take with breakfast. Monitor blood pressure after.',
    priority: 'High',
    recurring: true,
  },
  {
    id: '2',
    seniorName: 'Robert Williams',
    type: 'Physical Therapy',
    medication: null,
    dosage: null,
    scheduledTime: '10:30 AM',
    completed: false,
    caregiver: 'James Park',
    notes: 'Focus on knee exercises. 30 minutes session.',
    priority: 'Medium',
    recurring: true,
  },
  {
    id: '3',
    seniorName: 'Margaret Johnson',
    type: 'Medication',
    medication: 'Metformin 500mg',
    dosage: '1 tablet',
    scheduledTime: '12:00 PM',
    completed: false,
    caregiver: 'Sarah Chen',
    notes: 'Take with lunch. Check blood sugar before.',
    priority: 'High',
    recurring: true,
  },
  {
    id: '4',
    seniorName: 'Dorothy Miller',
    type: 'Companionship',
    medication: null,
    dosage: null,
    scheduledTime: '02:00 PM',
    completed: false,
    caregiver: 'Emily Torres',
    notes: 'Read together or do a puzzle. She enjoys mysteries.',
    priority: 'Low',
    recurring: false,
  },
  {
    id: '5',
    seniorName: 'Robert Williams',
    type: 'Medication',
    medication: 'Warfarin 5mg',
    dosage: '1 tablet',
    scheduledTime: '06:00 PM',
    completed: false,
    caregiver: 'James Park',
    notes: 'Take with dinner. INR check due Friday.',
    priority: 'High',
    recurring: true,
  },
];

export async function GET() {
  return NextResponse.json({ careTasks }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.seniorName || !body.type || !body.scheduledTime) {
      return NextResponse.json(
        { error: 'Missing required fields: seniorName, type, scheduledTime' },
        { status: 400 }
      );
    }

    const newTask = {
      id: String(careTasks.length + 1),
      seniorName: body.seniorName,
      type: body.type,
      medication: body.medication ?? null,
      dosage: body.dosage ?? null,
      scheduledTime: body.scheduledTime,
      completed: false,
      caregiver: body.caregiver ?? '',
      notes: body.notes ?? '',
      priority: body.priority ?? 'Medium',
      recurring: body.recurring ?? false,
    };

    careTasks.push(newTask);
    return NextResponse.json({ careTask: newTask }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
