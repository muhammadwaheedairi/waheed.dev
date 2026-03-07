'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, GitBranch, Users } from 'lucide-react';

interface GitHubStats { public_repos: number; public_gists: number; followers: number; }

function StatPill({ icon: Icon, label, value, delay }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string | number; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }} viewport={{ once: true }}
      className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all group/pill">
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/pill:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-2xl font-black text-white">{value}</div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{label}</div>
      </div>
    </motion.div>
  );
}

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/muhammadwaheedairi')
      .then((r) => r.json())
      .then((d) => setStats({ public_repos: d.public_repos, public_gists: d.public_gists, followers: d.followers }))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="github-activity">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">// LIVE_ACTIVITY</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">ALWAYS <span className="text-gradient">SHIPPING.</span></h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="glass p-8 sm:p-12 rounded-[2.5rem] border-white/5 relative group hover:border-primary/20 transition-all duration-500">
          <div className="flex flex-col items-center">
            <div className="w-full overflow-x-auto mb-12 flex justify-center">
              <div className="relative p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:shadow-[0_0_40px_rgba(0,255,136,0.1)] transition-all duration-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://ghchart.rshah.org/00ff88/muhammadwaheedairi" alt="GitHub Contributions"
                  className="max-w-none md:max-w-full" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
              <StatPill icon={Github}    label="Total Repos"  value={loading ? '...' : stats?.public_repos ?? 0} delay={0.1} />
              <StatPill icon={GitBranch} label="Public Gists" value={loading ? '...' : stats?.public_gists ?? 0} delay={0.2} />
              <StatPill icon={Users}     label="Followers"    value={loading ? '...' : stats?.followers ?? 0}    delay={0.3} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
