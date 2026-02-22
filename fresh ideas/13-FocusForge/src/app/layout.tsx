import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FocusForge — Deep Work Tracker',
  description: 'Track deep work sessions with AI distraction blocking and flow detection',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
