"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem] bg-forest shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">
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

      <div className="mt-6">
        <p className="text-[0.95rem] font-semibold text-white/70">
          {item.category}
          <span className="mx-3 inline-block size-1.5 rounded-full bg-[#a4ea00]" />
          {item.date}
        </p>

        <h3 className="mt-4 max-w-[34rem] text-[1.55rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[1.95rem]">
          {item.title}
        </h3>
      </div>
    </article>
  );
};

export const InsightsPressSlider = () => {
  const { pressAnnouncements } = insightsPageContent;
  const items = pressAnnouncements.items.slice(0, MAX_PRESS_ITEMS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragRatio, setDragRatio] = useState<number | null>(null);
  const [showAllPress, setShowAllPress] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  // Start with a stable server-friendly default (mobile) to avoid
  // hydration mismatches. Update to the real value on the client.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 640px)");

    // set initial value on mount so client updates after hydration
    setIsDesktop(mq.matches);

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

  useEffect(() => {
    if (showAllPress || totalSteps <= 1 || dragRatio !== null) {
      return;
    }

    const timer = globalThis.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSteps);
    }, 4200);

    return () => globalThis.clearInterval(timer);
  }, [dragRatio, showAllPress, totalSteps]);

  const committedRatio = useMemo(() => {
    return maxIndex <= 0 ? 0 : activeIndex / maxIndex;
  }, [activeIndex, maxIndex]);

  const effectiveRatio = dragRatio ?? committedRatio;
  const floatingIndex = effectiveRatio * maxIndex;

  const indicatorWidth = useMemo(() => `${100 / totalSteps}%`, [totalSteps]);

  const indicatorLeft = useMemo(() => {
    if (totalSteps <= 1) {
      return "0%";
    }

    return `${effectiveRatio * (100 - 100 / totalSteps)}%`;
  }, [effectiveRatio, totalSteps]);

  const getRatioFromPointer = (clientX: number) => {
    const track = trackRef.current;

    if (!track) {
      return 0;
    }

    const rect = track.getBoundingClientRect();
    const clampedX = Math.max(rect.left, Math.min(clientX, rect.right));

    return (clampedX - rect.left) / rect.width;
  };

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
          <div className="mt-12 min-w-0 overflow-hidden">
            <div
              className={cn(
                "flex gap-6 sm:gap-8",
                dragRatio === null && "transition-transform duration-500 ease-out",
              )}
              style={{
                transform: `translateX(calc(-${floatingIndex * (100 / visibleCount)}% - ${
                  floatingIndex * (isDesktop ? 32 : 24)
                }px))`,
              }}
            >
              {items.map((item, index) => (
                <PressCard key={item.id} item={item} index={index} layout="slider" />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 w-full max-w-[76rem]">
            <div
              ref={trackRef}
              className="relative h-2 cursor-pointer touch-none overflow-hidden rounded-full bg-[#10361a]"
              onPointerDown={(event) => {
                setDragRatio(getRatioFromPointer(event.clientX));
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  setDragRatio(getRatioFromPointer(event.clientX));
                }
              }}
              onPointerUp={(event) => {
                const nextRatio = getRatioFromPointer(event.clientX);
                const nextIndex = maxIndex <= 0 ? 0 : Math.round(nextRatio * maxIndex);

                setActiveIndex(nextIndex);
                setDragRatio(null);

                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }
              }}
              onPointerCancel={(event) => {
                setDragRatio(null);

                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }
              }}
            >
              <div
                className={cn(
                  "absolute top-0 h-full rounded-full bg-[#a4ea00]",
                  dragRatio === null && "transition-[left] duration-500 ease-out",
                )}
                style={{
                  width: indicatorWidth,
                  left: indicatorLeft,
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
