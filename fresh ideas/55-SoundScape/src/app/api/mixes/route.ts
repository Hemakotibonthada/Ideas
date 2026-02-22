import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "mix-001",
    name: "Rainy Morning Focus",
    sounds: [
      { type: "Rain", volume: 70 },
      { type: "Thunder (distant)", volume: 30 },
      { type: "Fireplace", volume: 45 },
    ],
    duration: 60,
    createdBy: "user-301",
    plays: 12480,
    mood: "Focus",
  },
  {
    id: "mix-002",
    name: "Deep Ocean Sleep",
    sounds: [
      { type: "Ocean Waves", volume: 60 },
      { type: "Whale Song", volume: 20 },
      { type: "White Noise", volume: 15 },
    ],
    duration: 480,
    createdBy: "user-302",
    plays: 34210,
    mood: "Sleep",
  },
  {
    id: "mix-003",
    name: "Coffee Shop Vibes",
    sounds: [
      { type: "Cafe Chatter", volume: 40 },
      { type: "Espresso Machine", volume: 25 },
      { type: "Jazz Piano", volume: 50 },
      { type: "Page Turning", volume: 10 },
    ],
    duration: 120,
    createdBy: "user-303",
    plays: 8930,
    mood: "Creative",
  },
  {
    id: "mix-004",
    name: "Forest Meditation",
    sounds: [
      { type: "Birds Chirping", volume: 55 },
      { type: "Stream", volume: 40 },
      { type: "Wind in Trees", volume: 35 },
    ],
    duration: 30,
    createdBy: "user-304",
    plays: 19750,
    mood: "Calm",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newMix = {
    id: `mix-${Date.now()}`,
    ...body,
    createdBy: "user-new",
    plays: 0,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newMix, { status: 201 });
}
