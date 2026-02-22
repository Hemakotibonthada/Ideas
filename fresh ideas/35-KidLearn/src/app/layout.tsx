import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KidLearn — Adaptive Kids Education',
  description: 'Personalized learning paths that adapt to each child\'s pace and style',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
