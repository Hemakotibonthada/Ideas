import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TimeBank — Community Time Exchange',
  description: 'Trade your skills and time for others — tutoring, cooking, fixing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
