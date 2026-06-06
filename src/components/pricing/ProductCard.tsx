"use client";

import {
  ArrowRightIcon,
  ArrowUpRight,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

function ProductCard({
  title,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-xl border border-black/6  p-4 sm:p-6  transition-shadow duration-300 hover:shadow-md">
      <div className="absolute top-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div className="rounded-full bg-[#0B3D0B] p-2 text-white">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <h2 className="mb-2 text-lg font-semibold text-[#0B3D0B]">
        {title}
      </h2>

      <p className="mb-4 text-sm sm:text-base text-gray-700">
        {description}
      </p>

      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="h-auto w-full rounded-lg object-cover"
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
    <div className="border lg:ml-26 border-black/6 bg-white rounded-lg  overflow-y-auto lg:overflow-hidden">
      <section className="mx-auto max-w-7xl rounded-xl py-0 px-0 lg:px-4 lg:pt-8 max-h-[90vh]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Products */}
        <div>
          <h1 className="mb-4 text-lg font-semibold text-[#0B3D0B]  hidden md:block">
            Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Customer Highlights */}
        <div>
          <h1 className="mb-4 text-lg font-semibold text-[#0B3D0B]">
            Customer Highlights
          </h1>

          <div>
            <ProductCard
              title="dd"
              description="hello"
              image="/images.jpg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
  
    </section>
        <div className="mt-8 flex flex-wrap items-center gap-3 bg-[#F3F3EB] px-4 py-4">
        <div className="rounded-md bg-[#0B2A0A] p-2">
          <ShieldCheckIcon className="h-5 w-5 text-green-400" />
        </div>

        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="font-medium text-[#0B2A0A]">
            Security & Compliance
          </span>

          <ArrowRightIcon className="h-4 w-4 text-[#0B2A0A]" />
        </div>
      </div>
    </div>
  
  );
}