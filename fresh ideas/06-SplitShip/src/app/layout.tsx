import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SplitShip — Micro-Fulfillment Orchestration',
  description: 'Smart order splitting across warehouses, dark stores, and 3PLs with real-time cost optimization',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
