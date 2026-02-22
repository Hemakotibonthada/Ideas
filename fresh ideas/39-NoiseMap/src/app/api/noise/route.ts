import { NextRequest, NextResponse } from 'next/server';

const noiseReadings = [
  {
    id: '1',
    location: '5th Ave & Main St',
    latitude: 40.7128,
    longitude: -74.006,
    decibels: 82,
    source: 'Traffic',
    time: '2026-02-18T08:30:00Z',
    neighborhood: 'Downtown',
    quietScore: 3,
    trend: 'Increasing',
    reports: 14,
  },
  {
    id: '2',
    location: 'Central Park West',
    latitude: 40.7829,
    longitude: -73.9654,
    decibels: 55,
    source: 'Ambient',
    time: '2026-02-18T10:15:00Z',
    neighborhood: 'Upper West Side',
    quietScore: 8,
    trend: 'Stable',
    reports: 3,
  },
  {
    id: '3',
    location: 'Construction Site - Oak Blvd',
    latitude: 40.7488,
    longitude: -73.9856,
    decibels: 95,
    source: 'Construction',
    time: '2026-02-18T09:00:00Z',
    neighborhood: 'Midtown',
    quietScore: 1,
    trend: 'Increasing',
    reports: 28,
  },
  {
    id: '4',
    location: 'Riverside Park',
    latitude: 40.8012,
    longitude: -73.9722,
    decibels: 45,
    source: 'Nature',
    time: '2026-02-18T07:00:00Z',
    neighborhood: 'Riverside',
    quietScore: 9,
    trend: 'Stable',
    reports: 1,
  },
  {
    id: '5',
    location: 'Nightclub District',
    latitude: 40.7265,
    longitude: -73.9898,
    decibels: 88,
    source: 'Entertainment',
    time: '2026-02-17T23:45:00Z',
    neighborhood: 'East Village',
    quietScore: 2,
    trend: 'Decreasing',
    reports: 19,
  },
];

export async function GET() {
  return NextResponse.json({ noiseReadings }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.location || body.decibels === undefined || body.latitude === undefined || body.longitude === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: location, decibels, latitude, longitude' },
        { status: 400 }
      );
    }

    const newReading = {
      id: String(noiseReadings.length + 1),
      location: body.location,
      latitude: body.latitude,
      longitude: body.longitude,
      decibels: body.decibels,
      source: body.source ?? 'Unknown',
      time: body.time ?? new Date().toISOString(),
      neighborhood: body.neighborhood ?? '',
      quietScore: body.quietScore ?? Math.max(1, 10 - Math.floor(body.decibels / 10)),
      trend: body.trend ?? 'Stable',
      reports: 1,
    };

    noiseReadings.push(newReading);
    return NextResponse.json({ noiseReading: newReading }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
