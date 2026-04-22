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

    video.pause();
    video.currentTime = 0;

    let removeMetadataListener: (() => void) | null = null;

    const ctx = gsap.context(() => {
      const setupScrollVideo = () => {
        const duration = video.duration || 0;
        if (!Number.isFinite(duration) || duration <= 0) return;

        const maxTime = Math.max(duration - 0.04, 0);

        gsap.fromTo(
          video,
          { currentTime: 0 },
          {
            currentTime: maxTime,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 35%",
              end: "bottom 10%",
              scrub: 1.35,
              invalidateOnRefresh: true,
            },
          },
        );

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
      className="relative flex flex-col overflow-hidden bg-brand-midnight pb-24 pt-0 lg:block lg:pb-24 lg:pt-24"
    >
      <div className="pointer-events-none relative h-[48vh] w-full shrink-0 overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[58%]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-left"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/A%20single%20transfer.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-brand-midnight"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[112rem] px-5 pt-6 md:px-12 lg:mt-0 lg:px-24">
        <div className="mb-16 ml-auto w-full max-w-[44rem] text-left lg:w-[50%] xl:w-[45%]">
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
