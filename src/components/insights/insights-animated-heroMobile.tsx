"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";

const featuredPosts = [
  { id: 1, type: "Blog", date: "02.09.2026", title: "How AI Simulations Are Transforming Hospital Workforce Readiness", image: "/insights/image1.png" },
  { id: 2, type: "Press", date: "04.08.2026", title: "ReflexAI and Google.org Expand AI-Powered Training Globally", image: "/insights/image2.png" },
  { id: 3, type: "Blog", date: "03.27.2026", title: "AI simulations are improving hospital workforce training and readiness", image: "/insights/image3.png" },
  { id: 4, type: "Blog", date: "01.18.2026", title: "AI simulations are helping doctors and nurses practice real-life cases safely", image: "/insights/image4.png" },
  { id: 5, type: "Blog", date: "12.11.2025", title: "AI simulations are enhancing hospital preparedness for real emergencies", image: "/insights/image5.png" },
];

const TOTAL = featuredPosts.length;
const AUTO_PLAY_INTERVAL = 3500;

export default function InsightsHeroMobile() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Logic: Each card takes up the full width minus the peek space on both sides
  const getCardWidth = useCallback(() => {
    const containerW = containerRef.current?.offsetWidth ?? 356;
    return containerW - 72; // 36px peek on each side
  }, []);

  const getSnapTarget = useCallback((index: number) => {
    const cardW = getCardWidth();
    // Offset by PEEK (36) to align the first card
    return -(index * (cardW + 12)) + 36;
  }, [getCardWidth]);

  const snapToIndex = useCallback((index: number) => {
    const target = getSnapTarget(index);
    animate(x, target, { type: "spring", stiffness: 300, damping: 30 });
    setActiveIndex(index);
  }, [x, getSnapTarget]);

  // Handle initialization
  useEffect(() => {
    x.set(getSnapTarget(0));
  }, [getSnapTarget, x]);

  // Auto-play
  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % TOTAL;
        snapToIndex(next);
        return next;
      });
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isInteracting, snapToIndex]);

  return (
    <section className="overflow-hidden bg-[#001F00] px-6 pt-6 pb-10 text-white">
      <div className="mx-auto max-w-[390px]">
        <div className="pt-18">
          <h1 className="text-[40px] font-bold leading-none tracking-[-0.07em]">Reflexions</h1>
          <p className="mt-8 font-serif text-[17px] leading-[1.35] text-[#E6ECE0]">Ideas, research, and stories about the intersection of empathy, training, and AI.</p>
        </div>

        <div className="mt-12 w-full" ref={containerRef}>
          <motion.div
            className="flex gap-[12px]"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: getSnapTarget(TOTAL - 1), right: getSnapTarget(0) }}
            onDragStart={() => setIsInteracting(true)}
            onDragEnd={(_, info) => {
              setIsInteracting(false);
              if (info.offset.x < -50) {
                snapToIndex((activeIndex + 1) % TOTAL); // wrap forward
              } else if (info.offset.x > 50) {
                snapToIndex((activeIndex - 1 + TOTAL) % TOTAL); // wrap backward
              } else {
                snapToIndex(activeIndex);
              }
            }}

          >
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="shrink-0"
                style={{ width: getCardWidth() }}
                animate={{
                  scale: index === activeIndex ? 1 : 0.85,
                  opacity: index === activeIndex ? 1 : 0.5,
                  rotateY: index < activeIndex ? 15 : index > activeIndex ? -15 : 0,
                  filter: index === activeIndex ? "blur(0px)" : "blur(2px)"
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="rounded-2xl bg-[#D9F09A] h-[360px] p-7 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                  <h2 className="text-[22px] font-medium leading-[1.15] text-[#081E00]">{post.title}</h2>
                  <div className="mt-4 text-[14px] text-[#4F6047]">{post.type} • {post.date}</div>
                  <div className="mt-auto pt-4 overflow-hidden rounded-[12px]">
                    <Image src={post.image} alt={post.title} width={300} height={120} className="w-full h-[120px] object-cover" />
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-[10px]">
          {featuredPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => snapToIndex(i)}
              className={`h-3 w-3 rounded-full transition-all ${i === activeIndex ? "bg-[#A8E61D] scale-125" : "bg-[#A8E61D]/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}