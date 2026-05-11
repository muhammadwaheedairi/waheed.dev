'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-gray-50 py-16 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 font-sans" id="about">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            Who You Are Working With
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12]">
            Meet the{' '}
            <span className="font-black text-[#00572B]">
              expert.
            </span>
          </h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — Photo */}
            <div className="relative aspect-[4/5] lg:aspect-auto min-h-[360px]">
              <Image
                src="/profile.jpg"
                alt="Muhammad Waheed"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-base">
                  Muhammad Waheed
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Full-Stack Developer
                </p>
              </div>

              {/* Available badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 bg-white rounded-xl shadow-md border border-gray-100 px-3.5 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00572B] animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                  Open to projects
                </span>
              </motion.div>
            </div>

            {/* RIGHT — Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">

              {/* Pain badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-gray-50 border-gray-200 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006B35] flex-shrink-0" />
                <span className="text-[11px] font-medium text-gray-500">
                  Not just another freelancer.
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-500 text-sm sm:text-base leading-[1.8] mb-3">
                Hey, I&apos;m Waheed. I&apos;m not here to impress you with tech buzzwords — I&apos;m
                here to build you something that{' '}
                <span className="text-gray-900 font-semibold">
                  actually works for your business.
                </span>
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-[1.8] mb-10">
                Simple process. Clear communication.{' '}
                <span className="text-gray-900 font-semibold">Real results.</span>
              </p>

              {/* Commitments */}
              <div className="space-y-3 mb-10">
                {[
                  'You talk directly to me — the person writing every line of code.',
                  'Nothing gets built without your written approval. Full stop.',
                  'Delivered on time, documented, and yours to own.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#00572B]">
                      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-gray-600 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#00572B] text-white hover:bg-[#004A24] hover:shadow-lg hover:shadow-[#00572B]/30 transition-all w-fit"
              >
                See How I Can Help
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}