import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "gdn-001",
    name: "Backyard Veggie Patch",
    size: "10x12 ft",
    zone: "7b",
    plants: [
      { name: "Roma Tomatoes", spacing: "24 inches", sunlight: "Full Sun", water: "1 inch/week" },
      { name: "Sugar Snap Peas", spacing: "3 inches", sunlight: "Full Sun", water: "1 inch/week" },
      { name: "Basil", spacing: "12 inches", sunlight: "Full Sun", water: "0.5 inch/week" },
      { name: "Zucchini", spacing: "36 inches", sunlight: "Full Sun", water: "1.5 inches/week" },
    ],
    season: "Spring/Summer",
    estimatedYield: "45-60 lbs",
  },
  {
    id: "gdn-002",
    name: "Balcony Herb Container Garden",
    size: "4x6 ft",
    zone: "6a",
    plants: [
      { name: "Rosemary", spacing: "12 inches", sunlight: "Full Sun", water: "Low" },
      { name: "Thyme", spacing: "8 inches", sunlight: "Full Sun", water: "Low" },
      { name: "Mint", spacing: "12 inches (contained)", sunlight: "Partial Shade", water: "Moderate" },
    ],
    season: "Year-round (indoor winter)",
    estimatedYield: "Continuous harvest",
  },
  {
    id: "gdn-003",
    name: "Fall Root Vegetable Bed",
    size: "8x8 ft",
    zone: "5a",
    plants: [
      { name: "Carrots (Nantes)", spacing: "2 inches", sunlight: "Full Sun", water: "1 inch/week" },
      { name: "Beets", spacing: "4 inches", sunlight: "Full to Partial Sun", water: "1 inch/week" },
      { name: "Garlic", spacing: "6 inches", sunlight: "Full Sun", water: "0.5 inch/week" },
      { name: "Turnips", spacing: "4 inches", sunlight: "Full Sun", water: "1 inch/week" },
    ],
    season: "Fall/Winter",
    estimatedYield: "25-35 lbs",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newGarden = {
    id: `gdn-${Date.now()}`,
    name: body.name,
    size: body.size,
    zone: body.zone,
    plants: [
      { name: "Suggested Plant 1", spacing: "12 inches", sunlight: "Full Sun", water: "1 inch/week" },
      { name: "Suggested Plant 2", spacing: "8 inches", sunlight: "Partial Sun", water: "Moderate" },
      { name: "Suggested Companion Plant", spacing: "6 inches", sunlight: "Full Sun", water: "Low" },
    ],
    season: body.season || "Spring/Summer",
    estimatedYield: "20-30 lbs",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newGarden, { status: 201 });
}
