export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ed] py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Label */}
        <div className="mb-8 flex items-center gap-3 lg:-ml-8 lg:mb-10">
          <span className="h-[5px] w-[5px] rounded-full bg-black" />
          <span className="text-[16px] font-normal text-black">Our Story</span>
        </div>

        <div className="space-y-8 pb-16 sm:space-y-10 sm:pb-20 lg:pb-27">
          {/* Left Side */}
          <h2 className="max-w-[900px] text-[30px] font-medium leading-[1.08] tracking-[-0.035em] text-black sm:text-[40px] md:text-[48px] lg:-ml-10 lg:text-[44px] lg:leading-[1.05] lg:tracking-[-0.04em]">
            Born from the belief that great work changes everything
            <br />
            Zybrio partners with ambitious brands to design, build, and market their way to the top.
            <br />
          </h2>

          {/* Right Side */}
          <div className="flex items-start lg:justify-end">
            <div className="max-w-[560px] space-y-6 text-[15px] leading-[1.65] text-[#4e5649] md:text-[16px] lg:ml-[200px] lg:space-y-10">
              <p>
                Our story began in the high-stakes world of crisis intervention, where
                every conversation could have life-changing implications. We built AI
                tools to help responders prepare for those moments, blending
                trust-building with conversational precision to transform how training
                happens at scale.
              </p>

              <p>
                Today, that same vision powers ReflexAI across all industries. From
                healthcare and customer support to government and education, we help teams
                deliver high-quality services that move the needle on their priority
                metrics from Day One.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden pb-10 lg:block">
        <svg
          className="absolute top-65 -left-28 h-[75%] w-[70%]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          style={{
            transform: "scale(1)",
            clipPath: "inset(0 17% 0 0)",
            // clipPath: "inset(0 17% 20% 0)"
          }}
        >
          <path
            d="
        M280 700
        C180 600 180 560 260 480
        L520 220
        C590 150 650 150 740 210
        L1120 470
        C1180 510 1240 510 1310 470
        L1500 350
        C1560 310 1600 350 1600 430
        L1600 900
        C1600 980 1540 1020 1450 960
        L1180 790
        C1100 740 1020 740 940 790
        L690 950
        C610 1000 530 990 460 920
        L280 700
        Z
      "
            fill="none"
            stroke="#d8d4c7"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
