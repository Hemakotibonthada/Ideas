import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "route-001",
    name: "Golden Gate Bridge Loop",
    distance: 18.4,
    elevation: 320,
    difficulty: "MODERATE",
    surface: "Paved",
    safetyRating: 4.5,
    landmarks: ["Golden Gate Bridge", "Crissy Field", "Sausalito Waterfront"],
  },
  {
    id: "route-002",
    name: "Central Park Grand Tour",
    distance: 10.2,
    elevation: 85,
    difficulty: "EASY",
    surface: "Paved",
    safetyRating: 4.8,
    landmarks: ["Bethesda Fountain", "Bow Bridge", "The Great Lawn", "Belvedere Castle"],
  },
  {
    id: "route-003",
    name: "Mount Tam Summit Climb",
    distance: 24.6,
    elevation: 780,
    difficulty: "HARD",
    surface: "Mixed (paved & gravel)",
    safetyRating: 3.9,
    landmarks: ["Stinson Beach Overlook", "Pan Toll Ranger Station", "East Peak Summit"],
  },
  {
    id: "route-004",
    name: "Embarcadero Waterfront Cruise",
    distance: 7.8,
    elevation: 15,
    difficulty: "EASY",
    surface: "Paved",
    safetyRating: 4.6,
    landmarks: ["Ferry Building", "Pier 39", "AT&T Park"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const randomDistance = Math.round((Math.random() * 20 + 5) * 10) / 10;
  const randomElevation = Math.round(Math.random() * 500 + 20);
  let difficulty: "EASY" | "MODERATE" | "HARD" = "EASY";
  if (randomElevation > 300) difficulty = "HARD";
  else if (randomElevation > 100) difficulty = "MODERATE";

  const newRoute = {
    id: `route-${Date.now()}`,
    name: body.name,
    startPoint: body.startPoint,
    endPoint: body.endPoint,
    distance: randomDistance,
    elevation: randomElevation,
    difficulty,
    surface: "Paved",
    safetyRating: Math.round((Math.random() * 2 + 3) * 10) / 10,
    landmarks: [],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newRoute, { status: 201 });
}
