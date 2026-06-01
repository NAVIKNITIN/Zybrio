// src/components/customer/CustomersLogoTicker.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Rescue",
    src: "https://cdn.sanity.io/images/fm6j9w4b/production/2010841910b89a2507d1f375e8f983a34b8ec314-118x130.svg",
    className: "h-[48px] sm:h-[58px] lg:h-[68px]",
  },
  {
    name: "iLending",
    src: "https://cdn.sanity.io/images/fm6j9w4b/production/8d8a95187a9c226bd7d89f71e8d120ba20fd8bb8-345x252.svg",
    className: "h-[46px] sm:h-[56px] lg:h-[66px]",
  },
  {
    name: "Cortland",
    src: "https://cdn.sanity.io/images/fm6j9w4b/production/48f6096b24796a6be393f7abbb130ae5926c2cb5-345x252.png",
    className: "h-[48px] sm:h-[58px] lg:h-[68px]",
  },
  {
    name: "U.S. Department of Veterans Affairs",
    src: "https://cdn.sanity.io/images/fm6j9w4b/production/d242c20cd8956b438c48412ade92eeaf4d0e3242-324x192.png",
    className: "h-[60px] sm:h-[70px] lg:h-[82px]",
  },
  {
    name: "BHR",
    src: "https://cdn.sanity.io/images/fm6j9w4b/production/56251770f920fd419219df4487c244c0dee8dc57-174x252.png",
    className: "h-[60px] sm:h-[70px] lg:h-[82px]",
  },
];

const tickerLogos = [...logos, ...logos, ...logos];

export default function CustomersLogoTicker() {
  return (
    <div className="-mt-10 overflow-hidden bg-[#061F00] py-0 sm:-mt-12 lg:-mt-16">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#061F00] to-transparent sm:w-28 lg:w-44" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#061F00] to-transparent sm:w-28 lg:w-44" />

        <motion.div
          className="flex w-max items-center gap-14 sm:gap-20 lg:gap-28"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 26,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {tickerLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-[82px] min-w-[220px] shrink-0 items-center justify-center sm:h-[92px] sm:min-w-[280px] lg:h-[105px] lg:min-w-[340px]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={520}
                height={320}
                className={`${logo.className} w-auto max-w-[220px] object-contain opacity-65 grayscale invert saturate-0 sm:max-w-[280px] lg:max-w-[340px]`}
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}