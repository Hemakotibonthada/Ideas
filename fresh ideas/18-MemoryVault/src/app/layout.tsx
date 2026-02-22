import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MemoryVault — Digital Time Capsule',
  description: 'AI-organized photos and videos with smart tagging and story generation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
