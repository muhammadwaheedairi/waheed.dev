'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    q: 'How do you actually work with clients?',
    a: 'Before anything gets built, we sit down and figure out exactly what you need — in plain English, no tech speak. I write it all down, you approve it, and that becomes our plan. No surprises. No scope creep. You always know what\'s happening and when it\'ll be done.',
  },
  {
    q: 'What is your timezone and how fast do you reply?',
    a: 'I\'m based in Karachi (UTC+5), available Monday to Saturday. You\'ll hear back from me within 24 hours — usually much faster. And on active projects, you get daily updates so you\'re never left wondering what\'s going on.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Absolutely — before we discuss anything sensitive. Your idea, your business, your code stays private. Always.',
  },
  {
    q: 'What kind of projects do you take on?',
    a: 'If you have a business problem that needs a website or web app to solve it — I want to hear it. Landing pages, full websites, e-commerce stores, SaaS dashboards. Minimum engagement is 2 weeks. I don\'t do quick one-day fixes.',
  },
  {
    q: 'I have never hired a developer remotely. How do I start?',
    a: 'Just send me an email describing what you\'re trying to build. I\'ll reply within 24 hours with honest feedback — whether I can help, how long it\'ll take, and what I need from you. No commitment, no pressure.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — most of my work is fully remote. You don\'t need to be online at the same time as me. I send structured updates so everything moves forward without constant calls.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'Mostly Next.js, React, TypeScript, and Tailwind on the frontend — FastAPI and PostgreSQL on the backend. Not sure if your stack fits? Just ask.',
  },
  {
    q: 'What happens after the project is delivered?',
    a: 'You get everything — the full codebase, deployment setup, and a walkthrough so you understand what was built. The project isn\'t done until you\'re confident. Need ongoing support? I offer monthly retainer arrangements too.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="faq">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12] font-[family-name:var(--font-jakarta)]">
            Frequently asked{' '}
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B]">
              questions
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Everything you might wonder before reaching out.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-[#99D9B8] bg-white'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold w-6 flex-shrink-0 font-[family-name:var(--font-jakarta)] ${
                    open === i ? 'text-[#00572B]' : 'text-gray-300'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-sm sm:text-base font-semibold transition-colors leading-snug font-[family-name:var(--font-jakarta)] ${
                    open === i ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {faq.q}
                  </span>
                </div>

                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
                  open === i
                    ? 'bg-[#00572B] text-white'
                    : 'bg-gray-50 border border-gray-100 text-gray-400'
                }`}>
                  <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
                    {open === i ? (
                      <path d="M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    ) : (
                      <>
                        <path d="M7 2v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </>
                    )}
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16 text-sm sm:text-base text-gray-500 leading-relaxed">
                      {faq.a}
                    </div>
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