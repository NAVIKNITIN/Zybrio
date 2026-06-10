"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const teamData = {
  leaders: [
    {
      name: "Sam Dorison",
      role: "Cofounder and Chief Executive Officer",
      image: "/about/Leader1.png",
      linkedin: "#",
    },
    {
      name: "John Callery",
      role: "Cofounder and Chief Product & Technology Officer",
      image: "/about/Leader2.png",
      linkedin: "#",
    },
  ],

  advisors: [
    {
      name: "Advisor One",
      role: "Senior Strategic Advisor",
      image: "/about/advisors1.png",
      linkedin: "#",
    },
    {
      name: "Advisor Two",
      role: "Board Advisor",
      image: "/about/advisors2.png",
      linkedin: "#",
    },
  ],
};

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"leaders" | "advisors">("leaders");

  return (
    <section className="bg-[#012100] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="mb-8 text-center text-[32px] font-bold text-white sm:mb-10 sm:text-[36px] lg:mb-12 lg:text-[40px]">
          Meet our team
        </h2>

        {/* Toggle */}
        <div className="mb-10 flex justify-center sm:mb-12 lg:mb-16">
          <div className="relative flex rounded-full border border-[#39552a] p-[3px] overflow-hidden">
            <motion.div
              className="absolute top-[3px] bottom-[3px] left-[3px] bg-[#c7ff1a] rounded-full"
              animate={{
                x: activeTab === "leaders" ? 0 : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
              style={{
                width: "calc(50% - 3px)",
              }}
            />

            <button
              onClick={() => setActiveTab("leaders")}
              className={`relative -top-[1px] z-10 px-7 py-[7px] text-[14px] font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === "leaders" ? "text-black" : "text-white"
              }`}
            >
              Leaders
            </button>

            <button
              onClick={() => setActiveTab("advisors")}
              className={`relative -top-[1px] z-10 px-7 py-[7px] text-[14px] font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === "advisors" ? "text-black" : "text-white"
              }`}
            >
              Advisors
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto grid max-w-[760px] gap-5 md:grid-cols-2 lg:gap-6"
          >
            {teamData[activeTab].map((person) => (
              <motion.div
                key={person.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="h-[360px] rounded-[24px] border border-[#1e5d23] bg-[#01450d] p-[3px] sm:h-[390px] sm:rounded-[28px]"
              >
                <div className="relative flex h-full flex-col rounded-[20px] bg-[#01520d] px-5 pt-5 pb-5 sm:rounded-[24px] sm:px-6 sm:pt-6 sm:pb-6">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="relative h-[140px] w-[140px] sm:h-[160px] sm:w-[160px]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Push content downward */}
                  <div className="flex-1" />

                  {/* Text */}
                  <div className="pr-12 sm:pr-14">
                    <h3 className="text-white text-2x1 font-semibold ">{person.name}</h3>

                    <p className="text-[#a8b7a2] text-base leading-relaxed max-w-[220px]">
                      {person.role}
                    </p>
                  </div>

                  {/* LinkedIn Button Fixed */}
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <FaLinkedinIn className="text-black text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
