import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "plan-001",
    name: "High Protein Week",
    servings: 4,
    days: 5,
    meals: [
      { day: "Monday", recipe: "Grilled Chicken & Quinoa Bowl", prepTime: 35, ingredients: ["chicken breast", "quinoa", "broccoli", "bell pepper", "olive oil"] },
      { day: "Tuesday", recipe: "Turkey Meatball Marinara", prepTime: 40, ingredients: ["ground turkey", "whole wheat pasta", "marinara sauce", "parmesan", "spinach"] },
      { day: "Wednesday", recipe: "Salmon Teriyaki with Rice", prepTime: 30, ingredients: ["salmon fillet", "jasmine rice", "teriyaki sauce", "edamame", "sesame seeds"] },
      { day: "Thursday", recipe: "Black Bean & Sweet Potato Tacos", prepTime: 25, ingredients: ["black beans", "sweet potato", "corn tortillas", "avocado", "lime"] },
      { day: "Friday", recipe: "Beef Stir-Fry with Vegetables", prepTime: 30, ingredients: ["flank steak", "brown rice", "snap peas", "carrots", "soy sauce", "ginger"] },
    ],
    groceryList: ["chicken breast x2", "quinoa 1lb", "ground turkey 1lb", "salmon 1lb", "flank steak 1lb", "assorted vegetables", "pantry staples"],
    totalCost: 68.50,
    totalPrepTime: 160,
  },
  {
    id: "plan-002",
    name: "Mediterranean Meal Prep",
    servings: 2,
    days: 4,
    meals: [
      { day: "Monday", recipe: "Greek Chicken Grain Bowl", prepTime: 30, ingredients: ["chicken thigh", "farro", "cucumber", "tomato", "feta", "olives"] },
      { day: "Tuesday", recipe: "Shakshuka with Crusty Bread", prepTime: 25, ingredients: ["eggs", "canned tomatoes", "bell pepper", "onion", "cumin", "sourdough bread"] },
      { day: "Wednesday", recipe: "Lemon Herb Shrimp & Couscous", prepTime: 20, ingredients: ["shrimp", "couscous", "lemon", "parsley", "garlic", "zucchini"] },
      { day: "Thursday", recipe: "Falafel Wrap with Tahini", prepTime: 35, ingredients: ["chickpeas", "pita bread", "tahini", "lettuce", "tomato", "pickled onion"] },
    ],
    groceryList: ["chicken thighs x4", "shrimp 0.5lb", "eggs 6ct", "farro 1lb", "couscous", "mixed vegetables", "feta cheese", "pantry staples"],
    totalCost: 42.00,
    totalPrepTime: 110,
  },
  {
    id: "plan-003",
    name: "Budget Vegan Week",
    servings: 3,
    days: 5,
    meals: [
      { day: "Monday", recipe: "Coconut Chickpea Curry", prepTime: 30, ingredients: ["chickpeas", "coconut milk", "spinach", "rice", "curry paste"] },
      { day: "Tuesday", recipe: "Black Bean Burrito Bowl", prepTime: 20, ingredients: ["black beans", "rice", "corn", "salsa", "avocado", "lime"] },
      { day: "Wednesday", recipe: "Peanut Noodle Stir-Fry", prepTime: 25, ingredients: ["rice noodles", "peanut butter", "tofu", "broccoli", "carrots", "soy sauce"] },
      { day: "Thursday", recipe: "Lentil Soup with Bread", prepTime: 35, ingredients: ["red lentils", "onion", "carrot", "celery", "cumin", "crusty bread"] },
      { day: "Friday", recipe: "Mushroom & Spinach Pasta", prepTime: 20, ingredients: ["penne pasta", "mushrooms", "spinach", "garlic", "nutritional yeast", "olive oil"] },
    ],
    groceryList: ["canned chickpeas x2", "black beans x2", "red lentils 1lb", "tofu 1 block", "rice 2lb", "assorted vegetables", "pantry staples"],
    totalCost: 35.00,
    totalPrepTime: 130,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { servings, days, budget, dietaryPreferences } = body as {
    servings: number;
    days: number;
    budget: number;
    dietaryPreferences: string[];
  };

  const newPlan = {
    id: `plan-${Date.now()}`,
    name: `Custom ${dietaryPreferences.join(" & ")} Plan`,
    servings,
    days,
    dietaryPreferences,
    meals: Array.from({ length: days }, (_, i) => ({
      day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i % 7],
      recipe: `Generated ${dietaryPreferences[0] || "balanced"} recipe ${i + 1}`,
      prepTime: 30,
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
    })),
    groceryList: ["Generated grocery list based on preferences"],
    totalCost: budget * 0.85,
    totalPrepTime: days * 30,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newPlan, { status: 201 });
}
