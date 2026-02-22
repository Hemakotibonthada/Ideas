import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "sp-001",
    title: "Q1 Product Roadmap Presentation",
    duration: 720,
    wordsPerMinute: 142,
    fillerWords: { um: 8, uh: 5, like: 12, so: 6 },
    clarity: 82,
    confidence: 76,
    suggestions: [
      "Reduce filler word 'like' — appeared 12 times in 12 minutes",
      "Vary vocal pitch more during key feature reveals",
      "Pause 2-3 seconds after important points for emphasis",
    ],
    recordedAt: "2026-02-10T09:00:00Z",
  },
  {
    id: "sp-002",
    title: "Wedding Toast for Sarah & Mike",
    duration: 300,
    wordsPerMinute: 128,
    fillerWords: { um: 2, uh: 1, like: 3, so: 1 },
    clarity: 91,
    confidence: 88,
    suggestions: [
      "Excellent pacing — natural and conversational",
      "Consider making eye contact during the closing anecdote",
      "Volume could increase slightly for the outdoor venue",
    ],
    recordedAt: "2026-02-14T18:30:00Z",
  },
  {
    id: "sp-003",
    title: "Investor Pitch - Series A",
    duration: 600,
    wordsPerMinute: 165,
    fillerWords: { um: 14, uh: 9, like: 4, basically: 7 },
    clarity: 68,
    confidence: 62,
    suggestions: [
      "Speaking too fast — slow down to 130-140 WPM for investor audiences",
      "Eliminate 'basically' — weakens authority (used 7 times)",
      "Add deliberate pauses after financial projections",
      "Practice the competitive analysis section — most filler words concentrated there",
    ],
    recordedAt: "2026-02-06T14:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const wordCount = body.transcript ? body.transcript.split(/\s+/).length : 0;
  const wpm = body.duration ? Math.round((wordCount / body.duration) * 60) : 0;

  const newAnalysis = {
    id: `sp-${Date.now()}`,
    title: body.title,
    duration: body.duration,
    wordsPerMinute: wpm,
    fillerWords: { um: 0, uh: 0, like: 0, so: 0 },
    clarity: 75,
    confidence: 70,
    suggestions: [
      "Analysis complete — review detailed breakdown for improvements",
      "Consider recording again to track progress",
    ],
    recordedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newAnalysis, { status: 201 });
}
