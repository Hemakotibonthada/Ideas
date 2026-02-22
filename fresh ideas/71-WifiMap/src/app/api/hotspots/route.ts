import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "hs-001",
    name: "Central Library Free WiFi",
    location: "450 N Main St, Downtown",
    speed: "FAST",
    free: true,
    password: null,
    reliability: 92,
    reportedBy: "user_alex92",
    lastVerified: "2026-02-15T10:30:00Z",
  },
  {
    id: "hs-002",
    name: "Brewed Awakening Café",
    location: "112 Elm Ave, Midtown",
    speed: "MEDIUM",
    free: false,
    password: "coffee2026",
    reliability: 78,
    reportedBy: "user_maya_k",
    lastVerified: "2026-02-12T14:20:00Z",
  },
  {
    id: "hs-003",
    name: "Riverside Park Hotspot",
    location: "Riverside Park Pavilion, South End",
    speed: "SLOW",
    free: true,
    password: null,
    reliability: 65,
    reportedBy: "user_jamal33",
    lastVerified: "2026-02-10T09:45:00Z",
  },
  {
    id: "hs-004",
    name: "TechHub Coworking Lounge",
    location: "900 Innovation Blvd, Suite 1A",
    speed: "FAST",
    free: false,
    password: "hub@guest!",
    reliability: 97,
    reportedBy: "user_priya_dev",
    lastVerified: "2026-02-17T16:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newHotspot = {
    id: `hs-${Date.now()}`,
    ...body,
    reliability: 50,
    reportedBy: "anonymous",
    lastVerified: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newHotspot, { status: 201 });
}
