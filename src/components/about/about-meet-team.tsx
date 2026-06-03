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
      image: "/About-images/no2.jpg",
      linkedin: "#",
    },
    {
      name: "John Callery",
      role: "Cofounder and Chief Product & Technology Officer",
      image: "/About-images/no1.jpg",
      linkedin: "#",
    },
  ],

  advisors: [
    {
      name: "Advisor One",
      role: "Senior Strategic Advisor",
      image: "/About-images/no3.jpg",
      linkedin: "#",
    },
    {
      name: "Advisor Two",
      role: "Board Advisor",
      image: "/About-images/no4.jpg",
      linkedin: "#",
    },
  ],
};

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"leaders" | "advisors">("leaders");

  return (
    <section className="bg-[#012100] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-[40px] font-bold mb-12">
          Meet our team
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
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
            className="grid md:grid-cols-2 gap-6 max-w-[760px] mx-auto"
          >
            {teamData[activeTab].map((person) => (
              <motion.div
                key={person.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-[28px] border border-[#1e5d23] p-[3px] bg-[#01450d] h-[390px]"
              >
                <div className="relative h-full rounded-[24px] bg-[#01520d] px-6 pt-6 pb-6 flex flex-col">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="relative w-[160px] h-[160px]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Push content downward */}
                  <div className="flex-1" />

                  {/* Text */}
                  <div className="pr-14">
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
