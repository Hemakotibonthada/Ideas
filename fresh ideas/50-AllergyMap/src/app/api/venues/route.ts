import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "venue-001",
    name: "The Green Plate",
    address: "89 NW 23rd Ave, Portland, OR",
    allergenFree: ["nuts", "gluten", "dairy"],
    rating: 4.7,
    verifiedAt: "2026-02-10T12:00:00.000Z",
    reviews: 142,
  },
  {
    id: "venue-002",
    name: "SafeBite Café",
    address: "1500 Pike Pl, Seattle, WA",
    allergenFree: ["nuts", "shellfish"],
    rating: 4.5,
    verifiedAt: "2026-02-12T15:30:00.000Z",
    reviews: 89,
  },
  {
    id: "venue-003",
    name: "PureBowl Kitchen",
    address: "440 Castro St, San Francisco, CA",
    allergenFree: ["gluten", "dairy", "soy", "eggs"],
    rating: 4.8,
    verifiedAt: "2026-02-14T10:00:00.000Z",
    reviews: 203,
  },
  {
    id: "venue-004",
    name: "Allergy-Free Eats",
    address: "2100 S Congress Ave, Austin, TX",
    allergenFree: ["nuts", "gluten", "dairy", "shellfish", "soy"],
    rating: 4.6,
    verifiedAt: "2026-02-08T09:45:00.000Z",
    reviews: 67,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newVenue = {
    id: `venue-${Date.now()}`,
    ...body,
    rating: 0,
    verifiedAt: new Date().toISOString(),
    reviews: 0,
  };
  return NextResponse.json(newVenue, { status: 201 });
}
