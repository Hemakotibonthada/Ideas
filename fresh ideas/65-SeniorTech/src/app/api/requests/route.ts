import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "req-001",
    topic: "SMARTPHONE",
    description: "Need help setting up WhatsApp and learning how to video call my grandchildren.",
    seniorName: "Margaret Thompson",
    helperName: "David Chen",
    status: "IN_PROGRESS",
    scheduledAt: "2026-02-19T10:00:00Z",
  },
  {
    id: "req-002",
    topic: "EMAIL",
    description: "Can't access my Gmail account after password change. Also need help organizing inbox folders.",
    seniorName: "Robert Williams",
    helperName: null,
    status: "PENDING",
    scheduledAt: null,
  },
  {
    id: "req-003",
    topic: "BANKING",
    description: "Want to learn how to check my bank balance online and set up bill payments through the app.",
    seniorName: "Dorothy Miller",
    helperName: "Sarah Kim",
    status: "COMPLETED",
    scheduledAt: "2026-02-16T14:00:00Z",
  },
  {
    id: "req-004",
    topic: "VIDEO_CALL",
    description: "Need help installing Zoom on my laptop and learning how to join my weekly book club meeting.",
    seniorName: "Harold Johnson",
    helperName: null,
    status: "PENDING",
    scheduledAt: null,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: `req-${Date.now()}`,
    topic: body.topic,
    description: body.description,
    seniorName: body.seniorName,
    helperName: null,
    status: "PENDING",
    scheduledAt: null,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(newItem, { status: 201 });
}
