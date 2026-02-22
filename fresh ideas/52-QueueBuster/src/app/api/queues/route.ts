import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "queue-001",
    venue: "Trader Joe's - Union Square",
    venueType: "Grocery",
    estimatedWait: 12,
    reportedAt: "2026-02-18T10:30:00Z",
    reportedBy: "user-201",
    crowdLevel: "HIGH",
  },
  {
    id: "queue-002",
    venue: "DMV - Downtown Branch",
    venueType: "Government",
    estimatedWait: 45,
    reportedAt: "2026-02-18T09:15:00Z",
    reportedBy: "user-202",
    crowdLevel: "HIGH",
  },
  {
    id: "queue-003",
    venue: "Blue Bottle Coffee - Market St",
    venueType: "Cafe",
    estimatedWait: 5,
    reportedAt: "2026-02-18T11:00:00Z",
    reportedBy: "user-203",
    crowdLevel: "LOW",
  },
  {
    id: "queue-004",
    venue: "Costco - South San Francisco",
    venueType: "Warehouse",
    estimatedWait: 20,
    reportedAt: "2026-02-18T14:45:00Z",
    reportedBy: "user-204",
    crowdLevel: "MEDIUM",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newReport = {
    id: `queue-${Date.now()}`,
    ...body,
    reportedAt: new Date().toISOString(),
    reportedBy: "user-anonymous",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newReport, { status: 201 });
}
