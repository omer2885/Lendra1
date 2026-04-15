import React, { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

export interface StickyScrollItem {
  title: string;
  description: string;
  content: ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollItem[];
  className?: string;
}

export function StickyScroll({
  content,
  className = "",
}: StickyScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!content.length) return;

    const updateActiveIndex = () => {
      const viewportAnchor = window.innerHeight * 0.38;
      let closestIndex = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemAnchor = rect.top + rect.height * 0.3;
        const distance = Math.abs(itemAnchor - viewportAnchor);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [content]);

  const activeItem = useMemo(() => content[activeIndex] ?? content[0], [activeIndex, content]);

  return (
    <div className={`grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:gap-16 ${className}`.trim()}>
      <div className="relative">
        <div className="space-y-0">
          {content.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.title}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={`flex min-h-[72vh] items-center border-l pl-6 transition-all duration-300 md:min-h-[78vh] md:pl-8 ${
                  isActive
                    ? "border-brand-accent opacity-100"
                    : "border-white/10 opacity-20"
                }`}
              >
                <div className="w-full max-w-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-brand-accent bg-brand-accent text-brand-midnight"
                          : "border-white/10 bg-white/5 text-white/70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="mb-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-brand-muted md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="sticky top-24">
          <div className="relative h-[78vh] overflow-hidden border border-white/10 bg-[#141414] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_34%),linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
            <div className="relative h-full p-6">{activeItem?.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
