import { NextRequest, NextResponse } from 'next/server';

const repairGuides = [
  {
    id: '1',
    itemName: 'Samsung Galaxy S24',
    category: 'Smartphone',
    problem: 'Cracked screen replacement',
    difficulty: 'intermediate',
    estimatedTime: '45 min',
    tools: ['Suction cup', 'Spudger', 'Phillips #00 screwdriver', 'Heat gun'],
    parts: ['AMOLED display assembly ($89)'],
    steps: [
      'Power off and remove SIM tray',
      'Heat edges to soften adhesive',
      'Use suction cup to lift screen',
      'Disconnect display cable',
      'Install new display and reconnect',
      'Apply new adhesive and seal',
    ],
    costSaved: 150,
    videoUrl: 'https://example.com/repair/galaxy-s24-screen',
  },
  {
    id: '2',
    itemName: 'KitchenAid Stand Mixer',
    category: 'Kitchen Appliance',
    problem: 'Worn worm gear causing slow mixing',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    tools: ['Flat-head screwdriver', 'Pin punch', 'Food-grade grease'],
    parts: ['Worm gear ($12)'],
    steps: [
      'Unplug and remove attachment hub cover',
      'Remove pin holding worm gear',
      'Slide out old worm gear',
      'Apply food-grade grease to new gear',
      'Reassemble in reverse order',
    ],
    costSaved: 200,
    videoUrl: 'https://example.com/repair/kitchenaid-worm-gear',
  },
  {
    id: '3',
    itemName: 'Bicycle',
    category: 'Transport',
    problem: 'Flat tire repair',
    difficulty: 'beginner',
    estimatedTime: '15 min',
    tools: ['Tire levers', 'Bicycle pump', 'Patch kit'],
    parts: ['Inner tube ($8) or patch ($2)'],
    steps: [
      'Remove wheel from frame',
      'Use tire levers to remove tire from rim',
      'Locate puncture in inner tube',
      'Apply patch or replace tube',
      'Reinstall tire and inflate to recommended PSI',
    ],
    costSaved: 25,
    videoUrl: 'https://example.com/repair/bike-flat-tire',
  },
  {
    id: '4',
    itemName: 'Dripping Kitchen Faucet',
    category: 'Plumbing',
    problem: 'Constant drip from spout',
    difficulty: 'beginner',
    estimatedTime: '20 min',
    tools: ['Adjustable wrench', 'Allen key set', 'Plumber tape'],
    parts: ['Ceramic cartridge ($15)'],
    steps: [
      'Turn off water supply valves',
      'Remove faucet handle with Allen key',
      'Pull out old cartridge',
      'Insert new cartridge and reassemble',
      'Turn on water and test for leaks',
    ],
    costSaved: 120,
    videoUrl: 'https://example.com/repair/faucet-drip',
  },
];

export async function GET() {
  return NextResponse.json({ repairGuides }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.itemName || !body.category || !body.problem) {
    return NextResponse.json(
      { error: 'Missing required fields: itemName, category, problem' },
      { status: 400 }
    );
  }

  const newGuide = {
    id: String(repairGuides.length + 1),
    itemName: body.itemName,
    category: body.category,
    problem: body.problem,
    difficulty: body.difficulty ?? 'beginner',
    estimatedTime: body.estimatedTime ?? 'Unknown',
    tools: body.tools ?? [],
    parts: body.parts ?? [],
    steps: body.steps ?? [],
    costSaved: body.costSaved ?? 0,
    videoUrl: body.videoUrl ?? null,
  };

  repairGuides.push(newGuide);

  return NextResponse.json({ repairGuide: newGuide }, { status: 201 });
}
