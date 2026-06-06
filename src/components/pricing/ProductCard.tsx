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
    <div className="group relative  flex h-full  flex-col rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:shadow-lg">
      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-[#0B3D0B] p-2 text-white">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-[#0B3D0B]">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-gray-600">
        {description}
      </p>

      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="h-40 w-full rounded-xl object-cover"
      />
    </div>
  );
}

const products = [
  {
    title: "Prepare",
    description:
      "Simulations tailored to high-stakes scenarios.",
    image: "/images.jpg",
  },
  {
    title: "Assure",
    description:
      "Full visibility into 100% of conversations.",
    image: "/images.jpg",
  },
];

export default function ProductsSection() {
  return (
    <div
      className="w-full mx-auto bg-white rounded-[10px] px-4 sm:px-6 lg:px-8 py-6 lg:py-18 max-h-[65vh] lg:max-h-[85vh]  overflow-y-auto lg:overflow-y-hidden overflow-x-hidden product-scrollbar">
      <section className="sm:px-0">
        <div className="grid gap-3 lg:grid-cols-[620px_320px] items-stretch">
          {/* Products */}
          <div className="flex flex-col">
            <h2 className="mb-5 text-xl font-semibold text-[#0B3D0B]">
              Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="flex flex-col h-full">
            <h2 className="mb-5 text-xl font-semibold text-[#0B3D0B]">
              Customer Highlights
            </h2>

            <ProductCard
              title="Customer Story"
              description="See how leading teams use ZYBRIO to improve performance and customer experience."
              image="/images.jpg"
            />
          </div>
          <div className="lg:absolute lg:bottom-0 w-full lg:left-0 bg-gradient-to-t from-white to-transparent pointer-events-none">
            <div className="flex w-full max-w-7xl lg:rounded-[0px] rounded-lg items-start px-5 gap-2 bg-[#F3F3EB] py-2 sm:flex-row sm:items-center sm:px-8">
              <div className="rounded-lg bg-[#0B2A0A] p-3">
                <ShieldCheckIcon className="h-5 w-5 text-[#00FF66]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="font-medium text-[#0B2A0A]">
                  Security & Compliance
                </span>
                <ArrowRightIcon className="h-4 w-4 text-[#0B2A0A]" />
              </div>
            </div>
          </div>


        </div>

      </section>


      <style jsx>{`
        .product-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .product-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1023px) {
          .product-scrollbar {
            -ms-overflow-style: auto;
            scrollbar-width: thin;
          }

          .product-scrollbar::-webkit-scrollbar {
            display: block;
            width: 8px;
          }

          .product-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }

          .product-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 9999px;
          }
        }
      `}</style>
    </div>
  );
}