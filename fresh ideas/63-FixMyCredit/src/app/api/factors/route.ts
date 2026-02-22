import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "fac-001",
    category: "PAYMENT_HISTORY",
    currentScore: 720,
    impact: "HIGH",
    suggestion: "You missed a credit card payment in December 2025. Set up autopay to avoid future missed payments.",
    potentialGain: 35,
  },
  {
    id: "fac-002",
    category: "UTILIZATION",
    currentScore: 720,
    impact: "HIGH",
    suggestion: "Your credit utilization is at 42%. Aim to keep it below 30% by paying down $1,200 on your Visa card.",
    potentialGain: 25,
  },
  {
    id: "fac-003",
    category: "INQUIRIES",
    currentScore: 720,
    impact: "MEDIUM",
    suggestion: "You had 3 hard inquiries in the last 6 months. Avoid applying for new credit for the next 12 months.",
    potentialGain: 15,
  },
  {
    id: "fac-004",
    category: "AGE",
    currentScore: 720,
    impact: "LOW",
    suggestion: "Your average account age is 2.5 years. Keep your oldest accounts open to build history over time.",
    potentialGain: 5,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const debtToIncomeRatio = body.totalDebt / (body.monthlyIncome * 12);
  const newItem = {
    id: `analysis-${Date.now()}`,
    currentScore: body.currentScore,
    monthlyIncome: body.monthlyIncome,
    totalDebt: body.totalDebt,
    debtToIncomeRatio: Math.round(debtToIncomeRatio * 100) / 100,
    riskLevel: debtToIncomeRatio > 0.4 ? "HIGH" : debtToIncomeRatio > 0.2 ? "MEDIUM" : "LOW",
    suggestions: [
      { priority: 1, action: "Pay down highest-interest debt first", estimatedGain: 20 },
      { priority: 2, action: "Set up automatic payments for all accounts", estimatedGain: 15 },
      { priority: 3, action: "Request a credit limit increase to lower utilization", estimatedGain: 10 },
    ],
    projectedScore: Math.min(850, body.currentScore + 45),
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
