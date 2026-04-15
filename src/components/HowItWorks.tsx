import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const desktopCardClassName =
  "overflow-hidden border border-white/10 bg-[#161616] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]";

const mobileCardClassName =
  "relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm";

export const HowItWorks = () => {
  const { howItWorks } = LENDRA_CONTENT;

  return (
    <section
      id="how-it-works"
      className="relative bg-brand-charcoal px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-[112rem]">
        <div className="mb-4 md:mb-6">
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,40rem)] lg:items-start lg:gap-16">
              <div>
                <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
                  Process
                </span>
                <h2 className="font-display text-4xl font-bold md:text-5xl">
                  Simple
                  <br />
                  structure
                </h2>
              </div>

              <div className="lg:pt-5">
                <p className="max-w-2xl text-lg text-brand-muted">
                  {howItWorks.content}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-28 bg-brand-charcoal" />
          <ScrollStack
            className="how-it-works-stack"
            itemDistance={96}
            itemStackDistance={18}
            stackPosition="12%"
            blurAmount={0}
            rotationAmount={0}
            useWindowScroll
          >
            {howItWorks.steps.map((step, i) => (
              <div key={step.label}>
                <ScrollStackItem itemClassName={desktopCardClassName}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.015),transparent)]" />

                  <div className="relative z-10 grid h-full grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-10 p-12 xl:gap-14">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center border border-white/10 bg-brand-midnight">
                          <span className="font-mono text-xl font-semibold text-brand-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>

                      <div className="max-w-2xl">
                        <h3 className="mb-5 font-display text-4xl font-medium tracking-tight text-white 2xl:text-5xl">
                          {step.label}
                        </h3>
                        <p className="text-lg leading-relaxed text-brand-muted 2xl:text-xl">
                          {step.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-8">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                          PNG placeholder
                        </span>
                      </div>
                    </div>

                    <div className="relative flex h-full min-h-[19rem] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.04]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />

                      <div className="relative flex h-[82%] w-[82%] items-center justify-center border border-dashed border-white/15 bg-brand-midnight/40">
                        <div className="text-center">
                          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-brand-muted">
                            Image slot
                          </p>
                          <p className="mt-3 text-sm text-white/80">
                            PNG goes here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              </div>
            ))}
          </ScrollStack>
        </div>

        <div className="space-y-6 lg:hidden">
          {howItWorks.steps.map((step, i) => (
            <article key={step.label} className={mobileCardClassName}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              <div className="relative z-10 space-y-8 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-brand-midnight">
                    <span className="font-mono text-base font-semibold text-brand-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div>
                  <h3 className="mb-3 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {step.label}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
