"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const featuredPosts = [
  {
    id: 1,
    type: "Blog",
    date: "02.12.2026",
    title: "Introducing New Scorecards and Dashboards",
    image: "/insights/scorecards.png",
  },
  {
    id: 2,
    type: "Press",
    date: "04.08.2026",
    title: "ReflexAI and Google.org Expand AI-Powered Training Globally",
    image: "/insights/google-org.png",
  },
  {
    id: 3,
    type: "Blog",
    date: "03.27.2026",
    title: "Closing the Loop Between Insight and Action",
    image: "/insights/closing-loop.png",
  },
];

const WaveButton = ({ children }: { readonly children: React.ReactNode }) => {
  const bars = Array.from({ length: 22 }, (_, index) => ({
    id: `wave-bar-${index}`,
    delay: Math.abs(11 - index) * 18,
    height: `${20 + Math.sin(index) * 35 + index * 1.5}%`,
  }));

  return (
    <button className="group relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-lg border border-[#F3F4E8] bg-[#F3F4E8] px-6 py-2.5 text-[16px] font-medium leading-none text-[#061F00] transition-[scale,color,background-color,border-color] duration-500 active:scale-[0.975]">
      <span className="pointer-events-none absolute inset-x-0 -inset-y-5 flex w-full items-center justify-center">
        {bars.map((bar) => (
          <span
            key={bar.id}
            style={{
              transitionDelay: `${bar.delay}ms`,
              height: bar.height,
            }}
            className="flex-[0_0_4px] scale-x-0 scale-y-0 rounded-lg bg-[#A8E61D] transition-transform duration-300 group-hover:scale-x-100 group-hover:scale-y-100"
          />
        ))}
      </span>

      <span className="relative z-10">{children}</span>
    </button>
  );
};

const InsightsHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePost = featuredPosts[activeIndex];

  useEffect(() => {
    const timer = globalThis.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredPosts.length);
    }, 4200);

    return () => globalThis.clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#001F00] px-6 pb-24 pt-8 text-white">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between">
        <div className="text-[24px] font-bold">ReflexAI</div>

        <nav className="hidden items-center gap-9 text-[15px] font-semibold lg:flex">
          {["Products", "Solutions", "Customers", "Insights", "Pricing"].map((item) => (
            <button
              key={item}
              className="relative opacity-100 transition-opacity duration-300 hover:opacity-70"
            >
              {item}
              <span className="absolute -bottom-4 left-1/2 size-1 -translate-x-1/2 scale-0 rounded-full bg-[#A8E61D] transition-transform duration-300 hover:scale-100" />
            </button>
          ))}
        </nav>

        <WaveButton>Get a demo</WaveButton>
      </header>

      <div className="mx-auto max-w-[1280px] pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.36, 0, 0.114, 0.92] }}
        >
          <div className="flex items-start gap-4">
            <h1 className="text-[clamp(64px,8vw,118px)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Reflexions
            </h1>
            <span className="mt-3 text-[18px]">by ReflexAI</span>
          </div>

          <p className="mt-8 max-w-[580px] text-[22px] leading-[1.22]">
            Ideas, research, and stories about the intersection of empathy, training, and
            AI - written by the people building it.
          </p>
        </motion.div>

        <div className="relative mt-24 flex items-center justify-center">
          <motion.div
            animate={{ opacity: 0.42, x: -42 }}
            className="absolute left-0 hidden h-[326px] w-[184px] rounded-lg bg-gradient-to-r from-[#123A2E] to-[#5D7774] blur-[0.2px] lg:block"
          />

          <motion.div
            animate={{ opacity: 0.35, x: 42 }}
            className="absolute right-0 hidden h-[326px] w-[184px] rounded-lg bg-gradient-to-r from-[#5D7774] to-[#001F00] blur-[0.2px] lg:block"
          />

          <div className="relative z-10 w-full max-w-[846px] overflow-hidden rounded-lg bg-[#DFFF8D] text-[#061F00]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activePost.id}
                initial={{ opacity: 0, x: 80, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.985 }}
                transition={{ duration: 0.65, ease: [0.36, 0, 0.114, 0.92] }}
                className="relative min-h-[410px] overflow-hidden p-6 md:p-8"
              >
                <div className="relative z-20 max-w-[560px]">
                  <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.045em] md:text-[38px]">
                    {activePost.title}
                  </h2>

                  <div className="mt-6 flex items-center gap-3 text-[13px]">
                    <span>{activePost.type}</span>
                    <span className="size-1 bg-[#061F00]" />
                    <span>{activePost.date}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 44, rotate: -4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, ease: [0.36, 0, 0.114, 0.92] }}
                  className="absolute bottom-[-130px] right-[-70px] h-[360px] w-[560px] rounded-[44px] bg-[#A8E61D]"
                />

                <motion.div
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.65 }}
                  className="absolute bottom-6 right-6 z-20 h-[218px] w-[388px] overflow-hidden rounded-md bg-[#F8F8F5] shadow-sm"
                >
                  <Image
                    src={activePost.image}
                    alt={activePost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 388px"
                    className="object-cover"
                  />
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {featuredPosts.map((post, index) => (
            <button
              key={post.id}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`size-2 rounded-full border border-[#A8E61D] transition-all duration-300 ${
                activeIndex === index ? "bg-[#A8E61D]" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
