import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { StickyScroll, type StickyScrollItem } from "./ui/StickyScrollReveal";

const YieldVisual = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-full overflow-hidden rounded-[1.5rem]">
    <img src={src} alt={alt} className="block h-full w-full object-cover object-center" />
  </div>
);

const transferSteps: StickyScrollItem[] = [
  {
    title: "Real transaction demand",
    description:
      "Yield is tied to actual economic activity.",
    content: (
      <YieldVisual
        src="/Yield%20from%20real%20movement/Real%20transaction%20demand.png"
        alt="Real transaction demand visual"
      />
    ),
  },
  {
    title: "Short-duration capital usage",
    description:
      "High velocity capital recycling.",
    content: (
      <YieldVisual
        src="/Yield%20from%20real%20movement/Short-duration%20capital%20usage.png"
        alt="Short-duration capital usage visual"
      />
    ),
  },
  {
    title: "No artificial incentives",
    description:
      "Pure market-driven returns.",
    content: (
      <YieldVisual
        src="/Yield%20from%20real%20movement/No%20artificial%20incentives.png"
        alt="No artificial incentives visual"
      />
    ),
  },
];

export const SingleTransfer = () => {
  const { yieldSource } = LENDRA_CONTENT;

  return (
    <Section className="relative overflow-visible bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_30%),linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)]">
      <div className="mb-16 max-w-6xl text-left">
        <FadeIn>
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
            Case Study
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            {yieldSource.title}
          </h2>
          <p className="max-w-5xl text-lg leading-relaxed text-brand-muted">
            {yieldSource.content}
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        <div>
          <StickyScroll content={transferSteps} />
        </div>
      </FadeIn>
    </Section>
  );
};
