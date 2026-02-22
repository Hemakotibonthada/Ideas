import { NextRequest, NextResponse } from 'next/server';

// POST /api/payments — Create a payment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, recipientEmail, preferredRail } = body;

    if (!amount || !recipientEmail) {
      return NextResponse.json({ error: 'amount and recipientEmail are required' }, { status: 400 });
    }

    const rails = {
      ACH: { fee: amount * 0.003, settlementDays: 2, maxAmount: 1000000 },
      WIRE: { fee: 25, settlementDays: 0, maxAmount: 10000000 },
      SWIFT: { fee: 35 + amount * 0.001, settlementDays: 3, maxAmount: 50000000 },
      CRYPTO: { fee: amount * 0.001, settlementDays: 0, maxAmount: 100000000 },
      BNPL: { fee: amount * 0.025, settlementDays: 0, maxAmount: 500000 },
    };

    // Smart rail selection
    const selectedRail = preferredRail || (amount < 5000 ? 'ACH' : amount < 100000 ? 'WIRE' : 'SWIFT');
    const railConfig = rails[selectedRail as keyof typeof rails] || rails.ACH;

    return NextResponse.json({
      paymentId: `pay_${Date.now()}`,
      amount,
      currency: currency || 'USD',
      rail: selectedRail,
      fee: Math.round(railConfig.fee * 100) / 100,
      totalAmount: Math.round((amount + railConfig.fee) * 100) / 100,
      estimatedSettlement: railConfig.settlementDays === 0 ? 'Same day' : `${railConfig.settlementDays} business days`,
      recipient: recipientEmail,
      status: 'PROCESSING',
      reconciliation: { autoMatchConfidence: 0.985, invoiceRef: null },
      alternativeRails: Object.entries(rails).map(([name, config]) => ({
        rail: name, fee: Math.round(config.fee * 100) / 100, settlementDays: config.settlementDays,
      })),
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
