'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';
import { PROJECTS } from '@/lib/constants';
import { ExternalLink, Github, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ['-10deg', '10deg']);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking github/live link buttons
    if ((e.target as HTMLElement).closest('a')) return;
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }} viewport={{ once: true }}
      onMouseMove={onMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={handleCardClick}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative group perspective-1000 cursor-pointer">
      <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-white/5 group-hover:border-primary/30 transition-all duration-500 flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent">
        <div className="flex justify-between items-start mb-6 sm:mb-8" style={{ transform: 'translateZ(50px)' }}>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-primary transition-colors" />
          </div>
          <div className="flex gap-2 sm:gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 hover:text-white" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 hover:text-white" />
              </a>
            )}
          </div>
        </div>
        <div style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[9px] sm:text-[10px] font-mono text-primary/60 uppercase tracking-widest">{project.type}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
          <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow font-light">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(20px)' }}>
          {project.tech.map((t) => (
            <span key={t} className="text-[8px] sm:text-[9px] font-mono px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 group-hover:border-primary/20 transition-colors">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-6 text-[10px] font-mono text-white/20 group-hover:text-primary transition-colors" style={{ transform: 'translateZ(20px)' }}>
          <ArrowUpRight className="w-3 h-3" />
          <span>VIEW CASE STUDY</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-bg-dark/80 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Portfolio_v2</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">FEATURED <span className="text-gradient">SYSTEMS.</span></h2>
            <p className="text-white/40 text-lg font-light">Architecting the next generation of autonomous digital employees and intelligent automation frameworks.</p>
          </div>
          <div className="hidden lg:block">
            <div className="glass px-6 py-4 rounded-2xl border-white/5 flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl font-black text-white">06</div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Active_Nodes</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-primary animate-pulse">●</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}