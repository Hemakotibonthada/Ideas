import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElderEase — Senior Care Coordination',
  description: 'Medication management, fall detection, and family communication for seniors',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
