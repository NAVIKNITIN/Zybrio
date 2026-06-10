"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";

const featuredPosts = [
  {
    id: 1,
    type: "Blog",
    date: "02.09.2026",
    title: "How AI Simulations Are Transforming Hospital Workforce Readiness",
    image: "/insights/image1.png",
  },
  {
    id: 2,
    type: "Press",
    date: "04.08.2026",
    title: "ReflexAI and Google.org Expand AI-Powered Training Globally",
    image: "/insights/image2.png",
  },
  {
    id: 3,
    type: "Blog",
    date: "03.27.2026",
    title: "AI simulations are improving hospital workforce training and readiness",
    image: "/insights/image3.png",
  },
  {
    id: 4,
    type: "Blog",
    date: "01.18.2026",
    title: "AI simulations are helping doctors and nurses practice real-life cases safely",
    image: "/insights/image4.png",
  },
  {
    id: 5,
    type: "Blog",
    date: "12.11.2025",
    title: "AI simulations are enhancing hospital preparedness for real emergencies",
    image: "/insights/image5.png",
  },
];

const TOTAL = featuredPosts.length;
const AUTO_PLAY_INTERVAL = 3500;

// ─── Dot with SVG circular progress animation ─────────────────────────────
function ProgressDot({
  isActive,
  onClick,
  duration,
  paused,
}: {
  isActive: boolean;
  onClick: () => void;
  duration: number;
  paused: boolean;
}) {
  const SIZE = 14;
  const STROKE = 2;
  const R = (SIZE - STROKE) / 2;   // 6
  const CIRC = 2 * Math.PI * R;     // ~37.7

  return (
    <button
      onClick={onClick}
      aria-label="Go to slide"
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Static outline ring */}
      <svg
        width={SIZE}
        height={SIZE}
        className="absolute inset-0"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke="#A8E61D"
          strokeWidth={STROKE}
          opacity={0.35}
        />
        {isActive && (
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            fill="none"
            stroke="#A8E61D"
            strokeWidth={STROKE}
            strokeDasharray={CIRC}
            strokeDashoffset={0}
            strokeLinecap="round"
            style={{
              animation: paused
                ? "none"
                : `dotProgress ${duration}ms linear forwards`,
            }}
          />
        )}
      </svg>
      {/* Inner filled circle */}
      <span
        className="rounded-full transition-all duration-300"
        style={{
          width: isActive ? 6 : 5,
          height: isActive ? 6 : 5,
          background: isActive ? "#A8E61D" : "transparent",
          border: isActive ? "none" : "1.5px solid #A8E61D",
          opacity: isActive ? 1 : 0.5,
        }}
      />
    </button>
  );
}

export default function InsightsHeroMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Card sizing: center card is large, peek cards show ~36px on each side
  // Total section px-6 = 24px each side. We want side peek of ~36px showing.
  // CARD_WIDTH is calculated dynamically but we define the PEEK amount:
  const PEEK = 36;       // px visible of prev/next card on each side
  const GAP = 12;        // gap between cards

  const getContainerWidth = useCallback(() => {
    return containerRef.current?.offsetWidth ?? 300;
  }, []);

  // Card width = container - peek on each side - gap to peek cards
  const getCardWidth = useCallback(() => {
    const cw = getContainerWidth();
    return cw - PEEK * 2 - GAP * 2;
  }, [getContainerWidth]);

  // x=0 means first card is peek-offset from left
  // Each card step = cardWidth + gap
  const getSnapTarget = useCallback(
    (index: number) => {
      const cardW = getCardWidth();
      const slideW = cardW + GAP;
      // Offset so active card is centered: first card starts at PEEK
      return -(index * slideW) + PEEK;
    },
    [getCardWidth]
  );

  const snapToIndex = useCallback(
    (index: number) => {
      const target = getSnapTarget(index);
      animate(x, target, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
      setActiveIndex(index);
    },
    [x, getSnapTarget]
  );

  // Set initial position after mount
  useEffect(() => {
    x.set(getSnapTarget(0));
  }, []);

  // Re-snap on resize
  useEffect(() => {
    const handleResize = () => {
      x.set(getSnapTarget(activeIndex));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, x, getSnapTarget]);

  // Single auto-play interval
  useEffect(() => {
    if (isDragging || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % TOTAL;
        const cardW = (containerRef.current?.offsetWidth ?? 300) - PEEK * 2 - GAP * 2;
        const slideW = cardW + GAP;
        animate(x, -(next * slideW) + PEEK, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
        return next;
      });
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isDragging, isHovered, x]);

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    let next = activeIndex;
    if (offset < -40 || velocity < -300) next = Math.min(activeIndex + 1, TOTAL - 1);
    else if (offset > 40 || velocity > 300) next = Math.max(activeIndex - 1, 0);
    snapToIndex(next);
  };

  return (
    <section className="overflow-hidden bg-[#001F00] px-6 pt-6 pb-10 text-white">
      {/* Inject keyframe for dot progress */}
      <style>{`
        @keyframes dotProgress {
          from { stroke-dashoffset: ${2 * Math.PI * 6}; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="mx-auto max-w-[390px]">
        {/* Heading */}
        <div className="pt-18">
          <div className="flex items-start gap-2">
            <h1 className="text-[40px] font-bold leading-none tracking-[-0.07em]">
              Reflexions
            </h1>
            <span className="font-serif text-[15px] text-[#C5D0C0]">by ReflexAI</span>
          </div>
          <p className="mt-8 font-serif text-[17px] leading-[1.35] text-[#E6ECE0]">
            Ideas, research, and stories about the intersection of empathy, training, and
            AI — written by the people building it.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <div
            ref={containerRef}
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <motion.div
              className="flex"
              style={{ x }}
              drag="x"
              dragConstraints={{
                left: getSnapTarget(TOTAL - 1),
                right: getSnapTarget(0),
              }}
              dragElastic={0.05}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {featuredPosts.map((post, index) => {
                const isActive = index === activeIndex;
                const cardW = getCardWidth();

                return (
                  <motion.div
                    key={post.id}
                    className="shrink-0"
                    style={{
                      width: cardW,
                      marginRight: GAP,
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.45,
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <article
                      className="relative overflow-hidden rounded-2xl bg-[#D9F09A]"
                      style={{ height: 360 }}
                    >
                      <div className="flex h-full flex-col px-7 pt-7">
                        {/* Title */}
                        <div className="flex-1">
                          <h2 className="text-[22px] font-medium leading-[1.15] tracking-[-0.04em] text-[#081E00]">
                            {post.title}
                          </h2>
                          <div className="mt-4 flex items-center gap-3 text-[14px] text-[#4F6047]">
                            <span>{post.type}</span>
                            <span className="h-[4px] w-[4px] rounded-full bg-[#4F6047]" />
                            <span>{post.date}</span>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative z-10 pb-7">
                          <div className="overflow-hidden rounded-[12px]">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={700}
                              height={450}
                              className="h-[120px] w-full rounded-[12px] object-cover"
                              draggable={false}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Decorative shape */}
                      <div className="absolute bottom-0 right-0 h-[180px] w-[230px] rounded-tl-[110px] bg-[#A8E61D]" />
                    </article>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots with circular progress */}
        <div className="mt-8 flex justify-center gap-[10px]">
          {featuredPosts.map((_, index) => (
            <ProgressDot
              key={index}
              isActive={index === activeIndex}
              onClick={() => snapToIndex(index)}
              duration={AUTO_PLAY_INTERVAL}
              paused={isDragging || isHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
