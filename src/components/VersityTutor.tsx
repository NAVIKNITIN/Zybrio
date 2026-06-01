"use client";

import Image from "next/image";
import Link from "next/link";

export default function VersityTutor() {
  return (
    <section className="w-full bg-[#e8e6dc] py-12 px-6">
      
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="bg-[#cfe5ea] rounded-[24px] p-8 relative h-[500px] overflow-hidden">
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/SimulationCarousel-images/ersity.jpeg"
                alt="John-Paul Riordan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain scale-[1.08] translate-y-[20px]"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-4 left-10 z-20">
            <h3 className="mr-0 text-[15px]  text-black">John-Paul Riordan</h3>

            <p className="mt-1 text-[10px] text-[#4b4b4b]">
              Director of Learning & Development, Varsity Tutors
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#f5f4ee] rounded-[24px] p-8 flex flex-col justify-between min-h-[500px]">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full border-[5px] border-[#0d2d12] border-r-transparent rotate-45"></div>

              <h2 className="text-[28px] font-medium text-[#0d2d12]">Varsity Tutors</h2>
            </div>

            {/* Quote */}

            <Link href="https://google.com" target="_blank">
              <p className="cursor-pointer text-[20px] font-medium leading-[1.35] text-[#0d2d12]">
                “ReflexAI has scaled our training in a way that wouldn’t have been
                possible otherwise, allowing us to focus on coaching and performance while
                ensuring consistent preparation across the team.”
              </p>
            </Link>
            {/* Link */}
            <button className="mt-6 text-[15px] font-semibold text-[#0d2d12] flex items-center gap-2">
              Read the case study →
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-end gap-5 mt-10">
            <h1 className="text-[60px] leading-none font-bold text-[#0d2d12]">460</h1>

            <p className="text-[13px] text-[#5a5a5a] max-w-[200px] mb-2 leading-snug">
              Total individuals trained in 6 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
