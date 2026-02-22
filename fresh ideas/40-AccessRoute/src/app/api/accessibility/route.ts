import { NextRequest, NextResponse } from 'next/server';

const accessPoints = [
  {
    id: '1',
    location: 'City Hall',
    type: 'Government Building',
    hasRamp: true,
    hasElevator: true,
    curbCuts: true,
    doorWidth: 36,
    rating: 4.5,
    reviews: 23,
    lastVerified: '2026-01-15',
    photos: ['city-hall-ramp.jpg', 'city-hall-entrance.jpg'],
  },
  {
    id: '2',
    location: 'Sunrise Café',
    type: 'Restaurant',
    hasRamp: true,
    hasElevator: false,
    curbCuts: true,
    doorWidth: 34,
    rating: 3.8,
    reviews: 12,
    lastVerified: '2026-02-01',
    photos: ['sunrise-cafe-entrance.jpg'],
  },
  {
    id: '3',
    location: 'Metro Station - Central',
    type: 'Public Transit',
    hasRamp: true,
    hasElevator: true,
    curbCuts: true,
    doorWidth: 48,
    rating: 4.2,
    reviews: 45,
    lastVerified: '2026-02-10',
    photos: ['metro-central-elevator.jpg', 'metro-central-platform.jpg'],
  },
  {
    id: '4',
    location: 'Greenfield Park',
    type: 'Park',
    hasRamp: false,
    hasElevator: false,
    curbCuts: false,
    doorWidth: 0,
    rating: 2.1,
    reviews: 8,
    lastVerified: '2025-11-20',
    photos: ['greenfield-path.jpg'],
  },
  {
    id: '5',
    location: 'Downtown Medical Center',
    type: 'Healthcare',
    hasRamp: true,
    hasElevator: true,
    curbCuts: true,
    doorWidth: 42,
    rating: 4.8,
    reviews: 67,
    lastVerified: '2026-02-14',
    photos: ['medical-center-entrance.jpg', 'medical-center-interior.jpg'],
  },
  {
    id: '6',
    location: 'Maple Street Library',
    type: 'Library',
    hasRamp: true,
    hasElevator: true,
    curbCuts: true,
    doorWidth: 36,
    rating: 4.0,
    reviews: 19,
    lastVerified: '2026-01-28',
    photos: ['library-ramp.jpg'],
  },
];

export async function GET() {
  return NextResponse.json({ accessPoints }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.location || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields: location, type' },
        { status: 400 }
      );
    }

    const newAccessPoint = {
      id: String(accessPoints.length + 1),
      location: body.location,
      type: body.type,
      hasRamp: body.hasRamp ?? false,
      hasElevator: body.hasElevator ?? false,
      curbCuts: body.curbCuts ?? false,
      doorWidth: body.doorWidth ?? 0,
      rating: 0,
      reviews: 0,
      lastVerified: new Date().toISOString().split('T')[0],
      photos: body.photos ?? [],
    };

    accessPoints.push(newAccessPoint);
    return NextResponse.json({ accessPoint: newAccessPoint }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
