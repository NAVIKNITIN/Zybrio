
"use client";

import { motion } from "framer-motion";
import { customersPageData } from "@/data/customersPageData";

type TrustedCard = (typeof customersPageData.trustedSection.cards)[number];

type CardProps<T extends TrustedCard> = Readonly<{ card: T }>;

function VarsityMiniLogo() {
  return (
    <span className="relative inline-block size-5 rounded-full border-[4px] border-[#061F00]">
      <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#061F00]" />
      <span className="absolute -left-1 bottom-0 size-3 rounded-full border-b-[4px] border-l-[4px] border-[#061F00]" />
    </span>
  );
}

function PersonCard({ card }: CardProps<Extract<TrustedCard, { type: "person" }>>) {
  return (
    <article className="flex min-h-[145px] flex-col justify-end rounded-[16px] border border-[#E7E7DA] bg-[#FBFBF6] px-10 py-9">
      <p className="text-[19px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#061F00]">
        {card.name}
      </p>

      <p className="mt-1 text-[18px] font-medium leading-[1.25] tracking-[-0.035em] text-[#526451]">
        {card.role}, {card.company}
      </p>
    </article>
  );
}

function MetricCard({ card }: CardProps<Extract<TrustedCard, { type: "metric" }>>) {
  return (
    <article className="flex min-h-[288px] flex-col justify-between rounded-[16px] border border-[#E7E7DA] bg-[#FBFBF6] px-10 py-11">
      <div className="flex items-center gap-2">
        <VarsityMiniLogo />

        <p className="text-[20px] font-semibold leading-none tracking-[-0.04em] text-[#061F00]">
          {card.brand}
        </p>
      </div>

      <div className="flex items-end gap-7">
        <p className="text-[64px] font-semibold leading-none tracking-[-0.08em] text-[#061F00]">
          {card.value}
        </p>

        <p className="max-w-[250px] pb-2 text-[23px] font-medium leading-[1.18] tracking-[-0.045em] text-[#526451]">
          {card.label}
        </p>
      </div>
    </article>
  );
}

function QuoteCard({ card }: CardProps<Extract<TrustedCard, { type: "quote" }>>) {
  return (
    <article className="flex min-h-[320px] flex-col justify-between rounded-[16px] border border-[#E7E7DA] bg-[#FBFBF6] px-10 py-9">
      <blockquote className="max-w-[650px] text-[22px] font-semibold leading-[1.08] tracking-[-0.065em] text-[#061F00]">
        &ldquo;{card.quote}&rdquo;
      </blockquote>

      <div>
        <p className="text-[19px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#061F00]">
          {card.role}
        </p>

        <p className="mt-1 text-[18px] font-medium leading-[1.25] tracking-[-0.035em] text-[#526451]">
          {card.company}
        </p>
      </div>
    </article>
  );
}

function TrustedCardItem({ card }: { card: TrustedCard }) {
  if (card.type === "person") return <PersonCard card={card} />;
  if (card.type === "metric") return <MetricCard card={card} />;
  return <QuoteCard card={card} />;
}

function TrustedColumn({
  cards,
  reverse = false,
}: {
  cards: TrustedCard[];
  reverse?: boolean;
}) {
  const loopCards = [...cards, ...cards];

  return (
    <div className="relative h-[610px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-7"
        animate={
          reverse
            ? { y: ["-50%", "0%"] }
            : { y: ["0%", "-50%"] }
        }
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopCards.map((card, index) => (
          <TrustedCardItem key={`${card.id}-${index}`} card={card} />
        ))}
      </motion.div>
    </div>
  );
}

export default function CustomersTrustedSection() {
  const { title, cards } = customersPageData.trustedSection;

  const leftCards = cards.filter((_, index) => index % 2 === 0);
  const rightCards = cards.filter((_, index) => index % 2 === 1);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#061F00]">
      <div className="mx-auto max-w-[1558px]">
        <h2 className="text-center text-[22 px] font-medium leading-none tracking-[-0.04em] text-[#061F00]">
          {title}
        </h2>

        <div className="relative mt-24">
          <div className="grid gap-7 lg:grid-cols-2">
            <TrustedColumn cards={leftCards} />
            <TrustedColumn cards={rightCards} reverse />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/95 to-transparent" />
        </div>
      </div>
    </section>
  );
}