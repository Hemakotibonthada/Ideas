import { NextRequest, NextResponse } from 'next/server';

// POST /api/dsar — Submit a new DSAR
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, requestType, regulation } = body;

    if (!email || !requestType) {
      return NextResponse.json({ error: 'email and requestType are required' }, { status: 400 });
    }

    const deadlineDays: Record<string, number> = { GDPR: 30, CCPA: 45, CPRA: 45, LGPD: 15, POPIA: 30, PIPEDA: 30 };
    const reg = regulation || 'GDPR';
    const deadline = new Date(Date.now() + (deadlineDays[reg] || 30) * 24 * 60 * 60 * 1000);

    return NextResponse.json({
      id: `dsar_${Date.now()}`,
      dataSubject: { email, name },
      requestType,
      regulation: reg,
      status: 'RECEIVED',
      deadline: deadline.toISOString(),
      daysRemaining: deadlineDays[reg] || 30,
      estimatedCompletionHours: 4,
      steps: [
        { step: 'RECEIVED', completed: true, timestamp: new Date().toISOString() },
        { step: 'IDENTITY_VERIFICATION', completed: false },
        { step: 'DATA_DISCOVERY', completed: false },
        { step: 'REVIEW', completed: false },
        { step: 'DELIVERY', completed: false },
      ],
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    data: [
      { id: 'dsar_1', email: 'user@example.com', requestType: 'ACCESS', regulation: 'GDPR', status: 'SEARCHING', systemsSearched: 12, recordsFound: 847, daysRemaining: 22 },
      { id: 'dsar_2', email: 'customer@co.uk', requestType: 'DELETION', regulation: 'GDPR', status: 'REVIEW', systemsSearched: 15, recordsFound: 234, daysRemaining: 8 },
      { id: 'dsar_3', email: 'ca-user@gmail.com', requestType: 'ACCESS', regulation: 'CCPA', status: 'DELIVERED', systemsSearched: 10, recordsFound: 412, daysRemaining: 31 },
    ],
    stats: { totalRequests: 342, avgCompletionHours: 3.8, automationRate: 0.94, onTimeRate: 0.99 },
  });
}
