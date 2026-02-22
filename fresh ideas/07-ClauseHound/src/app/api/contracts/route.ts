import { NextRequest, NextResponse } from 'next/server';

// POST /api/contracts/review — Submit a contract for AI review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, counterparty, contractType } = body;

    const clauses = [
      {
        id: 'clause_1', type: 'INDEMNIFICATION', position: 'Section 8.1',
        originalText: 'Company shall indemnify and hold harmless Client against any and all claims, damages, losses, and expenses without limitation...',
        verdict: 'UNACCEPTABLE', confidence: 0.96,
        reasoning: 'Unlimited indemnification violates Playbook Rule #3: Cap indemnity at 2x contract value.',
        suggestedEdit: 'Company shall indemnify Client against direct claims up to an aggregate cap equal to two (2) times the total fees paid under this Agreement in the preceding 12 months.',
      },
      {
        id: 'clause_2', type: 'AUTO_RENEWAL', position: 'Section 12.3',
        originalText: 'This Agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least 90 days prior.',
        verdict: 'RISKY', confidence: 0.89,
        reasoning: 'Auto-renewal with 90-day notice is longer than standard. Playbook prefers 30-day notice or no auto-renewal.',
        suggestedEdit: 'This Agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least thirty (30) days prior to the end of the then-current term.',
      },
      {
        id: 'clause_3', type: 'LIABILITY_CAP', position: 'Section 9.2',
        originalText: 'Neither party\'s total aggregate liability shall exceed the fees paid in the twelve (12) months preceding the claim.',
        verdict: 'ACCEPTABLE', confidence: 0.94,
        reasoning: 'Standard mutual liability cap matching our playbook position.',
        suggestedEdit: null,
      },
      {
        id: 'clause_4', type: 'DATA_PROTECTION', position: 'Section 14.1',
        originalText: 'Vendor shall process personal data in accordance with applicable data protection laws.',
        verdict: 'RISKY', confidence: 0.87,
        reasoning: 'Too vague. Missing specific GDPR/DPA requirements, sub-processor obligations, and breach notification timeline.',
        suggestedEdit: 'Vendor shall process personal data in accordance with GDPR and execute a Data Processing Agreement (DPA) as an addendum. Vendor shall notify Company of any data breach within 48 hours and shall not engage sub-processors without prior written consent.',
      },
    ];

    return NextResponse.json({
      reviewId: `review_${Date.now()}`,
      contract: { title: title || 'Untitled Contract', counterparty, contractType: contractType || 'MSA' },
      totalClauses: clauses.length,
      flagged: clauses.filter(c => c.verdict !== 'ACCEPTABLE').length,
      riskScore: 72,
      clauses,
      playbookApplied: 'Standard Commercial Playbook v2.1',
      estimatedReviewTime: '3 minutes (vs 4 hours manual)',
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
