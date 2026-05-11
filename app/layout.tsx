import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Waheed — AI & Full-Stack Developer',
  description:
    'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
  keywords: [
    'AI Automation',
    'AI Agent Developer',
    'Full-Stack Developer',
    'Frontend Engineer',
    'Next.js',
    'FastAPI',
    'Karachi',
    'Pakistan',
  ],
  authors: [{ name: 'Muhammad Waheed' }],
  openGraph: {
    title: 'Muhammad Waheed — AI & Full-Stack Developer',
    description:
      'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
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
    description:
      'I turn business problems into working software. AI automation, full-stack products, and frontend engineering — shipped in 2-6 weeks.',
    images: ['https://muhammadwaheedairi.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}