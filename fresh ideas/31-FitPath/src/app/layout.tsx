import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FitPath — AI Personal Trainer',
  description: 'AI creates workouts for any space, equipment, time, and fitness level',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
