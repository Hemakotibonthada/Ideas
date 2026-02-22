import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarbonLedger — Carbon Credit Tracking & ESG Compliance',
  description: 'Automated Scope 1/2/3 emissions tracking and ESG compliance reporting for supply chains',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
