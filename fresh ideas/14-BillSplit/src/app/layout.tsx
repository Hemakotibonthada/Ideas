import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BillSplit — Smart Expense Splitting',
  description: 'Split expenses smartly between roommates and groups',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
