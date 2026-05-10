'use client';

import { motion } from 'motion/react';

/* ── Card Visual 1 — Discovery ── */
function DiscoveryVisual() {
  const items = [
    {
      label: 'Business Analysis',
      svg: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-gray-400">
          <polyline points="2,12 6,7 9,10 14,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: 'Problem Mapping',
      svg: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-gray-400">
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      label: 'Success Metrics',
      svg: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-gray-400">
          <rect x="2" y="9" width="3" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="6.5" y="6" width="3" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="11" y="3" width="3" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-5 relative">
      <div className="absolute left-[10px] top-3 bottom-14 flex flex-col justify-between items-center" style={{ width: 1 }}>
        <div className="w-px h-full" style={{ background: 'repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 4px, transparent 4px, transparent 8px)' }} />
      </div>
      <div className="space-y-2 pl-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-gray-200 bg-white flex-shrink-0 flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>
            <div className="flex items-center justify-between flex-1 px-3 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
              <span>{item.label}</span>
              <span className="ml-2 p-1 bg-gray-100 rounded-full">{item.svg}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <div className="w-5 h-5 rounded-full bg-[#00572B] flex-shrink-0 flex items-center justify-center z-10">
            <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#00572B] rounded-full text-xs font-semibold text-white flex-1 justify-between">
            <span>Strategy Direction</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#99D9B8]">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card Visual 2 — Specification ── */
function SpecVisual() {
  return (
    <div className="mt-5">
      <div className="flex justify-between mb-2 px-1">
        <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Feature Specs</div>
        <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Tech Stack</div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 h-16 bg-white border border-gray-200 rounded-xl" />
        <div className="flex-1 h-16 bg-white border border-gray-200 rounded-xl" />
      </div>
      <div className="flex justify-between mt-2 px-1">
        <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">User Flows</div>
        <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Edge Cases</div>
      </div>
    </div>
  );
}

/* ── Card Visual 3 — Build ── */
function BuildVisual() {
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 280 130" className="w-full h-auto" fill="none">
        <path d="M80 65 Q110 35 140 45"  stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M80 65 Q110 90 140 85"  stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M140 45 Q175 25 200 55" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M140 85 Q175 95 200 75" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M140 45 Q155 65 140 85" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M200 55 Q215 65 200 75" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="40"  y="50" width="78" height="28" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="79"  y="68" textAnchor="middle" fontSize="8.5" fill="#6b7280" fontWeight="500">Visual Identity</text>
        <rect x="110" y="28" width="72" height="26" rx="13" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="146" y="45" textAnchor="middle" fontSize="8.5" fill="#6b7280" fontWeight="500">Brand Elements</text>
        <rect x="110" y="74" width="76" height="26" rx="13" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="148" y="91" textAnchor="middle" fontSize="8.5" fill="#6b7280" fontWeight="500">Content Design</text>
        <rect x="38"  y="96" width="76" height="26" rx="13" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="76"  y="113" textAnchor="middle" fontSize="8.5" fill="#6b7280" fontWeight="500">Template Design</text>
        <rect x="186" y="50" width="78" height="28" rx="14" fill="#F0F7F4" stroke="#99D9B8" strokeWidth="1" />
        <text x="225" y="68" textAnchor="middle" fontSize="8.5" fill="#00572B" fontWeight="600">Aesthetics</text>
      </svg>
    </div>
  );
}

/* ── Card Visual 4 — Ship ── */
function ShipVisual() {
  const items = ['Production Deploy', 'Full Documentation', 'Walkthrough Call', 'Post-launch Support'];
  return (
    <div className="mt-5 space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#00572B] border border-[#006B35] flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#99D9B8]">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#D0EFE3]">{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Card Icon ── */
function CardIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative w-10 h-8 mb-5">
      <div className={`absolute left-0 top-0 w-7 h-7 rounded-full border-2 ${dark ? 'border-[#33B97C] bg-transparent' : 'border-gray-200 bg-white'}`} />
      <div className={`absolute left-4 top-0 w-7 h-7 rounded-full border-2 ${dark ? 'border-[#33B97C] bg-transparent' : 'border-gray-200 bg-white'}`} />
      <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-[#006B35] flex items-center justify-center">
        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
          <path d="M2.5 5l2 2 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ── Steps Data — StoryBrand copy ── */
const STEPS = [
  {
    number: '01',
    title: 'We Understand\nYour',
    titleAccent: 'Business First.',
    duration: '1–2 days',
    tag: 'Starts with a 1-1 call',
    // StoryBrand: empathy — guide understands the problem before acting
    description: 'Most developers start building immediately. I start by listening. We talk about your business, your customers, and what a successful outcome actually looks like for you.',
    Visual: DiscoveryVisual,
    dark: false,
  },
  {
    number: '02',
    title: 'You Approve\nEvery',
    titleAccent: 'Detail. In Writing.',
    duration: '2–3 days',
    tag: 'Zero surprises guarantee',
    // StoryBrand: plan — clear simple steps, removes risk
    description: 'Before a single line of code is written, every feature, flow, and screen is documented. You review it. You sign off. That document is the contract — nothing gets built without your approval.',
    Visual: SpecVisual,
    dark: false,
  },
  {
    number: '03',
    title: 'I Build It.\nYou',
    titleAccent: 'Watch It Happen.',
    duration: 'Project-dependent',
    tag: 'Daily progress updates',
    // StoryBrand: guide executes the plan, hero stays informed
    description: 'You get regular updates — not radio silence followed by a "it\'s done" two weeks later. If something comes up, you hear about it immediately. No hidden problems. No last-minute surprises.',
    Visual: BuildVisual,
    dark: false,
  },
  {
    number: '04',
    title: 'You Launch.',
    titleAccent: 'You Own It. Fully.',
    duration: '1–2 days',
    tag: 'Your 24/7 asset',
    // StoryBrand: success — paint the win, client owns the transformation
    description: 'Deployed, documented, and walked through until you understand it completely. You get the code, the deployment setup, and the confidence to run it yourself. This is yours — not mine.',
    Visual: ShipVisual,
    dark: true,
  },
];

/* ── Section ── */
export default function Process() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="process">
      <div className="max-w-5xl mx-auto">

        {/* Header — StoryBrand: client is hero, guide shows the plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12] font-[family-name:var(--font-jakarta)]">
            You know what you want.
            <br className="hidden sm:block" />
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B]">
              Here is how we get there.
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            No disappearing acts. No vague timelines. Every project follows the same
            four steps — so you always know exactly where things stand.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                step.dark
                  ? 'bg-[#004A24] border-[#00572B]'
                  : 'bg-[#f9f9f9] border-gray-100'
              }`}
            >
              <CardIcon dark={step.dark} />

              <h3 className="text-xl sm:text-2xl leading-tight mb-1 font-[family-name:var(--font-jakarta)] whitespace-pre-line">
                <span className={`font-bold ${step.dark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}{' '}
                </span>
                <span className={`font-[family-name:var(--font-playfair)] italic font-black ${
                  step.dark ? 'text-[#99D9B8]' : 'text-[#00572B]'
                }`}>
                  {step.titleAccent}
                </span>
              </h3>

              <span className={`inline-flex items-center gap-1.5 text-xs font-medium mb-3 ${
                step.dark ? 'text-[#66C99A]' : 'text-gray-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${step.dark ? 'bg-[#66C99A]' : 'bg-[#006B35]'}`} />
                {step.duration}
              </span>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                step.dark ? 'text-[#D0EFE3]' : 'text-gray-500'
              }`}>
                {step.description}
              </p>

              <step.Visual />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — StoryBrand: direct CTA, low risk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 text-center"
        >
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Every client goes through this exact process. It works because it removes
            the guesswork — for both of us.
          </p>
          <a
            href="mailto:muhammadwaheedairi@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00572B] text-white text-sm font-semibold rounded-full hover:bg-[#004A24] hover:shadow-lg hover:shadow-[#00572B]/25 transition-all"
          >
            Start the Conversation →
          </a>
        </motion.div>

      </div>
    </section>
  );
}