import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeighborNet — Community Platform',
  description: 'Hyperlocal platform to borrow tools, share skills, and organize events',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
