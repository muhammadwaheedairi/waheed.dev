'use client';

import { motion } from 'motion/react';

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
    { y: 42, w: 130, checked: true  },
    { y: 62, w: 105, checked: true  },
    { y: 82, w: 118, checked: true  },
    { y: 102, w: 90, checked: false },
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
          { y: 8,  w: 200, h: 20, label: 'Visitors', pct: '100%', color: '#E0F2EA', stroke: '#99D9B8' },
          { y: 32, w: 155, h: 20, label: 'Leads',    pct: '42%',  color: '#99D9B8', stroke: '#80C9A0' },
          { y: 56, w: 110, h: 20, label: 'Prospects', pct: '18%', color: '#80C9A0', stroke: '#66C99A' },
          { y: 80, w: 65,  h: 16, label: 'Clients',  pct: '9%',   color: '#00572B', stroke: '#004A24' },
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
          { angle: -60, label: 'Tested'     },
          { angle: 20,  label: 'Documented' },
          { angle: 110, label: 'Scalable'   },
          { angle: 200, label: 'Maintained' },
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
   CARDS DATA — StoryBrand copy
   Rule: client is hero, I am guide showing outcomes
   Each card = a benefit the CLIENT experiences, not a feature I offer
══════════════════════════════════════════════════ */
const CARDS = [
  {
    title: 'Your Site Goes',
    titleAccent: 'Live in Weeks.',
    // StoryBrand: success — paint the win, remove the fear of long timelines
    body: 'You get a real, working website in 2–6 weeks — not months. Focused sprints, daily progress, no drawn-out back-and-forth.',
    Visual: DeliveryVisual,
    dark: false,
  },
  {
    title: 'You Approve',
    titleAccent: 'Everything First.',
    // StoryBrand: plan — removes risk, shows guide has a clear process
    body: 'Every feature is agreed in writing before we start. You sign off before a single line of code is written. No surprises — ever.',
    Visual: ContractVisual,
    dark: false,
  },
  {
    title: 'Code You',
    titleAccent: 'Actually Own.',
    // StoryBrand: success + failure avoidance — they own the outcome
    body: 'Clean, documented code any developer can read. No lock-in. No black box. You own it completely — and can hand it to anyone.',
    Visual: CodeVisual,
    dark: false,
  },
  {
    title: 'You Talk to',
    titleAccent: 'Me. Directly.',
    // StoryBrand: empathy — removes the internal frustration of bad communication
    body: 'No account managers. No middlemen. You message me, I reply — within 24 hours, every time. The person you hired is the person building it.',
    Visual: ChatVisual,
    dark: false,
  },
  {
    title: 'Built to',
    titleAccent: 'Win Clients.',
    // StoryBrand: external problem solved — website converts, not just looks good
    body: 'Every design decision is made with one question: will this turn a visitor into a client? If not, it does not make the cut.',
    Visual: FunnelVisual,
    dark: false,
  },
  {
    title: 'Quality That',
    titleAccent: 'Holds Up.',
    // StoryBrand: stakes (failure avoided) — not just good now, good long-term
    body: 'Tested, scalable, and documented from day one. Your website will not break under pressure, growth, or a new developer.',
    Visual: QualityVisual,
    dark: true,
  },
];

/* ══════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════ */
export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="why-us">
      <div className="max-w-5xl mx-auto">

        {/* Header — StoryBrand: name what client gets, not what I do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12] font-[family-name:var(--font-jakarta)]">
            This is what working with
            <br className="hidden sm:block" />
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B]">
              the right developer feels like.
            </span>
          </h2>
          {/* StoryBrand: stakes — name the failure they want to avoid */}
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Most businesses have hired a developer who disappeared, missed deadlines,
            or delivered something broken. This is what the alternative looks like.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                card.dark
                  ? 'bg-[#004A24] border-[#00572B] hover:bg-[#003D1E]'
                  : 'bg-white border-gray-100 hover:shadow-md'
              }`}
            >
              <CardIcon dark={card.dark} />

              <h3 className="text-xl sm:text-2xl leading-tight mb-2 font-[family-name:var(--font-jakarta)]">
                <span className={`font-bold ${card.dark ? 'text-white' : 'text-gray-900'}`}>
                  {card.title}{' '}
                </span>
                <span className={`font-[family-name:var(--font-playfair)] italic font-black ${
                  card.dark ? 'text-[#99D9B8]' : 'text-[#00572B]'
                }`}>
                  {card.titleAccent}
                </span>
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                card.dark ? 'text-[#D0EFE3]' : 'text-gray-500'
              }`}>
                {card.body}
              </p>

              <card.Visual />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}