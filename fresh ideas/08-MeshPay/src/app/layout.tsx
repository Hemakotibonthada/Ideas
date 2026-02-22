import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MeshPay — B2B Payment Orchestration',
  description: 'Unified B2B payments across crypto, ACH, wire, and BNPL with auto-reconciliation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
