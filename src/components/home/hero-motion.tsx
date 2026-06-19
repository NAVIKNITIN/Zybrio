"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import CommonButton from "../common/commonBtn";
import { greenTheme, headerTitle } from "@/themes/themes";
import { BgThemeContext } from "@/globalStore/BgColorChange";

const HeroMotion = () => {
  const context = useContext(BgThemeContext);

  return (
    <div className={context?.bgThemeColor ? "bg-[#F8F8F5]" : "bg-white"}>
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
          We Build Brands That <br />
          <span className="inline-flex flex-wrap items-center gap-2 md:gap-3">
            Demand
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
            Attention.
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
            lg:text-[20px]
            leading-relaxed
            text-[#4A4A4A]
          "
        >
          Zybrio is a full-service creative agency — design, technology, and marketing — engineered for brands that refuse to be ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <CommonButton title="See Our Work →" size="16" color="lime" bgColor="#072300" />
          <button className="text-[#0B3D0B] text-sm font-bold leading-none tracking-[0.01em]">
            <span className="block lg:hidden">
              Start a
              <br />
              Project →
            </span>

            <span className="hidden lg:block whitespace-nowrap">Start a Project →</span>
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroMotion;