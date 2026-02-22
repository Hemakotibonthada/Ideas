import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "food-001",
    title: "Organic Banana Bunch (6 ct)",
    quantity: 15,
    expiresAt: "2026-02-20T23:59:00Z",
    pickupLocation: "Whole Foods - SoMa, San Francisco",
    donorName: "Whole Foods Market",
    category: "PRODUCE",
    claimed: false,
  },
  {
    id: "food-002",
    title: "Sourdough Bread Loaves",
    quantity: 8,
    expiresAt: "2026-02-19T18:00:00Z",
    pickupLocation: "Tartine Bakery, 600 Guerrero St",
    donorName: "Tartine Bakery",
    category: "BAKERY",
    claimed: true,
  },
  {
    id: "food-003",
    title: "Chicken Tikka Masala Trays",
    quantity: 5,
    expiresAt: "2026-02-18T22:00:00Z",
    pickupLocation: "Curry House, 482 Mission St",
    donorName: "Curry House Restaurant",
    category: "PREPARED",
    claimed: false,
  },
  {
    id: "food-004",
    title: "Greek Yogurt Cups (Vanilla)",
    quantity: 24,
    expiresAt: "2026-02-25T23:59:00Z",
    pickupLocation: "Target - Metreon, 789 Mission St",
    donorName: "Target Grocery",
    category: "DAIRY",
    claimed: false,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newListing = {
    id: `food-${Date.now()}`,
    ...body,
    donorName: body.donorName ?? "Anonymous Donor",
    claimed: false,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newListing, { status: 201 });
}
