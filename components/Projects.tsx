'use client';

import { motion } from 'motion/react';
import { PROJECTS } from '@/lib/constants';

/* ══════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════ */
function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" />
      <polyline points="15 3 21 3 21 9" strokeLinecap="round" />
      <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   FILTERED PROJECTS
══════════════════════════════════════════════════ */
const FILTERED = PROJECTS.filter(p => p.slug !== 'personal-ai-employee');

/* ══════════════════════════════════════════════════
   PROJECT CARD
══════════════════════════════════════════════════ */
function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Top divider — turns green on hover */}
      <div className="h-px bg-gray-200 group-hover:bg-[#00572B] transition-colors duration-300" />

      {/* ── MOBILE layout (< sm): stacked ── */}
      <div className="block sm:hidden py-6">

        {/* Number + type pill row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-4xl font-black leading-none select-none text-gray-100 group-hover:text-[#E0F2EA] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-jakarta, sans-serif)', letterSpacing: '-0.04em' }}
          >
            {num}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-gray-200 text-gray-400">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 font-sans">
          {project.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="font-black text-[#00572B]">
            {project.title.split(' ').slice(-1)[0]}
          </span>
        </h3>

        {/* Tagline */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Tech badges — wrap freely */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-[#F0F7F4] border border-[#C8E8D8] text-[#00572B]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 text-[11px] font-semibold text-gray-500 active:bg-[#F0F7F4] active:text-[#00572B] transition-all"
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#00572B] text-[11px] font-semibold text-white active:bg-[#004A24] transition-all"
            >
              <LiveIcon />
              Live
            </a>
          )}
        </div>
      </div>

      {/* ── DESKTOP layout (≥ sm): side-by-side number + content ── */}
      <div className="hidden sm:grid sm:grid-cols-[96px_1fr] lg:grid-cols-[120px_1fr] gap-0 py-10">

        {/* Giant number */}
        <div className="flex items-start pt-1">
          <span
            className="text-[72px] lg:text-[80px] font-black leading-none select-none transition-colors duration-300 text-gray-100 group-hover:text-[#E0F2EA]"
            style={{ fontFamily: 'var(--font-jakarta, sans-serif)', letterSpacing: '-0.04em' }}
          >
            {num}
          </span>
        </div>

        {/* Content */}
        <div className="pl-6 lg:pl-8">

          {/* Type pill + links row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-gray-200 text-gray-400">
              {project.type}
            </span>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-[11px] font-semibold text-gray-500 hover:border-[#99D9B8] hover:text-[#00572B] hover:bg-[#F0F7F4] transition-all"
                >
                  <GithubIcon />
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00572B] text-[11px] font-semibold text-white hover:bg-[#004A24] transition-all"
                >
                  <LiveIcon />
                  Live
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 font-sans">
            {project.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-black text-[#00572B]">
              {project.title.split(' ').slice(-1)[0]}
            </span>
          </h3>

          {/* Tagline */}
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xl">
            {project.tagline}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F0F7F4] border border-[#C8E8D8] text-[#00572B]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════ */
export default function Projects() {
  return (
    <section className="bg-white py-16 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="projects">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            Proof of Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.12] font-sans">
              Projects that{' '}
              <span className="font-black text-[#00572B]">
                shipped.
              </span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed sm:text-right">
              Not demos. Working software that solved real problems.
            </p>
          </div>
        </motion.div>

        {/* Project list */}
        <div>
          {FILTERED.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom border */}
        <div className="h-px bg-gray-200 mt-0" />

      </div>
    </section>
  );
}