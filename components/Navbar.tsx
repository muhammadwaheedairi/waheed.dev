'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import Image from 'next/image';
import CommandPalette from '@/components/CommandPalette';

const NAV = [
  { name: 'Process',  href: '#process',  number: '01' },
  { name: 'Why Me',   href: '#why-us',   number: '02' },
  { name: 'About',    href: '#about',    number: '03' },
  { name: 'Services', href: '#services', number: '04' },
  { name: 'Work',     href: '#projects', number: '05' },
  { name: 'FAQ',      href: '#faq',      number: '06' },
];

const WA_NUMBER = '923180297567';
const WA_MSG    = encodeURIComponent("Hi Waheed! I'd like to discuss a project.");
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

export default function Navbar({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-baseline gap-1 group">
            <span className="font-bold text-gray-900 text-base tracking-tight group-hover:text-[#00572B] transition-colors font-[family-name:var(--font-jakarta)]">
              Muhammad
            </span>
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B] text-lg leading-none">
              Waheed
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 bg-gray-100/80 border border-gray-200/60 rounded-xl px-2 py-1.5">
            {NAV.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-sm transition-all px-4 py-1.5 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-[#00572B] text-white text-sm font-semibold rounded-full hover:bg-[#004A24] hover:shadow-lg hover:shadow-[#00572B]/20 transition-all"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                <Image src="/profile.jpg" alt="Muhammad Waheed" fill className="object-cover object-top" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] text-white/60 font-medium">Muhammad Waheed</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1">
                  <WhatsAppIcon className="w-3 h-3 text-green-300" />
                  Let&apos;s Chat
                </span>
              </div>
            </a>
          </div>

          {/* Mobile right side — search + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              aria-label="Search"
              className="p-2 rounded-lg text-gray-400 hover:text-[#00572B] hover:bg-gray-100 transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Mobile menu — full screen modern */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-white md:hidden flex flex-col"
          >
            {/* Nav links */}
            <div className="flex-1 px-6 pt-6 pb-4 flex flex-col justify-center">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-bold text-gray-300 font-mono w-6">
                      {item.number}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-jakarta)] group-hover:text-[#00572B] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <motion.span
                    className="text-gray-300 group-hover:text-[#00572B] transition-colors text-xl"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>

            {/* Bottom — profile + WA CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-6 border-t border-gray-100 bg-gray-50/50"
            >
              {/* Profile row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <Image src="/profile.jpg" alt="Muhammad Waheed" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 font-[family-name:var(--font-jakarta)]">Muhammad Waheed</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00572B] animate-pulse" />
                    <p className="text-xs text-gray-400">Open to new projects</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#00572B] text-white text-sm font-bold rounded-2xl hover:bg-[#004A24] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-300" />
                Let&apos;s Chat on WhatsApp
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandPalette />
    </>
  );
}