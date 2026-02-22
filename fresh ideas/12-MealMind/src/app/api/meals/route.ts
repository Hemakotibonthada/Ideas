import { NextRequest, NextResponse } from 'next/server';

const meals = [
  {
    id: "meal-001",
    name: "Grilled Salmon Bowl",
    cuisine: "Japanese",
    calories: 520,
    protein: 38,
    carbs: 45,
    fat: 18,
    ingredients: ["salmon", "rice", "avocado", "edamame", "sesame seeds", "soy sauce"],
    allergens: ["fish", "soy"],
    prepTime: 25,
    difficulty: "easy",
  },
  {
    id: "meal-002",
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    calories: 680,
    protein: 42,
    carbs: 55,
    fat: 28,
    ingredients: ["chicken breast", "yogurt", "tomato sauce", "garam masala", "basmati rice", "cream"],
    allergens: ["dairy"],
    prepTime: 45,
    difficulty: "medium",
  },
  {
    id: "meal-003",
    name: "Mediterranean Quinoa Salad",
    cuisine: "Mediterranean",
    calories: 380,
    protein: 14,
    carbs: 52,
    fat: 12,
    ingredients: ["quinoa", "cucumber", "cherry tomatoes", "feta cheese", "olives", "lemon dressing"],
    allergens: ["dairy"],
    prepTime: 15,
    difficulty: "easy",
  },
];

export async function GET() {
  return NextResponse.json(meals, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.cuisine || body.calories === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: name, cuisine, calories" },
        { status: 400 }
      );
    }

    const newMeal = {
      id: `meal-${Date.now()}`,
      name: body.name,
      cuisine: body.cuisine,
      calories: body.calories,
      protein: body.protein ?? 0,
      carbs: body.carbs ?? 0,
      fat: body.fat ?? 0,
      ingredients: body.ingredients ?? [],
      allergens: body.allergens ?? [],
      prepTime: body.prepTime ?? 0,
      difficulty: body.difficulty ?? "easy",
    };

    return NextResponse.json(newMeal, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
