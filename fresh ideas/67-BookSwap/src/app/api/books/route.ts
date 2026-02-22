import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "book-001",
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Science Fiction",
    condition: "GOOD",
    owner: "Emily R.",
    location: "Capitol Hill, Seattle, WA",
    wantedBooks: ["The Martian", "Klara and the Sun"],
    available: true,
  },
  {
    id: "book-002",
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    condition: "NEW",
    owner: "James K.",
    location: "Park Slope, Brooklyn, NY",
    wantedBooks: ["Becoming", "Born a Crime"],
    available: true,
  },
  {
    id: "book-003",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    condition: "FAIR",
    owner: "Priya S.",
    location: "Palo Alto, CA",
    wantedBooks: ["Deep Work", "The Power of Habit"],
    available: false,
  },
  {
    id: "book-004",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    genre: "Historical Fiction",
    condition: "GOOD",
    owner: "Marcus L.",
    location: "Wicker Park, Chicago, IL",
    wantedBooks: ["Circe", "Piranesi", "The Starless Sea"],
    available: true,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `book-${Date.now()}`,
    title: body.title,
    author: body.author,
    genre: body.genre,
    condition: body.condition,
    owner: "New User",
    location: body.location || "Unknown",
    wantedBooks: body.wantedBooks || [],
    available: true,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
