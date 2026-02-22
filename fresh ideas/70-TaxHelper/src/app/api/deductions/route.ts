import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "ded-001",
    category: "HOME_OFFICE",
    description: "Dedicated home office space (150 sq ft) used exclusively for freelance work",
    amount: 1500,
    eligible: true,
    maxDeduction: 1500,
    documentation: ["Mortgage statement", "Home office photo", "Floor plan measurement"],
  },
  {
    id: "ded-002",
    category: "MEDICAL",
    description: "Dental surgery and prescription medications exceeding 7.5% of AGI",
    amount: 4200,
    eligible: true,
    maxDeduction: 10000,
    documentation: ["Medical bills", "Insurance EOB statements", "Pharmacy receipts"],
  },
  {
    id: "ded-003",
    category: "CHARITY",
    description: "Donations to Habitat for Humanity and local food bank",
    amount: 2800,
    eligible: true,
    maxDeduction: 15000,
    documentation: ["Donation receipts", "501(c)(3) confirmation letters"],
  },
  {
    id: "ded-004",
    category: "EDUCATION",
    description: "Online data science certification course and textbooks",
    amount: 3500,
    eligible: false,
    maxDeduction: 4000,
    documentation: ["Course enrollment receipt", "Textbook purchase receipts", "Employer reimbursement denial letter"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const maxDeductions: Record<string, number> = {
    HOME_OFFICE: 1500,
    MEDICAL: 10000,
    EDUCATION: 4000,
    CHARITY: 15000,
    BUSINESS: 25000,
  };
  const maxDed = maxDeductions[body.category] || 5000;
  const eligible = body.amount <= maxDed;

  const newItem = {
    id: `ded-${Date.now()}`,
    category: body.category,
    description: body.description,
    amount: body.amount,
    eligible,
    maxDeduction: maxDed,
    documentation: eligible
      ? ["Receipt or proof of expense", "Category-specific supporting document"]
      : ["Amount exceeds maximum — review IRS guidelines for this category"],
    estimatedTaxSaving: eligible ? Math.round(body.amount * 0.24) : 0,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
