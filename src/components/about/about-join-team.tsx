"use client";

import Image from "next/image";
import { AppButton } from "@/components/common/app-button";

export default function JoinTeamSection() {
  return (
    <section className="bg-[#f3f4f1] py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[420px_380px_420px] lg:justify-between">
          {/* LEFT */}
          <div className="grid items-start gap-10 lg:grid-cols-[420px_380px_420px]">
            <div className="pt-0 lg:-mt-55">
              <h2 className="text-[58px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#002900]">
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
            <div className="relative h-[430px] w-[360px] overflow-hidden rounded-[16px]">
              <Image
                src="/About-images/no6.jpg"
                alt="Team"
                fill
                priority
                className="object-cover"
              />

              {/* Top Shape */}
              <div className="absolute right-0 top-0 h-[95px] w-[50px] rounded-bl-[60px] bg-[#cde88b]" />

              {/* Left Shape */}
              <div className="absolute left-0 top-[160px] h-[85px] w-[70px] rounded-r-full bg-[#cde88b]" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-[430px] mt-10 lg:mt-60">
            <p className="text-[18px] leading-[1.55] text-[#495646] lg:text-[20px]">
              We’re growing a diverse, mission-driven team of technologists, researchers,
              and practitioners who believe empathy is a skill worth scaling.
            </p>

            <AppButton
              className="
      mt-10
      h-[46px]
      rounded-[10px]
      bg-[#003300]
      px-6
      text-[17px]
      font-semibold
      text-[#d7f48d]
      hover:bg-[#01450d]
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
