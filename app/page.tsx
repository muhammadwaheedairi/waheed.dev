'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="bg-white text-gray-900 overflow-x-hidden">
        <Navbar />

        {/* 1. Hook */}
        <section id="home"><Hero /></section>

        {/* 2. Process — how we work */}
        <section id="process"><Process /></section>

        {/* 3. Why Us — the difference */}
        <section id="why-us"><WhyUs /></section>

        {/* 4. About — who is behind this */}
        <section id="about"><About /></section>

        {/* 5. Services — what I offer */}
        <section id="services"><Services /></section>

        {/* 6. Projects — real proof */}
        <section id="projects"><Projects /></section>

        {/* 7. FAQ — handle objections */}
        <section id="faq"><FAQ /></section>

        {/* 8. Footer CTA — close */}
        <Footer />
      </div>
    </>
  );
}