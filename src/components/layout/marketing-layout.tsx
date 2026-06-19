"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { BgThemeContext } from "../../globalStore/BgColorChange";

export function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [bgThemeColor, setBgThemeColor] = useState(false);

  return (
    <BgThemeContext.Provider
      value={{ bgThemeColor, setBgThemeColor }}
    >
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className={`overflow-x-hidden sm:overflow-x-visible ${bgThemeColor ? "bg-[#F8F8F5]" : "bg-white"} `}>
          {children}
        </main>
      </div>
    </BgThemeContext.Provider>
  );
}