"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ToggleTabs from "./ToggleBtbText";

export default function ReflexStudioSection() {
  const [activeTab, setActiveTab] = useState<"prepare" | "assure">("prepare");

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:gap-12 md:px-10 lg:grid-cols-2 lg:px-20 xl:px-30 xl:py-20">
        {/* Left content */}
        <div className="w-full min-w-0">
          <div className="mb-2 flex items-center gap-3 text-[13px] text-[#1a2e10] sm:text-[15px]">
            <div className="h-2 w-2 shrink-0 rounded-[20%] bg-[#ED502F]" />
            <span className="break-words">
              ReflexAI Studio: Self-Serve Simulations & Scoring
            </span>
          </div>

          <h2 className="mt-6 text-[34px] font-bold leading-[1] text-black sm:mt-8 sm:text-[40px] lg:text-[48px]">
            Build your own simulations and scoring models – in just minutes
          </h2>

          <div className="mt-8 hidden lg:block">
            <ToggleTabs
              options={["Simulations", "Scoring"]}
              onChange={(val) => console.log(val)}
            />
          </div>

          <p className="mt-10 max-w-[420px] text-[16px] leading-[1.5] text-[#1a2e10] sm:mt-14 sm:text-[18px] lg:mt-40 lg:text-[20px]">
            Create lifelike simulations and scoring models from any script, file,
            scenario, or prompt. ReflexAI Studio powers both Prepare and Assure, giving
            teams the tools to train, measure, and improve — all in one platform, with no
            code.
          </p>

          <div className="mt-8 lg:hidden">
            <ToggleTabs
              options={["Simulations", "Scoring"]}
              onChange={(val) => console.log(val)}
            />
          </div>
        </div>

        {/* Right chat mockup */}
        <motion.div className="relative mx-auto w-full max-w-[140px] sm:max-w-[170px] md:max-w-[200px] lg:max-w-[230px]">
          <div className="absolute inset-0 -z-10">
            <svg viewBox="0 0 600 500" fill="none" className="h-auto w-full opacity-40">
              <polygon
                points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                stroke="#b2ae9c"
                strokeWidth="1.1"
                strokeDasharray="7 8"
                fill="none"
              />

              <g transform="translate(75,62.5) scale(0.75)">
                <polygon
                  points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                  stroke="#b2ae9c"
                  strokeWidth="1.1"
                  strokeDasharray="7 8"
                  fill="none"
                />
              </g>

              <g transform="translate(150,125) scale(0.50)">
                <polygon
                  points="300,0 498,60 600,215 564,390 408,500 192,500 36,390 0,215 102,60"
                  stroke="#b2ae9c"
                  strokeWidth="1.1"
                  strokeDasharray="7 8"
                  fill="#eeede4"
                  opacity="0.9"
                />
              </g>
            </svg>
          </div>

          <div className="overflow-hidden rounded-[18px] bg-[#012900] text-white shadow-xl h-auto lg:h-auto lg:max-h-none">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1a3d0f] px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=5"
                  alt="Olivia"
                  className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold sm:text-base">Olivia</p>
                  <p className="text-xs text-gray-400 sm:text-sm">Agent</p>
                </div>
              </div>

              <button className="shrink-0 text-xs text-gray-300 hover:text-white sm:text-sm">
                End Chat
              </button>
            </div>

            {/* Chat Content */}
            <div className="space-y-0.5 p-1 text-[9px] sm:space-y-1 sm:p-1.5 sm:text-[10px] md:text-[11px]">
              <div className="rounded-xl bg-[#123f0c] p-1 leading-snug text-gray-100">
                I just got an alert about a huge charge on my credit card, and I didn’t
                make it. I’m really scared something’s wrong.
              </div>

              <div className="text-xs text-gray-300 sm:text-sm">Maria</div>

              <div className="rounded-xl bg-[#c8e2dd] p-1 leading-snug text-[#0b2a0a]">
                I’m really sorry this happened, Maria. I know that can be unsettling. Can
                you tell me about the transaction?
              </div>

              <div className="text-right text-xs text-gray-300 sm:text-sm">Olivia</div>

              <div className="rounded-xl bg-[#123f0c] p-3 sm:p-4 leading-relaxed text-gray-100">
                It showed up early this morning for an amount I would never spend. I don’t
                recognize the store at all, and I’m worried someone has my information.
              </div>

              <div className="text-xs text-gray-300 sm:text-sm">Maria</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
