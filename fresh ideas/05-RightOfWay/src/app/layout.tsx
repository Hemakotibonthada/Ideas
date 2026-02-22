import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RightOfWay — DSAR Automation Platform',
  description: 'Automate Data Subject Access Requests across 50+ systems for GDPR/CCPA compliance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
