import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "dream-001",
    title: "Flying Over the Mountains",
    description: "I was soaring above snow-capped peaks with complete control over my flight path. The air felt crisp and exhilarating.",
    lucidity: "HIGH",
    mood: "euphoric",
    createdAt: "2026-02-15T07:23:00.000Z",
    symbols: ["flying", "mountains", "snow"],
  },
  {
    id: "dream-002",
    title: "Underwater City",
    description: "Found a sprawling city beneath the ocean. Buildings were made of coral and fish swam through the streets like cars.",
    lucidity: "LOW",
    mood: "curious",
    createdAt: "2026-02-14T06:45:00.000Z",
    symbols: ["water", "city", "fish"],
  },
  {
    id: "dream-003",
    title: "Childhood Home Revisited",
    description: "Walked through my childhood home but every room led to a different era of my life. The kitchen was from the 90s, the bedroom from college.",
    lucidity: "LOW",
    mood: "nostalgic",
    createdAt: "2026-02-13T05:12:00.000Z",
    symbols: ["house", "door", "time"],
  },
  {
    id: "dream-004",
    title: "Lucid Garden Creation",
    description: "Realized I was dreaming and started growing an entire garden by pointing at the ground. Each flower bloomed instantly in vivid colors.",
    lucidity: "HIGH",
    mood: "peaceful",
    createdAt: "2026-02-12T04:30:00.000Z",
    symbols: ["garden", "flowers", "colors"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newDream = {
    id: `dream-${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString(),
    symbols: body.symbols ?? [],
  };
  return NextResponse.json(newDream, { status: 201 });
}
