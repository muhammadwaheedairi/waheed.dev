'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Home, GitBranch, Star, User, Briefcase, Code2, HelpCircle, Github, Linkedin, Command } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    { id: 'home',     label: 'Home',           description: 'Back to top',                    icon: Home,       shortcut: 'H', action: () => scrollTo('#home')     },
    { id: 'process',  label: 'Process',        description: 'How I work with clients',         icon: GitBranch,  shortcut: 'P', action: () => scrollTo('#process')  },
    { id: 'why-us',   label: 'Why Me',         description: 'What makes me different',         icon: Star,       shortcut: 'W', action: () => scrollTo('#why-us')   },
    { id: 'about',    label: 'About',          description: 'Who you are working with',        icon: User,       shortcut: 'A', action: () => scrollTo('#about')    },
    { id: 'services', label: 'Services',       description: 'What I offer and pricing',        icon: Briefcase,  shortcut: 'S', action: () => scrollTo('#services') },
    { id: 'work',     label: 'Work',           description: 'Real projects I have shipped',    icon: Code2,      shortcut: 'R', action: () => scrollTo('#projects') },
    { id: 'faq',      label: 'FAQ',            description: 'Common questions answered',       icon: HelpCircle, shortcut: 'F', action: () => scrollTo('#faq')      },
    { id: 'github',   label: 'Open GitHub',    description: 'github.com/muhammadwaheedairi',   icon: Github,     action: () => window.open('https://github.com/muhammadwaheedairi', '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn',  description: 'linkedin.com/in/muhammadwaheedairi', icon: Linkedin, action: () => window.open('https://linkedin.com/in/muhammadwaheedairi', '_blank') },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsOpen((p) => !p); }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex((p) => (p + 1) % filtered.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[selectedIndex]?.action(); }
  };

  return (
    <>
      {/* Trigger button — fixed bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[150] hidden md:flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-gray-300 transition-all group"
      >
        <Command className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00572B] transition-colors" />
        <span className="text-xs font-mono text-gray-400 group-hover:text-gray-600 transition-colors">K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -12 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/80 overflow-hidden"
            >

              {/* Search input */}
              <div className="flex items-center px-5 py-4 border-b border-gray-100 gap-3">
                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search pages or actions..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setSelectedIndex(0); }}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-sm font-[family-name:var(--font-jakarta)]"
                />
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 border border-gray-200 text-[10px] font-mono text-gray-400 flex-shrink-0">
                  <Command className="w-3 h-3" /><span>K</span>
                </div>
              </div>

              {/* Commands list */}
              <div className="max-h-[55vh] overflow-y-auto p-2">
                {filtered.length > 0 ? filtered.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left ${
                      idx === selectedIndex
                        ? 'bg-[#F0F7F4] text-[#00572B]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        idx === selectedIndex
                          ? 'bg-[#00572B] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <cmd.icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm font-semibold font-[family-name:var(--font-jakarta)] ${
                          idx === selectedIndex ? 'text-[#00572B]' : 'text-gray-800'
                        }`}>
                          {cmd.label}
                        </span>
                        <span className="text-xs text-gray-400 font-normal">
                          {cmd.description}
                        </span>
                      </div>
                    </div>

                    {cmd.shortcut && (
                      <span className={`text-[10px] font-mono px-2 py-1 rounded-lg border flex-shrink-0 ${
                        idx === selectedIndex
                          ? 'border-[#99D9B8] text-[#00572B] bg-white'
                          : 'border-gray-200 text-gray-400 bg-gray-50'
                      }`}>
                        {cmd.shortcut}
                      </span>
                    )}
                  </button>
                )) : (
                  <div className="py-12 text-center text-gray-400 text-sm font-[family-name:var(--font-jakarta)]">
                    No results for &quot;{search}&quot;
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                <div className="flex gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>ESC to close</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}