import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insightsPageContent } from "@/data/insights_data";

interface InsightsBlogShowcaseProps {
  readonly onViewAll?: () => void;
}

export const InsightsBlogShowcase = ({ onViewAll }: InsightsBlogShowcaseProps) => {
  const { blogShowcase } = insightsPageContent;
  const { featured } = blogShowcase;

  return (
    <section className="flex-1" id="blog">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="text-[1.15rem] font-medium text-white/88">
            {blogShowcase.eyebrow}
          </p>

          <h2 className="mt-3  text-[25px] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[40px]">
            {blogShowcase.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2 px-3 text-base font-semibold text-white transition hover:border-[#a4ea00]/45 hover:bg-white/[0.07]"
        >
          {blogShowcase.ctaLabel}
          <ArrowRight className="size-4 text-[#a4ea00]" />
        </button>
      </div>

      <article className="relative mt-10 min-h-[20rem] overflow-hidden rounded-[1.3rem] bg-[#ddff8c] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:mt-12 sm:min-h-[28rem]">
        <Image
          src="/insights/Herocen.png"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="(min-width: 1024px) 70vw, 100vw"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(221,255,140,0)_0%,rgba(10,18,7,0.22)_72%,rgba(10,18,7,0.58)_100%)]" />
        <div className="relative z-10 flex flex-col justify-between px-6 py-6 min-h-[10rem] sm:px-9 sm:py-8">
          <div className="flex flex-1 items-center justify-center py-6 sm:py-0">
            <h3 className="max-w-[55rem] text-center text-[2.2rem] font-semibold leading-[0.97] tracking-[-0.06em] text-[#0d1d08] sm:text-[4.2rem] sm:tracking-[-0.07em]">
              {featured.headline}
            </h3>
          </div>

          <div className="max-w-[24rem]">
            <p className="text-[1rem] font-semibold text-white/85">
              {featured.category}
              <span className="mx-3 inline-block size-1.5 rounded-full bg-white/72" />
              {featured.date}
            </p>

            <p className="mt-4 text-[1.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
              {featured.footerTitle}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};