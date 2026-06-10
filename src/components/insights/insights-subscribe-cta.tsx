import { insightsPageContent } from "@/data/insights_data";

export function InsightsSubscribeCta() {
  const { subscribeCta } = insightsPageContent;

  return (
    <div>
      <div className="relative overflow-hidden rounded-[1.15rem] bg-[#a4ea00] px-7 py-8 sm:px-9 sm:py-8 lg:px-10 lg:py-8">
        <span className="absolute top-4 left-4 size-[5px] bg-[#6f9700]" />
        <span className="absolute top-4 right-4 size-[5px] bg-[#6f9700]" />
        <span className="absolute bottom-4 left-4 size-[5px] bg-[#6f9700]" />
        <span className="absolute right-4 bottom-4 size-[5px] bg-[#6f9700]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[25px] text-center leading-[1.02] font-medium tracking-[-0.055em] text-[#0d1d08] sm:text-[2.15rem]">
            {subscribeCta.title}
          </h2>

          <form className="w-full max-w-[29rem]">
            <div className="flex items-center rounded-[0.85rem] bg-[#84b800] p-1.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
              <input
                type="email"
                placeholder={subscribeCta.placeholder}
                className="h-11 flex-1 bg-transparent px-4 text-base text-white placeholder:text-white/88 outline-none"
              />

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-[1rem] font-semibold text-[#5d8400] transition hover:bg-white/95"
              >
                {subscribeCta.buttonLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}