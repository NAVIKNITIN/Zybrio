"use client";

import Link from "next/link";
import {
  footerColumns,
  organizationsColumn,
  FooterColumn,
} from "@/data/footerData";

function FooterMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-12 w-12 text-[#08230f]"
      fill="currentColor"
    >
      <polygon
        points="20,3 33,10 33,25 20,32 7,25 7,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <polygon points="20,12 25.5,15 25.5,21 20,24 14.5,21 14.5,15" />
    </svg>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="group relative inline-flex text-[15px] font-medium leading-[1.2] tracking-[0.015em] text-[#061f00]"
    >
      <span className="absolute -left-3 top-[0.45em] hidden h-1.5 w-1.5 scale-0 bg-lime-500 transition-transform duration-300 group-hover:scale-100 md:block" />
      <span className="transition-colors duration-300 hover:text-blue-700">
        {label}
      </span>
    </Link>
  );
}

function FooterColumnBlock({
  column,
}: {
  column: FooterColumn;
}) {
  return (
    <div className="break-inside-avoid">
      <h3 className="text-[15px] font-normal text-black/50">
        {column.title}
      </h3>

      <ul className="mt-5 flex flex-col gap-4 md:mt-4">
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
    <footer className=" bg-[#ECECE4]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
          <nav className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="flex flex-[1_1_45%] flex-col gap-8 sm:flex-[0_1_180px]"
              >
                <FooterColumnBlock column={column} />

                {column.title === "Use Cases" && (
                  <FooterColumnBlock column={organizationsColumn} />
                )}
              </div>
            ))}
          </nav>

          {/* Logo */}
          <div className="self-start">
            <Link href="/">
              <FooterMark />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-black/10 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-[13px] tracking-[0.03em] md:flex-row md:gap-8">
            <span className="text-black/60">
              © 2026 Zybrio. All rights reserved.
            </span>

            <div className="hidden h-1.5 w-1.5 bg-[#061f00] md:block" />

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-black/60 transition hover:text-black"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-use"
                className="text-black/60 transition hover:text-black"
              >
                Terms of Use
              </Link>

              <Link
                href="/trust"
                className="text-black/60 transition hover:text-black"
              >
                Trust Site
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#061f00] text-white transition hover:bg-white hover:text-[#061f00] border border-[#061f00]"
            >
              in
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#061f00] text-white transition hover:bg-white hover:text-[#061f00] border border-[#061f00]"
            >
              ▶
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}