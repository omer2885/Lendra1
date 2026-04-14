import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

export const YieldSource = () => {
  const { yieldSource } = LENDRA_CONTENT;
  const icons = [TrendingUp, BarChart3, ShieldCheck];

  return (
    <Section id="yield" className="bg-brand-midnight">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <FadeIn>
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">Thesis</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            {yieldSource.title}
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            {yieldSource.content}
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {yieldSource.pillars.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/5 hover:border-brand-accent/30 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">{pillar.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
