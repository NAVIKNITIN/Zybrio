"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { insightsPageContent } from "@/data/insights_data";
import { cn } from "@/lib/utils";

type InsightSlide = Omit<
  (typeof insightsPageContent.featuredSlider.slides)[number],
  "theme"
> & {
  theme: "light" | "dark";
};

const getCircularOffset = (index: number, activeIndex: number, total: number) => {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
};

const SidePreviewCard = () => {
  return (
    <div className="h-[326px] w-[184px] overflow-hidden rounded-lg bg-[linear-gradient(90deg,rgba(6,31,0,0.96)_0%,rgba(92,128,122,0.78)_52%,rgba(6,31,0,0.96)_100%)] opacity-80 sm:h-[390px] sm:w-[220px]" />
  );
};

const InsightSlideCard = ({ slide }: { readonly slide: InsightSlide }) => {
  return (
    <article className="relative aspect-[2/1] w-[84vw] max-w-[1016px] overflow-hidden rounded-xl bg-[#dfffa3] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
      <Image
        src={slide.imageSrc}
        alt={slide.imageAlt ?? slide.title}
        fill
        loading="eager"
        fetchPriority="high"
        className="object-cover"
        sizes="(min-width: 1280px) 1016px, 84vw"
      />

      <div className="absolute left-[3%] top-[7%] z-10 max-w-[54%] text-[#061f00]">
        <h2 className="text-[clamp(1.45rem,2.25vw,2.2rem)] font-medium leading-[1.05] text-[#061f00]">
          {slide.title}
        </h2>

        <div className="mt-[6%] flex items-center gap-3 text-[clamp(0.72rem,0.9vw,0.9rem)] font-medium leading-none text-[#061f00]/75">
          <span>{slide.category}</span>
          <span className="size-[5px] shrink-0 bg-[#061f00]" />
          <span>{slide.date}</span>
        </div>
      </div>
    </article>
  );
};

export const InsightsFeatureSlider = () => {
  const { featuredSlider } = insightsPageContent;
  const slides = featuredSlider.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, featuredSlider.autoplayMs);

    return () => window.clearInterval(timer);
  }, [featuredSlider.autoplayMs, slides.length]);

  const visibleSlides = useMemo(() => {
    return slides
      .map((slide, index) => ({
        slide,
        index,
        offset: getCircularOffset(index, activeIndex, slides.length),
      }))
      .filter(({ offset }) => Math.abs(offset) <= 1);
  }, [activeIndex, slides]);

  return (
    <section className="overflow-hidden bg-forest pb-20 sm:pb-24">
      <div className="container-app">
        <div className="relative mx-auto h-[360px] w-full overflow-hidden sm:h-[520px] lg:h-[560px]">
          {visibleSlides.map(({ slide, index, offset }) => {
            const isActive = offset === 0;
            const isLeft = offset < 0;
            const isRight = offset > 0;

            return (
              <motion.button
                key={slide.id}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "absolute top-1/2 block cursor-pointer border-0 bg-transparent p-0",
                  isActive && "left-1/2",
                  isLeft && "left-0 hidden lg:block",
                  isRight && "right-0 hidden lg:block",
                )}
                style={{
                  zIndex: isActive ? 10 : 2,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                initial={false}
                animate={{
                  x: isActive ? "-50%" : "0%",
                  y: "-50%",
                  scale: 1,
                  opacity: isActive ? 1 : 0.58,
                  filter: isActive ? "blur(0px)" : "blur(0.4px)",
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {isActive ? <InsightSlideCard slide={slide} /> : <SidePreviewCard />}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-3 rounded-full border border-[#bdfd49] transition",
                index === activeIndex ? "bg-[#bdfd49]" : "bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};