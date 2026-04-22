import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";
import { VaultButton } from "./VaultButton";

gsap.registerPlugin(ScrollTrigger);

export const VaultParticipation = ({
  disableFade = false,
  id = "vault",
  contentPosition = "right",
  onEnterVault,
}: {
  disableFade?: boolean;
  id?: string;
  contentPosition?: "left" | "right";
  onEnterVault: () => void;
}) => {
  const { vault } = LENDRA_CONTENT;
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentPositionClass =
    contentPosition === "left" ? "mr-auto" : "ml-auto";
  const mediaPositionClass =
    contentPosition === "left" ? "lg:right-0" : "lg:left-0";
  const mediaObjectClass =
    contentPosition === "left" ? "object-right" : "object-left";
  const mediaFadeClass =
    contentPosition === "left"
      ? "lg:bg-gradient-to-r lg:from-brand-charcoal lg:via-transparent lg:to-transparent"
      : "lg:bg-gradient-to-l lg:from-brand-charcoal lg:via-transparent lg:to-transparent";
  const backedByLogos = Array.from({ length: 12 }, (_, index) => `Logo ${index + 1}`);

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
              start: "top 20%",
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

  const content = (
    <>
      <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-accent">
        Participation
      </span>
      <h2 className="mb-8 max-w-[32rem] font-display text-4xl font-bold leading-tight md:text-5xl">
        {vault.title}
      </h2>
      <p className="max-w-[34rem] text-lg leading-relaxed text-brand-muted">
        {vault.content}
      </p>

      <div className="mt-10 max-w-[34rem]">
        <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-white/45">
          Backed by
        </span>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {backedByLogos.map((logo) => (
            <div
              key={logo}
              className="flex h-12 items-center justify-center border border-white/10 bg-white/[0.035] px-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/45"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <VaultButton label="Enter Vault" onClick={onEnterVault} />
      </div>
    </>
  );

  const renderContent = (children: ReactNode) =>
    disableFade ? children : <FadeIn direction="left">{children}</FadeIn>;

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative flex flex-col overflow-hidden bg-brand-charcoal pb-10 pt-0 lg:block lg:min-h-[44rem] lg:py-24"
    >
      <div className={`pointer-events-none relative h-[48vh] w-full shrink-0 overflow-hidden lg:absolute lg:inset-y-0 lg:h-full lg:w-[58%] ${mediaPositionClass}`}>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover ${mediaObjectClass}`}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/Capital%20participation.mp4" type="video/mp4" />
        </video>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent ${mediaFadeClass}`}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 mx-auto mt-8 w-full max-w-[112rem] px-6 md:px-12 lg:mt-0 lg:px-24">
        <div className={`mb-16 w-full max-w-[44rem] text-left lg:w-[50%] xl:w-[45%] ${contentPositionClass}`}>
          {renderContent(content)}
        </div>
      </div>
    </section>
  );
};
