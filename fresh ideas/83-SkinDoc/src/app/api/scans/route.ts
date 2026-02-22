import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "scan-001",
    area: "Left forearm",
    condition: "Eczema (Atopic Dermatitis)",
    confidence: 0.87,
    riskLevel: "LOW",
    recommendation: "Apply fragrance-free moisturizer regularly. Consider over-the-counter hydrocortisone cream for flare-ups. See a dermatologist if symptoms persist beyond 2 weeks.",
    scannedAt: "2026-02-15T10:30:00Z",
    followUp: "2026-03-15",
  },
  {
    id: "scan-002",
    area: "Upper back",
    condition: "Suspicious Melanocytic Nevus",
    confidence: 0.72,
    riskLevel: "HIGH",
    recommendation: "This mole shows asymmetry and irregular borders. Schedule a dermatologist appointment within 1 week for dermoscopy and possible biopsy.",
    scannedAt: "2026-02-14T14:15:00Z",
    followUp: "2026-02-21",
  },
  {
    id: "scan-003",
    area: "Right hand",
    condition: "Contact Dermatitis",
    confidence: 0.91,
    riskLevel: "LOW",
    recommendation: "Likely caused by an irritant or allergen. Identify and avoid the trigger. Use barrier cream and mild soap. Antihistamines may help with itching.",
    scannedAt: "2026-02-13T09:00:00Z",
    followUp: "2026-03-01",
  },
  {
    id: "scan-004",
    area: "Neck",
    condition: "Actinic Keratosis",
    confidence: 0.78,
    riskLevel: "MEDIUM",
    recommendation: "Sun-damaged skin patch that could progress. Apply broad-spectrum SPF 50+ daily. Schedule dermatologist visit within 1 month for evaluation and possible cryotherapy.",
    scannedAt: "2026-02-12T16:45:00Z",
    followUp: "2026-03-12",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { area, description, symptoms } = body as {
    area: string;
    description: string;
    symptoms: string[];
  };

  const newScan = {
    id: `scan-${Date.now()}`,
    area,
    description,
    symptoms,
    condition: "Preliminary analysis pending",
    confidence: 0.65,
    riskLevel: "MEDIUM" as const,
    recommendation: `Based on the reported symptoms (${symptoms.join(", ")}) in the ${area} area, we recommend monitoring the area and scheduling a dermatologist consultation for definitive diagnosis.`,
    scannedAt: new Date().toISOString(),
    followUp: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newScan, { status: 201 });
}
