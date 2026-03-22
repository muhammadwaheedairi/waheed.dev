'use client';

import { motion } from 'motion/react';
import { Search, FileText, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    duration: '1–2 days',
    description:
      'Most developers skip this step and jump straight to building. I do not. We start with a real conversation — what your business does, what is broken, and what success actually looks like. I ask questions most developers never think to ask. By the end, we both know exactly what needs to be built and why.',
    details: [
      'Understand your business and users',
      'Define the exact problem to solve',
      'Agree on what success looks like',
      'Clarify timeline and hard constraints',
    ],
  },
  {
    icon: FileText,
    number: '02',
    title: 'Specification',
    duration: '2–3 days',
    description:
      'Before any code is written, everything gets documented — every feature, every screen, every edge case. You read it, push back on anything that is wrong, and sign off. That document is the contract. If it is not in the spec, it does not get built without a conversation. No scope creep. Ever.',
    details: [
      'Every feature written out in plain language',
      'Architecture and tech decisions documented',
      'You review and approve before build starts',
      'Nothing ambiguous — nothing left to interpretation',
    ],
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    duration: 'Project-dependent',
    description:
      'I build exactly what the spec says. You get regular updates — not a message two weeks later saying it is done. If something comes up that was not accounted for, I flag it immediately rather than quietly working around it. Clean code, tested, documented as I go.',
    details: [
      'Regular progress updates throughout',
      'Built exactly to the approved spec',
      'Clean, documented, maintainable code',
      'Issues flagged immediately — not hidden',
    ],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Ship & Handoff',
    duration: '1–2 days',
    description:
      'Deployed, documented, and handed over completely. You get the codebase, the deployment setup, and a walkthrough so you understand what was built and can manage it going forward. The project does not end until you are fully confident. No ghost after delivery.',
    details: [
      'Deployed to production',
      'Full documentation provided',
      'Walkthrough call — you understand everything',
      'Post-launch support window included',
    ],
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// PROCESS</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            HOW I <span className="text-gradient">WORK.</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            Four steps. Every project. No surprises, no disappearing acts —
            just a clear path from your problem to a shipped product.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical connector line — desktop */}
          <div className="hidden lg:block absolute left-[2.75rem] top-8 bottom-8 w-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-[5.5rem_1fr] gap-0 group"
              >
                {/* Icon column — desktop */}
                <div className="hidden lg:flex flex-col items-center pt-8">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass p-7 sm:p-8 lg:p-10 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left */}
                    <div>
                      {/* Mobile icon + number */}
                      <div className="flex items-center gap-3 mb-4 lg:mb-0">
                        <div className="lg:hidden w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <step.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-white/50 font-light leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Right — details */}
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.25em] mb-4">
                        WHAT HAPPENS
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-[10px] font-mono text-primary/40 mt-0.5 flex-shrink-0">
                              {String(j + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm text-white/60 font-light leading-snug">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA — wzwebs style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm font-light mb-6 max-w-md mx-auto">
            This is how every project runs. The same process, every time —
            because predictability is what lets you trust the outcome.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-dark font-black rounded-xl text-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all"
          >
            START WITH DISCOVERY →
          </button>
        </motion.div>

      </div>
    </section>
  );
}