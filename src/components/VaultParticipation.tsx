import { ReactNode } from "react";
import { LENDRA_CONTENT } from "../data/content";
import { FadeIn } from "./Layout";
import { VaultButton } from "./VaultButton";

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

  const content = (
    <>
      <span className="site-kicker mb-4 block text-brand-accent">
        Participation
      </span>
      <h2 className="site-section-heading mb-8 max-w-[32rem]">
        {vault.title}
      </h2>
      <p className="site-body max-w-[34rem] text-brand-muted">
        {vault.content}
      </p>

      <div className="mt-10 max-w-[34rem]">
        <span className="site-ui-label mb-4 block text-white/45">
          Backed by
        </span>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {backedByLogos.map((logo) => (
            <div
              key={logo}
              className="site-ui-label flex h-12 items-center justify-center border border-white/10 bg-white/[0.035] px-3 text-center text-white/45"
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
      id={id}
      className="relative flex flex-col overflow-hidden bg-brand-charcoal pb-10 pt-0 lg:block lg:min-h-[44rem] lg:py-24"
    >
      <div className={`pointer-events-none relative h-[48vh] w-full shrink-0 overflow-hidden lg:absolute lg:inset-y-0 lg:h-full lg:w-[58%] ${mediaPositionClass}`}>
        <img
          src="/Capital%20participation.png"
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${mediaObjectClass}`}
          aria-hidden="true"
        />
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
