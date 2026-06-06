"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

/* ---------------- DIGIT ---------------- */
/* ---------------- DIGIT ---------------- */
type RollingDigitProps = Readonly<{
  digit: number;
  delay?: number;
  color?: string;
  size?: number;
}>;

function RollingDigit({
  digit,
  delay = 0,
  color = "text-white",
  size = 100,
}: RollingDigitProps) {
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  const responsiveSize =
    size >= 80
      ? `clamp(64px, 13vw, ${size}px)`
      : `clamp(38px, 8vw, ${size}px)`;

  return (
    <div
      className="relative overflow-hidden"
      style={
        {
          "--rolling-size": responsiveSize,
          height: "var(--rolling-size)",
        } as CSSProperties
      }
    >
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: `calc(-${digit} * var(--rolling-size))` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {numbers.map((n) => (
          <div
            key={n}
            style={{
              height: "var(--rolling-size)",
              fontSize: "var(--rolling-size)",
            }}
            className={`flex items-center justify-center font-bold leading-none ${color}`}
          >
            {n}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- NUMBER ---------------- */
type RollingNumberProps = Readonly<{
  value: number;
  suffix?: string;
  color?: string;
  size?: number;
}>;

function RollingNumber({
  value,
  suffix = "",
  color = "text-white",
  size = 100,
}: RollingNumberProps) {
  const digits = value
    .toString()
    .split("")
    .map((digit, idx) => ({
      digit: Number.parseInt(digit, 10),
      key: `${value}-${digit}-${idx}`,
      delay: idx * 0.08,
    }));

  return (
    <div className="flex items-center">
      {digits.map((digitItem) => (
        <RollingDigit
          key={digitItem.key}
          digit={digitItem.digit}
          delay={digitItem.delay}
          color={color}
          size={size}
        />
      ))}

      <span
        className={`font-bold leading-none ${color}`}
        style={{
          fontSize:
            size >= 80
              ? `clamp(64px, 13vw, ${size}px)`
              : `clamp(38px, 8vw, ${size}px)`,
        }}
      >
        {suffix}
      </span>
    </div>
  );
}

/* ---------------- MAIN SECTION ---------------- */
export default function AboutInNumbers() {
  return (
    <section className="bg-[#012b00] px-4 py-14 pt-16 sm:px-6 sm:py-18 sm:pt-28 lg:pt-50">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="mb-8 text-[30px] font-semibold text-white sm:mb-12 sm:text-[36px] lg:mb-18 lg:text-[40px]">
          ReflexAI in numbers
        </h2>

        <div className="h-auto rounded-[20px] border border-[#124011] bg-[#032600] p-3 sm:rounded-[24px] lg:h-[520px] lg:rounded-[28px]">
          <div className="grid h-full gap-3 lg:grid-cols-[1fr_380px] lg:gap-6">
            {/* LEFT SIDE */}
            <div className="flex h-full flex-col p-5 sm:p-8 lg:mt-10 lg:ml-10 lg:p-0">
              <div>
                <RollingNumber value={94} suffix="%" color="text-[#B8FF16]" size={100} />

                <p className="mt-4 text-[17px] leading-[1.45] text-white sm:text-[20px] lg:text-[22px]">
                  Confidence and satisfaction across team members
                </p>
              </div>

              {/* GRAPH */}
              <div className="mt-8 h-[180px] sm:h-[220px] lg:mt-auto lg:h-[260px]">
                <svg
                  viewBox="0 0 900 260"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B8FF16" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#B8FF16" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <motion.path
                    d="
                M20 220
                C120 225,150 180,250 170
                C350 160,450 150,550 80
                C620 40,700 90,780 70
                C840 50,880 20,900 10
                L900 260
                L20 260
                Z
              "
                    fill="url(#graphGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Line */}
                  <motion.path
                    d="
                M20 220
                C120 225,150 180,250 170
                C350 160,450 150,550 80
                C620 40,700 90,780 70
                C840 50,880 20,900 10
              "
                    fill="none"
                    stroke="#B8FF16"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8 }}
                  />

                  {/* Highlight Dot */}
                  <rect x="545" y="74" width="14" height="14" fill="#B8FF16" />
                </svg>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex h-full flex-col gap-3 sm:grid sm:grid-cols-3 lg:flex lg:gap-2">
              {/* Card 1 */}
              <div className="flex-1 rounded-2xl bg-[rgb(19,42,13)] px-5 py-5 sm:px-5 sm:py-6 lg:px-10 lg:py-4">
                <RollingNumber value={50} suffix="%+" color="text-white" size={50} />

                <p className="mt-4 text-[15px] leading-[1.4] text-white sm:text-[16px] lg:text-[18px]">
                  Reduction in manual onboarding time
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-1 rounded-2xl bg-[rgb(19,42,13)] px-5 py-5 sm:px-5 sm:py-6 lg:px-8 lg:py-6">
                <RollingNumber value={31} suffix="%" color="text-white" size={50} />

                <p className="mt-4 text-[15px] leading-[1.4] text-white sm:text-[16px] lg:text-[18px]">
                  Priority interaction outcomes improvement
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex-1 rounded-2xl bg-[rgb(19,42,13)] px-5 py-5 sm:px-5 sm:py-6 lg:px-8 lg:py-6">
                <RollingNumber value={100} suffix="%" color="text-white" size={50} />

                <p className="mt-4 text-[15px] leading-[1.4] text-white sm:text-[16px] lg:text-[18px]">
                  Performance visibility across all interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
