import { NextRequest, NextResponse } from 'next/server';

const groceries = [
  {
    id: '1',
    name: 'Organic Whole Milk',
    category: 'Dairy',
    prices: [
      { store: 'Walmart', price: 4.29 },
      { store: 'Target', price: 4.59 },
      { store: 'Aldi', price: 3.89 },
    ],
    cheapest: 'Aldi',
    savings: 0.70,
    coupons: 1,
    inStock: true,
    unit: 'gallon',
  },
  {
    id: '2',
    name: 'Chicken Breast',
    category: 'Meat',
    prices: [
      { store: 'Costco', price: 3.49 },
      { store: 'Kroger', price: 4.99 },
      { store: 'Walmart', price: 4.28 },
    ],
    cheapest: 'Costco',
    savings: 1.50,
    coupons: 0,
    inStock: true,
    unit: 'lb',
  },
  {
    id: '3',
    name: 'Avocados (bag of 5)',
    category: 'Produce',
    prices: [
      { store: 'Trader Joe\'s', price: 3.99 },
      { store: 'Walmart', price: 4.47 },
      { store: 'Aldi', price: 3.49 },
    ],
    cheapest: 'Aldi',
    savings: 0.98,
    coupons: 0,
    inStock: true,
    unit: 'bag',
  },
  {
    id: '4',
    name: 'Sourdough Bread',
    category: 'Bakery',
    prices: [
      { store: 'Whole Foods', price: 5.99 },
      { store: 'Kroger', price: 4.49 },
      { store: 'Target', price: 4.79 },
    ],
    cheapest: 'Kroger',
    savings: 1.50,
    coupons: 2,
    inStock: false,
    unit: 'loaf',
  },
];

export async function GET() {
  return NextResponse.json({ groceries }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.category || !body.prices?.length) {
      return NextResponse.json(
        { error: 'Missing required fields: name, category, prices' },
        { status: 400 }
      );
    }

    const sortedPrices = [...body.prices].sort((a: { price: number }, b: { price: number }) => a.price - b.price);

    const newGrocery = {
      id: String(groceries.length + 1),
      name: body.name,
      category: body.category,
      prices: body.prices,
      cheapest: sortedPrices[0]?.store ?? '',
      savings: body.savings ?? 0,
      coupons: body.coupons ?? 0,
      inStock: body.inStock ?? true,
      unit: body.unit ?? 'each',
    };

    groceries.push(newGrocery);
    return NextResponse.json({ grocery: newGrocery }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
