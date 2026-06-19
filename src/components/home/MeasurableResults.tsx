"use client";

import { motion } from "framer-motion";

const stats = [
  {
    id: "communication-skills",
    value: "93%",
    label: "communication skills improvement",
    accentColor: "#2ECC71",
  },
  {
    id: "team-confidence",
    value: "84%",
    label: "increase in team confidence",
    accentColor: "#A855F7",
  },
  {
    id: "faster-onboarding",
    value: "59%",
    label: "faster onboarding",
    accentColor: "#F97316",
  },
];

export default function MeasurableResults() {
  return (
    <section className="bg-transparent py-12 mt-10 lg:mt-70 px-6 md:px-12 lg:px-30 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-[28px] leading-tight font-bold md:text-[40px]"
      >
        Measurable results from Day One
      </motion.h2>

      <div className="flex flex-col gap-14 md:flex-row md:items-stretch md:gap-0">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="flex items-stretch gap-5 md:flex-1"
          >
            <div className="relative flex flex-col items-center">
              <div
                className="h-[9px] w-[9px] rounded-[1px] shrink-0"
                style={{ backgroundColor: stat.accentColor }}
              />
              <div className="w-[1.5px] flex-1 bg-[#1A3A1A]" />
            </div>

            <div className="flex flex-col items-start gap-4 pb-2 md:flex-row md:items-center">
              <span className="text-[72px] font-bold leading-none md:text-[75px]">
                {stat.value}
              </span>

              <span className="max-w-[240px] text-[18px] md:text-[20px] leading-snug text-[#A0AFA0]">
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
