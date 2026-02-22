import { NextRequest, NextResponse } from 'next/server';

const trips = [
  {
    id: '1',
    destination: 'Kyoto',
    country: 'Japan',
    startDate: '2026-04-01',
    endDate: '2026-04-10',
    budget: 3500,
    spent: 1280,
    activities: ['Temple visits', 'Tea ceremony', 'Bamboo forest hike'],
    accommodation: 'Traditional Ryokan',
    transportMode: 'Train (JR Pass)',
    highlights: ['Fushimi Inari', 'Arashiyama', 'Kinkaku-ji'],
  },
  {
    id: '2',
    destination: 'Barcelona',
    country: 'Spain',
    startDate: '2026-06-15',
    endDate: '2026-06-22',
    budget: 2800,
    spent: 0,
    activities: ['Sagrada Familia', 'Beach day', 'Tapas tour', 'Park Güell'],
    accommodation: 'Boutique Hotel',
    transportMode: 'Flight + Metro',
    highlights: ['La Rambla', 'Gothic Quarter', 'Camp Nou'],
  },
  {
    id: '3',
    destination: 'Banff',
    country: 'Canada',
    startDate: '2026-08-05',
    endDate: '2026-08-12',
    budget: 2200,
    spent: 450,
    activities: ['Hiking', 'Canoeing', 'Wildlife spotting'],
    accommodation: 'Mountain Lodge',
    transportMode: 'Road Trip',
    highlights: ['Lake Louise', 'Moraine Lake', 'Johnston Canyon'],
  },
  {
    id: '4',
    destination: 'Marrakech',
    country: 'Morocco',
    startDate: '2026-10-20',
    endDate: '2026-10-27',
    budget: 1800,
    spent: 0,
    activities: ['Souk shopping', 'Desert tour', 'Cooking class'],
    accommodation: 'Riad',
    transportMode: 'Flight + Local taxi',
    highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Atlas Mountains'],
  },
];

export async function GET() {
  return NextResponse.json({ trips }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.destination || !body.country || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { error: 'Missing required fields: destination, country, startDate, endDate' },
        { status: 400 }
      );
    }

    const newTrip = {
      id: String(trips.length + 1),
      destination: body.destination,
      country: body.country,
      startDate: body.startDate,
      endDate: body.endDate,
      budget: body.budget ?? 0,
      spent: 0,
      activities: body.activities ?? [],
      accommodation: body.accommodation ?? '',
      transportMode: body.transportMode ?? '',
      highlights: body.highlights ?? [],
    };

    trips.push(newTrip);
    return NextResponse.json({ trip: newTrip }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
