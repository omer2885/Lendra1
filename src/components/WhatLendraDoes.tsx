import { motion } from "motion/react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";

const Diagram = () => {
  return (
    <div className="relative h-[400px] w-full glass rounded-3xl overflow-hidden p-8 flex flex-col justify-between">
      <div className="flex justify-between items-center relative z-10">
        <div className="flex flex-col gap-2">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brand-accent animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-brand-muted uppercase">Initiation</span>
        </div>
        
        <div className="flex flex-col gap-2 items-end">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-mono text-brand-muted uppercase">Settlement</span>
        </div>
      </div>

      {/* Capital Bridge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-32 relative">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <motion.path
              d="M 50 50 Q 200 0 350 50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <motion.path
              d="M 50 50 Q 200 0 350 50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="glass px-4 py-2 rounded-full border border-white/15 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-[10px] font-mono font-bold text-brand-accent">LENDRA1 CAPITAL BRIDGE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-brand-midnight/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] font-mono text-brand-muted uppercase mb-1">Timing Gap</div>
            <div className="text-2xl font-display font-bold text-brand-accent">T + 48H</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono text-brand-muted uppercase mb-1">Efficiency</div>
            <div className="text-2xl font-display font-bold">99.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhatLendraDoes = () => {
  const { whatWeDo } = LENDRA_CONTENT;

  return (
    <Section id="what-we-do">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn direction="right">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">The Mechanism</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {whatWeDo.title}
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              {whatWeDo.content}
            </p>
          </FadeIn>
        </div>
        
        <FadeIn direction="left" delay={0.2}>
          <Diagram />
        </FadeIn>
      </div>
    </Section>
  );
};
