import { NextRequest, NextResponse } from 'next/server';

// GET /api/signals — Get aggregated burnout signals
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const department = searchParams.get('department');

  const employees = [
    { id: 'emp_1', department: 'Engineering', riskScore: 82, riskLevel: 'HIGH', topSignals: ['after_hours_work', 'meeting_overload'], predictedAttritionDays: 34 },
    { id: 'emp_2', department: 'Engineering', riskScore: 45, riskLevel: 'MODERATE', topSignals: ['pr_velocity_change'], predictedAttritionDays: null },
    { id: 'emp_3', department: 'Sales', riskScore: 91, riskLevel: 'CRITICAL', topSignals: ['slack_sentiment_drop', 'pto_pattern_change', 'after_hours_work'], predictedAttritionDays: 18 },
    { id: 'emp_4', department: 'Product', riskScore: 23, riskLevel: 'LOW', topSignals: [], predictedAttritionDays: null },
    { id: 'emp_5', department: 'Marketing', riskScore: 67, riskLevel: 'MODERATE', topSignals: ['calendar_fragmentation', 'meeting_overload'], predictedAttritionDays: 62 },
    { id: 'emp_6', department: 'Engineering', riskScore: 74, riskLevel: 'HIGH', topSignals: ['slack_response_time', 'after_hours_work'], predictedAttritionDays: 41 },
  ];

  const filtered = department ? employees.filter(e => e.department.toLowerCase() === department.toLowerCase()) : employees;

  return NextResponse.json({
    data: filtered,
    summary: {
      totalEmployees: filtered.length,
      critical: filtered.filter(e => e.riskLevel === 'CRITICAL').length,
      high: filtered.filter(e => e.riskLevel === 'HIGH').length,
      moderate: filtered.filter(e => e.riskLevel === 'MODERATE').length,
      low: filtered.filter(e => e.riskLevel === 'LOW').length,
      avgRiskScore: Math.round(filtered.reduce((sum, e) => sum + e.riskScore, 0) / filtered.length),
    },
    recommendations: [
      { employeeId: 'emp_3', action: 'Schedule 1:1 with manager', priority: 'URGENT', category: 'ENGAGEMENT' },
      { employeeId: 'emp_1', action: 'Reduce meeting load by 30%', priority: 'HIGH', category: 'WORKLOAD' },
      { employeeId: 'emp_6', action: 'Suggest using PTO balance (12 days unused)', priority: 'MEDIUM', category: 'WELLBEING' },
    ],
  });
}
