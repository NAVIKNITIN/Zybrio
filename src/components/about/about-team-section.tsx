import Image from "next/image";
import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { aboutPageContent } from "@/data/about_data";

const principleIcons = [BookOpen, ShieldCheck, Sparkles] as const;

export function AboutTeamSection() {
  const { teamImage, teamPrinciples } = aboutPageContent;

  return (
    <section className="bg-forest pb-16 md:pb-24">
      <div className="container-app">
        <div className="border-moss mt-12 w-full rounded-2xl border p-2 pb-8 md:mt-24 md:pb-16">
          <div className="relative aspect-[1264/600] w-full overflow-hidden rounded-[10px] bg-white/5">
            <Image
              src={teamImage.src}
              alt={teamImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1264px, 100vw"
            />
          </div>

          <div className="mt-10 flex flex-col justify-around gap-8 gap-y-8 px-2 md:mt-20 md:flex-row md:px-4 xl:px-10">
            {teamPrinciples.map((principle, index) => {
              const Icon = principleIcons[index] ?? BookOpen;

              return (
                <div
                  key={principle.title}
                  className="flex flex-1 gap-5 md:max-w-[364px]"
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