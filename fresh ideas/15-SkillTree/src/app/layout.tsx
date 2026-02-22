import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkillTree — Gamified Skill Development',
  description: 'Level up your skills with XP, streaks, and learning paths',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
