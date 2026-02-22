import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "pet-001",
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    color: "Golden",
    lastSeenLocation: "Central Park, New York, NY",
    lastSeenDate: "2026-02-15T14:30:00Z",
    status: "LOST",
    contactPhone: "+1-212-555-0147",
    photoUrl: "https://placehold.co/400x300?text=Golden+Retriever",
  },
  {
    id: "pet-002",
    name: "Whiskers",
    species: "Cat",
    breed: "Tabby",
    color: "Orange and white",
    lastSeenLocation: "Elm Street & 5th Ave, Brooklyn, NY",
    lastSeenDate: "2026-02-12T09:15:00Z",
    status: "FOUND",
    contactPhone: "+1-718-555-0293",
    photoUrl: "https://placehold.co/400x300?text=Tabby+Cat",
  },
  {
    id: "pet-003",
    name: "Luna",
    species: "Cat",
    breed: "Siamese",
    color: "Cream with brown points",
    lastSeenLocation: "Maple Drive, Hoboken, NJ",
    lastSeenDate: "2026-02-10T18:45:00Z",
    status: "REUNITED",
    contactPhone: "+1-201-555-0184",
    photoUrl: "https://placehold.co/400x300?text=Siamese+Cat",
  },
  {
    id: "pet-004",
    name: "Max",
    species: "Dog",
    breed: "German Shepherd",
    color: "Black and tan",
    lastSeenLocation: "Prospect Park, Brooklyn, NY",
    lastSeenDate: "2026-02-17T11:00:00Z",
    status: "LOST",
    contactPhone: "+1-347-555-0361",
    photoUrl: "https://placehold.co/400x300?text=German+Shepherd",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `pet-${Date.now()}`,
    name: body.name,
    species: body.species,
    breed: body.breed,
    color: body.color,
    lastSeenLocation: body.lastSeenLocation,
    lastSeenDate: new Date().toISOString(),
    status: "LOST",
    contactPhone: body.contactPhone,
    photoUrl: "https://placehold.co/400x300?text=New+Pet+Report",
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
