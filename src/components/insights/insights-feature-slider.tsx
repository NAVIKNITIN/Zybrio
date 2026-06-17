"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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

const SidePreviewCard = ({ slide, label }: { readonly slide: InsightSlide; readonly label: string }) => {
  return (
    <article className="relative h-81.5 w-46  rounded-xl border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:h-97.5 sm:w-55">
      <Image
        src={slide.imageSrc}
        alt={slide.imageAlt ?? slide.title}
        fill
        loading="eager"
        fetchPriority="high"
        className="object-cover blur-sm"
        sizes="(min-width: 1280px) 220px, 184px"
      />
      <div className="absolute inset-0 bg-white/65" />
      <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-white/90 to-transparent p-4 text-slate-950">
        <p className="text-[0.66rem] uppercase tracking-[0.26em] text-slate-700 opacity-90">{label}</p>
        <h3 className="mt-2 text-sm font-semibold leading-tight text-slate-950">{slide.title}</h3>
      </div>
    </article>
  );
};

const InsightSlideCard = ({ slide }: { readonly slide: InsightSlide }) => {
  return (
    <article className="relative aspect-2/1 w-[55vw] h-[62vh]  max-w-254  rounded-xl bg-[#dfffa3] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
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
          <span className="inline-block h-1.25 w-1.25 shrink-0 rounded-full bg-[#061f00]" />
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
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.58,
                  filter: isActive ? "blur(0px)" : "blur(0.4px)",
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {isActive ? (
                  <InsightSlideCard slide={slide} />
                ) : (
                  <SidePreviewCard slide={slide} label={isLeft ? "Previous" : "Next"} />
                )}
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