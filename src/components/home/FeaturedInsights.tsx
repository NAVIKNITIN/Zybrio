import { ArrowUpRight } from "lucide-react";
import React from "react";

const FeaturedInsights = () => {
  return (
    <section className="max-w-10xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center mb-8">
        <div className="w-2 h-2 bg-black inline-block mr-2"></div>
        <h2 className="text-sm text-gray-800">Featured Insights</h2>
      </div>

      {/* MAIN CONTAINER RESPONSIVE */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-18">
        {/* Left Card: Blog */}
        <div className="group cursor-pointer rounded-xl w-full">
          <div className="relative rounded-xl overflow-hidden mb-4">
            <img
              src="/HomePage-image/svg/FeaturedInsightsImg.svg"
              alt="Sales team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* TEXT OVER IMAGE (NO BLOG LABEL) */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[90%] text-white">
              <h3 className="text-[18px] sm:text-xl md:text-2xl font-semibold leading-tight">
                AI for sales teams: How simulation improves sales performance
              </h3>
            </div>

            {/* ICON */}
            <div className="absolute bottom-4 right-4 md:bottom-5 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#A8E61D] text-black p-2 rounded-full">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Press */}
        <div className="group cursor-pointer w-full md:w-auto">
          <div className="h-52 sm:h-60 md:h-64 rounded-xl bg-green-900 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
            <img
              src="/HomePage-image/svg/FeaturedInsightsImg2.svg"
              alt="Sales team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="text-xs sm:text-sm text-gray-500 mt-4 md:mt-15">
            <span className="font-semibold uppercase tracking-wider">Press</span> •
            06.22.2025
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
            How AI-Driven simulations are transforming workforce readiness
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
