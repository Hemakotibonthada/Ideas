import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MoodMap — Mental Health Journal',
  description: 'AI mood pattern detection with CBT exercises and therapist-shareable reports',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
