import { NextRequest, NextResponse } from 'next/server';

const documents = [
  {
    id: '1',
    title: 'Passport Scan',
    type: 'pdf',
    category: 'Identity',
    expiryDate: '2028-06-15',
    expiresIn: '2 years',
    encrypted: true,
    sharedWith: ['spouse@email.com'],
    ocrExtracted: true,
    fileSize: '2.4 MB',
    uploadedAt: '2024-11-20T10:30:00Z',
  },
  {
    id: '2',
    title: 'Home Insurance Policy',
    type: 'pdf',
    category: 'Insurance',
    expiryDate: '2026-09-01',
    expiresIn: '7 months',
    encrypted: true,
    sharedWith: [],
    ocrExtracted: true,
    fileSize: '5.1 MB',
    uploadedAt: '2025-01-10T14:22:00Z',
  },
  {
    id: '3',
    title: 'Vehicle Registration',
    type: 'jpg',
    category: 'Vehicle',
    expiryDate: '2026-03-30',
    expiresIn: '1 month',
    encrypted: false,
    sharedWith: ['agent@insurance.com'],
    ocrExtracted: false,
    fileSize: '1.8 MB',
    uploadedAt: '2025-02-05T09:15:00Z',
  },
  {
    id: '4',
    title: 'Tax Return 2025',
    type: 'pdf',
    category: 'Finance',
    expiryDate: null,
    expiresIn: null,
    encrypted: true,
    sharedWith: ['accountant@firm.com'],
    ocrExtracted: true,
    fileSize: '3.7 MB',
    uploadedAt: '2026-01-28T16:45:00Z',
  },
];

export async function GET() {
  return NextResponse.json({ documents }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.title || !body.type || !body.category) {
    return NextResponse.json(
      { error: 'Missing required fields: title, type, category' },
      { status: 400 }
    );
  }

  const newDocument = {
    id: String(documents.length + 1),
    title: body.title,
    type: body.type,
    category: body.category,
    expiryDate: body.expiryDate ?? null,
    expiresIn: body.expiresIn ?? null,
    encrypted: body.encrypted ?? false,
    sharedWith: body.sharedWith ?? [],
    ocrExtracted: body.ocrExtracted ?? false,
    fileSize: body.fileSize ?? '0 KB',
    uploadedAt: new Date().toISOString(),
  };

  documents.push(newDocument);

  return NextResponse.json({ document: newDocument }, { status: 201 });
}
