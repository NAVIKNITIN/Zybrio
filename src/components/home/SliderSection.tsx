"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Fintech",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    text: "Build trust through design in a high-stakes, regulated industry.",
  },
  {
    title: "E-Commerce",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    text: "Turn browsers into buyers with experience-led design and performance marketing.",
  },
  {
    title: "SaaS & Tech",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    text: "Ship better products faster with UX systems built for scale.",
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2",
    text: "Digital presence that makes high-value properties feel premium before anyone visits.",
  },
  {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    text: "Patient-first experiences that simplify complex journeys.",
  },
  {
    title: "D2C Brands",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    text: "Brand identity and marketing that builds loyalty from day one.",
  },
  {
    title: "EdTech",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    text: "Intuitive platforms that make learning feel effortless.",
  },
  {
    title: "Hospitality",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    text: "Visual storytelling and booking experiences that sell themselves.",
  },
];

const CARD_WIDTH = 315;
const CARD_GAP = 25;
const STEP = CARD_WIDTH + CARD_GAP;

export default function SliderSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLButtonElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (!viewportRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width);
    });

    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  const trackWidth = useMemo(
    () => cards.length * CARD_WIDTH + (cards.length - 1) * CARD_GAP,
    [],
  );

  const maxTranslate = Math.max(0, trackWidth - viewportWidth);
  const maxIndex = Math.max(0, Math.ceil(maxTranslate / STEP));

  const clamp = useCallback(
    (v: number) => Math.max(0, Math.min(maxIndex, v)),
    [maxIndex],
  );

  const safeIndex = Math.min(clamp(current), maxIndex);
  const translateX = Math.min(safeIndex * STEP, maxTranslate);

  const progressWidth = maxIndex === 0 ? 100 : 100 / (maxIndex + 1);
  const progressLeft =
    maxIndex === 0 ? 0 : (clamp(current) / maxIndex) * (100 - progressWidth);

  const moveSlider = (dir: "left" | "right") => {
    setCurrent((v) => clamp(dir === "left" ? v - 1 : v + 1));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "ArrowRight") {
        setCurrent((v) => clamp(v + 1));
      }
      if (e.shiftKey && e.key === "ArrowLeft") {
        setCurrent((v) => clamp(v - 1));
      }
    };

    globalThis.addEventListener("keydown", handleKey);
    return () => globalThis.removeEventListener("keydown", handleKey);
  }, [clamp]);

  const handleSeek = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!progressRef.current || maxIndex === 0) return;

    const rect = progressRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;

    setCurrent(clamp(Math.round(ratio * maxIndex)));
  };

  return (
    <section className="overflow-hidden bg-[#041b0b] py-14 sm:py-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-0">
        {/* HEADER */}
        <div className="mb-12 sm:mb-20 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-[530px] text-[28px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.08]">
            Built for ambition. 
            <br />
            Proven across sectors.
          </h2>

          {/* HIDE ARROWS ON MOBILE + TAB */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => moveSlider("left")}
              disabled={current === 0}
              className="grid h-14 w-14 place-items-center rounded-full border border-[#6d876f] text-[#c7ff45] disabled:opacity-40"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => moveSlider("right")}
              disabled={current === maxIndex}
              className="grid h-14 w-14 place-items-center rounded-full border border-[#6d876f] text-[#c7ff45] disabled:opacity-40"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragElastic={0.05}
            dragConstraints={{ left: -maxTranslate, right: 0 }}
            animate={{ x: -translateX }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
            className="flex cursor-grab gap-4 sm:gap-6 active:cursor-grabbing select-none touch-pan-y"
            style={{
              WebkitTapHighlightColor: "transparent",
              WebkitUserSelect: "none",
              userSelect: "none",
              touchAction: "pan-y",
            }}
            onDragEnd={(_, info) => {
              const threshold = STEP * 0.2;

              if (info.offset.x < -threshold) {
                setCurrent((v) => clamp(v + 1));
              } else if (info.offset.x > threshold) {
                setCurrent((v) => clamp(v - 1));
              }
            }}
          >
            {cards.map((card) => (
              <article
                key={card.title}
                draggable={false}
                className="relative h-[360px] sm:h-[460px] w-[260px] sm:w-[315px] shrink-0 overflow-hidden rounded-[18px] select-none"
              >
                <Image
                  src={`${card.image}?auto=format&fit=crop&w=900&q=85`}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 315px"
                  className="object-cover pointer-events-none"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/80" />

                <div className="absolute inset-x-4 sm:inset-x-6 bottom-5 sm:bottom-6">
                  <p className="text-[13px] sm:text-[15px] text-white/90 mb-3 sm:mb-4">
                    {card.text}
                  </p>
                  <h3 className="text-[22px] sm:text-[30px] font-semibold">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* PROGRESS BAR */}
        <button
          ref={progressRef}
          type="button"
          onClick={handleSeek}
          aria-label="Seek slider"
          className="hidden lg:block relative mt-8 sm:mt-10 h-[3px] w-full rounded-full bg-[#26442a] cursor-pointer"
        >
          <div
            className="absolute top-0 h-full rounded-full bg-[#c7ff45] transition-all duration-500"
            style={{
              left: `${progressLeft}%`,
              width: `${progressWidth}%`,
            }}
          />
        </button>
      </div>
    </section>
  );
}
