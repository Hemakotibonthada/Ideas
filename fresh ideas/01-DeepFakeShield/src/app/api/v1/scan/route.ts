import { NextRequest, NextResponse } from 'next/server';

// POST /api/v1/scan — Submit media for deepfake analysis
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mediaType, url, base64Data, webhookUrl } = body;

    if (!mediaType || (!url && !base64Data)) {
      return NextResponse.json(
        { error: 'mediaType and either url or base64Data are required' },
        { status: 400 }
      );
    }

    const validTypes = ['VIDEO', 'AUDIO', 'IMAGE', 'LIVE_STREAM'];
    if (!validTypes.includes(mediaType.toUpperCase())) {
      return NextResponse.json(
        { error: `mediaType must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Simulate scan processing
    const scanId = `scan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const verdicts = ['AUTHENTIC', 'MANIPULATED', 'SUSPICIOUS', 'INCONCLUSIVE'];
    const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    const confidence = 0.85 + Math.random() * 0.14;
    const processingMs = 200 + Math.floor(Math.random() * 600);

    const detections = verdict === 'MANIPULATED' ? [
      { type: 'face_swap', region: 'face_0', confidence: 0.91 + Math.random() * 0.08, timestamp: '00:03.2-00:45.8' },
      { type: 'lip_sync_mismatch', confidence: 0.82 + Math.random() * 0.15 },
      { type: 'temporal_inconsistency', frames: '89-134', confidence: 0.78 + Math.random() * 0.18 },
    ] : verdict === 'SUSPICIOUS' ? [
      { type: 'compression_artifacts', confidence: 0.65 + Math.random() * 0.2, note: 'Unusual re-encoding detected' },
    ] : [];

    return NextResponse.json({
      id: scanId,
      status: 'COMPLETED',
      mediaType: mediaType.toUpperCase(),
      verdict,
      confidence: Math.round(confidence * 1000) / 1000,
      processingMs,
      detections,
      modelVersion: 'v4.2.1-ensemble',
      forensicReportUrl: verdict !== 'AUTHENTIC' ? `https://api.deepfakeshield.ai/reports/${scanId}.pdf` : null,
      createdAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET /api/v1/scan — List scan history
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const verdict = searchParams.get('verdict');

  // Demo data
  const scans = Array.from({ length: limit }, (_, i) => ({
    id: `scan_demo_${(page - 1) * limit + i + 1}`,
    mediaType: ['VIDEO', 'AUDIO', 'IMAGE'][Math.floor(Math.random() * 3)],
    verdict: verdict || ['AUTHENTIC', 'MANIPULATED', 'SUSPICIOUS'][Math.floor(Math.random() * 3)],
    confidence: Math.round((0.85 + Math.random() * 0.14) * 1000) / 1000,
    processingMs: 200 + Math.floor(Math.random() * 600),
    createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));

  return NextResponse.json({
    data: scans,
    pagination: { page, limit, total: 1247 },
  });
}
