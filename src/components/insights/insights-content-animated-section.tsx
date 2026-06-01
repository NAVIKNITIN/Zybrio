"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { InsightsBlogGrid } from "@/components/insights/insights-blog-grid";
import { InsightsBlogShowcase } from "@/components/insights/insights-blog-showcase";
import {
  InsightsFiltersSidebar,
  type InsightsFilterView,
} from "@/components/insights/insights-filters-sidebar";
import { InsightsPressSlider } from "@/components/insights/insights-press-slider";
import { InsightsSubscribeCta } from "@/components/insights/insights-subscribe-cta";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 38,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} satisfies Variants;

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: "blur(6px)",
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
} satisfies Variants;

const CaseStudiesPanel = () => {
  return (
    <section className="min-h-[34rem] rounded-[1.3rem] border border-white/10 bg-[rgba(7,40,12,0.72)] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-10">
      <p className="text-[1.15rem] font-medium text-white/88">Case studies</p>

      <h2 className="mt-3 max-w-[42rem] text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.25rem]">
        See how teams train, coach, and scale with ReflexAI
      </h2>

      <p className="mt-6 max-w-[38rem] text-[1.1rem] leading-[1.5] text-white/72">
        Explore customer stories from organizations using ReflexAI to improve readiness,
        quality assurance, and high-stakes conversations.
      </p>

      <Link
        href="/customers#top"
        className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-[0.95rem] border border-white/10 px-5 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/4"
      >
        View case studies
        <ArrowUpRight className="size-4 text-[#a4ea00]" />
      </Link>
    </section>
  );
};

export const InsightsContentAnimatedSection = () => {
  const [activeView, setActiveView] = useState<InsightsFilterView>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleViewChange = useCallback(
    (view: InsightsFilterView) => {
      setActiveView(view);

      window.requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) {
          return;
        }

        const headerOffset = 96;
        const nextTop =
          section.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(nextTop, 0),
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      });
    },
    [shouldReduceMotion],
  );

  const showBlog = activeView === "all" || activeView === "blog";
  const showPress = activeView === "all" || activeView === "press";
  const showCaseStudies = activeView === "case-studies";

  return (
    <section
      ref={sectionRef}
      className="bg-[#012a0b] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      data-insights-scroll-zone
    >
      <div className="container-app flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <aside className="relative z-20 lg:sticky lg:top-24 lg:w-[302px] lg:flex-none lg:self-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <InsightsFiltersSidebar
              activeView={activeView}
              onViewChange={handleViewChange}
            />
          </motion.div>
        </aside>

        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              variants={shouldReduceMotion ? undefined : contentVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              exit={shouldReduceMotion ? undefined : "exit"}
              className="min-h-[44rem] space-y-20"
            >
              {showBlog ? (
                <>
                  <motion.div
                    variants={shouldReduceMotion ? undefined : revealVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.16 }}
                  >
                    <InsightsBlogShowcase onViewAll={() => handleViewChange("blog")} />
                  </motion.div>

                  <motion.div
                    variants={shouldReduceMotion ? undefined : revealVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.18 }}
                  >
                    <InsightsBlogGrid />
                  </motion.div>

                  <motion.div
                    variants={shouldReduceMotion ? undefined : revealVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.22 }}
                  >
                    <InsightsSubscribeCta />
                  </motion.div>
                </>
              ) : null}

              {showPress ? (
                <motion.div
                  variants={shouldReduceMotion ? undefined : revealVariants}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView={shouldReduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.16 }}
                >
                  <InsightsPressSlider />
                </motion.div>
              ) : null}

              {showCaseStudies ? (
                <motion.div
                  variants={shouldReduceMotion ? undefined : revealVariants}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView={shouldReduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.18 }}
                >
                  <CaseStudiesPanel />
                </motion.div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};