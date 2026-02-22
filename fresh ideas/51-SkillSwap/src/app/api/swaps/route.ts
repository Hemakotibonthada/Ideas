import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "swap-001",
    offeredSkill: "Python Programming",
    wantedSkill: "Guitar Lessons",
    userId: "user-101",
    userName: "Alex Chen",
    experience: "EXPERT",
    availability: "Weekday evenings",
    location: "San Francisco, CA",
  },
  {
    id: "swap-002",
    offeredSkill: "Spanish Tutoring",
    wantedSkill: "Watercolor Painting",
    userId: "user-102",
    userName: "Maria Lopez",
    experience: "INTERMEDIATE",
    availability: "Saturday mornings",
    location: "Austin, TX",
  },
  {
    id: "swap-003",
    offeredSkill: "Yoga Instruction",
    wantedSkill: "Web Development",
    userId: "user-103",
    userName: "Priya Sharma",
    experience: "EXPERT",
    availability: "Flexible schedule",
    location: "Portland, OR",
  },
  {
    id: "swap-004",
    offeredSkill: "Photography",
    wantedSkill: "Korean Language",
    userId: "user-104",
    userName: "Jordan Blake",
    experience: "BEGINNER",
    availability: "Weekends only",
    location: "Chicago, IL",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newSwap = {
    id: `swap-${Date.now()}`,
    ...body,
    userId: "user-new",
    userName: "New User",
    location: body.location ?? "Remote",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newSwap, { status: 201 });
}
