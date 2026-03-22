'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 lg:px-24 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Photo */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative glass border-white/5"
            >
              <Image
                src="/profile.jpg"
                alt="Muhammad Waheed"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -left-6 glass p-4 rounded-2xl border-primary/20 shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-lg">
                    ⚡
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Available</div>
                    <div className="text-sm font-bold">Open for Projects</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full" />
          </div>

          {/* RIGHT — Story */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">The_Story</span>
            </div>

            {/* Heading — problem aware, not CV style */}
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 leading-none">
              YOUR PROBLEM
              <br />
              DESERVES A{' '}
              <span className="text-gradient">REAL SOLUTION.</span>
            </h2>

            {/* Story — wzwebs style: punchy, client-focused */}
            <div className="space-y-5 text-white/50 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Most businesses sit on a pile of{' '}
                <span className="text-white font-medium">repetitive work</span> that drains time,
                kills focus, and never gets solved — because hiring is expensive and agencies
                are slow.
              </p>
              <p>
                I am <span className="text-white font-medium">Muhammad Waheed</span> — I build
                software that solves that exact problem. AI-powered tools, automation systems,
                and full-stack products that{' '}
                <span className="text-white font-medium">handle the work so you don&apos;t have to.</span>
              </p>
              <p>
                Every project starts with understanding your business — not just writing code.
                I spec everything upfront, build clean, and ship fast.{' '}
                <span className="text-white font-medium">No surprises. No scope creep. Just working software.</span>
              </p>
            </div>

            {/* 3 proof points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { emoji: '🚀', label: 'Ships in', value: '2–6 Weeks' },
                { emoji: '📋', label: 'Process', value: 'Spec-First' },
                { emoji: '🔒', label: 'Privacy', value: 'NDA Ready' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,255,136,0.15)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-4 bg-primary text-bg-dark font-black rounded-xl flex items-center gap-3 group transition-all text-sm"
            >
              LET&apos;S TALK ABOUT YOUR PROJECT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}