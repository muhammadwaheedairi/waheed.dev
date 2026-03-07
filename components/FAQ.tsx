'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'How do you work with clients?',  a: 'Spec-driven process — detailed requirements before any code. Daily async updates via email. Predictable delivery, zero scope creep.' },
  { q: 'Timezone and availability?',     a: 'Karachi, Pakistan (PKT UTC+5). Monday to Saturday, reply within 24 hours.' },
  { q: 'Do you sign NDAs?',              a: 'Yes, before any sensitive discussion. Your codebase and data stays private.' },
  { q: 'What projects do you take?',     a: 'AI Agents, RAG pipelines, workflow automation, full-stack apps, cloud infra. Minimum 2 weeks duration.' },
  { q: 'How to start working with you?', a: 'Email muhammadwaheedairi@gmail.com with project idea and timeline. Reply within 24 hours.' },
  { q: 'International clients?',         a: 'Yes, fully remote and async-friendly across all timezones.' },
  { q: 'Tech specialization?',           a: 'AI: OpenAI Agents SDK, Claude, MCP, RAG. Backend: FastAPI, Python. Frontend: Next.js, React. DevOps: Docker, Kubernetes, Oracle Cloud.' },
  { q: 'Post-delivery support?',         a: 'Yes, maintenance and retainer options available per project.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// QUESTIONS</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">FREQUENTLY <span className="text-gradient">ASKED.</span></h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className={`glass rounded-2xl border-white/5 overflow-hidden transition-all duration-300 ${open === i ? 'border-primary/20 bg-primary/[0.02]' : ''}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group">
                <span className={`text-lg font-bold transition-colors ${open === i ? 'text-primary' : 'text-white/80 group-hover:text-white'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/20 transition-transform duration-300 ${open === i ? 'rotate-180 text-primary' : 'group-hover:text-white/40'}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <div className="px-8 pb-8 text-white/60 leading-relaxed font-light">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
