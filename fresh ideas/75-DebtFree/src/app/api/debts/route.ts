import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "debt-001",
    name: "Chase Sapphire Preferred",
    type: "CREDIT_CARD",
    balance: 4850.0,
    interestRate: 21.49,
    minimumPayment: 97.0,
    payoffDate: "2029-08-15",
    totalInterest: 2634.12,
  },
  {
    id: "debt-002",
    name: "Federal Student Loan (Subsidized)",
    type: "STUDENT_LOAN",
    balance: 22400.0,
    interestRate: 5.5,
    minimumPayment: 245.0,
    payoffDate: "2036-01-10",
    totalInterest: 7140.0,
  },
  {
    id: "debt-003",
    name: "Home Mortgage - First National",
    type: "MORTGAGE",
    balance: 187500.0,
    interestRate: 6.75,
    minimumPayment: 1215.0,
    payoffDate: "2055-09-01",
    totalInterest: 249900.0,
  },
  {
    id: "debt-004",
    name: "SoFi Personal Loan",
    type: "PERSONAL",
    balance: 8200.0,
    interestRate: 12.99,
    minimumPayment: 195.0,
    payoffDate: "2030-06-20",
    totalInterest: 2548.6,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const strategy = body.strategy || "AVALANCHE";
  const extraPayment = body.extraPayment || 0;

  const debts = (body.debts || []).map((d: { name: string; balance: number; interestRate: number; minimumPayment: number }, i: number) => ({
    id: `debt-plan-${i + 1}`,
    name: d.name,
    balance: d.balance,
    interestRate: d.interestRate,
    minimumPayment: d.minimumPayment,
    priority: strategy === "AVALANCHE" ? i + 1 : i + 1,
  }));

  const newPlan = {
    id: `plan-${Date.now()}`,
    strategy,
    extraPayment,
    debts,
    estimatedPayoffMonths: 48,
    totalInterestSaved: extraPayment * 12,
    debtFreeDate: "2030-02-18",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newPlan, { status: 201 });
}
