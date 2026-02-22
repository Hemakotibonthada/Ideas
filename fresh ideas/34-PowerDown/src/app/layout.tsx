import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PowerDown — Home Energy Monitor',
  description: 'Track appliance energy usage, find waste, and estimate solar savings',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
