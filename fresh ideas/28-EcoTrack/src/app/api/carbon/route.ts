import { NextRequest, NextResponse } from 'next/server';

const carbonEntries = [
  {
    id: '1',
    activity: 'Daily car commute (30 km)',
    category: 'Transport',
    co2Kg: 5.4,
    date: '2026-02-18',
    reduction: 'Switch to public transit to cut emissions by 60%.',
    greenScore: 35,
    challenge: 'Car-Free Week',
    impactEquivalent: 'Like burning 2.3 liters of gasoline',
    tips: ['Carpool with a colleague', 'Try cycling once a week', 'Use EV if available'],
  },
  {
    id: '2',
    activity: 'Electricity usage (household)',
    category: 'Energy',
    co2Kg: 8.2,
    date: '2026-02-18',
    reduction: 'Switch to LED bulbs and power-strip timers.',
    greenScore: 42,
    challenge: 'Power-Down Hour',
    impactEquivalent: 'Equivalent to charging 680 smartphones',
    tips: ['Use smart plugs', 'Set AC to 24°C', 'Unplug standby devices'],
  },
  {
    id: '3',
    activity: 'Vegetarian lunch',
    category: 'Food',
    co2Kg: 0.7,
    date: '2026-02-18',
    reduction: 'Great choice! Plant-based meals reduce food emissions by 50%.',
    greenScore: 90,
    challenge: 'Meatless Monday',
    impactEquivalent: 'Saved emissions of 1 kg of beef production',
    tips: ['Try batch-cooking veggie meals', 'Buy local produce', 'Reduce food waste'],
  },
  {
    id: '4',
    activity: 'Online shopping delivery',
    category: 'Shopping',
    co2Kg: 1.1,
    date: '2026-02-17',
    reduction: 'Consolidate orders to reduce delivery trips.',
    greenScore: 55,
    challenge: 'Buy Nothing Week',
    impactEquivalent: 'Like driving 4.5 km in a sedan',
    tips: ['Choose slower shipping', 'Shop local when possible', 'Opt for minimal packaging'],
  },
];

export async function GET() {
  return NextResponse.json({ carbonEntries }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.activity || !body.category || body.co2Kg == null) {
    return NextResponse.json(
      { error: 'Missing required fields: activity, category, co2Kg' },
      { status: 400 }
    );
  }

  const newEntry = {
    id: String(carbonEntries.length + 1),
    activity: body.activity,
    category: body.category,
    co2Kg: body.co2Kg,
    date: body.date ?? new Date().toISOString().slice(0, 10),
    reduction: body.reduction ?? '',
    greenScore: body.greenScore ?? 50,
    challenge: body.challenge ?? '',
    impactEquivalent: body.impactEquivalent ?? '',
    tips: body.tips ?? [],
  };

  carbonEntries.push(newEntry);

  return NextResponse.json({ carbonEntry: newEntry }, { status: 201 });
}
