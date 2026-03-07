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

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">PROJECT NOT FOUND</h1>
        <p className="text-white/40 mb-8">The system could not locate the requested module.</p>
        <Link href="/" className="px-8 py-4 rounded-full bg-primary text-bg-dark font-bold hover:scale-105 transition-transform">RETURN TO BASE</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-primary selection:text-bg-dark">
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <button onClick={() => router.push('/')}
          className="glass p-4 rounded-2xl pointer-events-auto hover:border-primary/40 transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <main className="pt-32 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// CASE_STUDY</span>
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">{project.title.split('-').join(' ')}</h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">{project.tagline}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2 space-y-16">
              <Section icon={Target} title="THE PROBLEM"  content={project.problem}  delay={0.1} />
              <Section icon={Cpu}    title="THE SOLUTION" content={project.solution} delay={0.2} />
              <Section icon={Zap}    title="THE RESULT"   content={project.result}   delay={0.3} />
            </div>
            <aside className="space-y-12">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="glass p-8 rounded-3xl border-white/5">
                <h3 className="text-xs font-mono text-white/20 uppercase tracking-[0.2em] mb-6">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">VIEW SOURCE</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-bg-dark hover:scale-[1.02] transition-all">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-bold">LIVE DEMO</span>
                  </a>
                )}
              </motion.div>
            </aside>
          </div>

          <div className="pt-24 mb-24 border-t border-white/5">
            <button onClick={() => router.push('/')}
              className="text-xs font-mono text-white/20 hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ icon: Icon, title, content, delay }: { icon: React.ComponentType<{ className?: string }>; title: string; content: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary"><Icon className="w-5 h-5" /></div>
        <h2 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{title}</h2>
      </div>
      <p className="text-2xl font-light text-white/80 leading-relaxed">{content}</p>
    </motion.div>
  );
}
