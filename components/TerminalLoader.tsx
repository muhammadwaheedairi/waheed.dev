'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const BOOT_LOGS = [
  '$ booting WaheedAI.systems...',
  '$ loading agentic modules ✓',
  '$ syncing cloud infrastructure ✓',
  '$ SYSTEM ONLINE — Welcome',
];

export default function TerminalLoader({ onComplete }: { onComplete: () => void }) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < BOOT_LOGS.length) {
      const currentLine = BOOT_LOGS[currentLineIndex];
      if (currentCharIndex < currentLine.length) {
        const t = setTimeout(() => setCurrentCharIndex((p) => p + 1), 30);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setVisibleLogs((p) => [...p, currentLine]);
          setCurrentLineIndex((p) => p + 1);
          setCurrentCharIndex(0);
        }, 200);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [currentLineIndex, currentCharIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#020202] flex items-center justify-center p-6 font-mono"
    >
      <div className="max-w-xl w-full">
        <div className="space-y-3">
          {visibleLogs.map((log, i) => (
            <div key={i} className="text-primary text-sm sm:text-base md:text-lg tracking-tight">{log}</div>
          ))}
          {currentLineIndex < BOOT_LOGS.length && (
            <div className="text-primary text-sm sm:text-base md:text-lg tracking-tight flex items-center">
              <span>{BOOT_LOGS[currentLineIndex].substring(0, currentCharIndex)}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-5 bg-primary ml-1 inline-block"
              />
            </div>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_2px]" />
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
    </motion.div>
  );
}
