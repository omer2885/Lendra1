import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";
import { VaultButton } from "./VaultButton";

gsap.registerPlugin(ScrollTrigger);

export const VaultParticipation = ({ onEnterVault }: { onEnterVault: () => void }) => {
  const { vault } = LENDRA_CONTENT;
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
          start: "top 25%",
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
      id="vault"
      className="relative overflow-hidden bg-brand-charcoal px-6 py-24 md:px-12 lg:min-h-[44rem] lg:px-24"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain object-left"
        muted
        playsInline
        preload="auto"
        poster="/Capital%20participation.png"
        aria-hidden="true"
      >
        <source src="/Capital%20participation.scrub.mp4" type="video/mp4" />
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
        <div className="relative z-10 ml-auto w-full max-w-[44rem] text-left lg:w-[50%] xl:w-[45%]">
          <FadeIn direction="left">
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
              Participation
            </span>
            <h2 className="mb-8 max-w-[32rem] font-display text-4xl font-bold leading-tight md:text-5xl">
              {vault.title}
            </h2>
            <p className="max-w-[34rem] text-lg leading-relaxed text-brand-muted">
              {vault.content}
            </p>

            <div className="mt-10 space-y-4">
              {vault.features.map((feature) => (
                <div key={feature} className="flex items-center gap-4 text-white/85">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <VaultButton label="Enter Vault" onClick={onEnterVault} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
