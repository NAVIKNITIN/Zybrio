"use client";

import { motion } from "framer-motion";

export default function RecentPerformanceChart() {
  return (
    <div className="flex items-center justify-center bg-[#001800]">
      <div className="w-[380px] rounded-lg border border-[#0B4D0B] bg-[#021402] p-2 shadow-[0_0_30px_rgba(0,255,100,0.05)]">
        {/* Title */}
        <h2 className="text-[11px] pb-4 font-medium text-[#F3F6F3]">
          Recent Performance
        </h2>

        {/* Chart Area */}
        <div className="relative">
          {/* Top Line */}
          <div className="absolute top-[7px] h-[1px] w-full bg-[#0B4D0B]" />

          {/* Bottom Line */}
          <div className="absolute bottom-8 h-[1px] w-full bg-[#0B4D0B]" />

          {/* Bars */}
          <div className="relative flex h-full items-end justify-around">
            {/* Left Bar */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 75,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="flex w-[75px] items-start justify-start rounded-lg bg-[#D6F19C] px-2 pt-2 shadow-[0_0_20px_rgba(214,241,156,0.25)]"
              >
                <span className="text-[14px] font-semibold text-[#0B210B]">
                  80%
                </span>
              </motion.div>

              <p className="mt-4 text-[10px] text-[#DDE6DD]">
                60 days
              </p>
            </div>

            {/* Right Bar */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 85,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="relative flex w-[75px]  items-start justify-start rounded-lg bg-[#12D652] px-2 pt-[2px] shadow-[0_0_25px_rgba(18,214,82,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#001800]">
                    98%
                  </span>

                  {/* Badge */}
                  <div className="absolute right-2 rounded-full bg-[#032C10] px-[2px] py-[2px] text-[9px] font-medium text-[#92FF76]">
                    +18%
                  </div>
                </div>

              </motion.div>

              <p className="mt-4 text-[10px] text-[#DDE6DD]">
                7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}