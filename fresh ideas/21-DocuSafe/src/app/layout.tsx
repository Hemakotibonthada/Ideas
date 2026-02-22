import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DocuSafe — Document Vault',
  description: 'Secure personal document vault with OCR, expiry alerts, and encrypted sharing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
