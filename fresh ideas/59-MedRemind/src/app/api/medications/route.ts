import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "med-001",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    times: ["08:00"],
    refillDate: "2026-03-15",
    prescribedBy: "Dr. Emily Watson",
    sideEffects: ["Dizziness", "Dry cough"],
  },
  {
    id: "med-002",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    times: ["08:00", "20:00"],
    refillDate: "2026-03-01",
    prescribedBy: "Dr. Raj Patel",
    sideEffects: ["Nausea", "Stomach upset"],
  },
  {
    id: "med-003",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily at bedtime",
    times: ["22:00"],
    refillDate: "2026-04-10",
    prescribedBy: "Dr. Emily Watson",
    sideEffects: ["Muscle pain", "Headache"],
  },
  {
    id: "med-004",
    name: "Omeprazole",
    dosage: "20mg",
    frequency: "Once daily before breakfast",
    times: ["07:30"],
    refillDate: "2026-02-28",
    prescribedBy: "Dr. Susan Lee",
    sideEffects: ["Headache", "Abdominal pain", "Nausea"],
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newMedication = {
    id: `med-${Date.now()}`,
    ...body,
    refillDate: body.refillDate ?? new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
    sideEffects: body.sideEffects ?? [],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newMedication, { status: 201 });
}
