import Image from "next/image";
import { customersPageData } from "@/data/customersPageData";


type Story = (typeof customersPageData.allStories.items)[number];
type StoryLogo =
  | { readonly type: "varsity"; readonly label: string }
  | { readonly type: "image"; readonly label: string; readonly image: string }
  | { readonly type: "text"; readonly label: string }
  | { readonly type: "none"; readonly label: string };

const VarsityLogo = ({ label }: { readonly label: string }) => {
  return (
    <div className="flex flex-col items-center gap-7 text-white">
      <span className="relative inline-block size-24 rounded-full border-[18px] border-white">
        <span className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute -left-8 bottom-0 size-14 rounded-full border-b-[18px] border-l-[18px] border-white" />
      </span>

      <p className="text-[clamp(48px,4.8vw,76px)] font-light leading-none tracking-[-0.07em] text-white">
        {label}
      </p>
    </div>
  );
};

const StoryLogo = ({ logo }: { readonly logo: StoryLogo }) => {
  if (logo.type === "varsity") {
    return <VarsityLogo label={logo.label} />;
  }

  if (logo.type === "image") {
    return (
      <div className="relative h-[168px] w-[620px] max-w-[82%] bg-white shadow-sm">
        <Image
          src={logo.image}
          alt={logo.label}
          fill
          className="object-contain p-4"
          sizes="620px"
        />
      </div>
    );
  }

  if (logo.type === "none") {
    return null;
  }

  return (
    <p className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none tracking-[-0.08em] text-white">
      {logo.label}
    </p>
  );
};

const StoryImage = ({ story }: { readonly story: Story }) => {
  return (
    <div className="relative h-[300px] lg:h-[558px] overflow-hidden rounded-[16px] bg-[#061F00]">
      <Image
        src={story.image}
        alt={story.imageAlt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {story.overlay && <div className="absolute inset-0 bg-black/45" />}

      {"decoration" in story && story.decoration === "lime-shape" && (
        <div className="absolute right-[-65px] top-0 z-10 h-[330px] w-[430px] bg-[#DFFF8D] [clip-path:polygon(0_0,100%_0,100%_100%,38%_78%)]" />
      )}

      <div className="absolute inset-0 z-20 grid place-items-center">
        <StoryLogo logo={story.logo as StoryLogo} />
      </div>
    </div>
  );
};

const CustomersAllStories = () => {
  const { title, items } = customersPageData.allStories;

  return (
    <section className="bg-white mx-5  px:2 lg:px-21 py-20 text-[#061F00]">
      <div className="mx-auto max-w-[1558px]">
        <h2 className="mb-[145px] text-[clamp(42px,4.5vw,48px)] font-normal leading-none tracking-[-0.07em] text-[#061F00] mb-10">
          {title}
        </h2>

        <div className="grid gap-9 gap-y-20 sm:grid-cols-2">
          {items.map((story) => (
            <article key={story.id} className="group">
              <StoryImage story={story} />

              <div className="pt-8">
                <span className="inline-flex rounded-lg bg-[#FAFAF2] px-3 py-1 text-[17px] font-medium leading-none tracking-[-0.03em] text-[#061F00]">
                  {story.category}
                </span>

                <h3 className="mt-8 max-w-[500px] text-[clamp(30px,3vw,28px)] font-normal leading-[1.14] tracking-[-0.065em] text-[#061F00]">
                  {story.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersAllStories;
