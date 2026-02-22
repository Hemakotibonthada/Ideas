import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "solar-001",
    address: "742 Evergreen Terrace, Phoenix, AZ",
    roofArea: 1800,
    sunHours: 6.5,
    panelCount: 24,
    annualSavings: 2340,
    paybackYears: 7.2,
    co2Reduction: 8.4,
  },
  {
    id: "solar-002",
    address: "1600 Pennsylvania Ave, Las Vegas, NV",
    roofArea: 2400,
    sunHours: 7.1,
    panelCount: 32,
    annualSavings: 3180,
    paybackYears: 6.5,
    co2Reduction: 11.2,
  },
  {
    id: "solar-003",
    address: "221B Baker St, San Diego, CA",
    roofArea: 1200,
    sunHours: 5.8,
    panelCount: 16,
    annualSavings: 1560,
    paybackYears: 8.1,
    co2Reduction: 5.6,
  },
  {
    id: "solar-004",
    address: "350 Fifth Ave, Denver, CO",
    roofArea: 2000,
    sunHours: 5.5,
    panelCount: 28,
    annualSavings: 2050,
    paybackYears: 9.0,
    co2Reduction: 7.8,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const roofArea = body.roofArea ?? 1500;
  const sunHours = body.sunHours ?? 5.0;
  const panelCount = Math.floor(roofArea / 75);
  const annualSavings = Math.round(panelCount * sunHours * 365 * 0.12);
  const newEstimate = {
    id: `solar-${Date.now()}`,
    address: body.address,
    roofArea,
    sunHours,
    panelCount,
    annualSavings,
    paybackYears: Math.round((panelCount * 800) / annualSavings * 10) / 10,
    co2Reduction: Math.round(panelCount * 0.35 * 10) / 10,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newEstimate, { status: 201 });
}
