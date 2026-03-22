'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const PAINS = [
  {
    emoji: '😤',
    title: 'You hired a developer. They disappeared.',
    body: 'Two weeks of silence. Then a delivery that looks nothing like what you asked for. No documentation. No handoff. Just a bill.',
    tag: 'Scope Creep',
  },
  {
    emoji: '⏳',
    title: 'Your team is drowning in repetitive work.',
    body: 'Chasing invoices. Answering the same emails. Manual data entry. Tasks that should never touch a human — but somehow end up on your plate every single day.',
    tag: 'Wasted Hours',
  },
  {
    emoji: '💸',
    title: 'The agency quoted 6 months and $50K.',
    body: 'For something that should take 3 weeks. And even then, you would not own the code, could not update it yourself, and would need them for every small change.',
    tag: 'Overpriced',
  },
  {
    emoji: '🤷',
    title: 'You have the idea. You just cannot build it.',
    body: 'It is clear in your head. The problem it solves is real. But every developer you talk to either does not get it, over-engineers it, or goes quiet after the first call.',
    tag: 'No Execution',
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// THE_PROBLEM</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            SOUND <span className="text-gradient">FAMILIAR?</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            These are the problems most businesses run into
            before they find a developer who actually delivers.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAINS.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border-white/5 hover:border-red-500/20 transition-all duration-500 group"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">{pain.tag}</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{pain.emoji}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black mb-3 leading-snug group-hover:text-white transition-colors">
                    {pain.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {pain.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition line to solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm font-light mb-6 max-w-lg mx-auto">
            If any of this sounds familiar — you are in the right place.
            Here is how I work differently.
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-dark font-black rounded-xl text-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all group"
          >
            SEE HOW I SOLVE THIS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}