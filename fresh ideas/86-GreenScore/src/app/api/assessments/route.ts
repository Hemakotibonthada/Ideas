import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "assess-001",
    address: "742 Evergreen Terrace, Portland, OR",
    overallScore: 72,
    categories: [
      { name: "Insulation", score: 65, suggestions: ["Add attic insulation to R-49", "Seal gaps around windows and doors"] },
      { name: "Appliances", score: 85, suggestions: ["Replace water heater with heat pump model"] },
      { name: "Lighting", score: 90, suggestions: ["Switch remaining 3 incandescent bulbs to LED"] },
      { name: "Water", score: 60, suggestions: ["Install low-flow showerheads", "Fix leaking kitchen faucet", "Consider rain barrel for garden"] },
    ],
    energyRating: "C",
    waterUsage: 8500,
    wasteScore: 68,
  },
  {
    id: "assess-002",
    address: "1600 Pennsylvania Ave, Washington, DC",
    overallScore: 88,
    categories: [
      { name: "Insulation", score: 92, suggestions: ["Minor air sealing around basement windows"] },
      { name: "Appliances", score: 95, suggestions: ["All appliances are Energy Star rated"] },
      { name: "Lighting", score: 80, suggestions: ["Install motion sensors in hallways", "Add smart lighting controls"] },
      { name: "Water", score: 85, suggestions: ["Consider greywater recycling system"] },
    ],
    energyRating: "A",
    waterUsage: 5200,
    wasteScore: 82,
  },
  {
    id: "assess-003",
    address: "221B Baker Street, Seattle, WA",
    overallScore: 54,
    categories: [
      { name: "Insulation", score: 40, suggestions: ["Upgrade to double-pane windows", "Add wall insulation", "Seal crawl space"] },
      { name: "Appliances", score: 55, suggestions: ["Replace 15-year old refrigerator", "Upgrade HVAC to high-efficiency model"] },
      { name: "Lighting", score: 70, suggestions: ["Replace fluorescent tubes with LED panels"] },
      { name: "Water", score: 50, suggestions: ["Fix running toilet", "Install water-efficient landscaping", "Add faucet aerators"] },
    ],
    energyRating: "D",
    waterUsage: 12000,
    wasteScore: 45,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { address, sqft, energyBill, waterBill } = body as {
    address: string;
    sqft: number;
    energyBill: number;
    waterBill: number;
  };

  const energyPerSqft = energyBill / sqft;
  const energyScore = energyPerSqft < 0.08 ? 90 : energyPerSqft < 0.12 ? 70 : 50;
  const waterScore = waterBill < 50 ? 85 : waterBill < 80 ? 65 : 45;
  const overallScore = Math.round((energyScore + waterScore) / 2);

  const newAssessment = {
    id: `assess-${Date.now()}`,
    address,
    sqft,
    overallScore,
    categories: [
      { name: "Energy Efficiency", score: energyScore, suggestions: ["Schedule a professional energy audit"] },
      { name: "Water Conservation", score: waterScore, suggestions: ["Review water usage patterns"] },
    ],
    energyRating: overallScore >= 80 ? "A" : overallScore >= 60 ? "B" : overallScore >= 40 ? "C" : "D",
    waterUsage: Math.round(waterBill * 100),
    wasteScore: Math.round(overallScore * 0.9),
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newAssessment, { status: 201 });
}
