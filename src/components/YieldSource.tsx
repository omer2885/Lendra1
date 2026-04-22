import { useEffect, useRef } from "react";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";

export const YieldSource = () => {
  const { singleTransfer } = LENDRA_CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transferIntroParagraphs = [
    "A transfer is initiated from one region to another.",
    "The recipient expects funds immediately, while settlement takes time. LENDRA1 provides the capital required to complete the transfer instantly.",
    "That capital is repaid after settlement is finalized. This cycle repeats across thousands of transactions. Each cycle generates a return. Returns are generated from the continuous reuse of capital across real remittance flows.",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let isInView = false;
    let frameId: number | null = null;

    const updateVideoProgress = () => {
      frameId = null;
      if (!isInView || !Number.isFinite(video.duration) || video.duration <= 0) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const startOffset = viewportHeight * 0.42;
      const endOffset = viewportHeight * 0.18;
      const scrollableRange = rect.height + startOffset - endOffset;
      const progress = Math.min(1, Math.max(0, (startOffset - rect.top) / scrollableRange));
      const targetTime = progress * video.duration;

      if (Math.abs(video.currentTime - targetTime) > 0.08) {
        video.currentTime = targetTime;
      }

      if (video.paused) {
        video.play().catch(() => {
          // Autoplay can reject briefly before the media has buffered enough.
        });
      }
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateVideoProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) {
          requestUpdate();
        } else {
          video.pause();
        }
      },
      { rootMargin: "-35% 0px -20% 0px", threshold: 0.01 }
    );

    video.muted = true;
    video.playsInline = true;
    observer.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yield"
      className="relative flex flex-col overflow-hidden bg-brand-midnight pb-24 pt-0 lg:block lg:pb-24 lg:pt-24"
    >
      <div className="pointer-events-none left-0 relative h-[48vh] w-full shrink-0 origin-left overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-[58%]">
        <video
          ref={videoRef}
          className="absolute inset-y-0 left-0 h-full w-full object-cover object-left"
          muted
          playsInline
          preload="metadata"
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
            <span className="site-kicker mb-4 block text-brand-accent">
              Thesis
            </span>
            <h2 className="site-section-heading mb-8 max-w-[32rem]">
              {singleTransfer.title}
            </h2>
            <div className="site-body max-w-[34rem] space-y-6">
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
