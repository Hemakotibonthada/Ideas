import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuietQuit — Employee Burnout Prediction',
  description: 'Predict employee attrition 90 days out using behavioral work pattern signals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
