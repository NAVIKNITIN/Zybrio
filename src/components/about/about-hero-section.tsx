export default function AboutHeroSection() {
  return (
    <section className="bg-[#D7F0A8] min-h-[420px] overflow-hidden px-4 flex items-center justify-center sm:min-h-[520px] lg:min-h-[600px]">
      <div className="w-full max-w-[1280px] mx-auto text-center">
        <p className="text-[16px] text-[#667C38] font-medium pt-[100px]">Our Mission</p>

        <h2
          className="
            mt-10
            mx-auto
            max-w-[320px]
            text-[#061F00]
            font-semibold
            leading-[0.92]
            tracking-[-0.06em]
            text-[clamp(48px,9vw,72px)]

            sm:mt-14
            sm:max-w-[520px]
            sm:text-[clamp(58px,8vw,84px)]

            lg:mt-[190px]
            lg:max-w-[1100px]
            lg:text-[clamp(44px,5.5vw,60px)]
            lg:leading-[0.92]
            lg:tracking-[-0.065em]
          "
        >
          We&apos;re on a mission to redefine training and
          <span className="hidden lg:inline">
            <br />
          </span>
          quality assurance, empowering
          <span className="hidden lg:inline">
            <br />
          </span>
          organizations to make the most of every
          <span className="hidden lg:inline">
            <br />
          </span>
          conversation.
        </h2>
      </div>
    </section>
  );
}
