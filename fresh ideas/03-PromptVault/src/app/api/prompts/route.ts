import { NextRequest, NextResponse } from 'next/server';

// POST /api/prompts/execute — Execute a versioned prompt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { promptId, version, variables, model, provider } = body;

    if (!promptId) {
      return NextResponse.json({ error: 'promptId is required' }, { status: 400 });
    }

    const models: Record<string, { costPer1kTokens: number; avgLatencyMs: number }> = {
      'gpt-4': { costPer1kTokens: 0.03, avgLatencyMs: 1200 },
      'gpt-4-turbo': { costPer1kTokens: 0.01, avgLatencyMs: 800 },
      'claude-3-opus': { costPer1kTokens: 0.015, avgLatencyMs: 1500 },
      'claude-3-sonnet': { costPer1kTokens: 0.003, avgLatencyMs: 600 },
      'gemini-pro': { costPer1kTokens: 0.00125, avgLatencyMs: 500 },
    };

    const selectedModel = model || 'gpt-4-turbo';
    const modelConfig = models[selectedModel] || models['gpt-4-turbo'];
    const inputTokens = 200 + Math.floor(Math.random() * 800);
    const outputTokens = 100 + Math.floor(Math.random() * 500);
    const totalTokens = inputTokens + outputTokens;
    const cost = (totalTokens / 1000) * modelConfig.costPer1kTokens;
    const latencyMs = modelConfig.avgLatencyMs + Math.floor(Math.random() * 400);

    return NextResponse.json({
      executionId: `exec_${Date.now()}`,
      promptId,
      version: version || 'v3.2',
      model: selectedModel,
      provider: provider || 'openai',
      tokens: { input: inputTokens, output: outputTokens, total: totalTokens },
      cost: Math.round(cost * 10000) / 10000,
      latencyMs,
      qualityScore: 0.7 + Math.random() * 0.3,
      output: '[Simulated LLM output for demo purposes]',
      cached: Math.random() > 0.7,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const prompts = [
    { id: 'prompt_1', name: 'Customer Support Reply', currentVersion: 'v4.1', totalExecutions: 12450, avgCost: 0.0082, avgQuality: 0.91 },
    { id: 'prompt_2', name: 'Product Description Generator', currentVersion: 'v2.8', totalExecutions: 8300, avgCost: 0.0045, avgQuality: 0.88 },
    { id: 'prompt_3', name: 'Code Review Summary', currentVersion: 'v6.0', totalExecutions: 5200, avgCost: 0.0120, avgQuality: 0.94 },
    { id: 'prompt_4', name: 'Email Subject Line A/B', currentVersion: 'v1.3', totalExecutions: 22100, avgCost: 0.0015, avgQuality: 0.86 },
  ];
  return NextResponse.json({ data: prompts, total: prompts.length });
}
