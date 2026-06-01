"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Users } from "lucide-react";
import { AppButton } from "@/components/common/app-button";
import { motion } from "framer-motion";

const tabs = [
  {
    id: 0,
    title: "Automated interaction analysis",
    icon: Sparkles,
    image: "/Homepage-image/img1.jpg",
  },
  {
    id: 1,
    title: "Cohort tracking",
    icon: ShieldCheck,
    image: "/Homepage-image/img2.jpg",
  },
  {
    id: 2,
    title: "Collaborative workspaces",
    icon: Users,
    image: "/Homepage-image/img3.jpg",
  },
];

const tabDescriptions = [
  "Automatically analyze every interaction with AI-powered quality assurance insights.",
  "Track team performance and customer experience trends across cohorts.",
  "Flexible, secure workspaces make it easy for managers to comment, review, and improve together.",
];

export default function AssureSection() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="bg-[#03250B] px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="mt-18 h-2.5 w-2.5 rounded-sm bg-purple-500" />
          <p className="mt-18 text-[15px] text-gray-300">
            Assure: Automated Quality Assurance
          </p>
        </div>

        <h1 className="mx-auto max-w-[600px] text-[48px] font-medium leading-[1.05] tracking-[-0.04em]">
          Stop relying on random sampling. Automatically QA 100% of conversations.
        </h1>

        <AppButton className="mt-8 rounded-lg border border-[#35553A] bg-[#0C3214] px-5 py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#15451D]">
          See QA in Action →
        </AppButton>

        <div className="mt-24 border-b border-[#27402D]">
          <div className="flex flex-wrap justify-center gap-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex cursor-pointer items-center gap-3 pb-6 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.title}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-lime-300"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="w-full max-w-[1200px] overflow-hidden rounded-[24px] border border-[#17421D] bg-[#073212] pt-4 pr-4 pl-4 pb-0">
            <div className="mx-[79px] mt-[67px] overflow-hidden rounded-t-[18px] border-x-[8px] border-t-[8px] border-[#536A53]">
              <Image
                key={tabs[activeTab].image}
                src={tabs[activeTab].image}
                alt="dashboard"
                width={3840}
                height={1926}
                priority
                className="h-[570px] w-full animate-fade rounded-t-[12px] object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 200vw"
              />
            </div>
          </div>

          <div className="mt-10 flex w-full max-w-[1200px] items-end justify-between">
            <p className="max-w-[520px] text-left text-lg leading-relaxed text-white">
              {tabDescriptions[activeTab]}
            </p>

            <div className="relative bottom-12 flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-300 ${
                    activeTab === tab.id ? "bg-lime-300" : "bg-[#35553A]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
