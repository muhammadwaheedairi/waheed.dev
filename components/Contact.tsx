'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_8i9hwgz';
const EMAILJS_TEMPLATE_ID = 'template_3vygkne';
const EMAILJS_PUBLIC_KEY  = 'kNZiXiZOh17XY8H02';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    service_type: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service_type || !form.message) return;
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          message: `Service: ${form.service_type}\nFrom: ${form.email}\n\n${form.message}`,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', service_type: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24" id="contact">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00572B] mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.12] font-[family-name:var(--font-jakarta)]">
            Got a problem worth{' '}
            <span className="font-[family-name:var(--font-playfair)] italic font-black text-[#00572B]">
              solving?
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Tell me what you are trying to build. I will tell you if I can solve it — and how fast.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-start">

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F7F4] border border-[#99D9B8] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#006B35] animate-pulse" />
              <span className="text-xs font-semibold text-[#004A24]">
                Available · Reply within 24hrs
              </span>
            </div>

            {/* Email card */}
            <a
              href="mailto:muhammadwaheedairi@gmail.com"
              className="group flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-[#99D9B8] hover:bg-[#F0F7F4]/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-[#99D9B8] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#00572B] transition-colors" style={{width:'18px',height:'18px'}}>
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m2 7 10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#004A24] transition-colors break-all">
                  muhammadwaheedairi@gmail.com
                </p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0" style={{width:'40px',height:'40px'}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{width:'18px',height:'18px'}} className="text-gray-500">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Location</p>
                <p className="text-sm font-semibold text-gray-700">Karachi, Pakistan 🇵🇰</p>
                <p className="text-xs text-gray-400 mt-0.5">PKT (UTC+5) · Mon–Sat</p>
              </div>
            </div>

            {/* What to expect */}
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">What Happens Next</p>
              <div className="space-y-2.5">
                {[
                  'I read your message within 24 hours',
                  'I reply with honest feedback — can I help, how long, what I need',
                  'No commitment required to reach out',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D0EFE3] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-[#004A24]">
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#D0EFE3] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00572B" strokeWidth="2.5" style={{width:'24px',height:'24px'}}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-jakarta)]">
                  Message Received
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  I will review your project brief and reply within 24 hours. Check your inbox.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-semibold text-[#00572B] hover:underline underline-offset-4 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="John Smith" required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#33B97C] focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Your Email
                    </label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="john@company.com" required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#33B97C] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    What Do You Need?
                  </label>
                  <select
                    name="service_type" value={form.service_type}
                    onChange={handleChange} required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#33B97C] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Pick the closest match...</option>
                    <option value="AI Automation">AI Automation — automate my workflows</option>
                    <option value="Full-Stack Product Build">Full-Stack Build — build my product</option>
                    <option value="Frontend & UI Engineering">Frontend — build my design / landing page</option>
                    <option value="Not sure yet">Not sure yet — let&apos;s figure it out</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    What Are You Building?
                  </label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} rows={4} required
                    placeholder="Describe the problem you are trying to solve. What does success look like? When do you need it?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#33B97C] focus:bg-white transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500 font-medium">
                    Something went wrong. Email me directly at muhammadwaheedairi@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-[#00572B] text-white font-semibold rounded-full text-sm hover:bg-[#004A24] hover:shadow-lg hover:shadow-[#00572B]/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:'16px',height:'16px'}}>
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-gray-400">
                  No spam. No commitment. Just a reply within 24hrs.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}