"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CustomGraph from "../common/graphLib";
import { Clock3, MessageCircle, MoreVertical, Users } from "lucide-react";
import MeasurableResults from "./MeasurableResults";
import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const statsData = [
  { id: "protocol-compliance", title: "Protocol Compliance", value: "96%" },
  { id: "situation-assessment", title: "Situation Assessment", value: "92%" },
];

const interactionData = [
  { id: "interaction-0-10", label: "0 - 10 min", width: "55%", color: "#B7FF00" },
  { id: "interaction-10-20", label: "10 - 20 min", width: "34%", color: "#2DFF84" },
  { id: "interaction-20-plus", label: "20+ min", width: "11%", color: "#FF00FF" },
];

// ─── Status Pill Badges ───────────────────────────────────────────────────────

const RenderStatusCards = () => (
  <div className="flex flex-col gap-3 mt-12">
    {statsData.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 1 }}
        whileHover={{ scale: 1.03, x: -5 }}
        className={`flex items-center justify-between rounded-full border border-[#154015] bg-[#041C04]/90 px-5 py-1.5 w-[340px] ${index === 1 ? "ml-14" : ""}`}
      >
        <span className="text-[12px] font-semibold text-white">{item.title}</span>
        <span className="text-[15px] font-bold text-white">{item.value}</span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, dotIdx) => (
            <span
              key={`status-dot-${dotIdx}`}
              className={`h-[9px] w-[9px] rounded-full ${dotIdx === 4 ? "border border-[#B7FF00] bg-transparent" : "bg-[#B7FF00]"
                }`}
            />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Floating Stats Card ──────────────────────────────────────────────────────

interface StatsCardProps {
  value: string | number;
  label: string;
  className?: string;
  delay?: number;
}

const StatsCard = ({ value, label, className = "", delay = 0 }: StatsCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -80, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1, y: [0, -10, 0] }}
    transition={{
      duration: 1.2,
      delay,
      y: { duration: 5, repeat: Infinity, delay },
    }}
    whileHover={{ scale: 1.04, y: -8 }}
    className={`rounded-md border border-[#154015] bg-[#041C04]/90 p-4 backdrop-blur-sm ${className}`}
  >
    <h2 className="text-[25px] font-semibold leading-none tracking-tight text-white">
      {value}
    </h2>
    <p className="mt-4 text-[12px] leading-tight tracking-[0.02em] text-[#D9D5C8]">
      {label}
    </p>
  </motion.div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PerformanceSection() {
  const measurableRef = useRef(null);

  const isInView = useInView(measurableRef, {    
    amount: 0.5, // 50% section visible
  });

  const [isMeasurableVisible, setIsMeasurableVisible] = useState(false);

  useEffect(() => {
    setIsMeasurableVisible(isInView);
  }, [isInView]);

  return (
    <motion.div
      animate={{
        backgroundColor: isMeasurableVisible
          ? "#ffffff"
          : "#001F00",
      }}
      transition={{ duration: 0.6 }}
    >
      <section className={`relative  ${isMeasurableVisible ? " text-black" : "text-white"}`}>
        {/* Radial ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(0,200,80,0.07),_transparent_70%)]" />

        <div className="relative mx-auto max-w-[1600px]" style={{ minHeight: "100vh" }}>
          {/* ── HEADLINE — true vertical + horizontal center ── */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-20 flex top-30 items-center justify-center pointer-events-none"
          >
            <span className="w-full max-w-[860px] text-center text-[70px] font-semibold leading-[1] tracking-[-3px] px-4">
              Performance
              {/* SVG accent shape */}
              <span className="inline-block translate-y-2 px-2">
                <svg
                  width="77"
                  height="72"
                  viewBox="0 0 77 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_perf)">
                    <path
                      opacity="0.6"
                      d="M18.6729 41.6514L5.36572 49.1829C4.11136 49.8928 3.33594 51.2227 3.33594 52.664V63.3357C3.33594 65.5449 5.1268 67.3357 7.33594 67.3357H69.999C72.2082 67.3357 73.999 65.5449 73.999 63.3357V13.276C73.999 9.87263 70.0192 8.02409 67.4186 10.2196L60.4305 16.1193L35.6746 38.4773C35.0674 39.0257 34.3066 39.3747 33.4949 39.4772L20.1418 41.1641C19.6251 41.2294 19.1261 41.3949 18.6729 41.6514Z"
                      fill="url(#paint0_perf)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_perf"
                      x1="38.6675"
                      y1="4.66406"
                      x2="38.6675"
                      y2="67.3357"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#09CF58" />
                      <stop offset="1" stopColor="#09CF58" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_perf">
                      <rect
                        width="71"
                        height="64"
                        fill="white"
                        transform="translate(3 2.91406)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              you can{"\n"}measure, outcomes that{"\n"}matter to you.
            </span>
          </motion.h2>

          {/* ── TOP-LEFT: User score card ── */}
          <div className="flex pt-18 justify-center gap-45">
            <motion.div
              initial={{ opacity: 0, y: -80, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4 }}
              whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
              className="w-[310px] rounded-xl border border-[#123512] bg-[#041904]/95 p-4 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,120,0.06)]"
            >
              {/* User row */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/HomePage-image/profile.jpg"
                    alt="Alisha Wade"
                    width={38}
                    height={38}
                    className="rounded-[20%]"
                  />
                  <div>
                    <p className="text-[10px] text-gray-400">User</p>
                    <h4 className="text-[13px] font-semibold leading-tight">Alisha Wade</h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-start">
                    <p className="text-[10px] text-[#AFC1AF]">Overall Score</p>

                    <div className="mt-1.5 flex gap-1">
                      {Array.from({ length: 5 }, (_, idx) => idx + 1).map((dotNumber) => (
                        <motion.span
                          key={`score-dot-${dotNumber}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: dotNumber * 0.08 }}
                          className="h-2 w-2 rounded-full bg-[#B7FF00]"
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-[32px] font-bold leading-none">89%</h3>
                </div>
              </div>

              <CustomGraph />
            </motion.div>

            <RenderStatusCards />
          </div>

          {/* ── TOP-RIGHT: Status pill badges ── */}
          {/* <div className="absolute right-[4%] top-[8%] z-10">
          <RenderStatusCards />
        </div> */}

          {/* ── MID-LEFT: Stats cards ── */}
          <div className="absolute left-[10%] top-[62%] z-10 flex flex-col gap-3">
            <StatsCard
              value="38,564"
              label="Messages Exchanged"
              className="w-[210px]"
              delay={0}
            />
            <StatsCard
              value="406"
              label="Active Team Members"
              className="w-[210px] ml-8"
              delay={0.15}
            />
          </div>

          {/* ── MID-RIGHT: Interactions by Length ── */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="absolute right-[11%] top-[65%] z-10 w-[300px] rounded-lg border border-[#103810] bg-[#031803]/90 p-4 backdrop-blur-xl"
          >
            <h3 className="text-sm font-medium text-white">Interactions by Length</h3>

            <div className="mt-6 space-y-4">
              {interactionData.map((item, index) => (
                <div key={item.id}>
                  <div className="mb-1.5 flex justify-between text-[10px] text-[#C9D8C9]">
                    <span>{item.label}</span>
                    <span>{item.width}</span>
                  </div>
                  <div className="h-[4px] w-full rounded-full bg-[#163016]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: item.width }}
                      transition={{ duration: 1.3, delay: index * 0.3 }}
                      style={{ background: item.color }}
                      className="h-[4px] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── BOTTOM-CENTER: Stacked workspace card ── */}
          <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2">
            {/* Stack Layer 3 */}
            <div className="absolute left-1/2 top-[40px] h-[124px] w-[300px] -translate-x-1/2 rounded-xl border border-[#0A4B18]/60 bg-[#021802]" />

            {/* Stack Layer 2 */}
            <div className="absolute left-1/2 top-[25px] h-[124px] w-[320px] -translate-x-1/2 rounded-xl border border-[#0A4B18]/60 bg-[#021802]" />

            {/* Main Card */}
            <div className="relative z-10 rounded-xl border border-[#0A4B18] bg-[#021802] px-3 py-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#E3F5E1] text-[11px] font-medium text-[#1A331A]">
                    CT
                  </div>

                  <h3 className="text-[10px] font-medium text-white">Clinical Team</h3>
                </div>

                <MoreVertical size={14} className="text-[#6D826D]" />
              </div>

              {/* Stats */}
              <div className="mt-3 flex bg-[#052502] py-3 rounded-lg justify-between px-3 gap-5">
                {/* Column 1 */}
                <div>
                  <h4 className="text-lg font-medium text-white">48</h4>

                  <div className="mt-2 flex items-center gap-1.5">
                    <Users size={12} className="text-[#78A92C]" />
                    <span className="text-[10px] text-[#A7B0A4]">Team Members</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="text-lg font-medium text-white">4,238</h4>

                  <div className="mt-2 flex items-center gap-1.5">
                    <MessageCircle size={12} className="text-[#78A92C]" />

                    <span className="text-[10px] text-[#A7B0A4]">Total Interactions</span>
                  </div>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="text-lg font-medium text-white">25m 38s</h4>

                  <div className="mt-2 flex items-center gap-1.5">
                    <Clock3 size={12} className="text-[#78A92C]" />

                    <span className="text-[10px] text-[#A7B0A4]">Median Duration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-10 text-center text-[12px] text-[#D7D7D7]">
              +16 More Workspaces
            </p>
          </div>
        </div>
        <div ref={measurableRef}>
          <MeasurableResults />
        </div>
      </section>
    </motion.div>

  );
}
