import Image from "next/image";

type Company = {
  readonly id: number;
  readonly name: string;
  readonly image: string;
};

const imageSizes: Record<string, string> = {
  "Amazon One Medical": "w-[55px] md:scale-[1.15]",
  "Veterans Affairs": "w-[55px] md:scale-[1.2]",
  "Community Tax": "w-[55px] md:scale-[1.15]",
  HRS: "w-[32px] md:w-[45px]",
  "Alleviate Tax": "w-[75px] md:w-[170px]",
  Block: "w-[55px] md:w-[100px]",
  Pearson: "w-[65px] md:w-[110px]",
};

const companiesTrustedIcon: Company[] = [
  {
    id: 1,
    name: "Amazon One Medical",
    image: "/HomePage-image/amazon.png",
  },
  {
    id: 2,
    name: "Veterans Affairs",
    image: "/HomePage-image/va.png",
  },
  {
    id: 3,
    name: "Pearson",
    image: "/HomePage-image/pearson.png",
  },
  {
    id: 4,
    name: "Block",
    image: "/HomePage-image/block.png",
  },
  {
    id: 5,
    name: "iLending",
    image: "/HomePage-image/ilending.png",
  },
  {
    id: 6,
    name: "Cortland",
    image: "/HomePage-image/cortland.png",
  },
  {
    id: 7,
    name: "Community Tax",
    image: "/HomePage-image/communityTax.png",
  },
  {
    id: 8,
    name: "Varsity Tutors",
    image: "/HomePage-image/ilending.png",
  },
  {
    id: 9,
    name: "United Way",
    image: "/HomePage-image/ilending.png",
  },
  {
    id: 10,
    name: "HRS",
    image: "/HomePage-image/hrs.png",
  },
  {
    id: 11,
    name: "Compass",
    image: "/HomePage-image/compass.png",
  },
  {
    id: 12,
    name: "Alleviate Tax",
    image: "/HomePage-image/alleviate.png",
  },
];

const getImageSize = (name: string) => {
  return imageSizes[name] ?? "w-[60px] md:w-[140px] lg:w-[160px]";
};

const CompaniesTrustedIcon = () => {
  return (
    <section className="mt-1 w-full py-12 md:py-20 lg:py-35">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-12">
        <h2 className="mb-10 text-center font-syne text-[18px] font-medium tracking-[-0.02em] text-[#1f2a1f] md:mb-16 md:text-[20px]">
          Trusted by companies across industries
        </h2>

        <div className="group/grid relative grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {companiesTrustedIcon.map((company) => (
            <div
              key={company.id}
              className="
                group/card relative flex
                h-[68px] md:h-[85px]
                w-full min-w-0
                items-center justify-center
                rounded-[16px] md:rounded-[20px]
                px-2 md:px-8
                transition-all duration-300
                hover:bg-[#F3F2EB]

                group-hover/grid:blur-[0.5px]
                group-hover/grid:opacity-60

                hover:!blur-0
                hover:!opacity-100
              "
            >
              <span
                className="
                  absolute right-2 top-2
                  h-2 w-2 rounded-full
                  border border-lime-400
                  bg-transparent
                  transition-all duration-300
                  group-hover/card:bg-lime-400
                "
              />

              <Image
                src={company.image}
                alt={company.name}
                width={500}
                height={200}
                sizes="(max-width: 768px) 70px, (max-width: 1024px) 140px, 160px"
                unoptimized
                className={`object-contain transition-transform duration-300 ${getImageSize(
                  company.name,
                )}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesTrustedIcon;