'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import { Trophy, Code2, Calendar, GitCommit } from 'lucide-react';

const STATS = [
  { label: 'Projects Built',   value: 20,  suffix: '+', icon: Code2,     color: 'text-primary' },
  { label: 'Hackathons',       value: 8,   suffix: '',  icon: Trophy,    color: 'text-secondary' },
  { label: 'Years Experience', value: 3,   suffix: '+', icon: Calendar,  color: 'text-white' },
  { label: 'GitHub Commits',   value: 500, suffix: '+', icon: GitCommit, color: 'text-primary' },
];

const TICKER = ['Next.js','FastAPI','Docker','Kubernetes','Claude AI','Qwen','Oracle Cloud','Kafka','Dapr','Neon DB'];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (l) => Math.round(l));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  useEffect(() => { if (inView) animate(count, value, { duration: 2, ease: 'easeOut' }); }, [inView, count, value]);
  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <motion.span className="text-4xl sm:text-5xl font-black tracking-tighter">{rounded}</motion.span>
      <span className={`text-2xl font-bold ${color}`}>{suffix}</span>
    </div>
  );
}

export default function LiveStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase">BY THE <span className="text-gradient">NUMBERS.</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {STATS.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">{stat.label}</span>
                </div>
                <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
        <div className="relative py-8 border-y border-white/5">
          <div className="flex overflow-hidden select-none gap-12 mask-fade-x">
            <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex flex-nowrap gap-12 items-center whitespace-nowrap">
              {[...TICKER, ...TICKER, ...TICKER].map((tech, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-lg sm:text-xl font-bold text-white/20 hover:text-primary transition-colors cursor-default">{tech}</span>
                  <span className="text-primary/40 text-xl">·</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
