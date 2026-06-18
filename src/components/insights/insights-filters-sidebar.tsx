"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { insightsPageContent } from "@/data/insights_data";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type InsightsFilterView =
  | "all"
  | "brand"
  | "design"
  | "technology"
  | "marketing"
  | "case-studies";

const FILTER_VIEW_BY_LABEL: Record<string, InsightsFilterView> = {
  All: "all",
  Brand: "brand",
  Design: "design",
  Technology: "technology",
  Marketing: "marketing",
  "Case Studies": "case-studies",
};

type FilterItem = (typeof insightsPageContent.filtersSidebar.items)[number];



type InsightsFiltersSidebarProps = {
  readonly activeView: InsightsFilterView;
  readonly onViewChange: (view: InsightsFilterView) => void;
};

function hasAccent(item: FilterItem): item is FilterItem & { accent: "square" } {
  return "accent" in item && item.accent === "square";
}

const hasArrow = (
  item: FilterItem,
): item is FilterItem & { trailingIcon: "arrow-up-right" } => {
  return "trailingIcon" in item && item.trailingIcon === "arrow-up-right";
};

function isActiveView(item: FilterItem, activeView: InsightsFilterView) {
  return FILTER_VIEW_BY_LABEL[item.label] === activeView;
}




const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  // const categories = insightsPageContent;
  const categories = insightsPageContent.filtersSidebar;

  return (
    <div className="relative block sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between mt-2 w-full px-5 py-3 text-sm font-medium text-gray-200 border border-white/10 bg-[#001F08]  rounded-full hover:bg-green-800 focus:outline-none"
      >
        <span>Category: {selected}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
            }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 w-full mt-2  rounded-lg shadow-lg  bg-[#FFFFFF] text-black">
          {categories.items.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setSelected(item.label);
              setIsOpen(false);
            }}
            className={`block w-full px-4 py-2 text-[black] rounded-t-2xl text-left text-sm ${selected === item.label
              ? "bg-[#F6FCE8] font-semibold"
              : "hover:bg-green-200"
              }`}
          >
            {item.label}
          </button>
          ))}
        </div>
      )}
    </div>
  );
}






export function InsightsFiltersSidebar({
  activeView,
  onViewChange,
}: InsightsFiltersSidebarProps) {
  const { filtersSidebar } = insightsPageContent;

  return (
    <div className="relative z-20 lg:w-[302px]">
      <div className="lg:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/55" />
          <input
            type="text"
            placeholder={filtersSidebar.searchPlaceholder}
            className="insights-filter-search w-full"
          />
        </div>

        <div className="hidden sm:block mt-6 flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filtersSidebar.items.map((item) => {
            const view = FILTER_VIEW_BY_LABEL[item.label];

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => view && onViewChange(view)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[0.88rem] font-semibold transition",
                  isActiveView(item, activeView)
                    ? "border-[#a4ea00]/55 bg-[#a4ea00]/12 text-white"
                    : "border-white/12 text-white/78 hover:border-white/24 hover:text-white",
                )}
              >
                {hasAccent(item) ? (
                  <span className="size-1.5 rounded-sm bg-[#a4ea00]" />
                ) : null}
                <span>{item.label}</span>
                {hasArrow(item) ? (
                  <ArrowUpRight className="size-3 text-[#a4ea00]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <CategoryDropdown />
      </div>

      <div className="hidden lg:block">
        <div className="rounded-[28px] px-4 lg:sticky lg:top-28 lg:z-10">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/55" />

            <input
              type="text"
              placeholder={filtersSidebar.searchPlaceholder}
              className="insights-filter-search w-full"
            />
          </div>

          <div className="mt-12">
            <p className="insights-filter-heading">{filtersSidebar.heading}</p>

            <nav className="mt-6 flex flex-col gap-4">
              {filtersSidebar.items.map((item) => {
                const view = FILTER_VIEW_BY_LABEL[item.label];

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => view && onViewChange(view)}
                    className={cn(
                      "insights-filter-link",
                      isActiveView(item, activeView) && "insights-filter-link-active",
                    )}
                  >
                    {hasAccent(item) ? <span className="insights-filter-dot" /> : null}
                    <span className="text-[15px]">{item.label}</span>
                    {hasArrow(item) ? (
                      <ArrowUpRight className="insights-filter-arrow size-3.5" />
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
