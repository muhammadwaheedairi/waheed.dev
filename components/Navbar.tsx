'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Briefcase, Code2, Layers, Mail, Command, GitBranch } from 'lucide-react';

const NAV = [
  { name: 'Home',     icon: Home,      href: '#home' },
  { name: 'About',    icon: User,      href: '#about' },
  { name: 'Services', icon: Briefcase, href: '#services' },
  { name: 'Work',     icon: Code2,     href: '#projects' },
  { name: 'Process',  icon: GitBranch, href: '#process' },
  { name: 'Stack',    icon: Layers,    href: '#tech' },
  { name: 'Contact',  icon: Mail,      href: '#contact' },
];

export default function Navbar({ isBannerVisible = false }: { isBannerVisible?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'w-[90%] md:w-auto' : 'w-[95%] md:w-auto'
        }`}
        style={{ top: isBannerVisible ? 'calc(1.5rem + 36px)' : '1.5rem' }}
      >
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between md:justify-center gap-8 border-white/5 shadow-2xl transition-all ${
          isScrolled ? 'bg-bg-dark/80 backdrop-blur-2xl' : 'bg-transparent'
        }`}>

          {/* Mobile logo */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest">MW</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-primary transition-colors group"
              >
                <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform" />
                {item.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
            >
              <Command className="w-3 h-3 text-white/40 group-hover:text-primary" />
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/60">
                Press ⌘K
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-10"
          >
            {NAV.map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary" />
                {item.name}
              </motion.a>
            ))}

            {/* Mobile contact CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV.length * 0.08 }}
              href="mailto:muhammadwaheedairi@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-4 bg-primary text-bg-dark font-black rounded-xl text-sm"
            >
              START A PROJECT →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}