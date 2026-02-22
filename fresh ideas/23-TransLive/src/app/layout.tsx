import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TransLive — Live Translator',
  description: 'Real-time conversation translation — speak your language, they hear theirs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
