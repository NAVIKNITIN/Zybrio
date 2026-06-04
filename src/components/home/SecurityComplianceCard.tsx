"use client";
import FeaturedInsights from "./FeaturedInsights";
import Link from "next/link";

export default function SecurityComplianceCard() {
  return (
    <section className="py-16 px-4 md:px-28 justify-center">
      <div className="flex items-center justify-center min-h-screen p-3 md:p-6">
        <div className="w-full border border-gray-200 rounded-lg bg-white p-2 md:p-3 flex flex-col md:flex-row gap-6 md:gap-38 items-stretch font-sans">
          {/* LEFT */}
          <div className="relative w-full md:w-[30rem] min-h-[200px] md:min-h-[250px] bg-[#eeefe4] rounded-2xl p-6 overflow-hidden flex items-center justify-center">
            <div className="absolute top-6 left-6 flex flex-col gap-1.5 text-[11px] md:text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              <span>SOC2</span>
              <span>HIPAA</span>
              <span>HITRUST</span>
              <span>GDPR</span>
              <span>ISO 27001</span>
            </div>

            <div className="w-[260px] h-[200px] md:w-[260px] md:h-[320px] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <polygon
                  points="50,5 76,14 93,37 93,63 76,86 50,95 24,86 7,63 7,37 24,14"
                  fill="none"
                  stroke="#c3c6b8"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                />
                <polygon
                  points="50,18 69,25 82,41 82,59 69,75 50,82 31,75 18,59 18,41 31,25"
                  fill="none"
                  stroke="#c3c6b8"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                />

                <path
                  d="M 48,29 Q 50,28 52,29 L 67,34 Q 69,35 69,37 L 67,61 Q 66,63 65,64 L 52,72 Q 50,73 48,72 L 35,64 Q 34,63 33,61 L 31,37 Q 31,35 33,34 Z"
                  fill="#0bc963"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col justify-center py-4 lg:pr-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-black inline-block"></span>
              <span className="text-sm font-medium tracking-wide text-neutral-800">
                Security and compliance
              </span>
            </div>

            <h2 className="text-2xl md:text-[44px] leading-[1.1] font-bold text-[#061e0f] tracking-tight mb-5">
              Security and compliance that exceed your standards
            </h2>

            <p className="text-neutral-600 text-base md:text-[17px] leading-relaxed max-w-[520px] mb-8">
              Your data (and your conversations) are safe with us. ReflexAI meets the
              highest global standards, including SOC 2, HIPAA, HITRUST, GDPR and ISO
              27001.
            </p>

            <button className="flex items-center gap-2 whitespace-nowrap border border-neutral-300 hover:border-neutral-800 rounded-lg px-5 py-2.5 text-sm md:text-base font-semibold text-neutral-900 bg-white group">
              <span>Explore security & compliance</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="w-full bg-white py-24 px-0 md:py-32 flex flex-col items-center justify-center font-sans">
        <div className="max-w-[1100px] w-full text-center flex flex-col items-center">
          <h1 className="text-[30px] sm:text-[42px] md:text-[50px] font-bold text-black tracking-tight leading-[1.25] max-w-[1300px] mb-10">
            Born in the toughest environments,{" "}
            <span className="inline-flex items-center whitespace-nowrap">
              ReflexAI
              <svg
                className="inline-block h-[0.75em] w-[0.75em] mx-[0.18em] text-[#adfc32]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="15"
              >
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                <polygon points="50,32 70,44 70,56 50,68 30,56 30,44" fill="white" />
              </svg>
            </span>{" "}
            powers high-stakes conversations across industries
          </h1>

          <Link
            href="/about"
            className="flex items-center gap-2 whitespace-nowrap border border-neutral-300 hover:border-black rounded-lg px-6 py-3 text-sm font-bold text-black bg-white group"
          >
            <span>Learn more about us</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section>
        <FeaturedInsights />
      </section>
    </section>
  );
}
