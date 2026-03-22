'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import FeaturedInStrip from '@/components/FeaturedInStrip';
import About from '@/components/About';
import LiveStats from '@/components/LiveStats';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TerminalLoader from '@/components/TerminalLoader';
import AvailabilityBanner from '@/components/AvailabilityBanner';
import CommandPalette from '@/components/CommandPalette';

const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas'), { ssr: false });

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (sessionStorage.getItem('scrollTo')) {
      setIsLoading(false);
    }
    const isDismissed = sessionStorage.getItem('availability-banner-dismissed');
    if (!isDismissed) setIsBannerVisible(true);

    const handleDismiss = () => setIsBannerVisible(false);
    window.addEventListener('availability-banner-dismissed', handleDismiss);
    return () => window.removeEventListener('availability-banner-dismissed', handleDismiss);
  }, []);

  return (
    <div className="relative text-white selection:bg-primary selection:text-bg-dark overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <TerminalLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <AvailabilityBanner />
            <CommandPalette />
            <ThreeCanvas />

            <motion.main
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Scroll progress bar */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[101] origin-left"
                style={{ scaleX }}
              />

              <Navbar isBannerVisible={isBannerVisible} />

              <div className="relative z-10">
                {/* 1. Hook */}
                <section id="home"><Hero /></section>

                {/* 2. Pain — client sees themselves */}
                <PainPoints />

                {/* 3. Credibility — recognized by */}
                <FeaturedInStrip />

                {/* 4. Story — who is behind this */}
                <section id="about"><About /></section>

                {/* 5. Numbers — proof */}
                <LiveStats />

                {/* 6. Solution — what I offer */}
                <section id="services"><Services /></section>

                {/* 7. Tools — how I build */}
                <section id="tech"><TechStack /></section>

                {/* 8. Process — how we work together */}
                <section id="process"><Process /></section>

                {/* 9. Work — real proof */}
                <section id="projects"><Projects /></section>

                {/* 10. Objections — handle doubts */}
                <FAQ />

                {/* 11. Close */}
                <section id="contact"><Contact /></section>

                <Footer />
              </div>

              <div className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-3 glass px-4 py-2 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                System Active: Agent_v2.0.4
              </div>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}