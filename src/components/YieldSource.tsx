import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";

gsap.registerPlugin(ScrollTrigger);

export const YieldSource = () => {
  const { singleTransfer } = LENDRA_CONTENT;
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const transferIntroParagraphs = [
    "A transfer is initiated from one region to another.",
    "The recipient expects funds immediately, while settlement takes time. LENDRA1 provides the capital required to complete the transfer instantly.",
    "That capital is repaid after settlement is finalized. This cycle repeats across thousands of transactions. Each cycle generates a return. Returns are generated from the continuous reuse of capital across real remittance flows.",
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    gsap.ticker.lagSmoothing(0);
    video.pause();
    video.currentTime = 0;
    let removeMetadataListener: (() => void) | null = null;

    const ctx = gsap.context(() => {
      const setupScrollVideo = () => {
        const duration = video.duration || 1;
        if (!Number.isFinite(duration)) return;

        video.currentTime = 0;

        ScrollTrigger.create({
          trigger: section,
          start: "top 35%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            video.currentTime = duration * self.progress;
          },
        });

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        setupScrollVideo();
      } else {
        const handleLoadedMetadata = () => {
          setupScrollVideo();
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
        removeMetadataListener = () => {
          video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
      }
    }, section);

    return () => {
      removeMetadataListener?.();
      ctx.revert();
      video.pause();
      video.currentTime = 0;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yield"
      className="relative overflow-hidden bg-brand-midnight px-6 py-24 md:px-12 lg:px-24"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
        muted
        playsInline
        preload="auto"
        poster="/A%20single%20transfer.png"
        aria-hidden="true"
      >
        <source src="/A%20single%20transfer.scrub.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, #000 0%, rgba(0,0,0,0.85) 10%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[112rem]">
        <div className="relative z-10 mb-16 ml-auto w-full max-w-[44rem] text-left lg:w-[50%] xl:w-[45%]">
          <FadeIn>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
              Thesis
            </span>
            <h2 className="mb-8 max-w-[32rem] font-display text-4xl font-bold md:text-5xl">
              {singleTransfer.title}
            </h2>
            <div className="max-w-[34rem] space-y-6 text-lg leading-relaxed">
              {transferIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
