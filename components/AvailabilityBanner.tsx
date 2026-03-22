'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function AvailabilityBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('availability-banner-dismissed')) setIsVisible(true);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('availability-banner-dismissed', 'true');
    window.dispatchEvent(new CustomEvent('availability-banner-dismissed'));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 36, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-md border-b border-primary/20 overflow-hidden"
        >
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] sm:text-xs font-mono text-primary hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="animate-pulse">🟢</span>
                <span className="hidden sm:inline">Taking on new projects — reply within 24hrs —</span>
                <span className="sm:hidden">Open for projects —</span>
                <span className="font-bold group-hover:translate-x-1 transition-transform">
                  Start a conversation →
                </span>
              </button>
            </div>
            <button
              onClick={dismiss}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-primary" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}