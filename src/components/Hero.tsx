import { ArrowRight } from "lucide-react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";

export const Hero = () => {
  const { hero } = LENDRA_CONTENT;

  return (
    <Section className="min-h-screen flex items-end pt-32 pb-20">
      <div className="relative z-10 grid w-full grid-cols-1 md:grid-cols-12">
        <div className="hidden md:block md:col-span-3" />

        <div className="md:col-span-9 lg:col-span-8 lg:col-start-5 flex max-w-4xl flex-col items-start justify-end text-left">
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-8 text-balance max-w-5xl">
              {hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-brand-muted max-w-2xl mb-10 leading-relaxed">
              {hero.subtext}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
              <button className="w-full sm:w-auto bg-white text-brand-midnight px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all duration-300 flex items-center justify-center gap-2 group">
                {hero.primaryCTA}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full font-bold transition-all duration-300">
                {hero.secondaryCTA}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
