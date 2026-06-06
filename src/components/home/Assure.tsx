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
    <section className="overflow-hidden bg-[#03250B] px-4 py-12 sm:py-14 lg:py-16 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="mt-8 sm:mt-12 lg:mt-18 h-2.5 w-2.5 shrink-0 rounded-sm bg-purple-500" />
          <p className="mt-8 sm:mt-12 lg:mt-18 text-center text-[13px] sm:text-[14px] lg:text-[15px] text-gray-300">
            Assure: Automated Quality Assurance
          </p>
        </div>

        <h1 className="mx-auto max-w-[600px] text-[32px] leading-[1.08] tracking-[-0.04em] sm:text-[40px] lg:text-[48px] font-medium">
          Stop relying on random sampling. Automatically QA 100% of conversations.
        </h1>

        <AppButton className="mt-6 sm:mt-8 rounded-lg border border-[#35553A] bg-[#0C3214] px-5 py-4 text-base sm:text-lg font-medium text-white transition duration-300 hover:bg-[#15451D]">
          See QA in Action →
        </AppButton>

        <div className="mt-14 sm:mt-20 lg:mt-24">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max gap-8 lg:gap-10 px-2 justify-start lg:justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex shrink-0 cursor-pointer items-center gap-2 sm:gap-3 pb-4 sm:pb-6 text-xs sm:text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Icon size={20} className="shrink-0" />
                    <span className="whitespace-nowrap">{tab.title}</span>

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
        </div>
        <div className="mt-10 sm:mt-12 flex flex-col items-center">
          <div className="w-[calc(100%+16px)] -mx-2 sm:w-[calc(100%+24px)] sm:-mx-3 md:w-[calc(100%+32px)] md:-mx-4 lg:w-full lg:mx-0 max-w-[1200px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#17421D] bg-[#073212] px-2 py-2 sm:px-3 sm:py-3 lg:p-4 pb-0">
            <div className="mx-2 sm:mx-6 md:mx-12 lg:mx-[79px] mt-4 sm:mt-8 md:mt-12 lg:mt-[67px] overflow-hidden rounded-t-[14px] sm:rounded-t-[18px] border-x-4 sm:border-x-6 lg:border-x-[8px] border-t-4 sm:border-t-6 lg:border-t-[8px] border-[#536A53]">
              <Image
                key={tabs[activeTab].image}
                src={tabs[activeTab].image}
                alt="dashboard"
                width={3840}
                height={1926}
                priority
                className="h-[140px] sm:h-[200px] md:h-[280px] lg:h-[570px] w-full animate-fade rounded-t-[10px] sm:rounded-t-[12px] object-cover transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>

          <div className="mt-8 sm:mt-10 flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-[520px] text-left text-base sm:text-lg leading-relaxed text-white">
              {tabDescriptions[activeTab]}
            </p>

            <div className="hidden lg:flex items-center gap-2 lg:relative lg:bottom-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-2 w-2 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ${
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
