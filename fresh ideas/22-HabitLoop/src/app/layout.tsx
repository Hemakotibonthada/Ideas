import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HabitLoop — Habit Builder',
  description: 'Science-backed habit formation with streaks and accountability partners',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
