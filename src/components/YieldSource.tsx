import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
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

  // Professional Scroll Scrubbing with high-fidelity smoothing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // starts when top of section is 20% from the top of viewport (very late)
    offset: ["start 0.2", "end -0.1"],
  });

  // Spring-based momentum filter for buttery-smooth input
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35, // lower stiffness for more "gliding"
    damping: 20,   // high damping to eliminate all jitter/oscillation
    restDelta: 0.0001
  });

  // Sync scroll to video timeline
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    // Map progress to video duration
    const targetTime = latest * video.duration;

    // Only update if the difference is enough to avoid micro-stutter
    if (Math.abs(video.currentTime - targetTime) > 0.001) {
      video.currentTime = targetTime;
    }

    // Safety check to ensure it stays paused
    if (!video.paused) video.pause();
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.pause();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yield"
      className="relative flex min-h-[40rem] flex-col overflow-hidden bg-brand-midnight lg:block lg:h-auto lg:min-h-[48rem]"
    >
      {/* Background Video Stack */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-left"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/A%20single%20transfer.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay from the right for text legibility (Harsher for better contrast) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/40 to-transparent lg:bg-gradient-to-l lg:from-brand-midnight/95 lg:via-brand-midnight/70 lg:to-transparent lg:from-0% lg:via-45% lg:to-80%"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[112rem] px-6 py-24 md:px-12 lg:min-h-[48rem] lg:items-center lg:px-24">
        <div className="w-full max-w-[44rem] text-left lg:ml-auto lg:w-[50%] xl:w-[45%]">
          <FadeIn>
            <span className="site-kicker mb-4 block text-brand-accent drop-shadow-sm">
              Thesis
            </span>
            <h2 className="site-section-heading mb-8 max-w-[32rem] text-white drop-shadow-md">
              {singleTransfer.title}
            </h2>
            <div className="site-body max-w-[34rem] space-y-6">
              {transferIntroParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/80 leading-relaxed drop-shadow-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
