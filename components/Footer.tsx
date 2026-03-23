'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

function ThreadsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeSpeed" viewBox="0 0 512 512">
      <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z"/>
      <path fill="currentColor" fillRule="nonzero" d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"/>
    </svg>
  );
}

function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

const NAV = [
  { name: 'Home',     id: '#home' },
  { name: 'About',    id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Work',     id: '#projects' },
  { name: 'Process',  id: '#process' },
  { name: 'Contact',  id: '#contact' },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      sessionStorage.setItem('scrollTo', id);
      router.push('/');
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (pathname === '/') {
      const id = sessionStorage.getItem('scrollTo');
      if (id) {
        sessionStorage.removeItem('scrollTo');
        setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [pathname]);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">

      {/* Final CTA strip */}
      <div className="border-b border-white/5 py-16 px-6 text-center">
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4">
          Still reading? That means you have a problem worth solving.
        </p>
        <h3 className="text-3xl sm:text-5xl font-black tracking-tighter mb-6">
          LET&apos;S <span className="text-primary">BUILD IT.</span>
        </h3>

        {/* Fixed: email button responsive on mobile */}
        <a
          href="mailto:muhammadwaheedairi@gmail.com"
          className="inline-flex items-center gap-2 px-5 sm:px-8 py-4 bg-primary text-bg-dark font-black rounded-xl text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all group max-w-full overflow-hidden"
        >
          <span className="truncate">muhammadwaheedairi@gmail.com</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-white/20 text-xs font-mono mt-4 leading-relaxed">
          Reply within 24 hours · NDA on request · No commitment to reach out
        </p>
      </div>

      {/* Main footer */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start text-center md:text-left">

            {/* Left — brand */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primary font-mono font-bold text-lg tracking-tight">
                MUHAMMAD WAHEED
              </span>
              <p className="text-gray-500 text-xs mt-1">
                I turn your business problems into working software.
              </p>
              <p className="text-gray-600 text-xs mt-4">© 2025 All Rights Reserved</p>
            </div>

            {/* Middle — nav */}
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-[10px] font-mono uppercase tracking-widest mb-4">
                QUICK LINKS
              </span>
              {/* Fixed: vertical list on mobile, horizontal on desktop */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-2 gap-x-3">
                {NAV.map((link, idx) => (
                  <span key={link.name} className="flex items-center gap-3">
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-gray-400 hover:text-primary text-xs font-mono transition-colors"
                    >
                      {link.name}
                    </button>
                    {idx < NAV.length - 1 && (
                      <span className="text-gray-700 text-xs hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — location + socials */}
            <div className="flex flex-col items-center md:items-end">
              <div className="text-center md:text-right">
                <span className="text-gray-600 text-[10px] font-mono uppercase tracking-widest block mb-1">
                  BASE_LOCATION
                </span>
                <span className="text-gray-300 text-sm block">Karachi, Pakistan 🇵🇰</span>
                <span className="text-gray-600 text-xs block mt-1">PKT (UTC+5) · Mon–Sat</span>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com/muhammadwaheedairi" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/muhammadwaheedairi" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.threads.net/@muhammadwaheedairi" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors">
                  <ThreadsIcon size={16} />
                </a>
                <a href="https://medium.com/@muhammadwaheedairi" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors">
                  <MediumIcon size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-700 text-[10px] font-mono uppercase tracking-[0.2em]">
              BUILT WITH ❤️ USING NEXT.JS + TYPESCRIPT + FRAMER MOTION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}