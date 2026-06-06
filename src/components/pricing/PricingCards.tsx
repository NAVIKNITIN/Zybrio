import PricingCard from "./PricingCard";
import { Plan } from "../types";

type PricingCardsProps = {
  readonly plans: readonly Plan[];
};

export default function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div
      className="
        mt-16
        flex gap-6 overflow-x-auto pb-4
        md:grid md:grid-cols-2
        lg:grid-cols-4
      "
    >
      {plans.map((plan) => (
        <PricingCard key={plan.title} plan={plan} />
      ))}
    </div>
  );
}
