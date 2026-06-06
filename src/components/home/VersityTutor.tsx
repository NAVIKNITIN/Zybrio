"use client";

import Image from "next/image";
import Link from "next/link";

export default function VersityTutor() {
  return (
    <section className="w-full bg-[#e8e6dc] py-10 sm:py-12 lg:py-14 px-4 sm:px-6">
      
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        
        {/* LEFT CARD */}
        <div className="bg-[#cfe5ea] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 relative h-[260px] sm:h-[340px] lg:h-[500px] overflow-hidden">
          
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/SimulationCarousel-images/ersity.jpeg"
                alt="John-Paul Riordan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover sm:object-contain
                  scale-[0.95] sm:scale-[1] lg:scale-[1.08]
                  translate-y-0 lg:translate-y-[20px]
                "
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-4 sm:left-6 lg:left-10 z-20">
            <h3 className="text-[14px] sm:text-[15px] text-black font-medium">
              John-Paul Riordan
            </h3>

            <p className="mt-1 text-[10px] sm:text-[11px] text-[#4b4b4b] max-w-[200px]">
              Director of Learning & Development, Varsity Tutors
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#f5f4ee] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] lg:min-h-[500px]">
          
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6 lg:mb-8">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border-[4px] sm:border-[5px] border-[#0d2d12] border-r-transparent rotate-45" />

              <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#0d2d12]">
                Varsity Tutors
              </h2>
            </div>

            {/* Quote */}
            <Link href="https://google.com" target="_blank">
              <p className="cursor-pointer text-[23px] sm:text-[22px] lg:text-[20px] font-medium leading-[1.5] sm:leading-[1.6] text-[#0d2d12]">
                “ReflexAI has scaled our training in a way that wouldn’t have been
                possible otherwise, allowing us to focus on coaching and performance
                while ensuring consistent preparation across the team.”
              </p>
            </Link>

            {/* Button */}
            <button className="mt-4 sm:mt-5 lg:mt-6 text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-[#0d2d12] flex items-center gap-2">
              Read the case study →
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-end gap-3 sm:gap-4 lg:gap-5 mt-6 sm:mt-8">
            <h1 className="text-[40px] sm:text-[48px] lg:text-[60px] leading-none font-bold text-[#0d2d12]">
              460
            </h1>

            <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5a5a5a] max-w-[200px] mb-1 leading-snug">
              Total individuals trained in 6 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}