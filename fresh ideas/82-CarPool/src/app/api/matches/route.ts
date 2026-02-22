import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "match-001",
    driver: "Sarah Chen",
    origin: "Downtown Portland, OR",
    destination: "Intel Hillsboro Campus",
    departureTime: "07:30",
    seats: 3,
    recurring: true,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    costPerRider: 5.50,
    rating: 4.9,
  },
  {
    id: "match-002",
    driver: "Marcus Johnson",
    origin: "Lake Oswego, OR",
    destination: "Nike World HQ, Beaverton",
    departureTime: "08:00",
    seats: 2,
    recurring: true,
    days: ["Monday", "Wednesday", "Friday"],
    costPerRider: 4.00,
    rating: 4.7,
  },
  {
    id: "match-003",
    driver: "Priya Patel",
    origin: "Tigard, OR",
    destination: "OHSU Marquam Hill",
    departureTime: "06:45",
    seats: 1,
    recurring: true,
    days: ["Monday", "Tuesday", "Thursday"],
    costPerRider: 6.00,
    rating: 4.8,
  },
  {
    id: "match-004",
    driver: "Tom Nguyen",
    origin: "Gresham, OR",
    destination: "Lloyd Center, Portland",
    departureTime: "08:15",
    seats: 4,
    recurring: false,
    days: [],
    costPerRider: 3.50,
    rating: 4.6,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { origin, destination, departureTime, isDriver, seats } = body as {
    origin: string;
    destination: string;
    departureTime: string;
    isDriver: boolean;
    seats: number;
  };

  const newMatch = {
    id: `match-${Date.now()}`,
    role: isDriver ? "driver" : "rider",
    origin,
    destination,
    departureTime,
    seats,
    matchedWith: isDriver
      ? [
          { name: "Alex Rivera", rating: 4.8, pickupDistance: "0.3 mi" },
          { name: "Jordan Lee", rating: 4.5, pickupDistance: "0.7 mi" },
        ]
      : [
          { driver: "Casey Morgan", rating: 4.9, costPerRider: 5.0, seats: 2 },
        ],
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newMatch, { status: 201 });
}
