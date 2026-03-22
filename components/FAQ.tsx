'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How do you actually work with clients?',
    a: 'Before a single line of code is written, I document exactly what will be built — features, architecture, data flow, edge cases. You review and approve it. That document becomes the contract. No scope creep. No surprises. You always know what is being built and when it will be done.',
  },
  {
    q: 'What is your timezone and how fast do you reply?',
    a: 'I am based in Karachi, Pakistan (PKT, UTC+5), available Monday to Saturday. I reply to every message within 24 hours — usually faster. Active projects get daily progress updates so you are never left wondering what is happening.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, always — before any sensitive project discussion begins. Your idea, your codebase, your business logic stays private. I have never shared client work and never will.',
  },
  {
    q: 'What kind of projects do you take on?',
    a: 'AI automation systems, full-stack web applications, and frontend engineering. If you have a business problem that can be solved with software, I want to hear it. Minimum engagement is 2 weeks. I do not take on small one-day tasks.',
  },
  {
    q: 'I have never hired a developer remotely. How do I start?',
    a: 'Send me an email describing your problem — what you are trying to build, what is broken, and roughly when you need it. I will reply within 24 hours with honest feedback: whether I can help, how long it will take, and what I need from you to get started. No commitment required to have that first conversation.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — most of my work is fully remote. I am async-friendly by default, which means you do not need to be online at the same time as me for things to move forward. Structured updates replace the need for constant calls.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'AI layer: OpenAI Agents SDK, Claude, MCP servers, RAG pipelines, vector databases. Backend: FastAPI, Python. Frontend: Next.js, React, TypeScript, Tailwind. Infrastructure: Docker, Kubernetes, Oracle Cloud, GitHub Actions. If your stack is not on this list, ask — I have likely worked with it or can learn it fast.',
  },
  {
    q: 'What happens after the project is delivered?',
    a: 'You get everything — the codebase, deployment setup, and a walkthrough so you understand what was built and how to manage it. The project ends when you are fully confident. For clients who want ongoing support, I offer monthly retainer arrangements.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// QUESTIONS</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none uppercase">
            HAVE <span className="text-gradient">QUESTIONS?</span>
          </h2>
          <p className="text-white/30 text-sm font-mono mt-2">
            Everything you might wonder before reaching out.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl border-white/5 overflow-hidden transition-all duration-300 ${
                open === i ? 'border-primary/20 bg-primary/[0.02]' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-base sm:text-lg font-bold transition-colors pr-4 ${
                  open === i ? 'text-primary' : 'text-white/80 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-white/20 transition-transform duration-300 ${
                  open === i ? 'rotate-180 text-primary' : 'group-hover:text-white/40'
                }`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed font-light text-sm sm:text-base">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — wzwebs style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm font-mono mb-4">
            Still have a question that is not here?
          </p>
          <a
            href="mailto:muhammadwaheedairi@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4 transition-all"
          >
            Email me directly → muhammadwaheedairi@gmail.com
          </a>
        </motion.div>

      </div>
    </section>
  );
}