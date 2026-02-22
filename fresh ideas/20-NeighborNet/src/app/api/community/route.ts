import { NextRequest, NextResponse } from 'next/server';

const communityItems = [
  {
    id: "ci-001",
    type: "offer",
    title: "Free Sourdough Starter",
    description: "Healthy, active sourdough starter — happy to share a jar with anyone nearby.",
    postedBy: "user-501",
    neighborhood: "Maple Heights",
    category: "food",
    available: true,
    distance: 0.3,
    responses: 4,
  },
  {
    id: "ci-002",
    type: "request",
    title: "Need Help Moving a Couch",
    description: "Moving to a 3rd-floor walkup this Saturday. Could use an extra pair of hands for ~30 min.",
    postedBy: "user-502",
    neighborhood: "Riverside",
    category: "help",
    available: true,
    distance: 1.2,
    responses: 2,
  },
  {
    id: "ci-003",
    type: "event",
    title: "Neighborhood Block Party",
    description: "Annual spring block party on Elm Street. Potluck style — bring a dish and a lawn chair!",
    postedBy: "user-503",
    neighborhood: "Elm Park",
    category: "social",
    available: true,
    distance: 0.7,
    responses: 18,
  },
];

export async function GET() {
  return NextResponse.json(communityItems, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.type || !body.title || !body.description || !body.postedBy || !body.neighborhood) {
      return NextResponse.json(
        { error: "Missing required fields: type, title, description, postedBy, neighborhood" },
        { status: 400 }
      );
    }

    const newItem = {
      id: `ci-${Date.now()}`,
      type: body.type,
      title: body.title,
      description: body.description,
      postedBy: body.postedBy,
      neighborhood: body.neighborhood,
      category: body.category ?? "general",
      available: body.available ?? true,
      distance: body.distance ?? 0,
      responses: 0,
    };

    return NextResponse.json(newItem, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
