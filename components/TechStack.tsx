'use client';

import { motion } from 'motion/react';
import { TECH_STACK } from '@/lib/constants';
import { Cpu, Layers, Database, Globe } from 'lucide-react';

const icons = { ai: Cpu, frontend: Globe, devops: Layers, databases: Database };

const CATEGORY_LABELS: Record<string, { title: string; benefit: string }> = {
  ai:        { title: 'AI & Automation',    benefit: 'The brain behind your automation' },
  frontend:  { title: 'Frontend & UI',      benefit: 'What your users actually see and feel' },
  devops:    { title: 'DevOps & Cloud',     benefit: 'Keeps your product live and scalable' },
  databases: { title: 'Data & Storage',     benefit: 'Where your business data lives safely' },
};

export default function TechStack() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — tech categories */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-[1px] w-8 sm:w-12 bg-secondary" />
              <span className="text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-[0.3em]">
                // TOOLS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 sm:mb-6 leading-none">
              BUILT WITH THE <span className="text-gradient">RIGHT</span> TOOLS.
            </h2>
            <p className="text-white/40 text-base sm:text-lg font-light mb-10 leading-relaxed max-w-xl">
              Every tool in this stack was chosen for one reason —
              it makes your product faster, more reliable, or easier to maintain.
              No hype. No trendy frameworks for their own sake.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {Object.entries(TECH_STACK).map(([category, skills]) => {
                const Icon = icons[category as keyof typeof icons] || Cpu;
                const meta = CATEGORY_LABELS[category] || { title: category, benefit: '' };
                return (
                  <div key={category} className="group p-5 rounded-2xl border border-white/5 hover:border-primary/20 bg-white/[0.02] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                        {meta.title}
                      </h3>
                    </div>
                    {/* Client benefit line */}
                    <p className="text-[10px] font-mono text-white/20 mb-4 ml-1">
                      {meta.benefit}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,255,136,0.1)', borderColor: 'rgba(0,255,136,0.3)' }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/5 bg-white/5 text-[10px] sm:text-xs font-medium text-white/40 hover:text-white transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="order-1 lg:order-2 relative perspective-1000">
            <motion.div
              initial={{ rotateY: 20, rotateX: 10 }}
              whileInView={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass p-1 shadow-2xl shadow-primary/5 max-w-md mx-auto"
            >
              <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.8rem] bg-[#050505] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)' }} />
                <div className="relative z-10 text-center p-6 sm:p-8 md:p-16">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-6xl sm:text-8xl mb-6 sm:mb-10 drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                  >
                    🤖
                  </motion.div>
                  <h4 className="text-xl sm:text-3xl font-black mb-3 sm:mb-4 tracking-tight uppercase">
                    Your Product.
                  </h4>
                  <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed max-w-xs mx-auto mb-6 sm:mb-10 italic">
                    &ldquo;Built with tools that last — not the trendiest stack, the right one for your business.&rdquo;
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                      <div className="text-primary font-black text-xl sm:text-3xl mb-1 glow-text-primary">Fast</div>
                      <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-white/20">Delivery</div>
                    </div>
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all">
                      <div className="text-secondary font-black text-xl sm:text-3xl mb-1">Clean</div>
                      <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-white/20">Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-12 -right-12 glass p-6 rounded-3xl border-primary/20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono text-primary uppercase">Building</span>
              </div>
              <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="h-full w-12 bg-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}