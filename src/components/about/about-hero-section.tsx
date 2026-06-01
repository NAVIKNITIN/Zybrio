export default function AboutHeroSection() {
  return (
   <section className="bg-[#D7F0A8] min-h-[600px] overflow-x-hidden px-4 flex items-center justify-center">
      <div className="w-full max-w-[1280px] mx-auto text-center">
        <p className="mb-6 text-[16px] text-[#667C38] font-medium">Our Mission</p>

        <h2 className="mx-auto max-w-[1100px] text-[#061F00] font-semibold leading-[0.92] tracking-[-0.065em] text-[clamp(44px,5.5vw,60px)] break-words">
          We&apos;re on a mission to redefine training and
          <br />
          quality assurance, empowering
          <br />
          organizations to make the most of every
          <br />
          conversation.
        </h2>
      </div>
    </section>
  );
}