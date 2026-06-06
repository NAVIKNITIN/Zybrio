// components/PerformanceDashboard.tsx
import { darkGreen } from "@/themes/themes";
import Image from "next/image";

export default function PerformanceDashboardMobile
() {
  return (
    <section className="flex flex-row mt-8 lg:mt-30 px-4 px-0 bg-[#F5F3EE] rounded-x2 overflow-hidden shadow-lg">
      {/* Left Panel - 30% */}
      <div
        className="w-[30%] lg:w-1/3 flex flex-col justify-between rounded-lg text-white p-2 sm:p-3 lg:p-6"
        style={{ backgroundColor: darkGreen }}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between  lg:mb-4">
          <h2 className="text-[4px] sm:text-[10px] lg:text-sm font-medium">
            Overall Score
          </h2>

          <div className="flex items-center gap-1 bg-[#003A0B] text-white px-1 py-0.5 lg:px-2 lg:py-1 rounded-full">
            <h2 className="text-[4px] sm:text-[10px] lg:text-sm font-bold">
              94%
            </h2>

            <div className="flex items-center gap-[1px]">
              <span className="w-1 h-1 lg:w-2 lg:h-2 bg-green-500 rounded-full"></span>
              <span className="w-1 h-1 lg:w-2 lg:h-2 bg-green-500 rounded-full"></span>
              <span className="w-1 h-1 lg:w-2 lg:h-2 border border-green-500 rounded-full"></span>
            </div>

            <h2 className="text-[4px] sm:text-[8px] lg:text-xs text-green-400 font-semibold">
              +12%
            </h2>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/HomePage-image/profile.jpg"
            alt="Joan Simmons"
            width={60}
            height={60}
            className="rounded-full mb-1 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20"
          />

          <h3 className="text-[4px] sm:text-xs lg:text-lg font-semibold text-center">
            Joan Simmons
          </h3>

          <p className="text-[4px] sm:text-[9px] lg:text-xs text-gray-300">
            Team Member
          </p>
        </div>

        {/* Bottom Section */}
        <div>
          <p className="text-[4px] sm:text-[8px] lg:text-xs text-gray-400 mb-1">
            8 / 12 Simulations Completed
          </p>

          <div className="w-full bg-gray-700 h-1 lg:h-2 rounded-full">
            <div className="bg-green-500 h-1 lg:h-2 rounded-full w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Right Panel - 70% */}
      <div className="w-[70%] lg:flex-1 relative">
        <Image
          src="/HomePage-image/rightImg.png"
          alt="Dashboard Graphic"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}