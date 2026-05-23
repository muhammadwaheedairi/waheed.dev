'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Zap, Code, MessageCircle, TrendingUp, Shield } from 'lucide-react';
import { useState } from 'react';

/* ══════════════════════════════════════════════════
   CARD VISUALS — unchanged
══════════════════════════════════════════════════ */

function DeliveryVisual() {
  const milestones = [
    { x: 30,  label: 'Kick-off', done: true  },
    { x: 96,  label: 'Spec',     done: true  },
    { x: 162, label: 'Build',    done: true  },
    { x: 228, label: 'Ship',     done: false },
  ];
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 258 60" className="w-full h-auto" fill="none">
        <rect x="30" y="26" width="198" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="30" y="26" width="148" height="3" rx="1.5" fill="#00572B" />
        {milestones.map(({ x, label, done }) => (
          <g key={label}>
            <circle cx={x} cy="27" r="7" fill={done ? '#00572B' : 'white'} stroke={done ? '#00572B' : '#d1d5db'} strokeWidth="1.8" />
            {done && <path d={`M${x-3} 27 l2 2 l4-4`} stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />}
            <text x={x} y="48" textAnchor="middle" fontSize="7.5" fill={done ? '#00572B' : '#9ca3af'} fontWeight={done ? '600' : '400'}>{label}</text>
          </g>
        ))}
      </svg>
      <div className="flex justify-end mt-1">
        <span className="px-3 py-1 bg-[#F0F7F4] border border-[#D0EFE3] rounded-full text-[10px] font-semibold text-[#004A24]">2–6 weeks avg.</span>
      </div>
    </div>
  );
}

function ContractVisual() {
  const rows = [
    { y: 42,  w: 130, checked: true  },
    { y: 62,  w: 105, checked: true  },
    { y: 82,  w: 118, checked: true  },
    { y: 102, w: 90,  checked: false },
  ];
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 240 128" className="w-full h-auto" fill="none">
        <rect x="20" y="8" width="200" height="112" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <rect x="36" y="22" width="80" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="36" y="30" width="50" height="4" rx="2" fill="#f3f4f6" />
        {rows.map(({ y, w, checked }, i) => (
          <g key={i}>
            <rect x="36" y={y} width="10" height="10" rx="2" fill={checked ? '#00572B' : 'white'} stroke={checked ? '#00572B' : '#d1d5db'} strokeWidth="1.2" />
            {checked && <path d={`M38.5 ${y+5} l2 2 l3.5-3.5`} stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />}
            <rect x="52" y={y+2} width={w} height="5" rx="2.5" fill={checked ? '#E0F2EA' : '#f3f4f6'} />
          </g>
        ))}
        <line x1="36" y1="118" x2="204" y2="118" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M40 115 q8-6 16 2 q8 6 16-2 q8-6 12 0" stroke="#00572B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function CodeVisual() {
  const codeLines = [
    { indent: 0,  w: 60,  color: '#80C9A0' },
    { indent: 16, w: 90,  color: '#bfdbfe' },
    { indent: 16, w: 70,  color: '#fde68a' },
    { indent: 16, w: 100, color: '#bfdbfe' },
    { indent: 16, w: 55,  color: '#fde68a' },
    { indent: 0,  w: 30,  color: '#80C9A0' },
    { indent: 0,  w: 0,   color: 'transparent' },
    { indent: 0,  w: 60,  color: '#80C9A0' },
    { indent: 16, w: 80,  color: '#bfdbfe' },
    { indent: 16, w: 50,  color: '#fde68a' },
  ];
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 240 130" className="w-full h-auto" fill="none">
        <rect x="10" y="8" width="220" height="114" rx="10" fill="#1e1e2e" />
        <circle cx="26" cy="22" r="4" fill="#ff5f57" />
        <circle cx="40" cy="22" r="4" fill="#febc2e" />
        <circle cx="54" cy="22" r="4" fill="#28c840" />
        {codeLines.map((_, i) => <text key={i} x="20" y={40 + i * 9} fontSize="6" fill="#4b5563" fontFamily="monospace">{i + 1}</text>)}
        {codeLines.map((line, i) => line.w > 0 && <rect key={i} x={32 + line.indent} y={35 + i * 9} width={line.w} height="5" rx="2" fill={line.color} opacity="0.7" />)}
        <rect x="32" y="125" width="2" height="7" rx="1" fill="#00572B" opacity="0.9" />
      </svg>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 240 110" className="w-full h-auto" fill="none">
        <rect x="10" y="8" width="130" height="28" rx="12" fill="#f3f4f6" />
        <rect x="22" y="18" width="70" height="5" rx="2.5" fill="#d1d5db" />
        <rect x="22" y="26" width="50" height="4" rx="2" fill="#e5e7eb" />
        <rect x="90" y="44" width="140" height="28" rx="12" fill="#E0F2EA" />
        <rect x="102" y="54" width="90" height="5" rx="2.5" fill="#80C9A0" />
        <rect x="102" y="62" width="60" height="4" rx="2" fill="#99D9B8" />
        <rect x="10" y="80" width="110" height="24" rx="12" fill="#f3f4f6" />
        <rect x="22" y="89" width="60" height="5" rx="2.5" fill="#d1d5db" />
        <rect x="135" y="80" width="52" height="24" rx="12" fill="#E0F2EA" />
        <circle cx="148" cy="92" r="2.5" fill="#00572B" />
        <circle cx="157" cy="92" r="2.5" fill="#00572B" opacity="0.6" />
        <circle cx="166" cy="92" r="2.5" fill="#00572B" opacity="0.3" />
        <rect x="194" y="82" width="42" height="18" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="215" y="94" textAnchor="middle" fontSize="6.5" fill="#00572B" fontWeight="700">&lt; 24h</text>
      </svg>
    </div>
  );
}

