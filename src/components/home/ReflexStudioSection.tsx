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
          <div className="flex w-full justify-center py-8">
            {/* ================= MOBILE + TABLET ================= */}
            <div className="lg:hidden w-[220px] overflow-hidden rounded-[10px] bg-[#012900] text-white shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1a3d0f] px-2 py-2">
                <div className="flex min-w-0 items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="Olivia"
                    className="h-6 w-6 shrink-0 rounded-full"
                  />

                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold">Olivia</p>
                    <p className="text-[8px] text-gray-400">Agent</p>
                  </div>
                </div>

                <button className="text-[8px] text-gray-300">End Chat</button>
              </div>

              {/* Chat Content */}
              <div className="space-y-1 p-2 text-[8px]">
                <div className="rounded-lg bg-[#123f0c] p-1.5 leading-tight text-gray-100">
                  I just got an alert about a huge charge on my credit card.
                </div>

                <div className="text-[8px] text-gray-300">Maria</div>

                <div className="rounded-lg bg-[#c8e2dd] p-1.5 leading-tight text-[#0b2a0a]">
                  I’m sorry this happened. Can you tell me about the transaction?
                </div>

                <div className="text-right text-[8px] text-gray-300">Olivia</div>

                <div className="rounded-lg bg-[#123f0c] p-1.5 leading-tight text-gray-100">
                  It showed up early this morning and I don’t recognize it.
                </div>

                <div className="text-[8px] text-gray-300">Maria</div>
              </div>
            </div>

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:block w-full max-w-[700px] overflow-hidden rounded-[18px] bg-[#012900] text-white shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1a3d0f] px-4 py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="Olivia"
                    className="h-10 w-10 shrink-0 rounded-full"
                  />

                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold">Olivia</p>
                    <p className="text-sm text-gray-400">Agent</p>
                  </div>
                </div>

                <button className="text-sm text-gray-300 hover:text-white">
                  End Chat
                </button>
              </div>

              {/* Chat Content */}
              <div className="space-y-2 p-4 text-[11px]">
                <div className="rounded-xl bg-[#123f0c] p-3 leading-snug text-gray-100">
                  I just got an alert about a huge charge on my credit card, and I didn’t
                  make it.
                </div>

                <div className="text-sm text-gray-300">Maria</div>

                <div className="rounded-xl bg-[#c8e2dd] p-3 leading-snug text-[#0b2a0a]">
                  I’m really sorry this happened, Maria. Can you tell me about the
                  transaction?
                </div>

                <div className="text-right text-sm text-gray-300">Olivia</div>

                <div className="rounded-xl bg-[#123f0c] p-4 leading-relaxed text-gray-100">
                  It showed up early this morning for an amount I would never spend. I
                  don’t recognize the store at all.
                </div>

                <div className="text-sm text-gray-300">Maria</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
