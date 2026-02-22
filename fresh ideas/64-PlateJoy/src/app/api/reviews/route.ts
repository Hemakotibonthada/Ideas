import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "rev-001",
    dishName: "Spicy Tonkotsu Ramen",
    restaurant: "Ichiran Ramen House",
    rating: 4.8,
    photoUrl: "https://placehold.co/600x400?text=Tonkotsu+Ramen",
    price: 16.5,
    tags: ["spicy", "pork", "noodles", "hearty"],
    reviewer: "FoodieAlice",
    createdAt: "2026-02-14T19:30:00Z",
  },
  {
    id: "rev-002",
    dishName: "Truffle Mushroom Pizza",
    restaurant: "La Piazza Napoletana",
    rating: 4.5,
    photoUrl: "https://placehold.co/600x400?text=Truffle+Pizza",
    price: 22.0,
    tags: ["truffle", "vegetarian", "wood-fired"],
    reviewer: "PizzaKing99",
    createdAt: "2026-02-13T20:15:00Z",
  },
  {
    id: "rev-003",
    dishName: "Avocado Buddha Bowl",
    restaurant: "Green Leaf Cafe",
    rating: 4.3,
    photoUrl: "https://placehold.co/600x400?text=Buddha+Bowl",
    price: 14.0,
    tags: ["vegan", "healthy", "gluten-free"],
    reviewer: "HealthyEats",
    createdAt: "2026-02-12T12:45:00Z",
  },
  {
    id: "rev-004",
    dishName: "Korean Fried Chicken Wings",
    restaurant: "Seoul Kitchen BBQ",
    rating: 4.9,
    photoUrl: "https://placehold.co/600x400?text=Korean+Chicken",
    price: 13.5,
    tags: ["spicy", "crispy", "korean", "shareable"],
    reviewer: "WingLover22",
    createdAt: "2026-02-11T18:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `rev-${Date.now()}`,
    dishName: body.dishName,
    restaurant: body.restaurant,
    rating: body.rating,
    photoUrl: "https://placehold.co/600x400?text=New+Dish+Review",
    price: body.price || null,
    tags: body.tags || [],
    reviewer: "Anonymous",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
