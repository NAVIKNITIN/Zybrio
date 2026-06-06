"use client";

import Image from "next/image";
import { AppButton } from "@/components/common/app-button";

export default function JoinTeamSection() {
  return (
    <section className="bg-[#f3f4f1] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[420px_380px_420px] lg:justify-between">
          {/* LEFT */}
          <div className="grid items-start gap-10 lg:grid-cols-[420px_380px_420px]">
            <div className="pt-0 lg:-mt-55">
              <h2 className="text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#002900] sm:text-[48px] lg:text-[58px] lg:leading-[0.95] lg:tracking-[-0.05em]">
                Join a team
                <br />
                building for the
                <br />
                moments that
                <br />
                matter
              </h2>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="relative h-[340px] w-full max-w-[360px] overflow-hidden rounded-[16px] sm:h-[430px]">
              <Image
                src="/about/ABOUT1.png"
                alt="Team"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover"
              />

              {/* Top Shape */}
              <div className="absolute right-0 top-0 h-[95px] w-[50px] rounded-bl-[60px] bg-[#cde88b]" />

              {/* Left Shape */}
              <div className="absolute left-0 top-[160px] h-[85px] w-[70px] rounded-r-full bg-[#cde88b]" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-2 max-w-[430px] sm:mt-6 lg:mt-60">
            <p className="text-[16px] leading-[1.55] text-[#495646] sm:text-[18px] lg:text-[20px]">
              We’re growing a diverse, mission-driven team of technologists, researchers,
              and practitioners who believe empathy is a skill worth scaling.
            </p>

            <AppButton
              className="
      mt-8
      h-[46px]
      rounded-[10px]
      bg-[#003300]
      px-6
      text-[17px]
      font-semibold
      text-[#d7f48d]
      hover:bg-[#01450d]
      sm:mt-10
    "
            >
              Join our team
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
