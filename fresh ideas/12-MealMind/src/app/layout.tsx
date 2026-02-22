import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MealMind — AI Meal Planner',
  description: 'Plan meals from fridge photos with nutrition tracking and allergy management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
