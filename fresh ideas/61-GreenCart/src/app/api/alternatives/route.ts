import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "alt-001",
    originalProduct: "Clorox Bleach Cleaner",
    alternative: "Seventh Generation All-Purpose Cleaner",
    ecoScore: 92,
    priceDiff: 1.5,
    co2Saved: "2.3 kg/year",
    category: "CLEANING",
    verified: true,
  },
  {
    id: "alt-002",
    originalProduct: "Ziploc Plastic Bags",
    alternative: "Stasher Reusable Silicone Bags",
    ecoScore: 88,
    priceDiff: 8.0,
    co2Saved: "4.1 kg/year",
    category: "HOME",
    verified: true,
  },
  {
    id: "alt-003",
    originalProduct: "Dove Body Wash (Plastic Bottle)",
    alternative: "Ethique Eco-Friendly Body Wash Bar",
    ecoScore: 95,
    priceDiff: 2.0,
    co2Saved: "1.8 kg/year",
    category: "PERSONAL",
    verified: true,
  },
  {
    id: "alt-004",
    originalProduct: "Nestle Bottled Water (24-pack)",
    alternative: "Brita Water Filter Pitcher",
    ecoScore: 97,
    priceDiff: -15.0,
    co2Saved: "12.6 kg/year",
    category: "FOOD",
    verified: false,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `alt-${Date.now()}`,
    originalProduct: body.originalProduct,
    category: body.category,
    alternatives: [
      {
        alternative: "Eco-Friendly Option A",
        ecoScore: 85,
        priceDiff: 1.2,
        co2Saved: "2.0 kg/year",
        verified: false,
      },
      {
        alternative: "Eco-Friendly Option B",
        ecoScore: 90,
        priceDiff: 3.5,
        co2Saved: "3.4 kg/year",
        verified: true,
      },
    ],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
