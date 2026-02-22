import { NextRequest, NextResponse } from 'next/server';

const routes = [
  {
    id: "route-001",
    startLocation: "Central Park West & 72nd St",
    endLocation: "Times Square",
    safetyScore: 88,
    distance: 2.4,
    duration: 32,
    lightingScore: 92,
    crowdDensity: "high",
    crimeRate: "low",
    recommended: true,
  },
  {
    id: "route-002",
    startLocation: "Brooklyn Bridge Park",
    endLocation: "DUMBO",
    safetyScore: 94,
    distance: 0.8,
    duration: 12,
    lightingScore: 85,
    crowdDensity: "medium",
    crimeRate: "very-low",
    recommended: true,
  },
  {
    id: "route-003",
    startLocation: "Union Square",
    endLocation: "East Village",
    safetyScore: 71,
    distance: 1.1,
    duration: 15,
    lightingScore: 65,
    crowdDensity: "low",
    crimeRate: "medium",
    recommended: false,
  },
];

export async function GET() {
  return NextResponse.json(routes, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.startLocation || !body.endLocation) {
      return NextResponse.json(
        { error: "Missing required fields: startLocation, endLocation" },
        { status: 400 }
      );
    }

    const newRoute = {
      id: `route-${Date.now()}`,
      startLocation: body.startLocation,
      endLocation: body.endLocation,
      safetyScore: body.safetyScore ?? 0,
      distance: body.distance ?? 0,
      duration: body.duration ?? 0,
      lightingScore: body.lightingScore ?? 0,
      crowdDensity: body.crowdDensity ?? "unknown",
      crimeRate: body.crimeRate ?? "unknown",
      recommended: body.recommended ?? false,
    };

    return NextResponse.json(newRoute, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
