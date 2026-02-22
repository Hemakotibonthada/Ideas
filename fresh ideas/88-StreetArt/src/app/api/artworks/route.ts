import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "art-001",
    title: "Sunset Over the City",
    artist: "Banksy Jr.",
    location: "SE Hawthorne Blvd, Portland, OR",
    lat: 45.5118,
    lng: -122.6270,
    medium: "MURAL",
    photoUrl: "https://images.example.com/street-art/sunset-city.jpg",
    addedBy: "urban_explorer_92",
    likes: 342,
  },
  {
    id: "art-002",
    title: "Digital Rebellion",
    artist: "Unknown",
    location: "Williamsburg, Brooklyn, NY",
    lat: 40.7081,
    lng: -73.9571,
    medium: "STENCIL",
    photoUrl: "https://images.example.com/street-art/digital-rebellion.jpg",
    addedBy: "artwalker_nyc",
    likes: 189,
  },
  {
    id: "art-003",
    title: "Ocean's Memory",
    artist: "Invader",
    location: "Venice Beach, Los Angeles, CA",
    lat: 33.9850,
    lng: -118.4695,
    medium: "MOSAIC",
    photoUrl: "https://images.example.com/street-art/oceans-memory.jpg",
    addedBy: "la_art_scout",
    likes: 527,
  },
  {
    id: "art-004",
    title: "Iron Garden",
    artist: "Clara Metalworks",
    location: "Wynwood Walls, Miami, FL",
    lat: 25.8011,
    lng: -80.1994,
    medium: "SCULPTURE",
    photoUrl: "https://images.example.com/street-art/iron-garden.jpg",
    addedBy: "miami_culture",
    likes: 415,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, artist, location, lat, lng, medium } = body as {
    title: string;
    artist: string;
    location: string;
    lat: number;
    lng: number;
    medium: string;
  };

  const newArtwork = {
    id: `art-${Date.now()}`,
    title,
    artist,
    location,
    lat,
    lng,
    medium,
    photoUrl: null,
    addedBy: "anonymous",
    likes: 0,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newArtwork, { status: 201 });
}
