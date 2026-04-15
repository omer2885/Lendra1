import { ArrowRight } from "lucide-react";
import { CSSProperties, ReactNode } from "react";

interface GlassEffectProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const GlassFilter = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute h-0 w-0"
    focusable="false"
  >
    <filter
      id="hero-glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

const GlassEffect = ({ children, className = "", style = {} }: GlassEffectProps) => {
  const glassStyle: CSSProperties = {
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  return (
    <div
      className={`relative flex overflow-hidden text-white transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#hero-glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.16)" }}
      />
      <div
        className="absolute inset-0 z-20 overflow-hidden rounded-inherit"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
        }}
      />
      <div className="relative z-30">{children}</div>
    </div>
  );
};

export const HeroGlassButton = ({ label }: { label: string }) => {
  return (
    <div
      className="group inline-flex items-center gap-2.5 transition-all duration-500 hover:-translate-y-1 hover:gap-2"
      role="button"
      tabIndex={0}
    >
      <GlassFilter />

      <GlassEffect
        className="rounded-none transition-all duration-500 group-hover:-translate-x-0.5"
        style={{ minWidth: 220 }}
      >
        <div className="relative flex min-h-[56px] items-center justify-center overflow-hidden px-6 text-center">
          <div className="pointer-events-none absolute inset-y-0 -left-16 w-16 bg-white/15 opacity-0 blur-2xl transition-all duration-700 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
          <span className="font-display text-lg font-medium tracking-tight text-white transition-transform duration-500 group-hover:scale-[0.985] md:text-xl">
            {label}
          </span>
        </div>
      </GlassEffect>

      <GlassEffect className="rounded-none transition-all duration-500 group-hover:translate-x-0.5">
        <div className="flex h-[56px] w-[56px] items-center justify-center">
          <ArrowRight className="h-7 w-7 text-white transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </GlassEffect>
    </div>
  );
};
