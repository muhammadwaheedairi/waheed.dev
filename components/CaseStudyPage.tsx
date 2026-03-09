'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Cpu, Target, Zap } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import Footer from './Footer';

export default function CaseStudyPage({ slug }: { slug: string }) {
  const router = useRouter();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const goBack = () => {
    sessionStorage.setItem('scrollTo', '#projects');
    router.push('/');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">PROJECT NOT FOUND</h1>
        <p className="text-white/40 mb-8 text-sm">The system could not locate the requested module.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-primary text-bg-dark font-bold text-sm">
          RETURN TO BASE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-primary selection:text-bg-dark">

      {/* Back button */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <button
          onClick={goBack}
          className="glass p-3 rounded-xl pointer-events-auto hover:border-primary/40 transition-all group w-10 h-10 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <main className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">

          {/* ── Hero ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 sm:mb-16 md:mb-20">

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.25em]">// CASE_STUDY</span>
              <div className="h-[1px] w-6 bg-primary/30" />
              <span className="text-[9px] sm:text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{project.type}</span>
            </div>

            {/* clamp: 1.75rem on tiny screens → 6rem on wide screens */}
            <h1
              className="font-black mb-4 uppercase"
              style={{
                fontSize: 'clamp(1.75rem, 7vw, 6rem)',
                letterSpacing: 'clamp(-0.01em, -0.03em, -0.05em)',
                lineHeight: '0.95',
                wordBreak: 'break-word',
              }}
            >
              {project.title}
            </h1>

            <p
              className="text-white/60 font-light leading-relaxed max-w-2xl"
              style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1.25rem)' }}
            >
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-wider">
                {project.status}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-white/40 uppercase tracking-wider">
                {project.duration}
              </span>
            </div>
          </motion.div>

          {/* ── Highlights ── */}
          {project.highlights?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-10 sm:mb-16 md:mb-20"
            >
              {project.highlights.map((h, i) => (
                <div key={i} className="glass p-3 sm:p-4 md:p-5 rounded-xl border-white/5 text-center">
                  <p
                    className="font-black text-primary mb-1 leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2.25rem)' }}
                  >
                    {h.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-mono text-white/30 uppercase tracking-[0.1em] leading-snug">
                    {h.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── CTA buttons — mobile full width, above content ── */}
          {(project.github || project.demo) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="flex gap-3 mb-8 sm:mb-12 lg:hidden"
            >
              {project.github && (
                <a
                  href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold"
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                  SOURCE
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-bg-dark text-xs font-bold"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  LIVE DEMO
                </a>
              )}
            </motion.div>
          )}

          {/* ── Problem / Solution / Result + Sidebar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 sm:mb-16 md:mb-20">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              <Section icon={Target} title="THE PROBLEM"  content={project.problem}  delay={0.2} />
              <Section icon={Cpu}    title="THE SOLUTION" content={project.solution} delay={0.3} />
              <Section icon={Zap}    title="THE RESULT"   content={project.result}   delay={0.4} />
            </div>

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="glass p-6 rounded-2xl border-white/5"
              >
                <h3 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-4">TECH STACK</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                className="flex flex-col gap-3"
              >
                {project.github && (
                  <a
                    href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm">VIEW SOURCE</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary text-bg-dark hover:scale-[1.02] transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-bold text-sm">LIVE DEMO</span>
                  </a>
                )}
              </motion.div>
            </aside>
          </div>

          {/* ── Tech stack — mobile only ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="lg:hidden glass p-4 rounded-xl border-white/5 mb-10 sm:mb-14"
          >
            <h3 className="text-[9px] sm:text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-3">TECH STACK</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span key={i} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Deep-dive sections ── */}
          {project.sections?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="border-t border-white/5 pt-10 sm:pt-16 mb-10 sm:mb-16"
            >
              <div className="flex items-center gap-3 mb-8 sm:mb-12">
                <span className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.25em]">// DEEP_DIVE</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>

              <div className="space-y-10 sm:space-y-12">
                {project.sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-[10px] font-mono text-primary/40 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')} —
                      </span>
                      <p className="text-[10px] sm:text-xs font-mono text-primary/60 uppercase tracking-[0.15em] leading-relaxed">
                        {section.title}
                      </p>
                    </div>
                    <p
                      className="text-white/70 leading-relaxed font-light"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
                    >
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Back link ── */}
          <div className="border-t border-white/5 pt-8 sm:pt-12">
            <button
              onClick={goBack}
              className="text-[9px] sm:text-[10px] font-mono text-white/20 hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Back to Portfolio
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  content,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  delay: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="p-1.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <h2 className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{title}</h2>
      </div>
      <p
        className="font-light text-white/80 leading-relaxed"
        style={{ fontSize: 'clamp(0.9375rem, 2.2vw, 1.375rem)' }}
      >
        {content}
      </p>
    </motion.div>
  );
}