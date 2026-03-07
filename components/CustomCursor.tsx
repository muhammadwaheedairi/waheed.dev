'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ringRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"]'));
      setIsTextHovering(!!target.closest('p, h1, h2, h3, h4, h5, h6, span, li, label') && !target.closest('a, button'));
    };
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    let rafId: number;
    const lerp = (s: number, e: number, f: number) => s + (e - s) * f;
    const animate = () => {
      ringPosRef.current.x = lerp(ringPosRef.current.x, ringRef.current.x, 0.12);
      ringPosRef.current.y = lerp(ringPosRef.current.y, ringRef.current.y, 0.12);
      const el = document.getElementById('cursor-ring');
      if (el) el.style.transform = `translate3d(${ringPosRef.current.x - (isHovering ? 22 : 14)}px, ${ringPosRef.current.y - (isHovering ? 22 : 14)}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  useEffect(() => { ringRef.current = mousePosition; }, [mousePosition]);

  if (isMobile || !isVisible || isTextHovering) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3, scale: isHovering ? 0 : 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5, x: { duration: 0 }, y: { duration: 0 } }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full"
      />
      <div
        id="cursor-ring"
        className={`fixed top-0 left-0 rounded-full border-[1.5px] border-primary transition-[width,height,background-color] duration-300 ease-out ${
          isHovering ? 'w-[44px] h-[44px] bg-primary/15' : 'w-[28px] h-[28px] bg-transparent'
        }`}
      />
    </div>
  );
}
