import Link from 'next/link';
import React from 'react';

export default function SecurityComplianceCard() {
  return (
    <section className="py-16 px-28 justify-center">
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Outer Card Container */}
      <div className="w-full border border-gray-200  rounded-lg bg-white p-2 md:p-3 flex flex-col md:flex-row gap-38 items-stretch font-sans">
        
        {/* Left Section: Visual Graph Container */}
        <div className="relative w-[30rem] min-h-[200px] md:min-h-[250px] bg-[#eeefe4] rounded-2xl p-6 overflow-hidden flex items-center justify-center">
          
          {/* Compliance Text Labels Stacked on the Top-Left */}
          <div className="absolute top-6 left-6 flex flex-col gap-1.5 text-[11px] md:text-xs font-semibold tracking-wide text-neutral-500 uppercase">
            <span>SOC2</span>
            <span>HIPAA</span>
            <span>HITRUST</span>
            <span>GDPR</span>
            <span>ISO 27001</span>
          </div>

          {/* Central Shield/Radar Graphic Wrapper */}
     
        </div>

        {/* Right Section: Content Marketing copy */}
        <div className="flex-1 flex flex-col justify-center py-4 lg:pr-12">
          
          {/* Subheading Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-black inline-block"></span>
            <span className="text-sm font-medium tracking-wide text-neutral-800">
              Security and compliance
            </span>
          </div>

          {/* Main Title Head */}
          <h2 className="text-4xl md:text-[44px] leading-[1.1] font-bold text-[#061e0f] tracking-tight mb-5">
            Security and compliance that exceed your standards
          </h2>

          {/* Descriptive Body Paragraph */}
          <p className="text-neutral-600 text-base md:text-[17px] leading-relaxed max-w-[520px] mb-8">
            Your data (and your conversations) are safe with us. ReflexAI meets the highest global standards, including SOC 2, HIPAA, HITRUST, GDPR and ISO 27001.
          </p>

          {/* Dynamic Button CTA */}
          <div>
            <button className="flex items-center gap-2 border border-neutral-300 hover:border-neutral-800 rounded-lg px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors bg-white group">
              <span>Explore security & compliance</span>
              <svg 
                className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
        

      </div>
      
    </div>
    <section className="w-full bg-white py-24 px-6 md:py-32 flex flex-col items-center justify-center font-sans selection:bg-[#adfc32]/30">
      <div className="max-w-[1100px] w-full text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="text-[20px] sm:text-[38px] md:text-[50px] font-bold text-black tracking-tight leading-[1.1] max-w-[950px] mb-10">
          Born in the toughest environments,{' '}
          <span className="inline-flex items-center whitespace-nowrap">
            ReflexAI
            {/* Embedded Hexagonal Lime Icon */}
            <svg
              className="inline-block h-[0.75em] w-[0.75em] mx-[0.18em] text-[#adfc32]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinejoin="miter"
            >
              <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
              {/* Inner cutout negative space profile */}
              <polygon points="50,32 70,44 70,56 50,68 30,56 30,44" fill="white" />
            </svg>
          </span>{' '}
          powers high-stakes conversations across industries
        </h1>

        {/* CTA Action Button */}
        <div>
          <Link href="/about" className="flex items-center gap-2 border border-neutral-300 hover:border-black rounded-lg px-6 py-3 text-sm font-bold text-black transition-all bg-white hover:shadow-sm group">
            <span>Learn more about us</span>
            <svg 
              className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
    </section>
  );
}