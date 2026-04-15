import { lazy, Suspense } from "react";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";

const LightRays = lazy(() => import("./LightRays"));

export const Positioning = () => {
  const { positioning } = LENDRA_CONTENT;

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-brand-midnight px-6 md:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#80e8e1"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={false}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </Suspense>
        </div>
      </div>

      <div className="mx-auto grid min-h-[36rem] max-w-[112rem] items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0">
        <FadeIn direction="right" className="relative z-10 max-w-2xl py-16 md:py-20">
          <h2 className="mb-4 text-brand-accent font-mono text-xs uppercase tracking-widest">
            Positioning
          </h2>
          <p className="max-w-2xl font-display text-3xl leading-[1.08] text-white text-balance md:text-4xl lg:text-5xl">
            {positioning}
          </p>
        </FadeIn>

        <FadeIn direction="left" className="relative z-10 flex min-h-[28rem] items-end justify-end self-stretch">
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
