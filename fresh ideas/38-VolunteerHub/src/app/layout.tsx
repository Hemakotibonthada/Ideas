import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VolunteerHub — Volunteer Matching',
  description: 'Connect volunteers with local causes and track community impact hours',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
