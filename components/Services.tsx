'use client';

import { motion } from 'motion/react';
import { Bot, Layers, Paintbrush, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    tag: '01',
    title: 'AI Automation',
    headline: 'Your business, running on autopilot.',
    description:
      'I build AI systems that handle the repetitive work your team should not be doing — inbox triage, invoice generation, client follow-ups, daily briefings, social updates. The result is time back, costs down, and nothing falling through the cracks.',
    deliverables: [
      'Custom AI agent built for your workflows',
      'Email, WhatsApp, or Slack integration',
      'Accounting & CRM system connection',
      'Human approval layer for sensitive actions',
      'Daily automated reporting & briefings',
    ],
    timeline: '2 – 4 weeks',
    ideal: 'Consultants, agencies, solo operators',
  },
  {
    icon: Layers,
    tag: '02',
    title: 'Full-Stack Product Build',
    headline: 'From idea to live product — fast.',
    description:
      'I take a product idea and build it end to end — frontend, backend, database, deployment. Whether it is a SaaS MVP, a marketplace, a client portal, or an internal tool, I deliver something real that users can actually use.',
    deliverables: [
      'Complete web application (frontend + backend)',
      'User authentication & role management',
      'Database design & API development',
      'Third-party integrations (payments, CMS, APIs)',
      'Deployed to production, documented, handoff-ready',
    ],
    timeline: '3 – 6 weeks',
    ideal: 'Startups, founders, product teams',
  },
  {
    icon: Paintbrush,
    tag: '03',
    title: 'Frontend & UI Engineering',
    headline: 'Designs that look exactly as intended — and feel premium.',
    description:
      'I build pixel-perfect interfaces from Figma files, reference sites, or visual direction. Landing pages, marketing sites, SaaS dashboards, product UIs — built with the precision and animation quality that makes a product feel trustworthy before anyone reads a word.',
    deliverables: [
      'Pixel-perfect implementation from any design',
      'Smooth animations & micro-interactions',
      'Fully responsive across all screen sizes',
      'Performance optimised (fast load, clean code)',
      'Ready to connect to any backend or CMS',
    ],
    timeline: '1 – 3 weeks',
    ideal: 'SaaS companies, product launches, brands',
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="services">
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
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// SERVICES</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            WHAT I <span className="text-gradient">BUILD.</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            Three focused services. Each one delivers something real — not a prototype, not a proof of concept.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden group"
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                  {/* Left — main info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                        <s.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">{s.tag}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-2 group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-primary/70 font-light text-sm sm:text-base mb-5 italic">
                      {s.headline}
                    </p>
                    <p className="text-white/50 font-light leading-relaxed text-sm sm:text-base">
                      {s.description}
                    </p>

                    {/* Timeline + ideal */}
                    <div className="flex flex-wrap gap-4 mt-7">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary/50" />
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{s.timeline}</span>
                      </div>
                      <div className="h-3 w-[1px] bg-white/10 self-center hidden sm:block" />
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{s.ideal}</span>
                    </div>
                  </div>

                  {/* Right — deliverables + CTA */}
                  <div className="flex flex-col justify-between gap-8">
                    <div>
                      <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.25em] mb-4">
                        WHAT YOU GET
                      </p>
                      <ul className="space-y-3">
                        {s.deliverables.map((d, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary/50 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/60 font-light leading-snug">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={scrollToContact}
                      className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary hover:text-bg-dark text-primary font-bold text-sm transition-all duration-300 group/btn"
                    >
                      START A PROJECT
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}