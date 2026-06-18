import { customersPageData } from "@/data/customersPageData";

export default function CustomersHero() {
  const { hero } = customersPageData;

  return (
    <section className="bg-[#061F00] text-white pt-[20px]">
      <div className="container-app flex min-h-[320px] items-start justify-center pt-20 pb-8">
        <div className="text-center">
          <p className="mb-5 text-[15px] font-medium leading-none text-white">
            {hero.eyebrow}
          </p>

          <h1 className="mt-3 text-[clamp(48px,4.5vw,68px)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-[18px] font-medium leading-[1.45] text-white/70">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}