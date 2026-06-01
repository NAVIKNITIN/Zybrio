"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "93%",
    label: "communication skills improvement",
    accentColor: "#2ECC71", // green
  },
  {
    value: "84%",
    label: "increase in team confidence",
    accentColor: "#A855F7", // purple
  },
  {
    value: "59%",
    label: "faster onboarding",
    accentColor: "#F97316", // orange
  },
];

export default function MeasurableResults() {
  return (
    <section className="bg-transparent  py-12 mt-70 md:px-30 md:py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-[22px] font-bold text-white md:text-[40px]"
      >
        Measurable results from Day One
      </motion.h2>

      {/* Stats Row */}
      <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="flex items-stretch gap-5 md:flex-1"
          >
            {/* Left border accent with colored square dot on top */}
            <div className="relative flex flex-col items-center">
              {/* Colored square dot */}
              <div
                className="h-[9px] w-[9px] rounded-[1px] shrink-0"
                style={{ backgroundColor: stat.accentColor }}
              />
              {/* Vertical line */}
              <div className="w-[1.5px] flex-1 bg-[#1A3A1A]" />
            </div>

            {/* Stat content */}
            <div className="flex items-center gap-4 pb-2">
              {/* Big percentage */}
              <span className="text-[52px] font-bold leading-none text-white md:text-[75px]">
                {stat.value}
              </span>

              {/* Label */}
              <span className="max-w-[200px]  text-[20px] leading-snug text-[#A0AFA0]">
                {stat.label}
              </span>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
