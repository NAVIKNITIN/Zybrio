import { customersPageData } from "@/data/customersPageData";

export default function CustomersHero() {
  const { hero } = customersPageData;

  return (
    <section className="bg-[#061F00] text-white pt-[20px]">
      <div className="container-app flex min-h-[250px]  items-start justify-center pt-20 pb-5">
        <div className="text-center">
          <p className="mb-5 text-[15px] font-medium leading-none text-white">
            {hero.eyebrow}
          </p>

          <h1 className="mt-3 text-[clamp(48px,4.5vw,68px)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            {hero.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
