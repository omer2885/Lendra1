import { lazy, Suspense } from "react";
import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const MagicBento = lazy(() => import("./MagicBento"));

export const YieldSource = () => {
  const { yieldSource } = LENDRA_CONTENT;
  const icons = [TrendingUp, BarChart3, ShieldCheck];
  const bentoClasses = [
    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5 lg:row-span-1",
    "lg:col-span-5 lg:row-span-1",
  ];

  return (
    <Section id="yield" className="bg-brand-midnight">
      <div className="max-w-4xl mb-20 text-left">
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

      <Suspense fallback={null}>
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="128, 232, 225"
          disableAnimations={false}
        >
          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[16.5rem_16.5rem]">
            {yieldSource.pillars.map((pillar, i) => {
              const Icon = icons[i];

              return (
                <div key={pillar.title} className={`h-full ${bentoClasses[i]}`}>
                  <FadeIn delay={i * 0.1} className="h-full">
                    <article
                      data-magic-card
                      className={`magic-bento-card group relative h-full overflow-hidden rounded-[2rem] border-2 border-white/10 ${
                        i === 0
                          ? "bg-[linear-gradient(135deg,#171717,#0d0d0d)] p-8 lg:flex lg:flex-col lg:justify-between lg:p-10"
                          : "bg-[linear-gradient(135deg,#141414,#0c0c0c)] p-7"
                      }`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_24%)] opacity-70" />

                      <div className="relative h-full">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-brand-accent" />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-muted">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className={`${i === 0 ? "max-w-2xl" : "max-w-md"}`}>
                          <h3 className="mb-3 font-display text-2xl font-bold text-white lg:text-3xl">
                            {pillar.title}
                          </h3>
                          <p className={`text-brand-muted leading-relaxed ${i === 0 ? "text-base lg:text-lg" : "text-base"}`}>
                            {pillar.description}
                          </p>
                        </div>

                        {i === 0 ? (
                          <div className="mt-8 grid gap-2 sm:grid-cols-3">
                            <div className="border border-white/8 bg-white/[0.03] px-4 py-5">
                              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                                Source
                              </div>
                              <div className="text-sm font-semibold text-white">
                                Real economic activity
                              </div>
                            </div>
                            <div className="border border-white/8 bg-white/[0.03] px-4 py-5">
                              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                                Mechanism
                              </div>
                              <div className="text-sm font-semibold text-white">
                                Capital usage in motion
                              </div>
                            </div>
                            <div className="border border-white/8 bg-white/[0.03] px-4 py-5">
                              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                                Output
                              </div>
                              <div className="text-sm font-semibold text-white">
                                Transparent yield
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </MagicBento>
      </Suspense>
    </Section>
  );
};
