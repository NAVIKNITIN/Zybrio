import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insightsPageContent } from "@/data/insights_data";

interface InsightsBlogShowcaseProps {
  readonly onViewAll?: () => void;
}

export const InsightsBlogShowcaseMobile = ({ onViewAll }: InsightsBlogShowcaseProps) => {
  const { blogShowcase } = insightsPageContent;
  const { featured } = blogShowcase;

  return (
    <section className="flex-1" id="blog">
      {/* Header Section */}
      <div className="flex items-end gap-4">
        <div>
          <p className="text-[0.95rem] font-medium text-white/88">
            {blogShowcase.eyebrow}
          </p>

          <h2 className="mt-2 max-w-[38rem] text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white">
            {blogShowcase.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-[0.75rem] border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white transition hover:border-[#a4ea00]/45 hover:bg-white/[0.07]"
        >
          {blogShowcase.ctaLabel}
          <ArrowRight className="size-3.5 text-[#a4ea00]" />
        </button>
      </div>

      {/* Featured Article Card - Text at Bottom */}
      <article className="mt-10 rounded-[24px] bg-[#022b05]">
        {/* Top Thumbnail */}x
        <div className="relative h-[150px] w-[300px]  rounded-[20px]">
          <Image
            src="/insights/Herocen.png"
            alt={featured.headline}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <h3 className="max-w-[500px] text-center text-[20px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#0a1708]">
              {featured.headline}
            </h3>
          </div>
        </div>
        {/* Blog Meta */}
        <div className="mt-8 flex items-center gap-3 text-[12px] font-medium text-[#89a780]">
          <span>{featured.category}</span>

          <span className="h-[6px] w-[6px] rounded-full bg-[#6c8d60]" />

          <span>{featured.date}</span>
        </div>
        {/* Blog Title */}
        <h4 className="mt-4 px-1 max-w-[520px] text-[21px] font-semibold leading-[1.1] text-white">
          {featured.footerTitle}
        </h4>
      </article>
    </section>
  );
};
