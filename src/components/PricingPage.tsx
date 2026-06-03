"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import Footer from "./Footer";
import { Navbar } from "./layout/navbar";
import UpperFooter from "./UpperFooter";


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
    title: "Essential",
    icon: "🪪",
    buttonText: "Start now",
    features: [
      "Limited roleplay scenarios",
      "Self-serve capabilities",
      "Single modality (voice or text)",
      "Most advanced voice capabilities",
      "Asynchronous customer support",
      "Shorter conversation durations",
      "Limited manager licenses",
    ],
  },
  {
    title: "Growth",
    icon: "👜",
    popular: true,
    buttonText: "Start now",
    features: [
      "Unlimited roleplay scenarios",
      "Self-serve capabilities",
      "Library of pre-built scenarios",
      "Multiple modalities (voice and text)",
      "Most advanced voice capabilities",
      "Dedicated customer support",
      "Medium conversation duration",
      "Expanded manager licenses",
      "Single sign-on (SSO)",
    ],
  },
  {
    title: "Pro",
    icon: "👑",
    buttonText: "Start now",
    features: [
      "Unlimited roleplay scenarios",
      "Self-serve capabilities",
      "Library of pre-built scenarios",
      "Multiple modalities (voice and text)",
      "Most advanced voice capabilities",
      "Dedicated customer support",
      "Longest conversation durations",
      "Unlimited manager licenses",
      "Single sign-on (SSO)",
      "SCIM provisioning",
      "IP address restrictions",
    ],
  },
  {
    title: "Enterprise",
    icon: "📊",
    custom: true,
    buttonText: "Talk to us",
    description: "Enterprise solutions built for complex requirements.",
    features: [],
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
  //  <button
  //               onClick={() => setActiveTab("prepare")}
  //               className={`px-6 py-2 rounded-full transition ${
  //                 activeTab === "prepare" ? "bg-[#0B2A0A] text-white" : "text-[#0B2A0A]"
  //               }`}
  //             >
  //               Prepare
  //             </button>

  return (
    
    <main className="min-h-screen bg-[#F8F8F5]">
        <Navbar/>
      <section className="px-6  pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <p className="text-[#5B6553] text-lg mb-4 mt-[100px]">Pricing</p>
          <h1 className="text-[#0D2B0B] text-4xl md:text-[55px] font-bold leading-[1.05]">
            Pricing that scales with <br />
            your team, and your ROI
          </h1>
          <p className="text-[#4D5A45] text-xl mt-8 max-w-[620px] mx-auto">
            Flexible plans designed to reduce training costs, save time, and deliver value
            fast.
          </p>
          {/* Toggle */}
          <div className="flex justify-center mt-20 mb-20">
            <div className="relative flex rounded-full border border-[#D6D5CD] bg-[#ECEBE4] p-[px]">
              {/* Animated Background */}
              <div
                className={`absolute top-[2px] h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-[#0B2A0A] transition-all duration-300 ease-in-out ${
                  activeTab === "prepare" ? "left-[2px]" : "left-[calc(50%)]"
                }`}
              />

              <button
                onClick={() => setActiveTab("prepare")}
                className={`relative z-10 px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === "prepare" ? "text-white" : "text-[#0B2A0A]"
                }`}
              >
                Prepare
              </button>

              <button
                onClick={() => setActiveTab("assure")}
                className={`relative z-10 px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === "assure" ? "text-white" : "text-[#0B2A0A]"
                }`}
              >
                Assure
              </button>
            </div>
          </div>
          {/* <CommonButton
                title="Schedule a demo"
                textColor="white"
                bgColor="black"
                px="px-6"
                py="py-2"
                radius="rounded-full"
                onClick={() => setActiveTab("prepare")}
              /> */}
          {/* Cards */}
          <div className="mt-16 rounded-[28px] border border-[#D7D7CF] p-3">
            <div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-4 md:grid-cols-2">
              {plans.map((plan) => (
                <PricingCard key={plan.title} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <UpperFooter />
      <Footer />
    </main>
  );
}
