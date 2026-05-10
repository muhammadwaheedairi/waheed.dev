'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* ══════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════ */
interface Service {
  number: string;
  title: string;
  titleAccent: string;
  painLine: string;
  headline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  price: string;
  dark: boolean;
}

/* ══════════════════════════════════════════════════
   SERVICES DATA
══════════════════════════════════════════════════ */
const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Landing',
    titleAccent: 'Page',
    painLine: 'Got a product but no page that sells it?',
    headline: 'First impressions close deals.',
    description:
      "You have something worth selling. But if your landing page looks rushed, clients won't trust you enough to buy. I build high-converting landing pages that load fast, look sharp, and turn visitors into leads.",
    deliverables: [
      'Pixel-perfect responsive design',
      'Smooth animations & scroll effects',
      'Contact form / waitlist integration',
      'SEO-ready structure',
      'Deployed & live on Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    price: 'From $600',
    dark: false,
  },
  {
    number: '02',
    title: 'Full',
    titleAccent: 'Website',
    painLine: "Need more than one page but don't know where to start?",
    headline: 'A website that works as hard as you do.',
    description:
      "A landing page isn't always enough. I build complete multi-page websites — about, services, blog, contact — structured for growth and managed through a CMS so you can update content yourself without touching code.",
    deliverables: [
      'Multi-page website (4–6 pages)',
      'CMS integration — edit content yourself',
      'Blog & dynamic pages',
      'Fully responsive & SEO optimized',
      'Deployed to production, handoff-ready',
    ],
    stack: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    price: 'From $1,500',
    dark: false,
  },
  {
    number: '03',
    title: 'SaaS',
    titleAccent: 'Dashboard',
    painLine: 'Building a product but stuck on the frontend?',
    headline: 'Complex apps, made simple to use.',
    description:
      "Your backend works. Your idea is solid. But without a clean, fast dashboard, users won't stick around. I build SaaS frontends and full-stack web apps — auth, data tables, charts, API integration — production-ready and built to scale.",
    deliverables: [
      'Full-stack web application',
      'User authentication & role management',
      'Data tables, charts & analytics views',
      'REST API integration with your backend',
      'Dockerized & deployment-ready',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Custom JWT', 'Docker'],
    price: 'From $2,500',
    dark: true,
  },
  {
    number: '04',
    title: 'E-Commerce',
    titleAccent: 'Store',
    painLine: 'Selling manually when you should have a store?',
    headline: 'A store that sells while you sleep.',
    description:
      'Stop taking orders over WhatsApp. I build complete e-commerce stores with product management, cart, checkout, Stripe payments, and order tracking — everything a real online store needs, without the bloat.',
    deliverables: [
      'Full storefront with product pages & filters',
      'Cart, checkout & Stripe payments',
      'Order management & email confirmations',
      'CMS-powered product management',
      'Admin dashboard included',
    ],
    stack: ['Next.js', 'Clerk', 'Stripe', 'Neon Postgres', 'Drizzle ORM', 'Sanity CMS'],
    price: 'From $2,000',
    dark: false,
  },
  {
    number: '05',
    title: 'RAG /',
    titleAccent: 'AI Agent',
    painLine: 'Sitting on data that no one can easily search or use?',
    headline: 'Your knowledge base, finally answerable.',
    description:
      'Documents, PDFs, internal wikis, product data — all locked away and impossible to search. I build RAG pipelines and AI agents that let your users ask questions in plain English and get accurate, sourced answers instantly.',
    deliverables: [
      'Custom RAG pipeline on your data',
      'AI chatbot embedded in your product',
      'Vector search with semantic retrieval',
      'REST API ready to plug into any frontend',
      'Supports PDFs, docs, websites & databases',
    ],
    stack: ['FastAPI', 'OpenAI Agents SDK', 'Qdrant', 'Cohere', 'Python'],
    price: 'From $1,500',
    dark: true,
  },
];

/* ══════════════════════════════════════════════════
   NAV LABELS (short for tabs)
══════════════════════════════════════════════════ */
const NAV_LABELS = [
  'Landing Page',
  'Full Website',
  'SaaS Dashboard',
  'E-Commerce',
  'RAG / AI Agent',
];

