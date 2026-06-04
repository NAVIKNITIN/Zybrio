"use client";

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

  return (
    <div className="relative overflow-hidden" style={{ height: `${size}px` }}>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: -digit * size }}
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
            style={{ height: `${size}px`, fontSize: `${size}px` }}
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
        style={{ fontSize: `${size}px` }}
      >
        {suffix}
      </span>
    </div>
  );
}

/* ---------------- MAIN SECTION ---------------- */
export default function AboutInNumbers() {
  return (
    <section className="bg-[#012b00] py-18 pt-50 px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-white text-[40px] font-semibold mb-18">
          ReflexAI in numbers
        </h2>

        <div className="h-[520px] rounded-[28px] border border-[#124011] bg-[#032600] p-3">
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 h-full">
            {/* LEFT SIDE */}
            <div className="flex flex-col h-full mt-10 ml-10">
              <div>
                <RollingNumber value={94} suffix="%" color="text-[#B8FF16]" size={100} />

                <p className="text-white text-[22px] mt-4">
                  Confidence and satisfaction across team members
                </p>
              </div>

              {/* GRAPH */}
              <div className="mt-auto h-[260px]">
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
            <div className="flex flex-col gap-2 h-full">
              {/* Card 1 */}
              <div className="flex-1 bg-[rgb(19,42,13)] rounded-2xl px-10 py-4">
                <RollingNumber value={50} suffix="%+" color="text-white" size={50} />

                <p className="text-white text-[18px] leading-[1.4] mt-4">
                  Reduction in manual onboarding time
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-[rgb(19,42,13)] rounded-2xl px-8 py-6">
                <RollingNumber value={31} suffix="%" color="text-white" size={50} />

                <p className="text-white text-[18px] leading-[1.4] mt-4">
                  Priority interaction outcomes improvement
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex-1 bg-[rgb(19,42,13)] rounded-2xl px-8 py-6">
                <RollingNumber value={100} suffix="%" color="text-white" size={50} />

                <p className="text-white text-[18px] leading-[1.4] mt-4">
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
