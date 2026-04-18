import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";

export const Positioning = () => {
  const { positioning } = LENDRA_CONTENT;

  return (
    <section className="positioning-gradient-section relative overflow-hidden border-y border-white/5 bg-brand-midnight px-6 md:px-12 lg:px-24">
      <div className="mx-auto grid min-h-[36rem] max-w-[112rem] items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0">
        <FadeIn direction="right" className="relative z-10 max-w-2xl py-16 md:py-20">
          <h2 className="mb-4 text-brand-accent font-mono text-xs uppercase tracking-widest">
            Positioning
          </h2>
          <p className="max-w-2xl font-display text-3xl leading-[1.08] text-white text-balance md:text-4xl lg:text-5xl">
            {positioning}
          </p>
        </FadeIn>

        <FadeIn
          direction="left"
          className="relative z-10 hidden min-h-[28rem] items-end justify-end self-stretch lg:flex"
        >
          <img
            src="/Section%202.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-right-bottom opacity-100"
          />
        </FadeIn>
      </div>
    </section>
  );
};
