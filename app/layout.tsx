import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Waheed — AI & Full-Stack Developer',
  description: 'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
  keywords: ['AI Automation', 'AI Agent Developer', 'Full-Stack Developer', 'Frontend Engineer', 'MCP', 'RAG', 'OpenAI Agents SDK', 'Next.js', 'FastAPI', 'Karachi'],
  authors: [{ name: 'Muhammad Waheed' }],
  openGraph: {
    title: 'Muhammad Waheed — AI & Full-Stack Developer',
    description: 'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
    type: 'website',
    url: 'https://muhammadwaheedairi.vercel.app',
    siteName: 'Muhammad Waheed',
    images: [
      {
        url: 'https://muhammadwaheedairi.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Waheed — AI & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Waheed — AI & Full-Stack Developer',
    description: 'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
    images: ['https://muhammadwaheedairi.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}