"use client";

import Image from "next/image";
import {
  BriefcaseMedical,
  BookOpen,
  Brain,
  Headphones,
  ShieldAlert,
  Ambulance,
  Users,
  Landmark,
  Building2,
  ClipboardList,
  Plane,
  HeartHandshake,
  BadgeCheck,
  Stethoscope,
  MonitorSmartphone,
  Building,
  Heart,
  Home,
} from "lucide-react";

const industries = [
  { icon: ShieldAlert, title: "Crisis" },
  { icon: BookOpen, title: "Education" },
  { icon: BriefcaseMedical, title: "Healthcare" },
  { icon: Brain, title: "Mental Health" },
  { icon: Ambulance, title: "Emergency Response" },
  { icon: Headphones, title: "Contact Centers" },
  { icon: Users, title: "Staffing Services" },
  { icon: Landmark, title: "Financial Services" },
  { icon: Building2, title: "Large Hospitals" },
  { icon: ClipboardList, title: "Insurance" },
  { icon: Plane, title: "Travel" },
];

const useCases = [
  { icon: Stethoscope, title: "Clinical Teams" },
  { icon: MonitorSmartphone, title: "Customer Service" },
  { icon: BadgeCheck, title: "Sales Teams" },
  { icon: HeartHandshake, title: "Regulatory Compliance" },
];

const organizations = [
  {
    icon: Home,
    title: "SMB",
    desc: "Automate training and QA while maintaining quality, empathy, and consistency.",
  },
  {
    icon: Building,
    title: "Enterprise",
    desc: "Standardize training and quality across teams with secure, configurable AI.",
  },
  {
    icon: Heart,
    title: "Nonprofit",
    desc: "Prepare staff for their hardest conversations with tools grounded in care.",
  },
];

const logos = [
  "/HomePage-Image/ALLEVIATE.png",
  "/HomePage-Image/VA.png",
  "/HomePage-Image/cortland.png",
  "/HomePage-Image/communityTax.png",
  "/HomePage-Image/pearson.png",
];

export default function SolNavbar() {
  return (
  <section 
  className="w-full  mx-auto bg-white rounded-[10px] px-4 sm:px-6 lg:px-10 py-8 lg:py-5  max-h-[90vh] overflow-y-auto lg:overflow-y-hidden overflow-x-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-10 lg:gap-14">
    
    {/* LEFT SIDE */}
    <div>
      <h2 className="text-sm md:text-base text-[#5E6553] mb-6 font-medium">
        by Industry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-y-6 lg:gap-x-12">
        {industries.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Icon
                size={18}
                strokeWidth={2.2}
                className="text-[#0B2408] shrink-0"
              />

              <h3 className="text-sm md:text-base font-semibold text-[#0B2408]">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* USE CASE */}
      <div className="mt-10 lg:mt-14">
        <h2 className="text-sm md:text-base text-[#5E6553] mb-6 font-medium">
          by Use Case
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-y-8 lg:gap-x-12">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Icon
                  size={18}
                  strokeWidth={2.2}
                  className="text-[#0B2408] shrink-0"
                />

                <h3 className="text-sm md:text-base font-semibold text-[#0B2408]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="sm:pr-10">
      <h2 className="text-sm md:text-base text-[#5E6553] mb-6 font-medium">
        by Organization
      </h2>

      <div className="space-y-2">
        {organizations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border border-[#E3E5DB] rounded-lg px-4 sm:px-6 py-4 sm:py-5  w-full"
            >
              <div className="flex gap-4">
                <Icon
                  size={18}
                  className="text-[#7A9D31] mt-1 shrink-0"
                />

                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[#11270D] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-6 text-[#4F5B45]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AUTO SCROLL LOGOS */}
      <div className="overflow-hidden mt-8">
        <div className="flex gap-8 md:gap-12 lg:gap-16 whitespace-nowrap animate-scroll items-center">
          {(() => {
            const repeated = [...logos, ...logos.map((l) => `${l}::dup`)];

            return repeated.map((entry) => {
              const src = entry.endsWith("::dup")
                ? entry.replace("::dup", "")
                : entry;

              return (
                <Image
                  key={entry}
                  src={src}
                  alt={`${src} logo`}
                  width={120}
                  height={56}
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-90 mix-blend-multiply"
                />
              );
            });
          })()}
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .animate-scroll {
      width: max-content;
      animation: scroll 18s linear infinite;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>
  );
}
