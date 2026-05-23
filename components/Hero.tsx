'use client';

import { motion } from 'motion/react';
import { ArrowRight, Code, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

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

const features = [
  { icon: Zap, label: 'Live in 2–6 Weeks', desc: 'Actual launch' },
  { icon: CheckCircle2, label: 'Written Approval First', desc: 'Zero surprises' },
  { icon: Sparkles, label: 'You Own the Code', desc: 'Complete control' },
];

/* ── Component ───────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden bg-white font-sans">
      
      {/* Modern gradient background with animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#CCE5DA] mix-blend-multiply blur-3xl opacity-50"
        />
        
        {/* Secondary gradient orb */}
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#99C4B0] mix-blend-multiply blur-3xl opacity-40"
        />

        {/* Accent orb */}
        <motion.div
          animate={{ x: [0, -20, 40, 0], y: [0, 30, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#66C99A] mix-blend-multiply blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Animated status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-[#F0F7F4] to-white border border-[#99C4B0]/40 rounded-full backdrop-blur-sm hover:border-[#99C4B0] transition-all"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00572B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00572B]" />
          </span>
          <span className="text-xs font-semibold text-[#00572B] tracking-widest uppercase">
            Taking on new projects
          </span>
        </motion.div>

        {/* Main headline with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-balance mb-6">
            <span className="block text-black">
              Your Website Loses
            </span>
            <span className="block bg-gradient-to-r from-[#00572B] to-[#33B97C] bg-clip-text text-transparent">
              the Sales Your LinkedIn Wins
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          You build trust on LinkedIn. Your website breaks it in 5 seconds. AI-powered sites that sound like you, convert like crazy, and{' '}
          <span className="font-semibold text-[#00572B]">launch in 2–6 weeks.</span>
        </motion.p>

        {/* Feature highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
        >
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-3 bg-white/50 border border-gray-200/50 rounded-lg backdrop-blur-sm hover:border-[#99C4B0]/50 hover:bg-[#F0F7F4]/30 transition-all">
              <Icon className="w-5 h-5 text-[#00572B] flex-shrink-0" strokeWidth={2} />
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">{label}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="mailto:muhammadwaheedairi@gmail.com"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-[#00572B] text-white font-semibold text-base rounded-lg hover:shadow-2xl hover:shadow-[#00572B]/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#004A24] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Get Started</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-base rounded-lg hover:border-[#00572B] hover:bg-[#F0F7F4] hover:text-[#00572B] transition-all"
          >
            <Code className="w-5 h-5" />
            <span>See My Work</span>
          </motion.a>
        </motion.div>

        {/* Social links divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xs" />
          <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">Connect</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xs" />
        </motion.div>

        {/* Social icons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 bg-white/50 backdrop-blur-sm hover:border-[#00572B] hover:text-[#00572B] hover:bg-[#F0F7F4] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#F0F7F4] opacity-0 group-hover:opacity-100 -z-10 transition-opacity rounded-full" />
              <Icon className="w-5 h-5 relative z-10" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
