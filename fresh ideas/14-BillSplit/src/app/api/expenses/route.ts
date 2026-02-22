import { NextRequest, NextResponse } from 'next/server';

const expenses = [
  {
    id: "exp-001",
    groupId: "grp-trip-nyc",
    description: "Dinner at Carbone",
    amount: 245.80,
    paidBy: "user-301",
    splitType: "equal",
    shares: [
      { userId: "user-301", amount: 81.93, paid: true },
      { userId: "user-302", amount: 81.93, paid: false },
      { userId: "user-303", amount: 81.94, paid: false },
    ],
    category: "food",
    date: "2026-02-15",
    settled: false,
  },
  {
    id: "exp-002",
    groupId: "grp-apartment",
    description: "February Electricity Bill",
    amount: 132.50,
    paidBy: "user-302",
    splitType: "equal",
    shares: [
      { userId: "user-301", amount: 66.25, paid: true },
      { userId: "user-302", amount: 66.25, paid: true },
    ],
    category: "utilities",
    date: "2026-02-10",
    settled: true,
  },
  {
    id: "exp-003",
    groupId: "grp-trip-nyc",
    description: "Uber to Airport",
    amount: 58.00,
    paidBy: "user-303",
    splitType: "percentage",
    shares: [
      { userId: "user-301", amount: 19.33, paid: false },
      { userId: "user-302", amount: 19.33, paid: false },
      { userId: "user-303", amount: 19.34, paid: true },
    ],
    category: "transport",
    date: "2026-02-16",
    settled: false,
  },
];

export async function GET() {
  return NextResponse.json(expenses, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.groupId || !body.description || body.amount === undefined || !body.paidBy) {
      return NextResponse.json(
        { error: "Missing required fields: groupId, description, amount, paidBy" },
        { status: 400 }
      );
    }

    const newExpense = {
      id: `exp-${Date.now()}`,
      groupId: body.groupId,
      description: body.description,
      amount: body.amount,
      paidBy: body.paidBy,
      splitType: body.splitType ?? "equal",
      shares: body.shares ?? [],
      category: body.category ?? "other",
      date: body.date ?? new Date().toISOString().split("T")[0],
      settled: body.settled ?? false,
    };

    return NextResponse.json(newExpense, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
