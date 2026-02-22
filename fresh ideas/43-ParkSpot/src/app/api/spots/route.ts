import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "spot-001",
    location: "123 Main St, Downtown Seattle",
    lat: 47.6062,
    lng: -122.3321,
    available: true,
    type: "STREET",
    pricePerHour: 3.5,
    reportedAt: "2026-02-18T08:15:00.000Z",
  },
  {
    id: "spot-002",
    location: "Pacific Place Garage, Level 3",
    lat: 47.6131,
    lng: -122.3358,
    available: true,
    type: "GARAGE",
    pricePerHour: 8.0,
    reportedAt: "2026-02-18T09:30:00.000Z",
  },
  {
    id: "spot-003",
    location: "Pine St & 4th Ave",
    lat: 47.6115,
    lng: -122.3376,
    available: false,
    type: "STREET",
    pricePerHour: 4.0,
    reportedAt: "2026-02-18T07:45:00.000Z",
  },
  {
    id: "spot-004",
    location: "Convention Center Garage B2",
    lat: 47.6117,
    lng: -122.3315,
    available: true,
    type: "GARAGE",
    pricePerHour: 12.0,
    reportedAt: "2026-02-18T10:00:00.000Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newSpot = {
    id: `spot-${Date.now()}`,
    ...body,
    available: true,
    reportedAt: new Date().toISOString(),
  };
  return NextResponse.json(newSpot, { status: 201 });
}
