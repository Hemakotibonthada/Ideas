import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "gig-001",
    platform: "Uber",
    amount: 187.50,
    date: "2026-02-17",
    category: "Rideshare",
    taxWithheld: 28.13,
    netIncome: 159.37,
    hoursWorked: 6.5,
  },
  {
    id: "gig-002",
    platform: "DoorDash",
    amount: 94.20,
    date: "2026-02-16",
    category: "Delivery",
    taxWithheld: 14.13,
    netIncome: 80.07,
    hoursWorked: 4.0,
  },
  {
    id: "gig-003",
    platform: "Upwork",
    amount: 650.00,
    date: "2026-02-15",
    category: "Freelance",
    taxWithheld: 97.50,
    netIncome: 552.50,
    hoursWorked: 12.0,
  },
  {
    id: "gig-004",
    platform: "TaskRabbit",
    amount: 120.00,
    date: "2026-02-14",
    category: "Services",
    taxWithheld: 18.00,
    netIncome: 102.00,
    hoursWorked: 3.5,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const amount = body.amount ?? 0;
  const taxRate = 0.15;
  const taxWithheld = Math.round(amount * taxRate * 100) / 100;
  const netIncome = Math.round((amount - taxWithheld) * 100) / 100;
  const newRecord = {
    id: `gig-${Date.now()}`,
    ...body,
    taxWithheld,
    netIncome,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newRecord, { status: 201 });
}
