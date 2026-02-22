import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AccessRoute — Accessible Route Finder',
  description: 'Wheelchair and mobility-accessible navigation with crowd-sourced ratings',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
