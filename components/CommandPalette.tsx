'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Home, User, Layout, Cpu, Mail, Github, Linkedin, Command } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
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
    { id: 'home',    label: 'Home',             icon: Home,     shortcut: 'H', action: () => scrollTo('#home') },
    { id: 'about',   label: 'About',            icon: User,     shortcut: 'A', action: () => scrollTo('#about') },
    { id: 'systems', label: 'Featured Systems', icon: Layout,   shortcut: 'S', action: () => scrollTo('#projects') },
    { id: 'stack',   label: 'Agentic Stack',    icon: Cpu,      shortcut: 'T', action: () => scrollTo('#tech') },
    { id: 'sync',    label: "Let's Sync",       icon: Mail,     shortcut: 'C', action: () => scrollTo('#contact') },
    { id: 'github',  label: 'Open GitHub',   icon: Github,   action: () => window.open('https://github.com/muhammadwaheedairi', '_blank') },
    { id: 'linkedin',label: 'Open LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/muhammadwaheedairi', '_blank') },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsOpen((p) => !p); }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isOpen) { setSearch(''); setSelectedIndex(0); document.body.style.overflow = 'hidden'; }
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex((p) => (p + 1) % filtered.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[selectedIndex]?.action(); }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden"
          >
            <div className="flex items-center px-6 py-4 border-b border-white/5">
              <Search className="w-5 h-5 text-white/40 mr-4" />
              <input autoFocus type="text" placeholder="Search or jump to..." value={search}
                onChange={(e) => { setSearch(e.target.value); setSelectedIndex(0); }}
                onKeyDown={onKeyDown}
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/20 text-lg" />
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/40">
                <Command className="w-3 h-3" /><span>K</span>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filtered.length > 0 ? filtered.map((cmd, idx) => (
                <button key={cmd.id} onClick={cmd.action} onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    idx === selectedIndex ? 'bg-primary/10 text-primary' : 'text-white/60 hover:bg-white/5'
                  }`}>
                  <div className="flex items-center gap-4">
                    <cmd.icon className={`w-5 h-5 ${idx === selectedIndex ? 'text-primary' : 'text-white/40'}`} />
                    <span className="font-medium">{cmd.label}</span>
                  </div>
                  {cmd.shortcut && (
                    <span className={`text-[10px] font-mono px-2 py-1 rounded border ${
                      idx === selectedIndex ? 'border-primary/30 text-primary' : 'border-white/10 text-white/20'
                    }`}>{cmd.shortcut}</span>
                  )}
                </button>
              )) : (
                <div className="py-12 text-center text-white/20 font-mono text-sm">No commands found for &quot;{search}&quot;</div>
              )}
            </div>
            <div className="px-6 py-3 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
              <div className="flex gap-4"><span>↑↓ Navigate</span><span>↵ Select</span></div>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}