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
    <section className="w-full max-w-[1280px] mx-auto bg-white rounded-[28px] px-10 py-10">
      <div className="grid grid-cols-[48%_52%] gap-14">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[16px] text-[#5E6553] mb-8 font-medium">by Industry</h2>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-3 cursor-pointer">
                  <Icon size={18} strokeWidth={2.2} className="text-[#0B2408]" />

                  <h3 className="text-[16px] font-semibold text-[#0B2408] leading-none">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* USE CASE */}
          <div className="mt-14">
            <h2 className="text-[16px] text-[#5E6553] mb-8 font-medium">by Use Case</h2>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <Icon size={18} strokeWidth={2.2} className="text-[#0B2408]" />

                    <h3 className="text-[16px] font-semibold text-[#0B2408] leading-none">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-[16px] text-[#5E6553] mb-8 font-medium">by Organization</h2>

          <div className="space-y-4">
            {organizations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-[#E3E5DB] rounded-[16px] px-6 py-5 bg-[#F8F8F4] w-[420px]"
                >
                  <div className="flex gap-4">
                    <Icon size={18} className="text-[#7A9D31] mt-1 shrink-0" />

                    <div>
                      <h3 className="text-[16px] font-semibold text-[#11270D] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[13px] leading-[22px] text-[#4F5B45] max-w-[320px]">
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
            <div className="flex gap-16 whitespace-nowrap animate-scroll items-center">
              {(() => {
                // create deterministic repeated list without using index for keys
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
                      className="h-14 w-auto object-contain opacity-90 mix-blend-multiply"
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
