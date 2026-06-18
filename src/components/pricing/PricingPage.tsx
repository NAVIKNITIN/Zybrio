"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import Footer from "../Footer";
import { Navbar } from "../layout/navbar";
import UpperFooter from "../UpperFooter";
import { MarketingLayout } from "../layout/marketing-layout";

type Plan = {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  price?: string;
  buttonText: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
};

const preparePlans: Plan[] = [
  {
    title: " Starter",
    icon: "🪪",
    buttonText: "Start now",
    features: [
      "Single service scope (brand identity OR website OR campaign)",
      "Up to 5 screens / deliverables",
      "1 revision round",
      "15-day turnaround",
      "Email support",
     
    ],
  },
  {
    title: "Growth",
    icon: "👜",
    popular: true,
    buttonText: "Start a Project ",
    features: [
      "Brand identity + website design + development",
      "Up to 15 screens / pages",
      "2 revision rounds",
      "30-day turnaround",
      "Dedicated project manager",
      "Dedicated customer support",
      "Monthly performance report",
      "Priority support",
      "NDA & IP transfer included",
    ],
  },
 
  {
    title: "Scale",
    icon: "👑",
    buttonText: "Let's Talk →",
    features: [
      "Full-scope design, technology, and/or marketing",
      "Unlimited deliverables within agreed scope",
      "Ongoing retainer option available",
      "Dedicated creative team (designer + developer + strategist)",
      "Weekly sync calls",
      "SLA-backed delivery timelines",
      "SCIM / SSO for enterprise clients",
     
    ],

  },
  {
    title: "Enterprise",
    icon: "📊",
    custom: true,
    buttonText: "Talk to us",
    description: "Built around your requirements",
    features: ["Custom scope, NDA, dedicated team, flexible billing. For organisations with complex needs."],
  },
];

const assurePlans: Plan[] = [
  {
    title: "Essential",
    icon: "🪪",
    buttonText: "Start now",
    features: ["Basic monitoring", "Self-serve workflows", "Compliance support"],
  },
  {
    title: "Growth",
    icon: "👜",
    popular: true,
    buttonText: "Start now",
    features: ["Advanced assurance", "Analytics dashboards", "Priority support"],
  },
  {
    title: "Pro",
    icon: "👑",
    buttonText: "Start now",
    features: ["Enterprise workflows", "Unlimited governance", "Advanced security"],
  },
  {
    title: "Enterprise",
    icon: "📊",
    custom: true,
    buttonText: "Talk to us",
    description: "Custom enterprise assurance systems for large organizations.",
    features: [],
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"prepare" | "assure">("prepare");

  const plans = activeTab === "prepare" ? preparePlans : assurePlans;

  return (
    // <main className="min-h-screen bg-[#F8F8F5]">
        <MarketingLayout>      
          <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <p className="text-[#5B6553] text-xl sm:text-2xl md:text-lg mb-3 sm:mb-4 mt-[10px] sm:mt-[100px] pt-10">
            Pricing
          </p>
          <h1 className="text-[#0D2B0B] text-[2rem] leading-tight sm:text-[3.25rem] md:text-[55px] font-bold md:leading-[1.05]">
           Pricing that scales with your <br className="hidden sm:block" />
            ambition — and your ROI. 
          </h1>
          <p className="text-[#4D5A45] text-lg sm:text-xl md:text-xl mt-6 sm:mt-8 max-w-[620px] mx-auto px-2 sm:px-0">
           No hidden fees. No bloated retainers. Just clear, honest pricing for work that delivers.
          </p>

          {/* Toggle */}
          <div className="flex justify-center mt-12 sm:mt-20 mb-12 sm:mb-20">
            <div className="relative flex rounded-full border border-[#D6D5CD] bg-[#ECEBE4] p-[2px]">
              <div
                className={`absolute top-[2px] h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-[#0B2A0A] transition-all duration-300 ease-in-out ${
                  activeTab === "prepare" ? "left-[2px]" : "left-[calc(50%)]"
                }`}
              />

              <button
                onClick={() => setActiveTab("prepare")}
                className={`relative z-10 px-7 py-2 sm:px-8 sm:py-2.5 md:px-5 md:py-2 rounded-full transition-colors duration-300 text-sm sm:text-lg md:text-base ${
                  activeTab === "prepare" ? "text-white" : "text-[#0B2A0A]"
                }`}
              >
                Prepare
              </button>

              <button
                onClick={() => setActiveTab("assure")}
                className={`relative z-10 px-5 py-2 sm:px-8 sm:py-2.5 md:px-6 md:py-2 rounded-full transition-colors duration-300 text-sm sm:text-lg md:text-base ${
                  activeTab === "assure" ? "text-white" : "text-[#0B2A0A]"
                }`}
              >
                Assure
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-8 sm:mt-16 rounded-[20px] sm:rounded-[28px] border border-[#D7D7CF] p-2 sm:p-3">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible lg:grid lg:grid-cols-4">
              {plans.map((plan) => (
                <PricingCard key={plan.title} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <UpperFooter />
      <Footer />
    {/* </main> */}
    </MarketingLayout>

  );
}
