'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { User, Target, Zap, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-24 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} viewport={{ once: true }}
              className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative glass border-white/5">
              <Image src="/profile.jpg" alt="Muhammad Waheed"
                fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -left-6 glass p-4 rounded-2xl border-secondary/20 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary"><Zap className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Specialization</div>
                    <div className="text-sm font-bold">AI Agent Architect</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">The_Story</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 leading-none">
              REPLACING MANUAL WORK WITH <span className="text-gradient">DIGITAL FTEs.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base sm:text-lg leading-relaxed font-light">
              <p>I am <span className="text-white font-medium">Muhammad Waheed</span>, an AI Agent Developer &amp; Full-Stack Engineer dedicated to building intelligent automation systems that don&apos;t just assist—they execute.</p>
              <p>My mission is to create &quot;Digital Full-Time Equivalents&quot; (FTEs)—autonomous agents that handle complex business logic, RAG-based knowledge retrieval, and multi-step workflows 24/7 without fatigue.</p>
              <p>By combining spec-driven development with cutting-edge LLM orchestration, I help businesses scale through predictable, high-performance AI infrastructure.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: User,   label: 'Experience', value: 'AI & Full-Stack' },
                { icon: Target, label: 'Focus',      value: 'Autonomous Agents' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-sm font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}