"use client";

import React from "react";
import { motion } from "framer-motion";
import CommonButton from "../common/commonBtn";
import { greenTheme, headerTitle } from "@/themes/themes";

export default function HeroMotion({ bgColor = false }: { bgColor?: boolean }) {
  return (
    <div className={bgColor ? "bg-[#F8F8F5]" : "bg-white"}>
<section className="mx-auto max-w-7xl px-2 pt-17 flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
  font-sans
  font-[700]
  leading-[1.01]
  tracking-[0.005em]
  !text-black
  text-[38px]
  sm:text-[52px]
  md:text-[72px]
  lg:text-inherit
  ${headerTitle}
`}
        >
          Simulation and QA for <br />
          <span className="inline-flex flex-wrap items-center gap-2 md:gap-3">
            critical
            <motion.div
              className="flex items-center gap-[5px] md:gap-[7px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={`hero-bar-${i}`}
                  className="
                   h-[12px] w-[5px]
                           md:h-[16px] md:w-[6px]
                    lg:h-[12px] lg:w-[3px]
                    rounded-sm
                  "
                  style={{ backgroundColor: greenTheme }}
                  animate={{
                    scaleY: [1, 2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
            conversations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-5
            max-w-[320px]
            sm:max-w-[500px]
            lg:max-w-2xl
            font-sans
            text-[18px]
            sm:text-[20px]
            lg:text-[22px]
            leading-relaxed
            text-[#4A4A4A]
          "
        >
          Reduce escalations, cut onboarding time, and monitor 100% of interactions — with
          AI simulations and automated QA built for contact centres.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <CommonButton
            title="Schedule a demo"
            height="40px"
            width="180px"
            textColor={greenTheme}
            bgColor="black"
          />

          <button className="whitespace-nowrap font-medium text-[#0B3D0B]">
            Take a tour →
          </button>
        </motion.div>
      </section>
    </div>
  );
}
