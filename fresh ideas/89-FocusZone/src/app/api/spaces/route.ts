import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "space-001",
    name: "Central Library Reading Room",
    type: "LIBRARY",
    address: "801 SW 10th Ave, Portland, OR 97205",
    noiseLevel: 1,
    wifi: true,
    powerOutlets: true,
    rating: 4.7,
    openHours: "Mon-Sat 10:00-20:00, Sun 12:00-17:00",
  },
  {
    id: "space-002",
    name: "Brewed Awakening Café",
    type: "CAFE",
    address: "1520 NE Alberta St, Portland, OR 97211",
    noiseLevel: 3,
    wifi: true,
    powerOutlets: true,
    rating: 4.5,
    openHours: "Daily 06:00-21:00",
  },
  {
    id: "space-003",
    name: "FocusHub Coworking",
    type: "COWORKING",
    address: "915 SE Ankeny St, Portland, OR 97214",
    noiseLevel: 2,
    wifi: true,
    powerOutlets: true,
    rating: 4.8,
    openHours: "Mon-Fri 07:00-22:00, Sat 09:00-18:00",
  },
  {
    id: "space-004",
    name: "PSU Urban Plaza Study Garden",
    type: "PARK",
    address: "1825 SW Broadway, Portland, OR 97201",
    noiseLevel: 4,
    wifi: false,
    powerOutlets: false,
    rating: 4.2,
    openHours: "Daily 06:00-22:00",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, type, address, noiseLevel, wifi, powerOutlets } = body as {
    name: string;
    type: string;
    address: string;
    noiseLevel: number;
    wifi: boolean;
    powerOutlets: boolean;
  };

  const newSpace = {
    id: `space-${Date.now()}`,
    name,
    type,
    address,
    noiseLevel,
    wifi,
    powerOutlets,
    rating: 0,
    openHours: "Not specified",
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newSpace, { status: 201 });
}
