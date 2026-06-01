"use client";

import { useState } from "react";

interface ToggleTabsProps {
  options: string[];
  onChange?: (val: string) => void;
}

export default function ToggleTabs({ options, onChange }: ToggleTabsProps) {
  const [active, setActive] = useState(options[0]);

  const handleClick = (tab: string) => {
    setActive(tab);
    onChange?.(tab);
  };

  return (
    <div className="flex items-center border border-[#dcdad1] bg-[#eeede4] rounded-full p-1 w-fit">
      {options.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active === tab
              ? "bg-[#0b2a0a] text-white shadow-sm"
              : "bg-transparent text-[#0b2a0a]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
