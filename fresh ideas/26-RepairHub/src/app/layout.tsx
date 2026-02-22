import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RepairHub — DIY Repair Guides',
  description: 'Scan broken items, get video repair guides, and order replacement parts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
