import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";

export const Positioning = () => {
  const { positioning } = LENDRA_CONTENT;

  return (
    <section className="positioning-gradient-section relative overflow-hidden border-y border-white/5 bg-brand-midnight px-6 h-[80svh] md:px-12 lg:px-24 lg:h-auto">
      <div className="mx-auto flex min-h-[36rem] max-w-[112rem] flex-col gap-8 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-0">
        <FadeIn direction="right" className="relative z-10 max-w-2xl pt-16 md:pt-20 lg:py-16">
          <h2 className="mb-4 text-brand-accent font-mono text-xs uppercase tracking-widest">
            Positioning
          </h2>
          <p className="max-w-2xl font-display text-3xl leading-[1.08] text-white text-balance md:text-4xl lg:text-5xl">
            {positioning}
          </p>
        </FadeIn>

        <FadeIn
          direction="left"
          className="relative z-10 flex min-h-[20rem] items-end justify-center self-stretch md:min-h-[24rem] lg:min-h-[28rem] lg:justify-end"
        >
          <img
            src="/Section%202.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain scale-[1.9] translate-x-[-27%] translate-y-[15%] lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:object-right sm:w-[120%] opacity-100"
          />
        </FadeIn>
      </div>
    </section>
  );
};
