import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TwinOps — Digital Twin Monitoring',
  description: 'Connect IoT sensors to 3D models, predict failures, and auto-generate work orders',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
