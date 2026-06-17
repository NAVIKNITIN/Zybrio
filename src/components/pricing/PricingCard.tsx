import { AppButton } from "../common/app-button";
import { Plan } from "../types";

type PricingCardProps = {
  readonly plan: Plan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`
        relative
        ${plan.custom ? "min-h-[500px] sm:min-h-[580px]" : "min-h-[auto] sm:min-h-[auto]"}
        md:min-h-[720px]
        min-w-full sm:min-w-[280px] md:min-w-0
        bg-[#FBFBF8]
        border border-[#E8E6DD]
        rounded-[20px] sm:rounded-[24px] md:rounded-[28px]
        p-5 sm:p-6 md:p-7
        overflow-hidden
        text-left
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#DCF5E3] flex items-center justify-center">
            {plan.icon || "🪪"}
          </div>

          <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#111]">
            {plan.title}
          </h2>
        </div>

        {plan.popular && (
          <span className="bg-[#E8D9FF] text-[10px] font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        )}
      </div>

      {/* BUTTON - Same effect for all cards */}
      <AppButton
        className="
          mt-6 sm:mt-8 w-full min-h-0 rounded-lg px-6 py-5 font-semibold text-center flex items-center justify-center
          transition-all duration-300 ease-in-out
          bg-[#062900] text-[#B7FF45] hover:bg-[#B7FF45] hover:text-[#062900]
        "
      >
        {plan.buttonText}
      </AppButton>

      {/* ENTERPRISE */}
      {plan.custom ? (
        <>
          <p className="mt-12 sm:mt-16 md:mt-20 text-[18px] sm:text-[18px] leading-[28px] sm:leading-[34px] text-[#4C564B] relative z-10">
            {plan.description}
          </p>

          <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[240px] md:h-[160px] pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[#09D64B] rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[120px]" />

            <div className="absolute bottom-[40px] sm:bottom-[50px] md:bottom-[40px] left-[60px] sm:left-[75px] md:left-[90px] w-3 h-3 bg-[#062900]" />

            <div className="absolute bottom-[150px] sm:bottom-[180px] md:bottom-[120px] right-[50px] sm:right-[60px] md:right-[70px] w-3 h-3 bg-[#062900]" />
          </div>
        </>
      ) : (
        <>
          <h3 className="mt-8 sm:mt-9 md:mt-10 text-[16px] sm:text-[18px] font-semibold">
            Key features included
          </h3>

          <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8EDF2B] mt-[7px] sm:mt-[9px] shrink-0" />

                <span className="text-[15px] sm:text-[14px] leading-[22px] sm:leading-[24px] text-[#4C564B]">
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