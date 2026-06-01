import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const FeaturedInsights = () => {
    return (
        <section className="max-w-10xl mx-auto py-12 px-4">
            <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-black inline-block mr-2"></div>
                <h2 className="text-sm  text-gray-800">Featured Insights</h2>
            </div>

            <div className="flex gap-18">
                {/* Left Card: Blog */}
                <div className="group cursor-pointer rounded-xl">
                    <div className="relative rounded-xl overflow-hidden mb-4">
                        {/* Replace with your image */}
                        <img
                            src="/HomePage-image/svg/FeaturedInsightsImg.svg"
                            alt="Sales team"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute  inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-5 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#A8E61D] text-black  p-2 rounded-full cursor-pointer transition-colors duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                    </div>

                    <div className="relative bottom-45 left-6 w-[20rem] font-semibold tracking-wide text-neutral-500 uppercase">
                        <div className="text-sm text-gray-500 mb-2">
                            <span className="text-green-600 font-semibold uppercase tracking-wider">Blog</span> • 12.03.2025
                        </div>
                        <h3 className="text-2xl font-semibold text-[white] leading-tight">
                            AI for sales teams: How simulation improves sales performance
                        </h3>
                    </div>

                </div>

                {/* Right Card: Press */}
                <div className="group cursor-pointer">
                    <div className="h-64 rounded-xl bg-green-900 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02]">
                          <img
                            src="/HomePage-image/svg/FeaturedInsightsImg2.svg"
                            alt="Sales team"
                            className="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-sm text-gray-500 mt-15">
                        <span className="font-semibold uppercase tracking-wider">Press</span> • 06.22.2025
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                        How AI-Driven simulations are transforming workforce readiness
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInsights;