'use client';

import { motion } from 'motion/react';

const BADGES = ['GIAIC', 'Panaversity', 'Governor Sindh Initiative', 'PIAIC', 'WaheedAI Solutions'];

export default function FeaturedInStrip() {
  return (
    <div className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">RECOGNIZED BY</span>
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
          <div className="hidden md:flex flex-wrap items-center gap-4">
            {BADGES.map((badge, i) => (
              <motion.span key={badge} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-xs font-mono hover:border-primary/30 hover:text-primary transition-all cursor-default">
                {badge}
              </motion.span>
            ))}
          </div>
          <div className="md:hidden w-full overflow-hidden relative">
            <motion.div className="flex gap-4 whitespace-nowrap"
              animate={{ x: [0, -1000] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
              {[...BADGES, ...BADGES].map((badge, i) => (
                <span key={`${badge}-${i}`} className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-xs font-mono">{badge}</span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
