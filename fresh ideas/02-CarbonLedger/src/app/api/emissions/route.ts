import { NextRequest, NextResponse } from 'next/server';

// POST /api/emissions — Log an emission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scope, category, source, quantity, unit, facilityId } = body;

    if (!scope || !category || !quantity) {
      return NextResponse.json({ error: 'scope, category, and quantity are required' }, { status: 400 });
    }

    const emissionFactors: Record<string, number> = {
      'natural_gas': 2.02, 'diesel': 2.68, 'gasoline': 2.31, 'electricity_us': 0.42,
      'electricity_eu': 0.28, 'air_travel': 0.255, 'rail_freight': 0.028, 'truck_freight': 0.107,
    };

    const factor = emissionFactors[source?.toLowerCase()] || 1.0;
    const co2eKg = quantity * factor;

    return NextResponse.json({
      id: `em_${Date.now()}`,
      scope, category, source, quantity, unit: unit || 'kg',
      emissionFactor: factor,
      co2eKg: Math.round(co2eKg * 100) / 100,
      co2eTonnes: Math.round(co2eKg / 10) / 100,
      facilityId,
      period: new Date().toISOString(),
      verified: false,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    summary: {
      scope1: { totalCo2eKg: 12450000, sources: ['Natural Gas', 'Diesel Fleet', 'Refrigerants'] },
      scope2: { totalCo2eKg: 8230000, sources: ['Purchased Electricity', 'District Heating'] },
      scope3: { totalCo2eKg: 89100000, sources: ['Supply Chain', 'Business Travel', 'Employee Commuting'] },
      totalCo2eTonnes: 109780,
      offsetTonnes: 11550,
      netTonnes: 98230,
      period: 'Q4 2025',
    },
  });
}
