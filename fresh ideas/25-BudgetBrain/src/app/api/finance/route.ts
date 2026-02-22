import { NextRequest, NextResponse } from 'next/server';

const financeEntries = [
  {
    id: '1',
    category: 'Housing',
    description: 'Monthly rent payment',
    amount: 1800,
    type: 'expense',
    date: '2026-02-01',
    recurring: true,
    subscription: false,
    savingsTip: 'Consider refinancing or negotiating lease renewal for a lower rate.',
    financialScore: 72,
  },
  {
    id: '2',
    category: 'Subscriptions',
    description: 'Streaming services bundle',
    amount: 45.99,
    type: 'expense',
    date: '2026-02-05',
    recurring: true,
    subscription: true,
    savingsTip: 'Audit unused subscriptions — cancel at least one to save $15/mo.',
    financialScore: 65,
  },
  {
    id: '3',
    category: 'Income',
    description: 'Salary deposit',
    amount: 5200,
    type: 'income',
    date: '2026-02-15',
    recurring: true,
    subscription: false,
    savingsTip: 'Automate 20% of income to savings on payday.',
    financialScore: 85,
  },
  {
    id: '4',
    category: 'Dining',
    description: 'Restaurant dinner with friends',
    amount: 68.50,
    type: 'expense',
    date: '2026-02-14',
    recurring: false,
    subscription: false,
    savingsTip: 'Limit dining out to twice a week to save ~$200/month.',
    financialScore: 58,
  },
  {
    id: '5',
    category: 'Savings',
    description: 'Emergency fund contribution',
    amount: 500,
    type: 'savings',
    date: '2026-02-15',
    recurring: true,
    subscription: false,
    savingsTip: 'Great habit! Aim for 6 months of expenses in your emergency fund.',
    financialScore: 92,
  },
];

export async function GET() {
  return NextResponse.json({ financeEntries }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.category || !body.description || body.amount == null || !body.type) {
    return NextResponse.json(
      { error: 'Missing required fields: category, description, amount, type' },
      { status: 400 }
    );
  }

  const newEntry = {
    id: String(financeEntries.length + 1),
    category: body.category,
    description: body.description,
    amount: body.amount,
    type: body.type,
    date: body.date ?? new Date().toISOString().slice(0, 10),
    recurring: body.recurring ?? false,
    subscription: body.subscription ?? false,
    savingsTip: body.savingsTip ?? '',
    financialScore: body.financialScore ?? 50,
  };

  financeEntries.push(newEntry);

  return NextResponse.json({ financeEntry: newEntry }, { status: 201 });
}
