import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mr Verma | Software Engineer',
  description: 'Ayush Kumar Verma - Software Engineer & NLP Specialist Portfolio',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 4.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v.5'/><path d='M20 11a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4Z'/><path d='M9 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z'/><path d='M15 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z'/><path d='M12 18h.01'/><path d='M12 8h.01'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
