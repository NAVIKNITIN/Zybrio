"use client";

import { ArrowRightIcon, ArrowUpRight, ShieldCheckIcon } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="group relative rounded-xl bg-[#F4F4F0] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="cursor-pointer rounded-full bg-[#0B3D0B] p-2 text-white transition-colors duration-300 hover:bg-[#145214]">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <h2 className="mb-2 text-lg font-semibold text-[#0B3D0B]">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-lg object-cover"
      />
    </div>
  );
}

const products = [
  {
    title: "Prepare",
    description: "Simulations tailored to high-stakes scenarios.",
    image: "/images.jpg",
  },
  {
    title: "Assure",
    description: "Full visibility into 100% of conversations.",
    image: "/images.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative left-20 mx-auto max-w-7xl rounded-xl bg-[#FAFAF8] px-6 py-12 pt-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div>
          <h1 className="relative bottom-6 text-lg font-semibold text-[#0B3D0B]">
            Products
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="relative bottom-6 text-lg font-semibold text-[#0B3D0B]">
            Customer Highlights
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <ProductCard title="dd" description="hello" image="/images.jpg" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-b-xl bg-[#F3F3EB] px-4 py-3">
        <div className="rounded-md bg-[#0B2A0A] p-2">
          <ShieldCheckIcon className="h-5 w-5 text-green-400" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-[#0B2A0A]">Security & Compliance</span>
          <ArrowRightIcon className="ml-auto h-4 w-4 text-[#0B2A0A]" />
        </div>
      </div>
    </section>
  );
}
