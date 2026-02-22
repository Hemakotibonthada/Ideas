import { NextRequest, NextResponse } from 'next/server';

const energyReadings = [
  {
    id: '1',
    appliance: 'Central AC',
    wattage: 3500,
    dailyKwh: 28.0,
    monthlyCost: 84.0,
    wasteAlert: true,
    status: 'Running',
    room: 'Whole House',
    recommendation: 'Set thermostat 2°F higher to save ~15%',
    carbonKg: 12.6,
  },
  {
    id: '2',
    appliance: 'Refrigerator',
    wattage: 150,
    dailyKwh: 3.6,
    monthlyCost: 10.8,
    wasteAlert: false,
    status: 'Running',
    room: 'Kitchen',
    recommendation: 'Energy usage is normal for this appliance',
    carbonKg: 1.62,
  },
  {
    id: '3',
    appliance: 'Desktop Computer',
    wattage: 300,
    dailyKwh: 2.4,
    monthlyCost: 7.2,
    wasteAlert: true,
    status: 'Idle',
    room: 'Office',
    recommendation: 'Enable sleep mode when idle to save 60%',
    carbonKg: 1.08,
  },
  {
    id: '4',
    appliance: 'Washing Machine',
    wattage: 500,
    dailyKwh: 1.0,
    monthlyCost: 3.0,
    wasteAlert: false,
    status: 'Off',
    room: 'Laundry',
    recommendation: 'Use cold water cycles to save 90% of heating energy',
    carbonKg: 0.45,
  },
  {
    id: '5',
    appliance: 'LED Lights (10x)',
    wattage: 100,
    dailyKwh: 0.8,
    monthlyCost: 2.4,
    wasteAlert: true,
    status: 'Running',
    room: 'Living Room',
    recommendation: 'Lights left on during daytime—consider smart switches',
    carbonKg: 0.36,
  },
];

export async function GET() {
  return NextResponse.json({ energyReadings }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.appliance || body.wattage === undefined || !body.room) {
      return NextResponse.json(
        { error: 'Missing required fields: appliance, wattage, room' },
        { status: 400 }
      );
    }

    const newReading = {
      id: String(energyReadings.length + 1),
      appliance: body.appliance,
      wattage: body.wattage,
      dailyKwh: body.dailyKwh ?? 0,
      monthlyCost: body.monthlyCost ?? 0,
      wasteAlert: body.wasteAlert ?? false,
      status: body.status ?? 'Off',
      room: body.room,
      recommendation: body.recommendation ?? '',
      carbonKg: body.carbonKg ?? 0,
    };

    energyReadings.push(newReading);
    return NextResponse.json({ energyReading: newReading }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
