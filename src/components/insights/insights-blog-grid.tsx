import Image from "next/image";
import { insightsPageContent } from "@/data/insights_data";

type BlogGridItem = (typeof insightsPageContent.blogGrid.items)[number];

function BlogGridArtwork({ item }: { readonly item: BlogGridItem }) {
  const imageSrc = item.imageSrc ?? "/insights/Image1.png";

  return (
    <div className="relative h-[10rem] overflow-hidden rounded-[1rem] bg-[#dfffa3]">
      <Image
        src={imageSrc}
        alt={item.imageAlt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
        loading="lazy"
      />
    </div>
  );
}

function BlogGridCard({ item }: { readonly item: BlogGridItem }) {
  return (
    <article>
      <BlogGridArtwork item={item} />

      <div className="mt-6">
        <p className="text-[1rem] font-semibold text-white/78">
          {item.category}
          <span className="mx-3 inline-block size-1.2 rounded-full bg-[#a4ea00]" />
          {item.date}
        </p>

        <h3 className="mt-4 max-w-[30rem] text-[1.6rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[2.05rem]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export function InsightsBlogGrid() {
  const { blogGrid } = insightsPageContent;

  return (
    <section>
      <div className="grid gap-x-11 gap-y-14 md:grid-cols-2">
        {blogGrid.items.map((item) => (
          <BlogGridCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}