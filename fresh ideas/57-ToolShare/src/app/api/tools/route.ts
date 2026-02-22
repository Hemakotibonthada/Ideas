import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "tool-001",
    name: "DeWalt 20V Cordless Drill",
    category: "Power Tools",
    owner: "Mike Johnson",
    condition: "GOOD",
    dailyRate: 12.00,
    available: true,
    location: "Capitol Hill, Seattle, WA",
  },
  {
    id: "tool-002",
    name: "Honda 21\" Lawn Mower",
    category: "Lawn & Garden",
    owner: "Sarah Kim",
    condition: "FAIR",
    dailyRate: 25.00,
    available: true,
    location: "Ballard, Seattle, WA",
  },
  {
    id: "tool-003",
    name: "Werner 24ft Extension Ladder",
    category: "Ladders",
    owner: "Carlos Rivera",
    condition: "NEW",
    dailyRate: 15.00,
    available: false,
    location: "Fremont, Seattle, WA",
  },
  {
    id: "tool-004",
    name: "Makita Circular Saw 7-1/4\"",
    category: "Power Tools",
    owner: "Dave Thompson",
    condition: "GOOD",
    dailyRate: 18.00,
    available: true,
    location: "Queen Anne, Seattle, WA",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTool = {
    id: `tool-${Date.now()}`,
    ...body,
    owner: body.owner ?? "Anonymous",
    available: true,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newTool, { status: 201 });
}
