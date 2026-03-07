'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  { quote: 'Waheed delivered an autonomous AI agent that completely transformed our workflow. Exceptional technical depth.', name: 'Ahmed K.', role: 'CTO', company: 'TechVentures PK', initials: 'AK' },
  { quote: "His spec-driven approach to AI development is unlike anything I've seen. Shipped on time, zero bugs in production.", name: 'Sarah M.', role: 'Product Lead', company: 'AutomateHQ', initials: 'SM' },
  { quote: 'Built our entire RAG pipeline from scratch in 2 weeks. The system runs 24/7 with zero maintenance from our side.', name: 'Bilal R.', role: 'Founder', company: 'DataFlow Systems', initials: 'BR' },
];

function Card({ t, i }: { t: (typeof TESTIMONIALS)[0]; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
      className="glass p-8 sm:p-10 rounded-[2rem] border-white/5 relative group hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
      <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity"><Quote className="w-12 h-12 text-primary" /></div>
      <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
      <p className="text-lg sm:text-xl font-light italic text-white/60 mb-10 leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-sm bg-primary/5">{t.initials}</div>
        <div>
          <div className="font-bold text-white group-hover:text-primary transition-colors">{t.name}</div>
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{t.role} // {t.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// PROOF_OF_WORK</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">WHAT THEY <span className="text-gradient">SAY.</span></h2>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => <Card key={i} t={t} i={i} />)}
        </div>
        <div className="lg:hidden flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-[300px] sm:min-w-[400px] snap-center"><Card t={t} i={i} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
