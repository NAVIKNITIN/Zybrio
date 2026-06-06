"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";

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
    title:
      "AI simulations are helping doctors and nurses practice real-life cases safely",
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

export default function InsightsHeroMobile() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Card dimensions
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 360;
  const GAP = 16;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;

  // Calculate snap target based on current index
  const getSnapTarget = (index: number) => -(index * SLIDE_WIDTH);

  // Snap to the nearest card
  const snapToCard = useCallback(
    (index: number) => {
      const target = getSnapTarget(index);
      animate(x, target, {
        type: "spring",
        stiffness: 400,
        damping: 30,
      });
      setActiveIndex(index);
    },
    [x, SLIDE_WIDTH],
  );

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    const currentX = x.get();
    const currentIndex = Math.round(-currentX / SLIDE_WIDTH);

    let newIndex = currentIndex;

    // Determine direction based on velocity and offset
    if (Math.abs(velocity) > 500) {
      if (velocity < 0) {
        newIndex = Math.min(currentIndex + 1, featuredPosts.length - 1);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }
    } else if (Math.abs(offset) > SLIDE_WIDTH / 3) {
      if (offset < 0) {
        newIndex = Math.min(currentIndex + 1, featuredPosts.length - 1);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }
    }

    snapToCard(newIndex);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const goToSlide = (index: number) => {
    snapToCard(index);
  };

  const nextSlide = () => {
    const newIndex = Math.min(activeIndex + 1, featuredPosts.length - 1);
    snapToCard(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    snapToCard(newIndex);
  };

  // Calculate initial position
  const initialX = getSnapTarget(activeIndex);

  return (
    <section className="overflow-hidden bg-[#001F00] px-6 pt-6 pb-10 text-white">
      <div className="mx-auto max-w-[390px]">
        {/* Heading */}
        <div>
          <div className="flex items-start gap-2">
            <h1 className=" mt-50 text-[40px] font-bold leading-none tracking-[-0.07em]">
              Reflexions
            </h1>
            <span className="mt-50 font-serif text-[15px] text-[#C5D0C0]">
              by ReflexAI
            </span>
          </div>

          <p className="mt-10 max-w-[320px] font-serif text-[17px] leading-[1.35] text-[#E6ECE0]">
            Ideas, research, and stories about the intersection of empathy, training, and
            AI — written by the people building it.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12">
          {/* Cards Track */}
          <div
            ref={containerRef}
            className="overflow-hidden rounded-[20px]"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <motion.div
              className="flex"
              style={{ x }}
              initial={{ x: initialX }}
              drag="x"
              dragConstraints={{
                left: getSnapTarget(featuredPosts.length - 1),
                right: getSnapTarget(0),
              }}
              dragElastic={0.05}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {featuredPosts.map((post, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={post.id}
                    className="relative shrink-0"
                    style={{
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                      marginRight: index < featuredPosts.length - 1 ? GAP : 0,
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <article className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#D9F09A]">
                      <div className="flex h-full flex-col px-7 pt-7">
                        {/* Title */}
                        <div className="flex-1">
                          <h2 className="max-w-[250px] text-[22px] font-medium leading-[1.15] tracking-[-0.04em] text-[#081E00]">
                            {post.title}
                          </h2>

                          <div className="mt-4 flex items-center gap-3 text-[14px] text-[#4F6047]">
                            <span>{post.type}</span>
                            <span className="h-[4px] w-[4px] rounded-full bg-[#4F6047]" />
                            <span>{post.date}</span>
                          </div>
                        </div>

                        {/* Image at bottom */}
                        <div className="relative z-10 pb-7">
                          <div className="overflow-hidden rounded-[12px]">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={700}
                              height={450}
                              className="h-[120px] w-[220px] rounded-[12px] object-cover"
                              draggable={false}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Shape */}
                      <div className="absolute bottom-0 right-0 h-[180px] w-[230px] rounded-tl-[110px] bg-[#A8E61D]" />
                    </article>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-[8px]">
          {featuredPosts.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[10px] w-[10px] rounded-full border border-[#A8E61D] transition-all duration-200 ${
                activeIndex === index ? "bg-[#A8E61D] scale-125" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
