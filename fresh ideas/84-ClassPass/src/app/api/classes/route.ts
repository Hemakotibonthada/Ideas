import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "cls-001",
    title: "Watercolor Landscapes for Beginners",
    category: "ART",
    instructor: "Elena Vasquez",
    date: "2026-02-22T10:00:00Z",
    duration: 120,
    price: 45.00,
    spotsLeft: 4,
    location: "Riverside Art Studio, 123 Main St",
    rating: 4.8,
  },
  {
    id: "cls-002",
    title: "Thai Street Food Masterclass",
    category: "COOKING",
    instructor: "Chef Somsak Rattana",
    date: "2026-02-23T18:00:00Z",
    duration: 180,
    price: 75.00,
    spotsLeft: 2,
    location: "Culinary Hub Kitchen, 456 Oak Ave",
    rating: 4.9,
  },
  {
    id: "cls-003",
    title: "Acoustic Guitar Fingerpicking",
    category: "MUSIC",
    instructor: "David Park",
    date: "2026-02-24T14:00:00Z",
    duration: 90,
    price: 35.00,
    spotsLeft: 6,
    location: "Harmony Music School, 789 Elm Blvd",
    rating: 4.6,
  },
  {
    id: "cls-004",
    title: "Introduction to Pottery & Ceramics",
    category: "CRAFT",
    instructor: "Maya Thompson",
    date: "2026-02-25T11:00:00Z",
    duration: 150,
    price: 60.00,
    spotsLeft: 3,
    location: "Clay Works Studio, 321 Pine Rd",
    rating: 4.7,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, category, date, maxSpots, price } = body as {
    title: string;
    category: string;
    date: string;
    maxSpots: number;
    price: number;
  };

  const newClass = {
    id: `cls-${Date.now()}`,
    title,
    category,
    instructor: "Pending Assignment",
    date,
    duration: 120,
    price,
    spotsLeft: maxSpots,
    maxSpots,
    location: "TBD",
    rating: 0,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newClass, { status: 201 });
}
