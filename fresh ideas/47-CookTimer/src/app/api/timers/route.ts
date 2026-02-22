import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "timer-001",
    mealName: "Sunday Roast Dinner",
    dishes: [
      {
        name: "Herb-Crusted Roast Chicken",
        prepTime: 15,
        cookTime: 75,
        steps: ["Season chicken", "Preheat oven to 425°F", "Roast for 75 min", "Rest for 10 min"],
      },
      {
        name: "Garlic Mashed Potatoes",
        prepTime: 10,
        cookTime: 20,
        steps: ["Peel and boil potatoes", "Sauté garlic in butter", "Mash and combine"],
      },
      {
        name: "Roasted Asparagus",
        prepTime: 5,
        cookTime: 12,
        steps: ["Trim asparagus", "Toss with olive oil and salt", "Roast at 400°F"],
      },
    ],
    totalTime: 100,
  },
  {
    id: "timer-002",
    mealName: "Pasta Night",
    dishes: [
      {
        name: "Spaghetti Bolognese",
        prepTime: 10,
        cookTime: 45,
        steps: ["Brown ground beef", "Add tomato sauce and herbs", "Simmer 40 min", "Cook pasta al dente"],
      },
      {
        name: "Caesar Salad",
        prepTime: 10,
        cookTime: 0,
        steps: ["Chop romaine", "Make dressing", "Toss with croutons and parmesan"],
      },
      {
        name: "Garlic Bread",
        prepTime: 5,
        cookTime: 8,
        steps: ["Slice baguette", "Spread garlic butter", "Broil until golden"],
      },
    ],
    totalTime: 55,
  },
  {
    id: "timer-003",
    mealName: "Quick Weeknight Stir-Fry",
    dishes: [
      {
        name: "Chicken Teriyaki Stir-Fry",
        prepTime: 10,
        cookTime: 12,
        steps: ["Slice chicken and vegetables", "Heat wok", "Stir-fry chicken", "Add veggies and sauce"],
      },
      {
        name: "Steamed Jasmine Rice",
        prepTime: 2,
        cookTime: 18,
        steps: ["Rinse rice", "Add water", "Cook in rice cooker"],
      },
    ],
    totalTime: 22,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const totalTime = (body.dishes ?? []).reduce(
    (max: number, d: { prepTime?: number; cookTime?: number }) =>
      Math.max(max, (d.prepTime ?? 0) + (d.cookTime ?? 0)),
    0
  );
  const newPreset = {
    id: `timer-${Date.now()}`,
    ...body,
    totalTime,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newPreset, { status: 201 });
}
