import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyBuddy — AI Study Assistant',
  description: 'Generate flashcards from notes with spaced repetition and practice quizzes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
