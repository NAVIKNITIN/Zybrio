import { AppButton } from "./common/app-button";
import { Plan } from "./types";

type PricingCardProps = {
  readonly plan: Plan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className="
  relative
  min-h-[720px]
  min-w-[320px]
  md:min-w-0
  bg-[#FBFBF8]
  border border-[#E8E6DD]
  rounded-[28px]
  p-7
  overflow-hidden
  text-left
"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#DCF5E3] flex items-center justify-center">
            {plan.icon || "🪪"}
          </div>

          <h2 className="text-[22px] font-semibold text-[#111]">{plan.title}</h2>
        </div>

        {plan.popular && (
          <span className="bg-[#E8D9FF] text-[10px] font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        )}
      </div>

      {/* BUTTON */}
      <AppButton
        className={`
    mt-8 w-full min-h-0 rounded-lg px-6 py-5 font-semibold
    ${
      plan.custom
        ? "border border-[#D7D7CF] bg-white text-black hover:bg-[#f5f5f0]"
        : "bg-[#062900] text-[#B7FF45] hover:bg-[#B7FF45] hover:text-[#062900]"
    }
  `}
      >
        {plan.buttonText}
      </AppButton>

      {/* ENTERPRISE */}
      {plan.custom ? (
        <>
          <p className="mt-20 text-[18px] leading-[34px] text-[#4C564B] relative z-10">
            {plan.description}
          </p>

          <div className="absolute bottom-0 left-0 w-full h-[160px] pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[#09D64B] rounded-tl-[120px]" />

            <div className="absolute bottom-[40px] left-[90px] w-3 h-3 bg-[#062900]" />

            <div className="absolute bottom-[120px] right-[70px] w-3 h-3 bg-[#062900]" />
          </div>
        </>
      ) : (
        <>
          <h3 className="mt-10 text-[18px] font-semibold">Key features included</h3>

          <ul className="mt-5 space-y-3">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                {/* BULLET */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#8EDF2B] mt-[9px] shrink-0" />

                <span className="text-[14px] leading-[24px] text-[#4C564B]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
