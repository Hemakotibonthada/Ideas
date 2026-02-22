import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "trail-001",
    name: "Eagle Peak Summit Trail",
    location: "Rocky Mountain National Park, CO",
    distance: 8.4,
    elevation: 2150,
    difficulty: "HARD",
    conditions: "Packed snow above 10,000 ft. Microspikes recommended. Trail well-marked.",
    lastUpdated: "2026-02-17T08:30:00Z",
    features: ["Summit views", "Wildlife (elk, marmots)", "Alpine meadows", "Scramble section"],
  },
  {
    id: "trail-002",
    name: "Riverside Nature Loop",
    location: "Great Smoky Mountains, TN",
    distance: 3.2,
    elevation: 280,
    difficulty: "EASY",
    conditions: "Dry, well-maintained gravel path. Some muddy spots near the creek crossing.",
    lastUpdated: "2026-02-16T14:00:00Z",
    features: ["Creek crossing", "Wildflowers (seasonal)", "Bird watching", "Dog-friendly"],
  },
  {
    id: "trail-003",
    name: "Devil's Backbone Ridge",
    location: "Sedona, AZ",
    distance: 5.7,
    elevation: 1480,
    difficulty: "MODERATE",
    conditions: "Dry, exposed trail. Bring extra water. Best hiked early morning to avoid heat.",
    lastUpdated: "2026-02-18T06:00:00Z",
    features: ["Red rock formations", "360° panoramic views", "Sunset spot", "Photography popular"],
  },
  {
    id: "trail-004",
    name: "Granite Spires Traverse",
    location: "North Cascades, WA",
    distance: 14.2,
    elevation: 3800,
    difficulty: "EXPERT",
    conditions: "Heavy snow — trail closed until June. Route-finding skills required. Permit needed.",
    lastUpdated: "2026-02-15T12:00:00Z",
    features: ["Glacier views", "Backcountry camping", "River fords", "Technical scrambles", "Permit required"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const matchingTrails = demoData.filter((trail) => {
    const distanceMatch = !body.maxDistance || trail.distance <= body.maxDistance;
    const difficultyMatch = !body.difficulty || trail.difficulty === body.difficulty;
    return distanceMatch && difficultyMatch;
  });

  const result = {
    id: `search-${Date.now()}`,
    query: {
      location: body.location || "Any",
      maxDistance: body.maxDistance || null,
      difficulty: body.difficulty || "Any",
    },
    results: matchingTrails.length > 0 ? matchingTrails : demoData.slice(0, 2),
    totalFound: matchingTrails.length || 2,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(result, { status: 201 });
}
