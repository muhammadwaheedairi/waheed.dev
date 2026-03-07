import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Waheed — AI Agent Developer & Digital FTE Architect',
  description: 'I engineer Autonomous AI Agents that transform complex business logic into 24/7 digital workforces.',
  keywords: ['AI Agent Developer', 'Digital FTE', 'MCP', 'RAG', 'OpenAI Agents SDK', 'Pakistan'],
  authors: [{ name: 'Muhammad Waheed' }],
  openGraph: {
    title: 'Muhammad Waheed — AI Agent Developer',
    description: 'Building intelligent futures with autonomous AI agents.',
    type: 'website',
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