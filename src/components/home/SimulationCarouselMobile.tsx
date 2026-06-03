"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { simulationCarouselData } from "@/data/simulationCarouselData";
import { AppButton } from "../common/app-button";
import SimulationCarousel from "./SimulationCarousel";

const SimulationCarouselMobile = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-[#f7f7f5]">
      {/* ================= DESKTOP ================= */}
      <div className="mx-auto hidden max-w-[1600px] gap-20 px-12 lg:grid lg:grid-cols-[1.3fr_1fr]">
        {/* Left Content */}
        <div className="relative">
          <div className="pt-[90px]">
            <p className="mb-6 flex items-center gap-3 pl-16 text-[18px] text-[#1f2a1f]">
              <span className="h-2 w-2 rounded-full bg-[#0f240f]" />
              Prepare: AI Training Simulations
            </p>

            <h3 className="mt-4 max-w-[550px] pl-16 text-4xl font-semibold leading-[1.2] tracking-[-0.08em] text-[#102110] md:text-5xl">
              Give your agents realistic practice before they take a single live call.
            </h3>

            <AppButton className="mt-6 ml-14 inline-flex w-fit items-center rounded-[12px] border border-[#d7d5cb] bg-white px-4 py-2.5 text-[14px] font-medium text-[#102110] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bdbbae] hover:bg-[#ecebe4] hover:shadow-sm">
              See Simulations in Action →
            </AppButton>
          </div>

          <div className="mt-[120px]">
            {simulationCarouselData.map((slide, index) => (
              <div key={slide.id} className="flex min-h-[70vh] items-center py-20">
                <motion.div
                  onViewportEnter={() => setActiveSlide(index)}
                  viewport={{
                    amount: 0.35,
                    margin: "0px 0px -120px 0px",
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="w-full max-w-[1000px] pl-16">
                    {/* Dots Desktop Only */}
                    <div className="flex w-fit items-center gap-3 rounded-full bg-[#ecebe4] px-4 py-3">
                      {simulationCarouselData.map((dotSlide, dotIndex) => (
                        <div
                          key={dotSlide.id}
                          className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            activeSlide === dotIndex
                              ? "scale-110 bg-[#0f240f]"
                              : "border border-[#9c9c9c]"
                          }`}
                        />
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="mt-6"
                      >
                        <h3 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#2b3b2b]">
                          {simulationCarouselData[activeSlide].title}
                        </h3>

                        <p className="mt-3 max-w-[400px] text-[18px] leading-[1.4] text-[#435343]">
                          {simulationCarouselData[activeSlide].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Image */}
        <div className="sticky top-[40px] flex h-screen items-start justify-end pr-10 pt-[90px]">
          <div className="relative h-[450px] w-[750px] overflow-hidden rounded-[14px] bg-[#648f18] p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="absolute top-13 right-23 bottom-28 left-23"
              >
                <Image
                  src={simulationCarouselData[activeSlide]?.image ?? ""}
                  alt={simulationCarouselData[activeSlide]?.title ?? "Simulation preview"}
                  fill
                  priority
                  sizes="50vw"
                  className="rounded-[14px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="px-5 py-16 lg:hidden">
        <p className="mb-4 flex items-center justify-center gap-3 text-[15px] text-[#1f2a1f] sm:text-[16px]">
          <span className="h-2 w-2 rounded-full bg-[#0f240f]" />
          Prepare: AI Training Simulations
        </p>

        <h2 className="mx-auto max-w-[700px] text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#102110] sm:text-[42px]">
          Give your agents realistic practice before they take a single live call.
        </h2>

        <div className="mt-6 flex justify-center">
          <AppButton className="border border-[#102110] bg-white">
            See Simulations in Action →
          </AppButton>
        </div>

        <div className="mt-14 space-y-14">
          {simulationCarouselData.map((slide) => (
            <div key={slide.id}>
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden rounded-[16px] bg-[#648f18] sm:h-[260px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-[24px] font-semibold leading-[1.1] text-[#2b3b2b] sm:text-[30px]">
                  {slide.title}
                </h3>

                <p className="mt-3 text-[16px] leading-[1.6] text-[#435343] sm:text-[18px]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimulationCarouselMobile;
