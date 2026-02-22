import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SleepSync — AI Sleep Optimizer',
  description: 'Optimize your sleep schedule using phone sensor data and AI analysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
