import { NextRequest, NextResponse } from 'next/server';

const plants = [
  {
    id: "plant-001",
    name: "Monty",
    species: "Monstera deliciosa",
    health: "thriving",
    waterFrequency: 7,
    lastWatered: "2026-02-15",
    nextWater: "2026-02-22",
    sunlight: "indirect-bright",
    humidity: 65,
    image: "/images/monstera.jpg",
    diseases: [],
  },
  {
    id: "plant-002",
    name: "Spike",
    species: "Sansevieria trifasciata",
    health: "healthy",
    waterFrequency: 14,
    lastWatered: "2026-02-10",
    nextWater: "2026-02-24",
    sunlight: "low-to-bright",
    humidity: 40,
    image: "/images/snake-plant.jpg",
    diseases: [],
  },
  {
    id: "plant-003",
    name: "Fern Gully",
    species: "Nephrolepis exaltata",
    health: "needs-attention",
    waterFrequency: 3,
    lastWatered: "2026-02-12",
    nextWater: "2026-02-15",
    sunlight: "indirect-low",
    humidity: 80,
    image: "/images/boston-fern.jpg",
    diseases: ["brown-tips", "leaf-drop"],
  },
];

export async function GET() {
  return NextResponse.json(plants, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.species) {
      return NextResponse.json(
        { error: "Missing required fields: name, species" },
        { status: 400 }
      );
    }

    const newPlant = {
      id: `plant-${Date.now()}`,
      name: body.name,
      species: body.species,
      health: body.health ?? "healthy",
      waterFrequency: body.waterFrequency ?? 7,
      lastWatered: body.lastWatered ?? new Date().toISOString().split("T")[0],
      nextWater: body.nextWater ?? null,
      sunlight: body.sunlight ?? "indirect-bright",
      humidity: body.humidity ?? 50,
      image: body.image ?? null,
      diseases: body.diseases ?? [],
    };

    return NextResponse.json(newPlant, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
