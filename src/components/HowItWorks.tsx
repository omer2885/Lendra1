import { motion } from "motion/react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";

export const HowItWorks = () => {
  const { howItWorks } = LENDRA_CONTENT;

  return (
    <Section id="how-it-works" className="bg-brand-charcoal">
      <div className="mb-20">
        <FadeIn>
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {howItWorks.title}
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl">
            {howItWorks.content}
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-5 gap-8 relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 hidden md:block" />
        
        {howItWorks.steps.map((step, i) => (
          <div key={i}>
            <FadeIn delay={i * 0.1}>
              <div className="relative z-10 group">
                <div className="w-12 h-12 rounded-full bg-brand-midnight border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-accent transition-colors duration-500">
                  <span className="font-mono text-sm font-bold text-brand-accent">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-brand-accent transition-colors">
                  {step.label}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
};
