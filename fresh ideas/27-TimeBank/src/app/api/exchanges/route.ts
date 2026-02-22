import { NextRequest, NextResponse } from 'next/server';

const exchanges = [
  {
    id: '1',
    offeredSkill: 'Web Development',
    requestedSkill: 'Guitar Lessons',
    offeredBy: 'alice_dev',
    duration: 60,
    timeCredits: 1,
    location: 'Online',
    status: 'completed',
    rating: 4.8,
    scheduledAt: '2026-02-10T10:00:00Z',
  },
  {
    id: '2',
    offeredSkill: 'Photography',
    requestedSkill: 'Spanish Tutoring',
    offeredBy: 'bob_photo',
    duration: 90,
    timeCredits: 1.5,
    location: 'Central Park, NYC',
    status: 'scheduled',
    rating: null,
    scheduledAt: '2026-02-20T14:00:00Z',
  },
  {
    id: '3',
    offeredSkill: 'Cooking Classes',
    requestedSkill: 'Yoga Instruction',
    offeredBy: 'chef_maria',
    duration: 120,
    timeCredits: 2,
    location: 'Community Center',
    status: 'open',
    rating: null,
    scheduledAt: null,
  },
  {
    id: '4',
    offeredSkill: 'Tax Preparation',
    requestedSkill: 'Home Gardening Help',
    offeredBy: 'dan_finance',
    duration: 60,
    timeCredits: 1,
    location: 'Online',
    status: 'completed',
    rating: 5.0,
    scheduledAt: '2026-01-28T16:00:00Z',
  },
];

export async function GET() {
  return NextResponse.json({ exchanges }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.offeredSkill || !body.requestedSkill || !body.offeredBy) {
    return NextResponse.json(
      { error: 'Missing required fields: offeredSkill, requestedSkill, offeredBy' },
      { status: 400 }
    );
  }

  const newExchange = {
    id: String(exchanges.length + 1),
    offeredSkill: body.offeredSkill,
    requestedSkill: body.requestedSkill,
    offeredBy: body.offeredBy,
    duration: body.duration ?? 60,
    timeCredits: body.timeCredits ?? 1,
    location: body.location ?? 'Online',
    status: 'open',
    rating: null,
    scheduledAt: body.scheduledAt ?? null,
  };

  exchanges.push(newExchange);

  return NextResponse.json({ exchange: newExchange }, { status: 201 });
}
