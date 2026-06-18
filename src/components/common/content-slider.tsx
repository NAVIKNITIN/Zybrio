"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
// Test
interface ContentSliderProps<T> {
  readonly items: readonly T[];
  autoplayMs?: number;
  className?: string;
  renderMain: (item: T, index: number) => React.ReactNode;
  renderPreview?: (
    item: T,
    position: "previous" | "next",
    index: number,
  ) => React.ReactNode;
  getItemKey?: (item: T) => string;
}

export function ContentSlider<T>(props: Readonly<ContentSliderProps<T>>) {
  const { items, autoplayMs, className, renderMain, renderPreview, getItemKey } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const getKey = (item: T) => {
    if (typeof item === "string" || typeof item === "number") {
      return String(item);
    }

    if (item && typeof item === "object") {
      const itemAny = item as Record<string, unknown>;
      if (typeof itemAny.id === "string" || typeof itemAny.id === "number") {
        return String(itemAny.id);
      }
      if (typeof itemAny.key === "string" || typeof itemAny.key === "number") {
        return String(itemAny.key);
      }
      if (typeof itemAny.title === "string") {
        return itemAny.title;
      }
      if (typeof itemAny.label === "string") {
        return itemAny.label;
      }
      try {
        return JSON.stringify(itemAny);
      } catch {
        return Object.prototype.toString.call(itemAny);
      }
    }

    return String(item);
  };
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

    const timer = globalThis.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoplayMs);

    return () => globalThis.clearInterval(timer);
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
        {items.map((item, idx) => (
          <button
            key={getItemKey?.(item) ?? getKey(item)}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "size-3 rounded-full border border-[#bdfd49] transition",
              idx === activeIndex ? "bg-[#bdfd49]" : "bg-transparent",
            )}
          />
        ))}
      </div>
    </div>
  );
}
