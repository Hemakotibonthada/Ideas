import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "insp-001",
    restaurant: "Golden Dragon Palace",
    address: "238 Mott St, New York, NY 10012",
    score: 94,
    grade: "A",
    violations: [
      { type: "Improper food storage temperature", severity: "minor" },
    ],
    inspectedAt: "2026-01-28T11:00:00Z",
    inspector: "M. Rodriguez",
  },
  {
    id: "insp-002",
    restaurant: "Burger Barn Express",
    address: "1501 Broadway, New York, NY 10036",
    score: 78,
    grade: "B",
    violations: [
      { type: "Evidence of mice activity", severity: "critical" },
      { type: "Handwashing station not accessible", severity: "major" },
      { type: "Missing date labels on prep items", severity: "minor" },
    ],
    inspectedAt: "2026-02-05T09:30:00Z",
    inspector: "K. Thompson",
  },
  {
    id: "insp-003",
    restaurant: "Bella Napoli Pizzeria",
    address: "67 Pearl St, Brooklyn, NY 11201",
    score: 97,
    grade: "A",
    violations: [],
    inspectedAt: "2026-02-14T14:15:00Z",
    inspector: "S. Patel",
  },
  {
    id: "insp-004",
    restaurant: "Quick Bites Deli",
    address: "945 Lexington Ave, New York, NY 10021",
    score: 62,
    grade: "C",
    violations: [
      { type: "Cold food held above 41°F", severity: "critical" },
      { type: "No certified food protection manager", severity: "major" },
      { type: "Flies present in food prep area", severity: "critical" },
      { type: "Cutting boards not properly sanitized", severity: "major" },
    ],
    inspectedAt: "2026-02-10T10:45:00Z",
    inspector: "J. Okafor",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newInspection = {
    id: `insp-${Date.now()}`,
    restaurant: body.restaurant,
    address: body.address,
    score: null,
    grade: null,
    violations: [],
    inspectedAt: null,
    inspector: null,
    status: "LOOKUP_PENDING",
    message: "Inspection data request submitted. Results will be populated when available.",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newInspection, { status: 201 });
}
