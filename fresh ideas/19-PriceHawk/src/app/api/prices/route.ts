import { NextRequest, NextResponse } from 'next/server';

const trackedProducts = [
  {
    id: "prod-001",
    name: "Sony WH-1000XM6 Headphones",
    store: "Amazon",
    currentPrice: 348.00,
    lowestPrice: 278.00,
    highestPrice: 399.99,
    targetPrice: 300.00,
    priceHistory: [
      { date: "2026-02-10", price: 369.99 },
      { date: "2026-02-13", price: 359.00 },
      { date: "2026-02-17", price: 348.00 },
    ],
    lastChecked: "2026-02-17T18:30:00Z",
    alertEnabled: true,
  },
  {
    id: "prod-002",
    name: "Apple iPad Air M3",
    store: "Best Buy",
    currentPrice: 599.99,
    lowestPrice: 549.00,
    highestPrice: 649.99,
    targetPrice: 550.00,
    priceHistory: [
      { date: "2026-02-05", price: 649.99 },
      { date: "2026-02-12", price: 619.99 },
      { date: "2026-02-17", price: 599.99 },
    ],
    lastChecked: "2026-02-17T19:00:00Z",
    alertEnabled: true,
  },
  {
    id: "prod-003",
    name: "Dyson V15 Detect Vacuum",
    store: "Target",
    currentPrice: 649.99,
    lowestPrice: 549.99,
    highestPrice: 749.99,
    targetPrice: 575.00,
    priceHistory: [
      { date: "2026-02-01", price: 749.99 },
      { date: "2026-02-10", price: 699.99 },
      { date: "2026-02-17", price: 649.99 },
    ],
    lastChecked: "2026-02-17T17:45:00Z",
    alertEnabled: false,
  },
];

export async function GET() {
  return NextResponse.json(trackedProducts, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.store || body.currentPrice === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: name, store, currentPrice" },
        { status: 400 }
      );
    }

    const newProduct = {
      id: `prod-${Date.now()}`,
      name: body.name,
      store: body.store,
      currentPrice: body.currentPrice,
      lowestPrice: body.lowestPrice ?? body.currentPrice,
      highestPrice: body.highestPrice ?? body.currentPrice,
      targetPrice: body.targetPrice ?? null,
      priceHistory: body.priceHistory ?? [
        { date: new Date().toISOString().split("T")[0], price: body.currentPrice },
      ],
      lastChecked: new Date().toISOString(),
      alertEnabled: body.alertEnabled ?? false,
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
