import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TravelMate — AI Trip Planner',
  description: 'Build full trip itineraries based on budget, interests, and local events',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
