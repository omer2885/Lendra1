import { motion } from "motion/react";
import { LENDRA_CONTENT } from "../data/content";
import { VaultButton } from "./VaultButton";
import { usePreloader } from "./PreloaderContext";

export const Hero = ({ onEnterVault }: { onEnterVault: () => void }) => {
  const { hero } = LENDRA_CONTENT;
  const { status } = usePreloader();
  const isRevealed = status !== "loading";

  return (
    <section className="relative h-[100svh] overflow-hidden px-6 pb-4 pt-32 md:-mt-20 md:px-12 md:pb-6 lg:px-24">
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isRevealed ? { scale: 1.1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -mt-20 h-full w-full object-cover object-[85%_50%] md:mt-0 md:h-screen md:w-screen md:object-right"
        src="/Hero_Visual.png"
        alt=""
        fetchPriority="high"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[112rem] items-end">
        <div className="flex w-full items-end">
          <div className="flex w-full max-w-none -translate-y-8 flex-col items-start justify-end self-end text-left md:-translate-y-12">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={isRevealed ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 max-w-[46rem] font-display text-3xl font-normal leading-[1.08] text-balance md:text-5xl lg:text-5xl"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isRevealed ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg mb-4"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isRevealed ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 mb-4"
            >
              <VaultButton label="Enter Vault" onClick={onEnterVault} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
