import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mr. Verma | Portfolio',
  description: 'Professional portfolio of Arun Verma',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

