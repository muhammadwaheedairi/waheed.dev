'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const router   = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      const id = sessionStorage.getItem('scrollTo');
      if (id) {
        sessionStorage.removeItem('scrollTo');
        setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [pathname]);

  return (
    <footer className="bg-[#003D1E]">

      {/* ── CTA Section ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28">

        {/* Photo LEFT, text RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — big photo */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-[#00572B]/30 blur-3xl scale-90" />

            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/profile.jpg"
                alt="Muhammad Waheed"
                fill
                className="object-cover object-top"
              />

            </div>
          </div>

          {/* RIGHT — text + button */}
          <div className="flex flex-col items-start gap-6">

            {/* Available dot */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#66C99A] animate-pulse" />
              <span className="text-[#66C99A] text-xs font-semibold tracking-widest uppercase">
                Available for projects
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] font-[family-name:var(--font-jakarta)]">
              Have a problem{' '}
              <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#66C99A]">
                worth solving?
              </span>
            </h3>

            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Send me a message. I reply within 24 hours — no commitment required.
            </p>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/923001234567?text=Hi%20Waheed%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 pl-2 pr-6 py-2 bg-[#00572B] hover:bg-[#006B35] rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.02]"
            >
              {/* Avatar with WA badge */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src="/profile.jpg"
                    alt="Muhammad Waheed"
                    width={48}
                    height={48}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center ring-2 ring-[#003D1E]">
                  <svg viewBox="0 0 24 24" fill="white" style={{width:'11px',height:'11px'}}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </div>
              </div>

              <div className="text-left">
                <p className="text-white/60 text-[10px] font-medium leading-none mb-1">
                  Chat with Waheed on
                </p>
                <p className="text-white font-bold text-base leading-none">
                  WhatsApp
                </p>
              </div>

              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all ml-1">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Email fallback */}
            <p className="text-white/25 text-xs -mt-2">
              Or email:{' '}
              <a
                href="mailto:muhammadwaheedairi@gmail.com"
                className="text-white/40 hover:text-[#66C99A] transition-colors underline underline-offset-4"
              >
                muhammadwaheedairi@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Copyright bar ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <a href="#home" className="inline-flex items-baseline gap-1">
            <span className="font-bold text-white/40 text-sm font-[family-name:var(--font-jakarta)]">
              Muhammad
            </span>
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#66C99A]/70 text-base">
              Waheed
            </span>
          </a>
          <p className="text-white/20 text-xs">
            © 2025 · Karachi, Pakistan · Built with Next.js
          </p>
        </div>
      </div>

    </footer>
  );
}