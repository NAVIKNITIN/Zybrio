"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface ContentSliderProps<T> {
  items: readonly T[];
  autoplayMs?: number;
  className?: string;
  renderMain: (item: T, index: number) => React.ReactNode;
  renderPreview?: (
    item: T,
    position: "previous" | "next",
    index: number,
  ) => React.ReactNode;
}

export function ContentSlider<T>({
  items,
  autoplayMs,
  className,
  renderMain,
  renderPreview,
}: ContentSliderProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousIndex = useMemo(
    () => (activeIndex === 0 ? items.length - 1 : activeIndex - 1),
    [activeIndex, items.length],
  );

  const nextIndex = useMemo(
    () => (activeIndex === items.length - 1 ? 0 : activeIndex + 1),
    [activeIndex, items.length],
  );

  useEffect(() => {
    if (!autoplayMs || items.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [autoplayMs, items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("space-y-8", className)}>
      <div className="grid items-center gap-6 lg:grid-cols-[13rem_minmax(0,1fr)_13rem]">
        <div className="hidden lg:block">
          {renderPreview?.(items[previousIndex], "previous", previousIndex)}
        </div>

        <div>{renderMain(items[activeIndex], activeIndex)}</div>

        <div className="hidden lg:block">
          {renderPreview?.(items[nextIndex], "next", nextIndex)}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
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
  );
}