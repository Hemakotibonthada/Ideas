import { NextRequest, NextResponse } from 'next/server';

// GET /api/assets — Get asset fleet with health scores
export async function GET() {
  const assets = [
    {
      id: 'asset_1', name: 'HVAC Unit A-201', type: 'HVAC', location: 'Building A, Floor 2',
      healthScore: 73, status: 'WARNING',
      sensors: [
        { type: 'TEMPERATURE', value: 78.3, unit: '°F', threshold: { min: 60, max: 80 }, status: 'WARNING' },
        { type: 'VIBRATION', value: 3.2, unit: 'mm/s', threshold: { min: 0, max: 5 }, status: 'OK' },
        { type: 'POWER_CONSUMPTION', value: 12.4, unit: 'kW', threshold: { min: 5, max: 15 }, status: 'OK' },
      ],
      predictiveAlerts: [
        { failure: 'Bearing degradation', probability: 0.82, estimatedDate: '2026-03-08', severity: 'HIGH' },
      ],
      lastMaintenance: '2025-11-15',
      remainingUsefulLife: '45 days',
    },
    {
      id: 'asset_2', name: 'Pump Station P-104', type: 'PUMP', location: 'Utility Room B',
      healthScore: 91, status: 'HEALTHY',
      sensors: [
        { type: 'PRESSURE', value: 42.1, unit: 'PSI', threshold: { min: 30, max: 60 }, status: 'OK' },
        { type: 'FLOW_RATE', value: 120, unit: 'GPM', threshold: { min: 100, max: 150 }, status: 'OK' },
        { type: 'TEMPERATURE', value: 145, unit: '°F', threshold: { min: 100, max: 180 }, status: 'OK' },
      ],
      predictiveAlerts: [],
      lastMaintenance: '2026-01-20',
      remainingUsefulLife: '180 days',
    },
    {
      id: 'asset_3', name: 'Generator G-001', type: 'GENERATOR', location: 'Power House',
      healthScore: 34, status: 'CRITICAL',
      sensors: [
        { type: 'VIBRATION', value: 8.7, unit: 'mm/s', threshold: { min: 0, max: 5 }, status: 'CRITICAL' },
        { type: 'OIL_QUALITY', value: 22, unit: 'TAN', threshold: { min: 0, max: 30 }, status: 'WARNING' },
        { type: 'RPM', value: 1780, unit: 'RPM', threshold: { min: 1750, max: 1850 }, status: 'OK' },
      ],
      predictiveAlerts: [
        { failure: 'Rotor imbalance', probability: 0.94, estimatedDate: '2026-02-25', severity: 'CRITICAL' },
        { failure: 'Oil contamination', probability: 0.71, estimatedDate: '2026-03-15', severity: 'MEDIUM' },
      ],
      lastMaintenance: '2025-09-10',
      remainingUsefulLife: '7 days',
    },
  ];

  return NextResponse.json({
    data: assets,
    summary: {
      totalAssets: assets.length,
      healthy: assets.filter(a => a.status === 'HEALTHY').length,
      warning: assets.filter(a => a.status === 'WARNING').length,
      critical: assets.filter(a => a.status === 'CRITICAL').length,
      avgHealthScore: Math.round(assets.reduce((sum, a) => sum + a.healthScore, 0) / assets.length),
      pendingWorkOrders: 5,
      upcomingMaintenance: 3,
    },
  });
}

// POST /api/assets — Create work order from prediction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { assetId, predictedFailure, priority } = body;

    return NextResponse.json({
      workOrderId: `wo_${Date.now()}`,
      assetId,
      title: `Preventive Maintenance: ${predictedFailure || 'Predicted failure'}`,
      priority: priority || 'HIGH',
      status: 'OPEN',
      scheduledDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      estimatedDuration: '4 hours',
      partsNeeded: ['Bearing 6205-2RS', 'Lubricant ISO VG 68', 'Seal kit SK-201'],
      procedure: ['1. Lock out/tag out equipment', '2. Remove bearing housing cover', '3. Inspect and replace bearing', '4. Apply lubricant per spec', '5. Reassemble and test'],
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
