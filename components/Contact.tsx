'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeSpeed" viewBox="0 0 512 512">
      <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z"/>
      <path fill="currentColor" fillRule="nonzero" d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"/>
    </svg>
  );
}

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-12 lg:px-24 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-20 lg:p-32 overflow-hidden relative border-white/5">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 blur-[100px] sm:blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 blur-[100px] sm:blur-[150px] translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="h-[1px] w-8 sm:w-12 bg-primary" />
                <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-[0.3em]">Connection</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.9]">LET&apos;S <span className="text-gradient">SYNC.</span></h2>
              <p className="text-white/40 text-base sm:text-xl font-light mb-10 sm:mb-16 max-w-md leading-relaxed">Available for high-impact AI Agent development, Digital FTE architecture, and intelligent automation consulting.</p>
              <div className="space-y-8 sm:space-y-10">
                <motion.a href="mailto:muhammadwaheedairi@gmail.com" whileHover={{ x: 10 }} className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all duration-500 shadow-xl">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-white/20 uppercase tracking-widest mb-0.5 sm:mb-1">Direct_Mail</div>
                    <span className="text-base sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors break-all">muhammadwaheedairi@gmail.com</span>
                  </div>
                </motion.a>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-white/20 uppercase tracking-widest mb-0.5 sm:mb-1">Location</div>
                    <span className="text-base sm:text-xl font-bold">Karachi, Pakistan</span>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-8">
                  {[
                    { icon: Github,   href: 'https://github.com/muhammadwaheedairi' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadwaheedairi' },
                    { icon: ThreadsIcon, href: 'https://www.threads.net/@muhammadwaheedairi' },
                    { icon: MediumIcon,  href: 'https://medium.com/@muhammadwaheedairi' },
                  ].map((s, i) => (
                    <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-500">
                      <s.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8 uppercase tracking-tight">Initialize Connection</h3>
                <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-mono text-white/20 uppercase tracking-widest ml-1">Identity</label>
                      <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-all placeholder:text-white/10 text-sm" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-mono text-white/20 uppercase tracking-widest ml-1">Endpoint</label>
                      <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-all placeholder:text-white/10 text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[8px] sm:text-[10px] font-mono text-white/20 uppercase tracking-widest ml-1">Payload</label>
                    <textarea placeholder="Transmission details..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-primary transition-all resize-none placeholder:text-white/10 text-sm" />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    className="w-full py-4 sm:py-5 bg-primary text-bg-dark font-black rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] transition-all text-sm sm:text-base">
                    SEND TRANSMISSION <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}