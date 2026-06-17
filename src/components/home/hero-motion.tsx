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
            font-poppins
            font-[700]
            leading-[1.1]
            tracking-[0.005em]
            !text-black
            text-[24px]
            sm:text-[36px]
            md:text-[48px]
            lg:text-[56px]
            max-w-[300px]
            sm:max-w-[500px]
            md:max-w-[700px]
            lg:max-w-[900px]
            ${headerTitle}
          `}
        >
          We Build Brands That Mean   Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-5
            max-w-[320px]
            sm:max-w-[500px]
            lg:max-w-xl
            font-sans
            text-[18px]
            sm:text-[20px]
            lg:text-[22px]
            leading-relaxed
            text-[#4A4A4A]
          "
        >
          Design. Technology. Marketing. Under one roof, for brands that want to grow — not just look good.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <CommonButton
            title="Start a Project"
            height="40px"
            width="166px"
            textColor={greenTheme}
            bgColor="black"
          />

          <button className="font-medium text-[#0B3D0B] leading-none">
            <span className="block lg:hidden">
              See Our
              <br />
              Work →
            </span>

            <span className="hidden lg:block whitespace-nowrap">See Our Work →</span>
          </button>
        </motion.div>
      </section>
    </div>
  );
}