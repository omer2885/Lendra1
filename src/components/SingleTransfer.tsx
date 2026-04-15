import { LENDRA_CONTENT } from "../data/content";
import { Section, FadeIn } from "./Layout";
import { StickyScroll, type StickyScrollItem } from "./ui/StickyScrollReveal";

const placeholderGradients = [
  "from-[#202f52] via-[#1b2540] to-[#121212]",
  "from-[#3a2517] via-[#1d1a1a] to-[#121212]",
  "from-[#103138] via-[#141d22] to-[#121212]",
  "from-[#2d2244] via-[#1b1825] to-[#121212]",
];

const transferSteps: StickyScrollItem[] = [
  {
    title: "Initiation",
    description:
      "A transfer is initiated from one region to another. The sender provides funds in their local currency.",
    content: (
      <div className="grid h-full gap-6">
        <div className={`relative overflow-hidden border border-white/10 bg-gradient-to-br ${placeholderGradients[0]} p-8`}>
          <div className="absolute right-6 top-6 border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">
            Placeholder PNG
          </div>
          <div className="max-w-sm pt-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
              Transfer input
            </p>
            <h4 className="mb-4 font-display text-4xl font-bold text-white">
              Sender starts the transfer
            </h4>
            <p className="text-base leading-relaxed text-white/70">PNG goes here</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
              Origin
            </div>
            <div className="text-lg font-semibold text-white">USD wallet</div>
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
              Destination
            </div>
            <div className="text-lg font-semibold text-white">Receiver corridor</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "The Timing Gap",
    description:
      "The recipient expects funds immediately, while traditional settlement systems take days to finalize.",
    content: (
      <div className={`relative flex h-full min-h-[28rem] overflow-hidden border border-white/10 bg-gradient-to-br ${placeholderGradients[1]} p-8`}>
        <div className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-white/10" />
        <div className="grid h-full w-full grid-cols-2 gap-6">
          <div className="border border-white/10 bg-black/20 p-6">
            <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
              Funds requested
            </div>
            <div className="text-3xl font-bold text-white">$12,450</div>
          </div>
          <div className="border border-dashed border-white/15 bg-black/10 p-6">
            <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
              PNG slot
            </div>
            <div className="text-lg text-white/75">Settlement timing graphic goes here</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Instant Liquidity",
    description:
      "LENDRA1 provides the capital required to complete the transfer instantly, bridging the gap for the recipient.",
    content: (
      <div className={`relative h-full overflow-hidden border border-white/10 bg-gradient-to-br ${placeholderGradients[2]} p-8`}>
        <div className="grid h-full gap-5">
          <div className="flex items-center justify-between border border-white/10 bg-white/[0.04] p-5">
            <div>
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
                Liquidity bridge
              </div>
              <div className="text-2xl font-bold text-white">Capital deployed instantly</div>
            </div>
            <div className="border border-white/10 bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-midnight">
              Active
            </div>
          </div>
          <div className="grid flex-1 place-items-center border border-dashed border-white/15 bg-black/10">
            <div className="text-center">
              <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.35em] text-brand-muted">
                Image slot
              </div>
              <div className="text-lg text-white/80">Liquidity visualization PNG</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Settlement & Repayment",
    description:
      "That capital is repaid after settlement is finalized. Each cycle generates a return from the continuous reuse of capital.",
    content: (
      <div className={`relative h-full overflow-hidden border border-white/10 bg-gradient-to-br ${placeholderGradients[3]} p-8`}>
        <div className="grid h-full gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
                Status
              </div>
              <div className="text-2xl font-bold text-white">Settled</div>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-muted">
                Cycle yield
              </div>
              <div className="text-2xl font-bold text-white">0.042%</div>
            </div>
          </div>
          <div className="grid flex-1 place-items-center border border-dashed border-white/15 bg-black/10">
            <div className="text-center">
              <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.35em] text-brand-muted">
                Final visual
              </div>
              <div className="text-lg text-white/80">Repayment PNG goes here</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const SingleTransfer = () => {
  const { singleTransfer } = LENDRA_CONTENT;

  return (
    <Section className="relative overflow-visible bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_30%),linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)]">
      <div className="mb-16 max-w-6xl text-left">
        <FadeIn>
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
            Case Study
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            {singleTransfer.title}
          </h2>
          <div className="max-w-5xl space-y-6 text-lg leading-relaxed text-brand-muted">
            <p>A transfer is initiated from one region to another.</p>
            <p>
              The recipient expects funds immediately, while settlement takes
              time. LENDRA1 provides the capital required to complete the
              transfer instantly.
            </p>
            <p>
              That capital is repaid after settlement is finalized. This cycle
              repeats across thousands of transactions. Each cycle generates a
              return. Returns are generated from the continuous reuse of capital
              across real remittance flows.
            </p>
          </div>
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
