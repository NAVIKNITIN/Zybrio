"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { aboutPageContent } from "@/data/about_data";
import { cn } from "@/lib/utils";

type TeamTab = keyof typeof aboutPageContent.teamMembers;

const teamTabs: { id: TeamTab; label: string }[] = [
  { id: "leaders", label: "Leaders" },
  { id: "advisors", label: "Advisors" },
];

export function AboutLeadershipSection() {
  const [activeTab, setActiveTab] = useState<TeamTab>("leaders");
  const members = aboutPageContent.teamMembers[activeTab];
  const isAdvisors = activeTab === "advisors";

  return (
    <section className="bg-forest pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="container-app">
        <div
          className={cn(
            "mx-auto flex w-full flex-col items-center",
            isAdvisors ? "max-w-[1120px]" : "max-w-[870px]",
          )}
        >
          <h2 className="text-center text-[40px] font-semibold leading-[1.1] text-white">
            Meet our team
          </h2>

          <div className="mt-8 inline-flex gap-2 rounded-full border border-white/15 p-1">
            {teamTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-6 py-2 text-[13px] font-semibold transition",
                  activeTab === tab.id
                    ? "bg-[#a8e61d] text-[#012a0b]"
                    : "text-white hover:bg-white/5",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={cn(
              "mt-12 grid w-full md:mt-[88px]",
              isAdvisors ? "gap-6 md:grid-cols-3" : "gap-7 md:grid-cols-2",
            )}
          >
            {members.map((member) => (
              <article
                key={member.name}
                className="relative min-h-[437px] w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes={
                    isAdvisors
                      ? "(min-width: 768px) 350px, 90vw"
                      : "(min-width: 768px) 420px, 90vw"
                  }
                />

                <div className="absolute inset-x-8 bottom-8 z-10 flex items-end justify-between gap-5">
                  <div className="min-w-0 pr-3">
                    <h3
                      className={cn(
                        "font-semibold leading-[1.1] text-white",
                        isAdvisors ? "text-[18px]" : "text-[24px]",
                      )}
                    >
                      {member.name}
                    </h3>

                    <p
                      className={cn(
                        "mt-2 font-medium text-white/72",
                        isAdvisors
                          ? "max-w-[245px] text-[15px] leading-[1.3]"
                          : "max-w-[290px] text-[20px] leading-[1.35]",
                      )}
                    >
                      {member.role}
                    </p>
                  </div>

                  <Link
                    href={member.linkedinUrl}
                    aria-label={`${member.name} LinkedIn`}
                    className="mb-1 grid size-8 flex-none place-items-center rounded-md bg-white text-[#012a0b] transition hover:bg-[#a8e61d]"
                  >
                    <span className="text-[14px] font-bold leading-none">in</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}