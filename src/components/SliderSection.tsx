"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Crisis",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    text: "Train teams for high-stakes conversations with realistic, guided practice.",
  },
  {
    title: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    text: "Help learners build confidence through repeatable simulation and feedback.",
  },
  {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    text: "Prepare care teams for sensitive interactions with measurable coaching.",
  },
  {
    title: "Mental Health",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2",
    text: "Support empathetic conversations before the most important moments happen.",
  },
  {
    title: "Emergency Response",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    text: "Practice clear communication when speed, calm, and accuracy matter.",
  },
  {
    title: "Contact Centers",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    text: "Improve QA, coaching, onboarding, and customer conversations at scale.",
  },
  {
    title: "Financial Services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    text: "Build compliant, confident teams for complex customer interactions.",
  },
  {
    title: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    text: "Give agents realistic practice for claims, support, and policy questions.",
  },
];

const CARD_WIDTH = 315;
const CARD_GAP = 25;
const STEP = CARD_WIDTH + CARD_GAP;

export default function SliderSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // observe width
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

  // clamp helper (SAFE)
  const clamp = (v: number) => Math.max(0, Math.min(maxIndex, v));

  const safeIndex = Math.min(clamp(current), maxIndex);
  const translateX = Math.min(safeIndex * STEP, maxTranslate);
  const progressWidth = maxIndex === 0 ? 100 : 100 / (maxIndex + 1);

  const progressLeft =
    maxIndex === 0 ? 0 : (clamp(current) / maxIndex) * (100 - progressWidth);

  // buttons
  const moveSlider = (dir: "left" | "right") => {
    setCurrent((v) => {
      const next = dir === "left" ? v - 1 : v + 1;
      return clamp(next);
    });
  };

  // keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "ArrowRight") {
        setCurrent((v) => clamp(v + 1));
      }

      if (e.shiftKey && e.key === "ArrowLeft") {
        setCurrent((v) => clamp(v - 1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [maxIndex]);

  // progress click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || maxIndex === 0) return;

    const rect = progressRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;

    setCurrent(clamp(Math.round(ratio * maxIndex)));
  };

  return (
    <section className="overflow-hidden bg-[#041b0b] py-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-0">
        {/* HEADER */}
        <div className="mb-20 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-[530px] text-[42px] font-semibold leading-[1.08] sm:text-[48px]">
            Proven in crisis,
            <br />
            powerful everywhere
          </h2>

          <div className="flex gap-3">
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
            onDragEnd={(_, info) => {
              const threshold = STEP * 0.2;

              if (info.offset.x < -threshold) {
                setCurrent((v) => clamp(v + 1));
              } else if (info.offset.x > threshold) {
                setCurrent((v) => clamp(v - 1));
              }
            }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {cards.map((card) => (
              <article
                key={card.title}
                className="relative h-[460px] w-[315px] shrink-0 overflow-hidden rounded-[18px]"
              >
                <Image
                  src={`${card.image}?auto=format&fit=crop&w=900&q=85`}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 315px"
                  className="object-cover"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/80" />

                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[15px] text-white/90 mb-4">{card.text}</p>
                  <h3 className="text-[30px] font-semibold">{card.title}</h3>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* PROGRESS BAR */}
        <div
          ref={progressRef}
          onClick={handleSeek}
          className="relative mt-10 h-[3px] w-full rounded-full bg-[#26442a] cursor-pointer"
        >
          <div
            className="absolute top-0 h-full rounded-full bg-[#c7ff45] transition-all duration-500"
            style={{
              left: `${progressLeft}%`,
              width: `${progressWidth}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
