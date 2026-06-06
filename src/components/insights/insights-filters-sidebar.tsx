"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { insightsPageContent } from "@/data/insights_data";
import { cn } from "@/lib/utils";

export type InsightsFilterView = "all" | "blog" | "press" | "case-studies";

type FilterItem = (typeof insightsPageContent.filtersSidebar.items)[number];

const FILTER_VIEW_BY_LABEL: Record<string, InsightsFilterView> = {
  "All Insights": "all",
  Blog: "blog",
  Press: "press",
  "Case studies": "case-studies",
};

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

        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
      </div>

      <div className="hidden lg:block">
        <div className="rounded-[28px] border border-white/10 bg-[rgba(7,40,12,0.72)] px-8 py-9 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md">
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
                    <span>{item.label}</span>
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
