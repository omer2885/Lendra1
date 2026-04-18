import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";

const CapitalTimingVideo = () => {
  return (
    <div className="relative h-[22rem] w-full overflow-hidden rounded-[1.75rem] border border-black/8 bg-[#f7f8f3]/70 shadow-[0_24px_80px_rgba(94,119,116,0.16)] backdrop-blur-sm md:h-[30rem] lg:h-[38rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(175,194,110,0.26),transparent_24%),radial-gradient(circle_at_18%_36%,rgba(128,232,225,0.16),transparent_26%)]" />
      <video
        className="relative z-10 block h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/Capital%20for%20timing%20gaps.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export const WhatLendraDoes = () => {
  const { whatWeDo } = LENDRA_CONTENT;

  return (
    <Section id="what-we-do" className="capital-timing-section">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-20">
        <FadeIn direction="left" delay={0.2} className="w-full">
          <CapitalTimingVideo />
        </FadeIn>

        <div className="lg:flex lg:justify-center">
          <FadeIn direction="right" className="max-w-[42rem] text-left">
            <span className="mb-5 block font-mono text-xs uppercase tracking-[0.22em] text-[#6c7a77]">
              The Mechanism
            </span>
            <h2 className="mb-8 max-w-[34rem] font-display text-4xl font-bold leading-[0.98] tracking-tight text-[#141716] md:text-5xl xl:text-[4rem]">
              {whatWeDo.title}
            </h2>
            <p className="max-w-[36rem] text-[1.15rem] leading-[1.8] text-[#5e6966]">
              {whatWeDo.content}
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
