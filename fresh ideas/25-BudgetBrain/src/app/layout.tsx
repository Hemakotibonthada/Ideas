import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BudgetBrain — AI Financial Advisor',
  description: 'AI that finds wasteful subscriptions, automates savings, and tracks spending',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
