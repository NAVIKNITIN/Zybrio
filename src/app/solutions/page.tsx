import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Solutions",
  "Explore ZYBRIO solutions tailored to industries, use cases, and business challenges.",
);

export default function SolutionsPage() {
  return (
    <MarketingLayout>
      <section className="container-app py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-[#0B2408]">Solutions</h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Learn how ZYBRIO solves complex business challenges across industries and teams.
          </p>
        </div>
      </section>
    </MarketingLayout>
  );
}
