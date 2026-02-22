import { NextRequest, NextResponse } from 'next/server';

// POST /api/orders/split — Calculate optimal order split
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customerZip, strategy } = body;

    if (!items || !items.length || !customerZip) {
      return NextResponse.json({ error: 'items and customerZip are required' }, { status: 400 });
    }

    const nodes = [
      { id: 'node_1', name: 'East Coast Warehouse', type: 'WAREHOUSE', zip: '07001' },
      { id: 'node_2', name: 'Chicago Dark Store', type: 'DARK_STORE', zip: '60601' },
      { id: 'node_3', name: 'West Coast 3PL', type: 'THREE_PL', zip: '90001' },
    ];

    const naiveCost = items.length * 5.90;
    const shipments = [];
    let optimizedCost = 0;

    // Simulate intelligent splitting
    for (let i = 0; i < items.length; i++) {
      const node = nodes[i % nodes.length];
      const shippingCost = 1.50 + Math.random() * 4;
      optimizedCost += shippingCost;
      shipments.push({
        id: `shipment_${i + 1}`,
        fulfillmentNode: node,
        items: [items[i]],
        carrier: ['USPS', 'UPS', 'FedEx'][Math.floor(Math.random() * 3)],
        estimatedCost: Math.round(shippingCost * 100) / 100,
        estimatedTransitDays: 1 + Math.floor(Math.random() * 4),
      });
    }

    return NextResponse.json({
      orderId: `order_${Date.now()}`,
      strategy: strategy || 'COST_OPTIMAL',
      naiveSingleShipmentCost: Math.round(naiveCost * 100) / 100,
      optimizedCost: Math.round(optimizedCost * 100) / 100,
      savings: Math.round((naiveCost - optimizedCost) * 100) / 100,
      savingsPercent: Math.round(((naiveCost - optimizedCost) / naiveCost) * 100),
      shipments,
      estimatedDelivery: `${1 + Math.floor(Math.random() * 3)} business days`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
