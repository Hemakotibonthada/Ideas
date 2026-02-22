import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "rec-001",
    mood: "STRESSED",
    foods: [
      { name: "Dark Chocolate (70%+)", benefit: "Lowers cortisol levels", recipe: "Dark chocolate almond bark with sea salt" },
      { name: "Blueberries", benefit: "Rich in antioxidants that combat stress", recipe: "Blueberry spinach smoothie bowl" },
      { name: "Salmon", benefit: "Omega-3 fatty acids reduce anxiety", recipe: "Baked salmon with lemon dill sauce" },
    ],
    nutrients: ["Magnesium", "Omega-3", "Vitamin C", "B-Complex"],
    science: "Chronic stress depletes magnesium and B vitamins. Foods rich in these nutrients help regulate the HPA axis and lower cortisol production.",
  },
  {
    id: "rec-002",
    mood: "TIRED",
    foods: [
      { name: "Bananas", benefit: "Natural sugars and potassium for energy", recipe: "Banana oat energy bites" },
      { name: "Quinoa", benefit: "Complex carbs for sustained energy", recipe: "Quinoa power bowl with roasted vegetables" },
      { name: "Green Tea", benefit: "L-theanine provides calm alertness", recipe: "Iced matcha latte with honey" },
    ],
    nutrients: ["Iron", "B12", "Complex Carbohydrates", "CoQ10"],
    science: "Fatigue often signals iron or B12 deficiency. Complex carbohydrates provide steady glucose release, avoiding the crash from simple sugars.",
  },
  {
    id: "rec-003",
    mood: "SAD",
    foods: [
      { name: "Walnuts", benefit: "Omega-3 ALA boosts serotonin", recipe: "Walnut-crusted chicken with maple glaze" },
      { name: "Spinach", benefit: "Folate supports mood regulation", recipe: "Warm spinach salad with strawberries" },
      { name: "Turkey", benefit: "Tryptophan precursor to serotonin", recipe: "Herb-roasted turkey breast with sweet potatoes" },
    ],
    nutrients: ["Tryptophan", "Folate", "Vitamin D", "Omega-3"],
    science: "Low serotonin is linked to depressed mood. Tryptophan-rich foods combined with complex carbs enhance serotonin synthesis in the brain.",
  },
  {
    id: "rec-004",
    mood: "ANXIOUS",
    foods: [
      { name: "Chamomile Tea", benefit: "Apigenin binds to GABA receptors", recipe: "Chamomile lavender latte" },
      { name: "Yogurt", benefit: "Probiotics support gut-brain axis", recipe: "Greek yogurt parfait with granola and berries" },
      { name: "Avocado", benefit: "B6 helps produce calming neurotransmitters", recipe: "Avocado toast with everything seasoning" },
    ],
    nutrients: ["GABA", "Probiotics", "Vitamin B6", "Magnesium"],
    science: "The gut-brain axis plays a critical role in anxiety. Probiotic-rich foods and magnesium help modulate GABA activity, promoting calm.",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newRecommendation = {
    id: `rec-${Date.now()}`,
    mood: body.mood,
    dietaryRestrictions: body.dietaryRestrictions || [],
    foods: [
      { name: "Suggested Food 1", benefit: "Tailored to your mood and diet", recipe: "Personalized recipe" },
      { name: "Suggested Food 2", benefit: "Nutrient-dense option", recipe: "Quick preparation recipe" },
    ],
    nutrients: ["Personalized nutrient list based on mood"],
    science: "Recommendation generated based on your current mood and dietary preferences.",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newRecommendation, { status: 201 });
}
