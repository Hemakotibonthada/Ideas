import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WellCheck — Health Tracker',
  description: 'Daily health vitals tracker with medication reminders and doctor reports',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
