import { LENDRA_CONTENT } from "../data/content";
import { HeroGlassButton } from "./HeroGlassButton";

export const Hero = () => {
  const { hero } = LENDRA_CONTENT;

  return (
    <section className="relative h-[100svh] overflow-hidden px-6 pb-4 pt-32 md:px-12 md:pb-6 lg:px-24">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/Hero_Visual.png"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[112rem] items-end">
        <div className="grid w-full grid-cols-1 items-end gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-8">
          <div className="flex w-full max-w-none flex-col items-start justify-end self-end text-left">
            <h1 className="mb-8 font-display text-4xl font-normal leading-[1.08] text-balance md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
              {hero.subtext}
            </p>

          </div>

          <div className="hidden md:flex self-end justify-end">
            <HeroGlassButton label={hero.primaryCTA} />
          </div>
        </div>
      </div>
    </section>
  );
};
