'use client'; 
import { useEffect, useState } from 'react';
import FeaturedInsights  from './FeaturedInsights';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
const words = ["conversations", "interactions", "discussions"]; // Add your rotating words here 
export default function SecurityComplianceCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="py-16 px-28 justify-center">
    <div className="flex items-center justify-center min-h-screen  p-6">
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
          <div className="w-[260px] h-[200px] md:w-[260px] md:h-[320px] flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full overflow-visible"
            >
              {/* Outer Dashed Ring (10-sided polygon) */}
              <polygon
                points="50,5 76,14 93,37 93,63 76,86 50,95 24,86 7,63 7,37 24,14"
                fill="none"
                stroke="#c3c6b8"
                strokeWidth="0.4"
                strokeDasharray="2,2"
              />

              {/* Middle Dashed Ring (10-sided polygon) */}
              <polygon
                points="50,18 69,25 82,41 82,59 69,75 50,82 31,75 18,59 18,41 31,25"
                fill="none"
                stroke="#c3c6b8"
                strokeWidth="0.4"
                strokeDasharray="2,2"
              />

              

              {/* The Green Shield Polygon with rounded curves */}
              <path
                d="M 48,29 
                   Q 50,28 52,29 
                   L 67,34 
                   Q 69,35 69,37 
                   L 67,61 
                   Q 66,63 65,64 
                   L 52,72 
                   Q 50,73 48,72 
                   L 35,64 
                   Q 34,63 33,61 
                   L 31,37 
                   Q 31,35 33,34 
                   Z"
                fill="#0bc963"
              />

              {/* Six Stat Markers (Small Square Dots) */}
              <rect x="49.2" y="31.2" width="1.6" height="1.6" fill="black" />
              <rect x="64.2" y="35.2" width="1.6" height="1.6" fill="black" />
              <rect x="62.7" y="59.2" width="1.6" height="1.6" fill="black" />
              <rect x="49.2" y="69.2" width="1.6" height="1.6" fill="black" />
              <rect x="35.7" y="59.2" width="1.6" height="1.6" fill="black" />
              <rect x="34.2" y="35.2" width="1.6" height="1.6" fill="black" />
            </svg>
          </div>
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
        <svg className="inline-block h-[0.75em] w-[0.75em] mx-[0.18em] text-[#adfc32]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinejoin="miter">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
          <polygon points="50,32 70,44 70,56 50,68 30,56 30,44" fill="white" />
        </svg>
      </span>{' '}
      powers high-stakes{' '}
      
      {/* Animated word section */}
      <span className="relative inline-block w-[12ch] bottom-11 text-[#adfc32]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>{' '}
      across industries
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
    <section>
        <FeaturedInsights/>
    </section>
    </section>
  );
}