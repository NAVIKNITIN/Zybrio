"use client";

import Link from "next/link";
import { footerColumns, organizationsColumn, FooterColumn } from "@/data/footerData";
import { ROUTES } from "@/constants/routes";

function FooterMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="size-10 text-[#08230f]"
      role="img"
      aria-label="Footer mark"
    >
      <polygon
        points="20,3 33,10 33,25 20,32 7,25 7,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon points="20,12 25.5,15 25.5,21 20,24 14.5,21 14.5,15" fill="currentColor" />
    </svg>
  );
}

function getFooterHref(label: string) {
  if (label === "About") {
    return ROUTES.about;
  }

  return "#";
}

function FooterLink({ label }: Readonly<{ label: string }>) {
  return (
    <Link
      href={getFooterHref(label)}
      className="group relative inline-flex text-[15px] leading-snug font-semibold tracking-[-0.01em] text-[#0b1f11] transition-all duration-300"
    >
      <span
        aria-hidden
        className="absolute -left-4 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#7baa1d] opacity-0 transition-all duration-300 group-hover:opacity-100"
      />

      <span className="transition-opacity duration-300 group-hover:opacity-80">
        {label}
      </span>
    </Link>
  );
}

function FooterColumnBlock({ column }: Readonly<{ column: FooterColumn }>) {
  return (
    <div className="w-[140px]">
      <p className="mb-2 text-[15px] font-medium text-[#8b9186] cursor-default select-none">
        {column.title}
      </p>

      <ul className="space-y-2">
        {column.links.map((label) => (
          <li key={label}>
            <FooterLink label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#ecece4 my-20]">
      <div className="relative container px-12 mx-10 my-30">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex flex-wrap gap-x-20 gap-y-8 max-w-[1200px]">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <FooterColumnBlock column={column} />

                {column.title === "Use Cases" && (
                  <div className="mt-8">
                    <FooterColumnBlock column={organizationsColumn} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="self-start justify-self-start lg:justify-self-end">
            <FooterMark />
          </div>
        </div>
      </div>
    </footer>
  );
}