/* ══════════════════════════════════════════════════
   CHECK ICON
══════════════════════════════════════════════════ */
function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none"
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${dark ? 'text-[#66C99A]' : 'text-[#00572B]'}`}>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   ACTIVE SERVICE CARD
══════════════════════════════════════════════════ */
function ServicePanel({ s }: { s: Service }) {
  return (
    <div className={`rounded-2xl border overflow-hidden ${
      s.dark
        ? 'bg-[#00572B] border-[#006B35]'
        : 'bg-white border-gray-100'
    }`}>
      <div className="p-6 sm:p-8 lg:p-10">

        {/* Top row — pain line + price */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${
            s.dark ? 'bg-[#004A24] border-[#006B35]' : 'bg-gray-50 border-gray-200'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              s.dark ? 'bg-[#66C99A]' : 'bg-[#006B35]'
            }`} />
            <span className={`text-[11px] font-medium ${
              s.dark ? 'text-[#D0EFE3]' : 'text-gray-500'
            }`}>{s.painLine}</span>
          </div>

          <div className={`flex-shrink-0 px-4 py-2 rounded-xl border font-bold text-sm ${
            s.dark
              ? 'bg-[#003D1E] border-[#006B35] text-[#99D9B8]'
              : 'bg-[#00572B] border-[#004A24] text-white'
          }`}>
            {s.price}
          </div>
        </div>

        {/* Service number */}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${
          s.dark ? 'text-[#66C99A]' : 'text-gray-400'
        }`}>
          Service {s.number}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl leading-tight mt-1 mb-1 font-[family-name:var(--font-jakarta)]">
          <span className={`font-bold ${s.dark ? 'text-white' : 'text-gray-900'}`}>
            {s.title}{' '}
          </span>
          <span className={`font-[family-name:var(--font-playfair)] italic font-black ${
            s.dark ? 'text-[#99D9B8]' : 'text-[#00572B]'
          }`}>
            {s.titleAccent}
          </span>
        </h3>

        {/* Headline */}
        <p className={`text-sm font-medium italic mb-4 ${
          s.dark ? 'text-[#66C99A]' : 'text-[#00572B]'
        }`}>
          "{s.headline}"
        </p>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${
          s.dark ? 'text-[#D0EFE3]' : 'text-gray-500'
        }`}>
          {s.description}
        </p>

        {/* 2-col grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Deliverables */}
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${
              s.dark ? 'text-[#66C99A]' : 'text-gray-400'
            }`}>
              What You Get
            </p>
            <ul className="space-y-2.5">
              {s.deliverables.map((d, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <CheckIcon dark={s.dark} />
                  <span className={`text-sm leading-snug ${
                    s.dark ? 'text-[#D0EFE3]' : 'text-gray-600'
                  }`}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack + CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${
                s.dark ? 'text-[#66C99A]' : 'text-gray-400'
              }`}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {s.stack.map((tech, k) => (
                  <span key={k} className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold border ${
                    s.dark
                      ? 'bg-[#003D1E] border-[#006B35] text-[#99D9B8]'
                      : 'bg-[#F0F7F4] border-[#C8E8D8] text-[#00572B]'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:muhammadwaheedairi@gmail.com"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 w-fit ${
                s.dark
                  ? 'bg-white text-[#004A24] hover:bg-[#F0F7F4]'
                  : 'bg-[#00572B] text-white hover:bg-[#004A24] hover:shadow-lg hover:shadow-[#00572B]/30'
              }`}
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════ */
export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-16 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="services">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12] font-[family-name:var(--font-jakarta)]">
            Five services.{' '}
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B]">
              Real results.
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Not a prototype. Not a proof of concept.
            Working software — shipped in weeks, not months.
          </p>
        </motion.div>

        {/* ── NAV TABS ── */}
        {/* Mobile: horizontal scroll */}
        {/* Desktop: centered pill row */}
        <div className="mb-6 sm:mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {NAV_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold border transition-all duration-200 ${
                  active === i
                    ? 'bg-[#00572B] border-[#004A24] text-white shadow-md shadow-[#00572B]/20'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#99D9B8] hover:text-[#00572B]'
                }`}
              >
                {/* Active dot */}
                {active === i && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                )}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── ANIMATED SERVICE PANEL ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServicePanel s={SERVICES[active]} />
          </motion.div>
        </AnimatePresence>

        {/* ── PAGINATION DOTS (mobile only) ── */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:hidden">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-200 rounded-full ${
                active === i
                  ? 'w-5 h-2 bg-[#00572B]'
                  : 'w-2 h-2 bg-gray-300'
              }`}
              aria-label={`Service ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}