import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "move-001",
    fromAddress: "742 Evergreen Terrace, Springfield, IL",
    toAddress: "1600 Pennsylvania Ave, Washington, DC",
    moveDate: "2026-04-15",
    items: [
      { category: "Furniture", count: 12 },
      { category: "Boxes", count: 35 },
      { category: "Electronics", count: 8 },
    ],
    estimatedCost: 4200,
    status: "SCHEDULED",
  },
  {
    id: "move-002",
    fromAddress: "221B Baker St, Apt 4A, New York, NY",
    toAddress: "350 Fifth Ave, Apt 23B, New York, NY",
    moveDate: "2026-03-01",
    items: [
      { category: "Furniture", count: 6 },
      { category: "Boxes", count: 18 },
      { category: "Appliances", count: 3 },
    ],
    estimatedCost: 1800,
    status: "IN_PROGRESS",
  },
  {
    id: "move-003",
    fromAddress: "1455 Market St, San Francisco, CA",
    toAddress: "2700 Colorado Blvd, Denver, CO",
    moveDate: "2026-05-20",
    items: [
      { category: "Furniture", count: 20 },
      { category: "Boxes", count: 60 },
      { category: "Vehicles", count: 1 },
      { category: "Fragile", count: 15 },
    ],
    estimatedCost: 7500,
    status: "QUOTED",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const itemCount = (body.items ?? []).reduce(
    (sum: number, i: { count: number }) => sum + i.count,
    0
  );
  const newMove = {
    id: `move-${Date.now()}`,
    ...body,
    estimatedCost: itemCount * 50 + 500,
    status: "QUOTED",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newMove, { status: 201 });
}
