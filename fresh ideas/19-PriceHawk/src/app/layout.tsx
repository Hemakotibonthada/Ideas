import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PriceHawk — Universal Price Tracker',
  description: 'Track prices across all shopping sites with drop alerts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
