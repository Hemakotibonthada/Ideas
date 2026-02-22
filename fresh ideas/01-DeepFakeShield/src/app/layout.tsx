import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeepFakeShield — Real-Time Deepfake Detection API',
  description: 'Enterprise-grade deepfake detection API. Verify video, audio, and image authenticity in real-time with 99.7% accuracy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
