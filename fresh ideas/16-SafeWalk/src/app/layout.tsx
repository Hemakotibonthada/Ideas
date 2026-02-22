import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SafeWalk — Safe Route Finder',
  description: 'Find safe walking routes using crime, lighting, and crowd data',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
