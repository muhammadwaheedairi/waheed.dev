'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Code, Zap } from 'lucide-react';

/* ── Timeline Connector ── */
function TimelineConnector({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.6 }}
      className={`absolute left-1/2 top-full w-1 h-12 origin-top ${
        isActive ? 'bg-gradient-to-b from-[#00572B] to-[#99C4B0]' : 'bg-gradient-to-b from-gray-200 to-gray-100'
      }`}
      style={{ transform: 'translateX(-50%)' }}
    />
  );
}

/* ── Step Node ── */
function StepNode({ number, isActive }: { number: string; isActive: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-2 mb-6 transition-all ${
        isActive
          ? 'bg-[#00572B] border-[#00572B] text-white shadow-lg shadow-[#00572B]/30'
          : 'bg-white border-gray-200 text-gray-400'
      }`}
    >
      {number}
      {isActive && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-[#00572B] opacity-30"
        />
      )}
    </motion.div>
  );
}

/* ── Step Content Card ── */
function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative flex gap-6 md:gap-8 ${!isLast ? 'mb-16 md:mb-24' : ''}`}
    >
      {/* Left side (timeline) */}
      <div className="flex flex-col items-center flex-shrink-0">
        <StepNode number={step.number} isActive={true} />
        {!isLast && <TimelineConnector isActive={true} />}
      </div>

      {/* Right side (content) */}
      <motion.div
        whileHover={{ y: -4 }}
        className="flex-1 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-[#F0F7F4]/30 p-6 md:p-8 hover:border-[#99C4B0] hover:shadow-lg hover:shadow-[#00572B]/10 transition-all duration-300"
      >
        {/* Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00572B]" />
          <span className="text-xs font-semibold text-[#00572B] tracking-widest uppercase">
            {step.tag}
          </span>
          <span className="text-xs font-medium text-gray-400">• {step.duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
          <span className="text-gray-900">{step.title} </span>
          <span className="text-[#00572B]">{step.titleAccent}</span>
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
          {step.description}
        </p>

        {/* Step details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {step.details.map((detail, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-100 hover:border-[#99C4B0] transition-all"
            >
              <detail.icon className="w-5 h-5 text-[#00572B] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-gray-900">{detail.label}</div>
                <div className="text-xs text-gray-500">{detail.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Steps Data ── */
const STEPS = [
  {
    number: '01',
    title: 'We Understand Your',
    titleAccent: 'Business (1–2 days)',
    duration: 'Starts with a call',
    tag: 'Pain-aware discovery',
    description: "Most developers ask \"what colors do you like?\" I ask \"who's a client you'd clone 100 times?\" and \"what's the one thing that makes someone ready to buy?\" We map out your actual sales process—not the one you think you should have. The one that actually works. Then we build around that.",
    details: [
      { icon: Sparkles, label: 'Sales Process', value: 'How you actually win' },
      { icon: Zap, label: 'Trust Killers', value: 'What breaks LinkedIn trust' },
      { icon: CheckCircle2, label: 'Success', value: 'Booked calls, not visits' },
    ],
  },
  {
    number: '02',
    title: 'You Approve Everything',
    titleAccent: 'in Writing (2–3 days)',
    duration: 'Zero surprises',
    tag: 'Written contract',
    description: 'Before a single line of code, every feature, every flow, every page is documented. You read it. You approve it. You sign off. That document is the contract. Nothing gets built without your green light. Zero surprises. Zero scope creep.',
    details: [
      { icon: CheckCircle2, label: 'Feature Specs', value: 'Complete breakdown' },
      { icon: Code, label: 'Page Layout', value: 'Every screen mapped' },
      { icon: Sparkles, label: 'User Flow', value: 'How people convert' },
    ],
  },
  {
    number: '03',
    title: 'I Build It. You',
    titleAccent: 'Watch It Happen',
    duration: 'Project-dependent',
    tag: 'Real progress updates',
    description: "You get real progress updates—not \"still working on it.\" If something comes up, you hear about it immediately. If something's not landing, we fix it before it's finished. You stay in the loop the entire time. No radio silence. No last-minute surprises.",
    details: [
      { icon: Code, label: 'Development', value: 'Daily transparency' },
      { icon: Sparkles, label: 'AI Chat Setup', value: 'Lead qualification' },
      { icon: Zap, label: 'Your Voice', value: 'Brand alignment' },
    ],
  },
  {
    number: '04',
    title: 'You Launch & Own',
    titleAccent: 'It Completely',
    duration: '1–2 days',
    tag: 'Your asset forever',
    description: "Deployed, documented, and fully explained. You get the code, the deployment setup, and a walkthrough until you understand it completely. This is yours—not mine. Hand it to another developer tomorrow if you want. Launch with confidence.",
    details: [
      { icon: CheckCircle2, label: 'Live Deploy', value: 'Full walkthrough' },
      { icon: Sparkles, label: 'Documentation', value: 'You understand it all' },
      { icon: Zap, label: 'Support', value: '24-hour replies' },
    ],
  },
];

/* ── Section ── */
export default function Process() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 font-sans" id="process">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-4"
          >
            The Process
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
            No surprises.{' '}
            <span className="text-[#00572B]">No vague timelines.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Four simple steps. You know exactly where things stand every single day.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="space-y-0">
          {STEPS.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 text-center"
        >
          <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Every coach and consultant goes through this exact process. It works because it removes the guesswork—for both of us.
          </p>
          <motion.a
            href="mailto:muhammadwaheedairi@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00572B] text-white text-base font-semibold rounded-lg hover:bg-[#004A24] hover:shadow-xl hover:shadow-[#00572B]/30 transition-all"
          >
            Let&apos;s Talk
            <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
