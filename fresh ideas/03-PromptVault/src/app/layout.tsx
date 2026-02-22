import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PromptVault — AI Prompt Versioning & Cost Analytics',
  description: 'Version, A/B test, and optimize your team\'s LLM prompts with cost tracking',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
