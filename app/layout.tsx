import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
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
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}