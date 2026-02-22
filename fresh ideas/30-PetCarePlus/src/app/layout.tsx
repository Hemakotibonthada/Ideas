import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PetCarePlus — Pet Wellness Tracker',
  description: 'Track pet health, vet visits, vaccinations, diet, and breed-specific alerts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
