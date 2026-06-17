// src/components/customer/CustomerStoriesSlider.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { customersPageData } from "@/data/customersPageData";
import { AnimatedMetricNumber } from "@/components/customer/AnimatedMetricNumber";

export default function CustomerStoriesSlider() {
  const stories = customersPageData.stories;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStory = stories[activeIndex];

  const metricNumber = Number(activeStory.metricValue.replace(/[^0-9]/g, ""));
  const metricSuffix = activeStory.metricValue.replace(/[0-9,\s]/g, "");

  return (
    <section className="bg-[#061F00] px-5 pb-16 pt-8 text-white">
      <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2">
        <article className="hidden lg:block flex min-h-[470px] flex-col justify-between rounded-[16px] border border-[#0E4A16] bg-[#061F00] px-9 py-10">
          <div>
            <p className="text-[23px] font-semibold leading-none tracking-[-0.04em] text-white">
              {activeStory.brand}
            </p>

            <h2 className="mt-11 max-w-[500px] text-[clamp(28px,2.4vw,34px)] font-semibold leading-[1.13] tracking-[-0.055em] text-white">
              {activeStory.title}
            </h2>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="flex items-center gap-6">
              <AnimatedMetricNumber
                value={metricNumber}
                suffix={metricSuffix}
                replayKey={activeStory.id}
                className="text-[52px] font-semibold leading-none tracking-[-0.07em] text-[#DFFF8D]"
              />

              <p className="max-w-[270px] text-[16px] font-medium leading-[1.25] tracking-[-0.03em] text-white/65">
                {activeStory.metricLabel}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  aria-label={`Show story ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={
                    index === activeIndex
                      ? "size-2.5 rounded-full bg-[#DFFF8D]"
                      : "size-2.5 rounded-full border border-white bg-transparent"
                  }
                />
              ))}
            </div>
          </div>
        </article>

        <div className="relative min-h-[470px] overflow-hidden rounded-[16px] bg-black">
          <Image
            src={activeStory.image}
            alt={activeStory.imageAlt}
            fill
            priority={activeIndex === 0}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {activeStory.hasImageOverlay && (
            <div className="absolute inset-0 z-10 bg-black/45" />
          )}

          {activeStory.imageBadge && (
            <div className="absolute inset-0 z-20 grid place-items-center">
              <p className="text-[clamp(40px,4.4vw,62px)] font-semibold leading-none tracking-[-0.06em] text-white">
                {activeStory.imageBadge}
              </p>
            </div>
          )}

          {activeStory.showPlayButton && (
            <button
              type="button"
              aria-label="Play customer story video"
              className="absolute bottom-7 left-7 z-30 grid size-[48px] place-items-center rounded-md bg-[#DFFF8D] text-[#061F00] transition hover:scale-105"
            >
              <Play className="size-6 fill-current" />
            </button>
          )}
        </div>

        <article className="lg:hidden block flex min-h-[470px] flex-col justify-between rounded-[16px] border border-[#0E4A16] bg-[#061F00] px-9 py-10">
          <div>
            <p className="text-[23px] font-semibold leading-none tracking-[-0.04em] text-white">
              {activeStory.brand}
            </p>

            <h2 className="mt-11 max-w-[500px] text-[clamp(28px,2.4vw,34px)] font-semibold leading-[1.13] tracking-[-0.055em] text-white">
              {activeStory.title}
            </h2>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="flex items-center gap-6">
              <AnimatedMetricNumber
                value={metricNumber}
                suffix={metricSuffix}
                replayKey={activeStory.id}
                className="text-[52px] font-semibold leading-none tracking-[-0.07em] text-[#DFFF8D]"
              />

              <p className="max-w-[270px] text-[16px] font-medium leading-[1.25] tracking-[-0.03em] text-white/65">
                {activeStory.metricLabel}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  aria-label={`Show story ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={
                    index === activeIndex
                      ? "size-2.5 rounded-full bg-[#DFFF8D]"
                      : "size-2.5 rounded-full border border-white bg-transparent"
                  }
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>

  );
}