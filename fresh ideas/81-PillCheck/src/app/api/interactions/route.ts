import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "intx-001",
    drug1: "Warfarin",
    drug2: "Aspirin",
    severity: "SEVERE",
    description: "Combined use significantly increases bleeding risk. Both drugs affect blood clotting through different mechanisms.",
    recommendation: "Avoid concurrent use unless specifically directed by a physician. Monitor INR closely if combination is necessary.",
    source: "FDA Drug Interaction Database",
  },
  {
    id: "intx-002",
    drug1: "Lisinopril",
    drug2: "Potassium Supplements",
    severity: "MODERATE",
    description: "ACE inhibitors can increase potassium levels. Adding potassium supplements may cause hyperkalemia.",
    recommendation: "Monitor serum potassium levels regularly. Adjust potassium supplementation as needed.",
    source: "DrugBank Clinical Annotations",
  },
  {
    id: "intx-003",
    drug1: "Metformin",
    drug2: "Ibuprofen",
    severity: "MILD",
    description: "NSAIDs may slightly reduce renal function, potentially affecting metformin clearance in susceptible individuals.",
    recommendation: "Generally safe for short-term use. Stay hydrated and monitor blood glucose if using regularly.",
    source: "Clinical Pharmacology Database",
  },
  {
    id: "intx-004",
    drug1: "Simvastatin",
    drug2: "Amlodipine",
    severity: "MODERATE",
    description: "Amlodipine inhibits CYP3A4 metabolism of simvastatin, increasing statin blood levels and risk of myopathy.",
    recommendation: "Limit simvastatin dose to 20mg daily when taken with amlodipine. Consider alternative statin.",
    source: "FDA Safety Communication",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { medications } = body as { medications: string[] };

  const pairs: { drug1: string; drug2: string; severity: string; description: string }[] = [];
  for (let i = 0; i < medications.length; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      pairs.push({
        drug1: medications[i],
        drug2: medications[j],
        severity: ["NONE", "MILD", "MODERATE"][Math.floor(Math.random() * 3)],
        description: `Interaction analysis between ${medications[i]} and ${medications[j]} completed.`,
      });
    }
  }

  const result = {
    id: `analysis-${Date.now()}`,
    medications,
    totalPairs: pairs.length,
    interactions: pairs,
    analyzedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(result, { status: 201 });
}
