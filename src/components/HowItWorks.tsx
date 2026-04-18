import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const desktopCardClassName =
  "!h-[25rem] !p-0 overflow-hidden border border-white/10 bg-[#161616] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]";

const mobileCardClassName =
  "relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm";

const DESKTOP_MEDIA_WIDTH = "29rem";

const simpleStructureCards = [
  {
    label: "Transfer initiated",
    description:
      "Remittance transaction starts on existing rails.",
    mediaLabel: "Transfer initiated",
  },
  {
    label: "Capital bridge provided",
    description:
      "LENDRA1 supplies liquidity to cover timing gaps.",
    mediaLabel: "Capital bridge provided",
  },
  {
    label: "Settlement completed",
    description:
      "Traditional systems finalize the transfer.",
    mediaLabel: "Settlement completed",
  },
  {
    label: "Credit repaid",
    description:
      "Capital returns to the vault with generated yield.",
    mediaLabel: "Credit repaid",
  },
  {
    label: "Capital redeployed",
    description:
      "Liquidity is immediately recycled into new flows.",
    mediaLabel: "Capital redeployed",
  },
] as const;

const DesktopStepCard = ({
  step,
  index,
}: {
  step: { label: string; description: string; mediaLabel: string };
  index: number;
}) => {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.015),transparent)]" />

      <div
        className="relative z-10 flex h-full flex-col px-12 py-10 xl:px-14 xl:py-11"
        style={{ paddingRight: "calc(29rem + 4rem)" }}
      >
        <div>
          <span className="block font-mono text-xs uppercase tracking-[0.18em] text-white/90">
            STEP {index + 1}:
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <h3 className="max-w-xl font-display text-[2rem] font-medium leading-[1] tracking-tight text-white 2xl:text-[2.35rem]">
            {step.label}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-muted xl:text-[1.05rem]">
            {step.description}
          </p>
        </div>

        <div className="flex items-center gap-4 pr-6">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/90">
            {stepNumber}/{String(simpleStructureCards.length).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-white/12" />
        </div>
      </div>

      <div
        className="absolute inset-y-0 right-0 z-10 overflow-hidden border-l border-white/8 bg-black"
        style={{ width: DESKTOP_MEDIA_WIDTH }}
      >
        <video
          key={step.mediaLabel}
          className="block h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={`/Simple%20Structure%20Animations/${encodeURIComponent(step.mediaLabel)}.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export const HowItWorks = () => {
  const { howItWorks } = LENDRA_CONTENT;
  const cards = simpleStructureCards;

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
            {cards.map((step, i) => (
              <div key={step.label}>
                <ScrollStackItem itemClassName={desktopCardClassName}>
                  <DesktopStepCard step={step} index={i} />
                </ScrollStackItem>
              </div>
            ))}
          </ScrollStack>
        </div>

        <div className="space-y-6 lg:hidden">
          {cards.map((step, i) => (
            <article key={step.label} className={mobileCardClassName}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              <div className="relative z-10 space-y-6 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-brand-midnight">
                    <span className="font-mono text-base font-semibold text-brand-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-accent/80">
                    STEP {i + 1}:
                  </p>
                  <h3 className="mb-3 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {step.label}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
                    {step.description}
                  </p>
                </div>

                <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden bg-black/60">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_52%)]" />
                  <div className="relative flex aspect-square h-full max-h-full max-w-full items-center justify-center overflow-hidden">
                    <video
                      key={`${step.mediaLabel}-mobile`}
                      className="relative z-10 h-full w-full object-contain object-center mix-blend-screen"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src={`/Simple%20Structure%20Animations/${encodeURIComponent(step.mediaLabel)}.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
