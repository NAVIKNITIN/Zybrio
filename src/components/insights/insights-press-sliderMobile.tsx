"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { insightsPageContent } from "@/data/insights_data";
import { cn } from "@/lib/utils";

type PressItem = (typeof insightsPageContent.pressAnnouncements.items)[number];

const MAX_PRESS_ITEMS = 7;

const pressImageRoutes = [
  "/insights/press1.png",
  "/insights/press2.png",
  "/insights/press3.png",
  "/insights/press4.png",
  "/insights/press5.png",
  "/insights/press6.png",
  "/insights/press7.png",
] as const;

interface PressCardProps {
  readonly item: PressItem;
  readonly index: number;
  readonly layout?: "slider" | "grid";
}

const PressArtwork = ({
  item,
  index,
}: {
  readonly item: PressItem;
  readonly index: number;
}) => {
  const imageSrc = pressImageRoutes[index] ?? "/insights/press1.png";

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-forest shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">
      <Image
        src={imageSrc}
        alt={item.title}
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
        loading="lazy"
      />
    </div>
  );
};

const PressCard = ({ item, index, layout = "slider" }: PressCardProps) => {
  return (
    <article
      className={cn(
        "min-w-0",
        layout === "slider" ? "w-full shrink-0 sm:w-[calc((100%-2rem)/2)]" : "w-full",
      )}
    >
      <PressArtwork item={item} index={index} />

      <div className="mt-4">
        <p className="text-[0.85rem] font-semibold text-white/70">
          {item.category}
          <span className="mx-2 inline-block size-1 rounded-full bg-[#a4ea00]" />
          {item.date}
        </p>

        <h3 className="mt-3 max-w-[34rem] text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-[1.65rem]">
          {item.title}
        </h3>
      </div>
    </article>
  );
};

export const InsightsPressSliderMobile = () => {
  const { pressAnnouncements } = insightsPageContent;
  const items = pressAnnouncements.items.slice(0, MAX_PRESS_ITEMS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showAllPress, setShowAllPress] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  const [isDesktop, setIsDesktop] = useState(() => {
    if (globalThis.window === undefined) {
      return false;
    }
    return globalThis.matchMedia("(min-width: 640px)").matches;
  });

  useEffect(() => {
    const mq = globalThis.matchMedia("(min-width: 640px)");
    const handler = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      setActiveIndex(0);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const visibleCount = isDesktop ? 2 : 1;
  const totalSteps = Math.max(items.length - visibleCount + 1, 1);
  const maxIndex = totalSteps - 1;

  // Card dimensions for drag
  const CARD_WIDTH = isDesktop ? 340 : 280;
  const GAP = isDesktop ? 24 : 16;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;

  // Snap to specific card
  const snapToCard = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    const target = -(clampedIndex * SLIDE_WIDTH);

    animate(x, target, {
      type: "spring",
      stiffness: 400,
      damping: 30,
    });
    setActiveIndex(clampedIndex);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    const currentX = x.get();
    const currentIndex = Math.round(-currentX / SLIDE_WIDTH);

    let newIndex = currentIndex;

    if (Math.abs(velocity) > 500) {
      if (velocity < 0) {
        newIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }
    } else if (Math.abs(offset) > SLIDE_WIDTH / 3) {
      if (offset < 0) {
        newIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }
    }

    snapToCard(newIndex);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const nextSlide = () => {
    const newIndex = Math.min(activeIndex + 1, maxIndex);
    snapToCard(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    snapToCard(newIndex);
  };

  // Calculate initial position
  const initialX = -(activeIndex * SLIDE_WIDTH);

  // FIXED: Indicator position - moves like a dot, not a growing bar
  const indicatorPosition = maxIndex > 0 
    ? `${(activeIndex / maxIndex) * 100}%` 
    : '0%';

  return (
    <div id="press" className="min-w-0 scroll-mt-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <p className="text-[1.15rem] font-medium text-white/88">
            {pressAnnouncements.eyebrow}
          </p>

          <h2 className="mt-3 max-w-[50rem] text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[4rem]">
            {pressAnnouncements.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setShowAllPress((current) => !current)}
          className="inline-flex h-12 w-fit shrink-0 items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition hover:border-[#a4ea00]/45 hover:bg-white/[0.07]"
        >
          {showAllPress ? "Show slider" : pressAnnouncements.ctaLabel}
          <ArrowRight className="size-4 text-[#a4ea00]" />
        </button>
      </div>

      {showAllPress ? (
        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {items.map((item, index) => (
            <PressCard key={item.id} item={item} index={index} layout="grid" />
          ))}
        </div>
      ) : (
        <>
          {/* Carousel with Drag */}
          <div className="relative mt-12">
            <div 
              ref={containerRef}
              className="overflow-hidden"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <motion.div
                className="flex gap-4 sm:gap-6"
                style={{ x }}
                initial={{ x: initialX }}
                drag="x"
                dragConstraints={{ 
                  left: -(maxIndex * SLIDE_WIDTH), 
                  right: 0 
                }}
                dragElastic={0.05}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="shrink-0"
                    style={{ width: CARD_WIDTH }}
                    animate={{
                      scale: index === activeIndex ? 1 : 0.98,
                      opacity: index === activeIndex ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <PressCard item={item} index={index} layout="slider" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* FIXED Progress Bar - Small indicator that moves, not growing bar */}
          <div className="mx-auto mt-10 w-full max-w-[300px]">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#10361a]">
              {/* Static track background */}
              <div className="absolute inset-0 rounded-full bg-[#10361a]" />

              {/* Small indicator dot/bar that moves */}
              <motion.div
                className="absolute top-0 h-full rounded-full bg-[#a4ea00]"
                style={{ width: `${100 / totalSteps}%` }} 
                animate={{ 
                  left: `${(activeIndex / (totalSteps - 1)) * (100 - (100 / totalSteps))}%` 
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};