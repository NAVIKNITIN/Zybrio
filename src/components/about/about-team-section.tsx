import Image from "next/image";
import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { aboutPageContent } from "@/data/about_data";

const principleIcons = [BookOpen, ShieldCheck, Sparkles] as const;

export function AboutTeamSection() {
  const { teamImage, teamPrinciples } = aboutPageContent;

  return (
    <section className="bg-forest pb-14 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container-app">
        <div className="border-moss mt-10 w-full rounded-2xl border p-2 pb-8 md:mt-16 md:pb-12 lg:mt-24 lg:pb-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-white/5 sm:aspect-[16/9] lg:aspect-[1264/600]">
            <Image
              src={teamImage.src}
              alt={teamImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1264px, 100vw"
            />
          </div>

          <div className="mt-8 flex flex-col justify-around gap-8 gap-y-8 px-2 sm:mt-10 md:px-4 lg:mt-20 lg:flex-row xl:px-10">
            {teamPrinciples.map((principle, index) => {
              const Icon = principleIcons[index] ?? BookOpen;

              return (
                <div
                  key={principle.title}
                  className="flex flex-1 gap-4 sm:gap-5 lg:max-w-[364px]"
                >
                  <div className="size-6 flex-none text-[#7baa1d]">
                    <Icon className="size-6" strokeWidth={2.4} />
                  </div>

                  <div>
                    <div className="text-20px-heading text-white">
                      {principle.title}
                    </div>

                    <div className="text-18px-body mt-2.5 text-white/80 md:mt-4">
                      {principle.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
