import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SpectrumAI — Accessibility-as-a-Service',
  description: 'Auto-generate alt text, captions, sign language avatars, and WCAG fixes in real-time',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
