import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "lease-001",
    address: "450 Elm St, Apt 12B, Portland, OR",
    rentAmount: 1850,
    leaseStart: "2026-03-01",
    leaseEnd: "2027-02-28",
    issues: [
      {
        clause: "Section 4.2 — Late Fee Provision",
        risk: "HIGH",
        suggestion: "Late fee of 15% exceeds most state limits (typically 5-10%). Negotiate to cap at 5%.",
      },
      {
        clause: "Section 7.1 — Entry Without Notice",
        risk: "CRITICAL",
        suggestion: "Landlord claims right to enter without notice. Most states require 24-48 hours notice. Request amendment.",
      },
    ],
  },
  {
    id: "lease-002",
    address: "88 Riverside Dr, Unit 4A, Austin, TX",
    rentAmount: 2200,
    leaseStart: "2026-04-01",
    leaseEnd: "2027-03-31",
    issues: [
      {
        clause: "Section 9.3 — Security Deposit Return",
        risk: "MEDIUM",
        suggestion: "60-day return window is longer than the state-mandated 30 days. Request compliance with state law.",
      },
    ],
  },
  {
    id: "lease-003",
    address: "1200 Oak Ave, Suite 301, Denver, CO",
    rentAmount: 1650,
    leaseStart: "2026-06-01",
    leaseEnd: "2027-05-31",
    issues: [
      {
        clause: "Section 3.5 — Rent Escalation",
        risk: "HIGH",
        suggestion: "Automatic 8% annual increase is above average. Negotiate a cap at 3-5% or tie to CPI.",
      },
      {
        clause: "Section 11.2 — Pet Policy",
        risk: "LOW",
        suggestion: "Non-refundable pet deposit of $500 is within normal range but confirm it covers all pet types.",
      },
      {
        clause: "Section 6.1 — Subletting Prohibition",
        risk: "MEDIUM",
        suggestion: "Complete subletting ban may be restrictive. Request conditional subletting with landlord approval.",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newAnalysis = {
    id: `lease-${Date.now()}`,
    address: body.address,
    rentAmount: body.rentAmount,
    leaseStart: body.leaseStart,
    leaseEnd: body.leaseEnd,
    issues: [],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newAnalysis, { status: 201 });
}
