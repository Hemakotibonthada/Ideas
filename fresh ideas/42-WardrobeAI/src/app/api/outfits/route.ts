import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "outfit-001",
    name: "Smart Casual Friday",
    occasion: "office",
    items: [
      { type: "shirt", color: "light blue", brand: "Uniqlo" },
      { type: "chinos", color: "navy", brand: "Dockers" },
      { type: "sneakers", color: "white", brand: "Common Projects" },
    ],
    rating: 4.5,
    weather: "mild",
  },
  {
    id: "outfit-002",
    name: "Weekend Brunch Look",
    occasion: "casual",
    items: [
      { type: "t-shirt", color: "olive green", brand: "COS" },
      { type: "jeans", color: "light wash", brand: "Levi's" },
      { type: "loafers", color: "tan", brand: "Cole Haan" },
    ],
    rating: 4.2,
    weather: "warm",
  },
  {
    id: "outfit-003",
    name: "Date Night Elegance",
    occasion: "evening",
    items: [
      { type: "blazer", color: "charcoal", brand: "Hugo Boss" },
      { type: "turtleneck", color: "black", brand: "Zara" },
      { type: "dress pants", color: "charcoal", brand: "Hugo Boss" },
      { type: "oxford shoes", color: "burgundy", brand: "Allen Edmonds" },
    ],
    rating: 4.8,
    weather: "cool",
  },
  {
    id: "outfit-004",
    name: "Rainy Day Commute",
    occasion: "commute",
    items: [
      { type: "rain jacket", color: "dark green", brand: "Patagonia" },
      { type: "henley", color: "grey", brand: "J.Crew" },
      { type: "waterproof boots", color: "brown", brand: "Timberland" },
    ],
    rating: 4.0,
    weather: "rainy",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newOutfit = {
    id: `outfit-${Date.now()}`,
    ...body,
    rating: 0,
    weather: body.weather ?? "any",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newOutfit, { status: 201 });
}
