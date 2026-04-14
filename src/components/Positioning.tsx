import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";

export const Positioning = () => {
  return (
    <Section className="bg-brand-charcoal border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-8 block">Positioning</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-balance">
            {LENDRA_CONTENT.positioning}
          </h2>
        </FadeIn>
      </div>
    </Section>
  );
};
