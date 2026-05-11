'use client';

import { motion } from 'motion/react';
import { ArrowRight, Clock, Star, Zap } from 'lucide-react';

/* ── SVG Icons ───────────────────────────────────── */
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 .77 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

/* ── Data ────────────────────────────────────────── */
const socials = [
  { Icon: GithubIcon,   href: 'https://github.com/muhammadwaheedairi',       label: 'GitHub'   },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/in/muhammadwaheedairi',  label: 'LinkedIn' },
  { Icon: ThreadsIcon,  href: 'https://www.threads.net/@muhammadwaheedairi', label: 'Threads'  },
  { Icon: MediumIcon,   href: 'https://medium.com/@muhammadwaheedairi',      label: 'Medium'   },
];

const trust = [
  { icon: Zap,   label: 'Live in 2–6 Weeks'   },
  { icon: Clock, label: 'Reply Within 24hrs'   },
  { icon: Star,  label: 'Zero Scope Surprises' },
];

/* ── Component ───────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden bg-white font-sans">

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-[#CCE5DA] mix-blend-multiply blur-3xl opacity-40"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[#99C4B0] mix-blend-multiply blur-3xl opacity-25"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 bg-[#F0F7F4] border border-[#99C4B0] rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#00572B] animate-pulse" />
          <span className="text-xs font-semibold text-[#00572B] tracking-widest uppercase">
            Taking on new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mb-5 leading-[1.08]"
        >
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
            Websites That Make
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-[#00572B]">
            Clients Choose You First.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8"
        >
          I build websites that make the right clients say{' '}
          <span className="text-black font-semibold">
            &ldquo;this is exactly who I need.&rdquo;
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-9"
        >
          <motion.a
            href="mailto:muhammadwaheedairi@gmail.com"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00572B] text-white font-semibold text-sm rounded-full hover:bg-[#004A24] hover:shadow-xl hover:shadow-[#00572B]/25 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#66C99A] animate-pulse" />
            Fix My Website
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold text-sm rounded-full hover:border-[#33B97C] hover:text-[#00572B] hover:bg-[#F0F7F4] transition-all"
          >
            See Proof It Works
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-7 mb-10 text-sm text-gray-500"
        >
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-[#00572B]" strokeWidth={2} />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="flex items-center justify-center gap-4 mb-5"
        >
          <div className="h-px w-16 bg-gray-200" />
          <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
            Find me on
          </span>
          <div className="h-px w-16 bg-gray-200" />
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#00572B] hover:border-[#33B97C] hover:bg-[#F0F7F4] transition-all"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}