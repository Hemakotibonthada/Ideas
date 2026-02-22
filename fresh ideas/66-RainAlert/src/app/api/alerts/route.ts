import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "alert-001",
    location: "Downtown Seattle, WA",
    probability: 92,
    intensity: "HEAVY",
    startTime: "2026-02-18T15:00:00Z",
    endTime: "2026-02-18T21:00:00Z",
    advice: "Bring an umbrella and waterproof jacket. Expect potential street flooding in low-lying areas.",
    source: "NOAA",
  },
  {
    id: "alert-002",
    location: "Midtown Manhattan, NY",
    probability: 65,
    intensity: "MODERATE",
    startTime: "2026-02-19T08:00:00Z",
    endTime: "2026-02-19T14:00:00Z",
    advice: "Light rain gear recommended. Morning commute may experience delays.",
    source: "NWS",
  },
  {
    id: "alert-003",
    location: "Mission District, San Francisco, CA",
    probability: 40,
    intensity: "LIGHT",
    startTime: "2026-02-20T12:00:00Z",
    endTime: "2026-02-20T16:00:00Z",
    advice: "Slight chance of drizzle in the afternoon. A light layer should suffice.",
    source: "Weather.com",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `alert-${Date.now()}`,
    location: body.location,
    lat: body.lat,
    lng: body.lng,
    probability: 73,
    intensity: "MODERATE",
    startTime: new Date(Date.now() + 4 * 3600_000).toISOString(),
    endTime: new Date(Date.now() + 10 * 3600_000).toISOString(),
    advice: "Moderate rain expected. Carry an umbrella and plan for possible delays.",
    source: "AI Weather Model",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
