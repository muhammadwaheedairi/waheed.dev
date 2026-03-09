import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Waheed — AI Automation & Full-Stack Developer',
  description: 'I build AI systems that automate business operations, full-stack products from idea to production, and pixel-perfect frontend interfaces.',
  keywords: ['AI Automation', 'AI Agent Developer', 'Full-Stack Developer', 'Frontend Engineer', 'Digital FTE', 'MCP', 'RAG', 'OpenAI Agents SDK', 'Next.js', 'FastAPI'],
  authors: [{ name: 'Muhammad Waheed' }],
  openGraph: {
    title: 'Muhammad Waheed — AI Automation & Full-Stack Developer',
    description: 'I build AI systems that automate business operations, full-stack products from idea to production, and pixel-perfect frontend interfaces.',
    type: 'website',
    url: 'https://muhammadwaheed.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Waheed — AI Automation & Full-Stack Developer',
    description: 'I build AI systems that automate business operations, full-stack products from idea to production, and pixel-perfect frontend interfaces.',
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