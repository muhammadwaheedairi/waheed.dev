'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const NAME = 'MUHAMMAD WAHEED';
const SUB = 'Your idea deserves to be built right.';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [name, setName] = useState('');
  const [sub, setSub] = useState('');
  const [phase, setPhase] = useState<'name' | 'sub' | 'done'>('name');

  useEffect(() => {
    if (phase === 'name') {
      if (name.length < NAME.length) {
        const t = setTimeout(() => setName(NAME.slice(0, name.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('sub'), 250);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'sub') {
      if (sub.length < SUB.length) {
        const t = setTimeout(() => setSub(SUB.slice(0, sub.length + 1)), 30);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('done'), 700);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'done') {
      const t = setTimeout(onComplete, 100);
      return () => clearTimeout(t);
    }
  }, [phase, name, sub, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center px-6"
    >
      {/* Big bold uppercase name — WZWEBS style */}
      <h1
        style={{
          fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
        className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-gray-900 text-center min-h-[1.1em]"
      >
        {name}
        {phase === 'name' && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[4px] h-[0.75em] bg-gray-900 ml-1 align-middle"
          />
        )}
      </h1>

      {/* Subheading — fades in after name */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase !== 'name' ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          letterSpacing: '0.01em',
        }}
        className="mt-4 text-sm sm:text-base text-gray-400 text-center min-h-[1.5em]"
      >
        {sub}
        {phase === 'sub' && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[2px] h-[0.85em] bg-gray-300 ml-0.5 align-middle"
          />
        )}
      </motion.p>
    </motion.div>
  );
}