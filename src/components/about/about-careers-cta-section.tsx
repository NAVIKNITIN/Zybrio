import Image from "next/image";
import Link from "next/link";
import { aboutPageContent } from "@/data/about_data";

export function AboutCareersCtaSection() {
  const { careersCta } = aboutPageContent;

  return (
    <section className="bg-[#f7f7f4] py-[150px]">
      <div className="container-app">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex w-full flex-1 flex-col justify-between gap-[26px] lg:max-w-[818px] lg:flex-row">
            <h2 className="text-60px flex-1 text-[#012a0b] lg:max-w-[435px]">
              {careersCta.title}
            </h2>

            <div className="relative flex-1 lg:max-w-[358px]">
              <div className="relative aspect-[358/442] w-full overflow-hidden rounded-[10px] bg-[#ecebe4]">
                <Image
                  src={careersCta.imageSrc}
                  alt={careersCta.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 358px"
                />
              </div>
            </div>
          </div>

          <div className="flex max-w-[387px] flex-1 flex-col justify-end lg:self-end lg:pb-8">
            <p className="text-[18px] font-medium leading-[1.45] text-[#012a0b]/80">
              {careersCta.description}
            </p>

            <Link
              href={careersCta.ctaHref}
              className="mt-9 inline-flex min-h-10 w-fit items-center justify-center rounded-lg bg-[#012a0b] px-6 py-2.5 text-[14px] font-semibold leading-none text-[#a8e61d] transition hover:bg-[#a8e61d] hover:text-[#012a0b]"
            >
              {careersCta.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}