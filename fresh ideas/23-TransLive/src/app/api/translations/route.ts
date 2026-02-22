import { NextRequest, NextResponse } from 'next/server';

const translations = [
  {
    id: '1',
    sourceText: 'Good morning, how are you today?',
    targetText: 'Buenos días, ¿cómo estás hoy?',
    sourceLang: 'en',
    targetLang: 'es',
    mode: 'text',
    latency: 120,
    accuracy: 0.97,
    sessionId: 'sess_abc123',
    timestamp: '2026-02-18T08:30:00Z',
  },
  {
    id: '2',
    sourceText: 'The quarterly report is ready for review.',
    targetText: 'Le rapport trimestriel est prêt pour examen.',
    sourceLang: 'en',
    targetLang: 'fr',
    mode: 'document',
    latency: 340,
    accuracy: 0.94,
    sessionId: 'sess_def456',
    timestamp: '2026-02-17T14:15:00Z',
  },
  {
    id: '3',
    sourceText: 'Ich möchte einen Tisch für zwei reservieren.',
    targetText: 'I would like to reserve a table for two.',
    sourceLang: 'de',
    targetLang: 'en',
    mode: 'voice',
    latency: 85,
    accuracy: 0.96,
    sessionId: 'sess_ghi789',
    timestamp: '2026-02-18T10:05:00Z',
  },
  {
    id: '4',
    sourceText: 'この製品の使い方を教えてください。',
    targetText: 'Please tell me how to use this product.',
    sourceLang: 'ja',
    targetLang: 'en',
    mode: 'text',
    latency: 150,
    accuracy: 0.92,
    sessionId: 'sess_jkl012',
    timestamp: '2026-02-16T19:45:00Z',
  },
];

export async function GET() {
  return NextResponse.json({ translations }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.sourceText || !body.sourceLang || !body.targetLang) {
    return NextResponse.json(
      { error: 'Missing required fields: sourceText, sourceLang, targetLang' },
      { status: 400 }
    );
  }

  const newTranslation = {
    id: String(translations.length + 1),
    sourceText: body.sourceText,
    targetText: body.targetText ?? '[translation pending]',
    sourceLang: body.sourceLang,
    targetLang: body.targetLang,
    mode: body.mode ?? 'text',
    latency: body.latency ?? 0,
    accuracy: body.accuracy ?? 0,
    sessionId: `sess_${crypto.randomUUID().slice(0, 8)}`,
    timestamp: new Date().toISOString(),
  };

  translations.push(newTranslation);

  return NextResponse.json({ translation: newTranslation }, { status: 201 });
}
