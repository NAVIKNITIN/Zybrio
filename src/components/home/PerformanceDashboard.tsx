// components/PerformanceDashboard.tsx
"use client";
import { BgThemeContext } from "@/globalStore/BgColorChange";
import { darkGreen } from "@/themes/themes";
import Image from "next/image";
import { useContext } from "react";

export default function PerformanceDashboard() {

  const context = useContext(BgThemeContext);


  return (
    <div className={context?.bgThemeColor ? "bg-[#F8F8F5]" : "bg-white"}>
      <section className="flex flex-col mx-auto max-w-7xl px-2 md:flex-row mt-30 bg-[#F5F3EE] rounded-xl overflow-hidden shadow-lg">
        {/* Left Panel */}
        <div
          className="flex flex-col justify-between items-center text-white p-6 md:w-1/3 rounded-xl"
          style={{ backgroundColor: darkGreen }}
        >
          {/* Top Section */}
          <div className="w-full flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Overall Score</h2>
            <div className="flex items-center gap-2 bg-[#003A0B] text-white px-2 py-1 rounded-full">
              <h2 className="text-sm font-bold">94%</h2>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 border border-green-500 rounded-full"></span>
              </div>
              <h2 className="text-xs text-green-400 font-semibold">+12%</h2>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/HomePage-image/profile.jpg"
              alt="Joan Simmons"
              width={80}
              height={80}
              className="rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold">Joan Simmons</h3>
            <p className="text-xs text-gray-300">Team Member</p>
          </div>

          {/* Bottom Section */}
          <div className="w-full">
            <p className="text-xs text-gray-400 mb-1 text-start">
              8 / 12 Simulations Completed
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Right Panel Image */}
        <div className="flex-1 relative pl-4">
          <Image
            src="/HomePage-image/rightImg.png"
            alt="Dashboard Graphic"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>


  );
}
