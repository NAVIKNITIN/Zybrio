import Image from "next/image";
import React from "react";

const FeaturedInsights = () => {
  return (
    <section className="max-w-10xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center mb-8">
        <div className="w-2 h-2 bg-black inline-block mr-2"></div>
        <h2 className="text-sm text-gray-800">
          Fresh thinking from the Zybrio team.
        </h2>
      </div>

      {/* MAIN CONTAINER RESPONSIVE */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-18">
        {/* Left Card: Article 1 */}
        <div className="group cursor-pointer rounded-xl w-full">
          <div className="relative mb-4 h-[300px] overflow-hidden rounded-xl md:h-[400px]">
            <Image
              src="/HomePage-image/svg/FeaturedInsightsImg.svg"
              alt="Brand strategy article"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="text-xs sm:text-sm text-gray-500 mt-4 md:mt-15">
            <span className="font-semibold uppercase tracking-wider">
              Brand Strategy
            </span>{" "}
            • June 2026
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
            Why Your Brand Is Being Ignored (And Exactly What to Do About It)
          </h3>
        </div>

        {/* Right Card: Article 2 */}
        <div className="group cursor-pointer w-full md:w-auto">
          <div className="relative h-52 sm:h-60 md:h-64 rounded-xl bg-green-900 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
            <Image
              src="/HomePage-image/svg/FeaturedInsightsImg2.svg"
              alt="Design article"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="text-xs sm:text-sm text-gray-500 mt-4 md:mt-15">
            <span className="font-semibold uppercase tracking-wider">
              Design
            </span>{" "}
            • June 2026
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
            The Real Cost of a Bad Website in 2026
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;