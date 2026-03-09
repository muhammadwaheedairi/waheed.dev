'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, Bot, Cpu, Code2 } from 'lucide-react';

// Threads icon (Meta) — not in lucide-react
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeSpeed" viewBox="0 0 512 512">
      <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z" />
      <path fill="currentColor" fillRule="nonzero" d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z" />
    </svg>
  );
}

// Medium icon — not in lucide-react
function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col pt-32 pb-20 md:pt-0 md:justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-5xl z-10 w-full">

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] glow-text-primary">
            Digital FTE Architect
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-primary/30" />
          <span className="text-[9px] sm:text-[10px] font-mono text-white/30 uppercase tracking-widest">System_v2.0.1</span>
        </motion.div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.85] break-words">
          <span className="block">DRIVING</span>
          <span className="text-gradient block">INTELLIGENT</span>
          <span className="block">GROWTH.</span>
        </h1>

        <p className="text-sm sm:text-xl md:text-2xl text-white/50 mb-10 sm:mb-12 max-w-2xl leading-relaxed font-light">
          I build <span className="text-white font-normal">autonomous AI systems</span> that streamline operations and unlock higher productivity instantly.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,255,136,0.2)' }} whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-primary text-bg-dark font-black rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 group transition-all text-xs sm:text-base">
            INITIALIZE PROJECT
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 px-4 py-2">
            {[
              { icon: Github, href: 'https://github.com/muhammadwaheedairi' },
              { icon: Linkedin, href: 'https://linkedin.com/in/muhammadwaheedairi' },
              { icon: ThreadsIcon, href: 'https://www.threads.net/@muhammadwaheedairi' },
              { icon: MediumIcon, href: 'https://medium.com/@muhammadwaheedairi' },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#00ff88' }} className="text-white/30 transition-colors">
                <s.icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 sm:pt-12">
          {[
            { icon: Bot, title: 'AI Agents', desc: 'Autonomous RAG & MCP Systems', color: 'text-primary' },
            { icon: Cpu, title: 'Spec-Driven', desc: 'Predictable AI Generation', color: 'text-secondary' },
            { icon: Code2, title: 'Cloud-Native', desc: 'Scalable Agentic Infrastructure', color: 'text-white' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }} className="flex items-center sm:items-start gap-4 group">
              <item.icon className={`${item.color} w-4 h-4 sm:w-6 sm:h-6 shrink-0 group-hover:scale-110 transition-transform`} />
              <div>
                <h3 className="font-bold text-[10px] sm:text-sm mb-0.5 sm:mb-1 uppercase tracking-wider">{item.title}</h3>
                <p className="text-[9px] sm:text-xs text-white/30 font-mono">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 flex flex-wrap gap-2 sm:gap-3 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {['Pair Extraordinaire', 'Pull Shark', 'YOLO'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 text-[7px] sm:text-[9px] font-mono uppercase tracking-[0.2em]">
              <span className="text-primary">★</span> {badge}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block">
        AGENTIC_ENGINEERING
      </div>
    </section>
  );
}