function FunnelVisual() {
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 240 100" className="w-full h-auto" fill="none">
        {[
          { y: 8,  w: 200, h: 20, label: 'Visitors',  pct: '100%', color: '#E0F2EA', stroke: '#99D9B8' },
          { y: 32, w: 155, h: 20, label: 'Leads',     pct: '42%',  color: '#99D9B8', stroke: '#80C9A0' },
          { y: 56, w: 110, h: 20, label: 'Prospects', pct: '18%',  color: '#80C9A0', stroke: '#66C99A' },
          { y: 80, w: 65,  h: 16, label: 'Clients',   pct: '9%',   color: '#00572B', stroke: '#004A24' },
        ].map(({ y, w, h, label, pct, color, stroke }) => {
          const cx = 120, x = cx - w / 2;
          return (
            <g key={label}>
              <rect x={x} y={y} width={w} height={h} rx="4" fill={color} stroke={stroke} strokeWidth="1" />
              <text x={cx} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="7.5" fill={label === 'Clients' ? 'white' : '#004A24'} fontWeight="600">{label}</text>
              <text x={cx + w / 2 + 6} y={y + h / 2 + 3.5} fontSize="7" fill="#9ca3af" fontWeight="500">{pct}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function QualityVisual() {
  return (
    <div className="mt-5 w-full">
      <svg viewBox="0 0 240 110" className="w-full h-auto" fill="none">
        <circle cx="120" cy="55" r="46" stroke="#004A24" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="120" cy="55" r="32" stroke="#004A24" strokeWidth="1.5" />
        <circle cx="120" cy="55" r="18" fill="#00572B" />
        <text x="120" y="52" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">CLEAN</text>
        <text x="120" y="62" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">CODE</text>
        {[
          { angle: -60,  label: 'Tested'     },
          { angle: 20,   label: 'Documented' },
          { angle: 110,  label: 'Scalable'   },
          { angle: 200,  label: 'Maintained' },
        ].map(({ angle, label }) => {
          const rad = (angle * Math.PI) / 180;
          const dx = Math.cos(rad), dy = Math.sin(rad);
          return (
            <g key={label}>
              <circle cx={120 + dx * 32} cy={55 + dy * 32} r="4" fill="white" />
              <text x={120 + dx * 48} y={55 + dy * 48 + 2.5} textAnchor="middle" fontSize="6.5" fill="#80C9A0" fontWeight="600">{label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   CARD ICON
══════════════════════════════════════════════════ */
function CardIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative w-10 h-8 mb-4">
      <div className={`absolute left-0 top-0 w-7 h-7 rounded-full border-2 ${dark ? 'border-[#33B97C]' : 'border-gray-200 bg-white'}`} />
      <div className={`absolute left-4 top-0 w-7 h-7 rounded-full border-2 ${dark ? 'border-[#33B97C]' : 'border-gray-200 bg-white'}`} />
      <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-[#006B35] flex items-center justify-center">
        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
          <path d="M2.5 5l2 2 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   CARDS DATA
══════════════════════════════════════════════════ */
const CARDS = [
  {
    icon: Zap,
    title: 'Your Site Goes',
    titleAccent: 'Live in Weeks.',
    body: 'You get a real, working website in 2–6 weeks — not months. Focused sprints, daily progress, no drawn-out back-and-forth.',
    Visual: DeliveryVisual,
    dark: false,
  },
  {
    icon: CheckCircle2,
    title: 'You Approve',
    titleAccent: 'Everything First.',
    body: 'Every feature is agreed in writing before we start. You sign off before a single line of code is written. No surprises — ever.',
    Visual: ContractVisual,
    dark: false,
  },
  {
    icon: Code,
    title: 'Code You',
    titleAccent: 'Actually Own.',
    body: 'Clean, documented code any developer can read. No lock-in. No black box. You own it completely — and can hand it to anyone.',
    Visual: CodeVisual,
    dark: false,
  },
  {
    icon: MessageCircle,
    title: 'You Talk to',
    titleAccent: 'Me. Directly.',
    body: 'No account managers. No middlemen. You message me, I reply — within 24 hours, every time. The person you hired is the person building it.',
    Visual: ChatVisual,
    dark: false,
  },
  {
    icon: TrendingUp,
    title: 'Built to',
    titleAccent: 'Win Clients.',
    body: 'Every design decision is made with one question: will this turn a visitor into a client? If not, it does not make the cut.',
    Visual: FunnelVisual,
    dark: false,
  },
  {
    icon: Shield,
    title: 'Quality That',
    titleAccent: 'Holds Up.',
    body: 'Tested, scalable, and documented from day one. Your website will not break under pressure, growth, or a new developer.',
    Visual: QualityVisual,
    dark: true,
  },
];

/* ══════════════════════════════════════════════════
   FEATURE CARD — React Bits style
══════════════════════════════════════════════════ */
function FeatureCard({
  card,
  index,
  isSelected,
  onSelect,
}: {
  card: (typeof CARDS)[0];
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = card.icon;
  
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative rounded-xl border p-5 text-left transition-all duration-300 w-full overflow-hidden group ${
        isSelected
          ? card.dark
            ? 'bg-[#004A24] border-[#00572B]'
            : 'bg-white border-[#00572B] shadow-lg shadow-[#00572B]/20'
          : card.dark
          ? 'bg-[#004A24] border-[#00572B]/30 hover:border-[#00572B]/60'
          : 'bg-white border-gray-200 hover:border-[#99C4B0]'
      }`}
    >
      {/* Animated background */}
      {isSelected && !card.dark && (
        <motion.div
          layoutId="cardBg"
          className="absolute inset-0 bg-gradient-to-br from-[#F0F7F4] to-white rounded-xl -z-10"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Icon */}
      <motion.div
        animate={{ rotate: isSelected ? 12 : 0 }}
        transition={{ duration: 0.3 }}
        className={`mb-3 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
          isSelected
            ? card.dark
              ? 'bg-[#99D9B8]/20 text-[#99D9B8]'
              : 'bg-[#00572B]/10 text-[#00572B]'
            : card.dark
            ? 'bg-[#99D9B8]/10 text-[#99D9B8]/60'
            : 'bg-gray-100 text-gray-400 group-hover:bg-[#F0F7F4] group-hover:text-[#00572B]'
        }`}
      >
        <Icon className="w-5 h-5" strokeWidth={2} />
      </motion.div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-bold leading-tight mb-1">
        <span className={isSelected ? '' : 'text-gray-900'}>
          {card.title}{' '}
        </span>
        <span className={`${
          isSelected
            ? card.dark
              ? 'text-[#99D9B8]'
              : 'text-[#00572B]'
            : 'text-gray-400'
        }`}>
          {card.titleAccent}
        </span>
      </h3>

      {/* Description (show on selected) */}
      {isSelected && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className={`text-xs leading-relaxed mt-3 ${
            card.dark ? 'text-[#D0EFE3]' : 'text-gray-600'
          }`}
        >
          {card.body}
        </motion.p>
      )}
    </motion.button>
  );
}

/* ══════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════ */
export default function WhyUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCard = CARDS[selectedIndex];
  const SelectedVisual = selectedCard.Visual;

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 font-sans" id="why-us">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-4"
          >
            What You Get
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
            This is what working with{' '}
            <span className="text-[#00572B]">
              the right developer
            </span>
            <br />
            <span className="text-[#00572B]">feels like.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Most businesses have hired a developer who disappeared, missed deadlines,
            or delivered something broken. This is what the alternative looks like.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Features list with React Bits style */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {CARDS.map((card, index) => (
              <FeatureCard
                key={index}
                card={card}
                index={index}
                isSelected={selectedIndex === index}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
          </motion.div>

          {/* Right side - Visual & Details */}
          <motion.div
            className="relative rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-white via-white to-[#F0F7F4]/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={selectedIndex}
          >
            {/* Icon display */}
            <div className="mb-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#F0F7F4] flex items-center justify-center">
                {selectedCard.icon && <selectedCard.icon className="w-7 h-7 text-[#00572B]" strokeWidth={1.5} />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {selectedCard.title}
                  <span className="text-[#00572B]"> {selectedCard.titleAccent}</span>
                </h3>
              </div>
            </div>

            {/* Description */}
            <motion.p
              key={`desc-${selectedIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-sm sm:text-base leading-relaxed mb-8 ${
                selectedCard.dark ? 'text-[#D0EFE3]' : 'text-gray-600'
              }`}
            >
              {selectedCard.body}
            </motion.p>

            {/* Visual */}
            <motion.div
              key={`visual-${selectedIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <SelectedVisual />
            </motion.div>

            {/* Indicator dots */}
            <div className="flex gap-2 mt-8 justify-center">
              {CARDS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  animate={{
                    scale: selectedIndex === index ? 1.2 : 1,
                    backgroundColor: selectedIndex === index ? '#00572B' : '#e5e7eb',
                  }}
                  className="w-2 h-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
