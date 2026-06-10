import { insightsPageContent } from "@/data/insights_data";

export function InsightsHero() {
  const { hero } = insightsPageContent;

  return (
    <section className="bg-[#012A0B] text-white">
      <div className="m-auto max-w-7xl pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div>
          <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
            <h1 className="text-68px font-medium text-white">{hero.title}</h1>

            <span className="text-16px-body mt-2 inline-block whitespace-nowrap opacity-70 sm:mt-3">
              {hero.eyebrow}
            </span>
          </div>

          <p className="text-18px-body mt-6 max-w-[546px] opacity-90">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}