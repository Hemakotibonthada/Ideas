import { NextRequest, NextResponse } from 'next/server';

const opportunities = [
  {
    id: '1',
    title: 'Beach Cleanup Drive',
    organization: 'Ocean Conservancy',
    cause: 'Environment',
    location: 'Santa Monica Beach, CA',
    date: '2026-03-15',
    duration: 4,
    spotsLeft: 12,
    skills: ['Physical fitness', 'Teamwork'],
    impactHours: 4,
    badge: 'Ocean Guardian',
  },
  {
    id: '2',
    title: 'After-School Tutoring',
    organization: 'Bright Futures Foundation',
    cause: 'Education',
    location: 'Downtown Community Center, Chicago',
    date: '2026-03-10',
    duration: 2,
    spotsLeft: 5,
    skills: ['Teaching', 'Patience', 'Math'],
    impactHours: 2,
    badge: 'Knowledge Sharer',
  },
  {
    id: '3',
    title: 'Food Bank Sorting',
    organization: 'Feeding America',
    cause: 'Hunger Relief',
    location: 'Regional Food Bank, Austin, TX',
    date: '2026-03-22',
    duration: 3,
    spotsLeft: 20,
    skills: ['Organization', 'Physical fitness'],
    impactHours: 3,
    badge: 'Hunger Fighter',
  },
  {
    id: '4',
    title: 'Senior Tech Workshop',
    organization: 'Digital Bridge',
    cause: 'Digital Literacy',
    location: 'Public Library, Seattle, WA',
    date: '2026-04-05',
    duration: 2,
    spotsLeft: 3,
    skills: ['Technology', 'Communication', 'Patience'],
    impactHours: 2,
    badge: 'Tech Mentor',
  },
  {
    id: '5',
    title: 'Habitat Build Day',
    organization: 'Habitat for Humanity',
    cause: 'Housing',
    location: 'East Side, Denver, CO',
    date: '2026-04-12',
    duration: 8,
    spotsLeft: 8,
    skills: ['Construction', 'Teamwork', 'Physical fitness'],
    impactHours: 8,
    badge: 'Home Builder',
  },
];

export async function GET() {
  return NextResponse.json({ opportunities }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.organization || !body.cause || !body.date) {
      return NextResponse.json(
        { error: 'Missing required fields: title, organization, cause, date' },
        { status: 400 }
      );
    }

    const newOpportunity = {
      id: String(opportunities.length + 1),
      title: body.title,
      organization: body.organization,
      cause: body.cause,
      location: body.location ?? '',
      date: body.date,
      duration: body.duration ?? 1,
      spotsLeft: body.spotsLeft ?? 10,
      skills: body.skills ?? [],
      impactHours: body.impactHours ?? body.duration ?? 1,
      badge: body.badge ?? '',
    };

    opportunities.push(newOpportunity);
    return NextResponse.json({ opportunity: newOpportunity }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
