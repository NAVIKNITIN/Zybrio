"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ─── The exact diamond/polygon shape from reflexai.com ───────────────────────
// Full size: 594×688 → diamond M297 0L594 344L297 688L0 344Z
// Also the site uses this for the decorative background blobs

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Primary shape (larger, background layer) ──────────────────────────────
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const rotate1  = useMotionValue(23);
  const scale1   = useMotionValue(1);

  const springConfig1 = { stiffness: 55, damping: 18, mass: 1 };
  const x1 = useSpring(mouseX1, springConfig1);
  const y1 = useSpring(mouseY1, springConfig1);
  const r1 = useSpring(rotate1, springConfig1);
  const s1 = useSpring(scale1,  springConfig1);

  // ── Secondary shape (smaller, foreground layer, faster response) ──────────
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);
  const rotate2  = useMotionValue(15);
  const scale2   = useMotionValue(0.72);

  const springConfig2 = { stiffness: 75, damping: 22, mass: 0.8 };
  const x2 = useSpring(mouseX2, springConfig2);
  const y2 = useSpring(mouseY2, springConfig2);
  const r2 = useSpring(rotate2, springConfig2);
  const s2 = useSpring(scale2,  springConfig2);

  // ── Mouse handlers ────────────────────────────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const rx = (e.clientX - rect.left)  / rect.width;   // 0..1
    const ry = (e.clientY - rect.top)   / rect.height;   // 0..1

    // Background (slow, wide range)
    mouseX1.set((rx - 0.5) * 520);
    mouseY1.set((ry - 0.5) * 420);
    rotate1.set(rx * 40 - 20 + 23);  // 3° .. 43°
    scale1.set(0.96 + rx * 0.08);    // subtle scale shift

    // Foreground (faster, tighter range — parallax depth)
    mouseX2.set((rx - 0.5) * 320);
    mouseY2.set((ry - 0.5) * 260);
    rotate2.set(rx * 28 - 14 + 15);  // 1° .. 29°
    scale2.set(0.68 + ry * 0.08);
  };

  const handleMouseLeave = () => {
    // Smoothly return to rest positions
    mouseX1.set(0);   mouseY1.set(0);   rotate1.set(23);  scale1.set(1);
    mouseX2.set(0);   mouseY2.set(0);   rotate2.set(15);  scale2.set(0.72);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#D7F0A8] py-20 md:py-36"
    >
      {/* ══ Desktop: Two-layer parallax shapes ════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-visible md:block">

        {/* Layer 1 — Background (larger, slower, lower opacity) */}
        <motion.div
          style={{ x: x1, y: y1, rotate: r1, scale: s1 }}
          className="absolute"
          // Anchor the shape: bottom-left offset so it starts partially visible
          // matching the video where shape emerges from lower-left then sweeps across
          initial={{ x: 60, y: 340, rotate: 23, scale: 1 }}
        >
          <svg
            width="594"
            height="688"
            viewBox="0 0 594 688"
            fill="currentColor"
            className="text-[#9BCB3C]"
            style={{ opacity: 0.38 }}
          >
            <path d="M297 0L594 344L297 688L0 344L297 0Z" />
          </svg>
        </motion.div>

        {/* Layer 2 — Foreground (smaller, faster, higher opacity) */}
        <motion.div
          style={{ x: x2, y: y2, rotate: r2, scale: s2 }}
          className="absolute"
          initial={{ x: 80, y: 290, rotate: 15, scale: 0.72 }}
        >
          <svg
            width="594"
            height="688"
            viewBox="0 0 594 688"
            fill="currentColor"
            className="text-[#9BCB3C]"
            style={{ opacity: 0.55 }}
          >
            <path d="M297 0L594 344L297 688L0 344L297 0Z" />
          </svg>
        </motion.div>
      </div>

      {/* ══ Mobile: Static positioned shapes (no parallax) ═══════════════════ */}
      {/* Top-left shape */}
      <div
        className="pointer-events-none absolute md:hidden"
        style={{ top: -60, left: -80, rotate: "12deg", opacity: 0.42 }}
      >
        <svg
          width="297"
          height="344"
          viewBox="0 0 297 344"
          fill="currentColor"
          className="text-[#9BCB3C]"
        >
          <path d="M148.5 0L297 172L148.5 344L0 172L148.5 0Z" />
        </svg>
      </div>

      {/* Bottom-right shape */}
      <div
        className="pointer-events-none absolute md:hidden"
        style={{ bottom: -60, right: -80, rotate: "12deg", opacity: 0.42 }}
      >
        <svg
          width="297"
          height="344"
          viewBox="0 0 297 344"
          fill="currentColor"
          className="text-[#9BCB3C]"
        >
          <path d="M148.5 0L297 172L148.5 344L0 172L148.5 0Z" />
        </svg>
      </div>

      {/* ══ Content ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4">
        <div className="mx-auto max-w-[1020px] text-center">
          <p className="mb-4 text-[15px] font-medium tracking-wide text-[#667C38] md:mb-5">
            Our Mission
          </p>

          <h2
            className="
              mx-auto
              font-semibold
              leading-[1.05]
              text-[#061F00]
              text-[26px]
              xl:text-[46px]
            "
          >
            We&apos;re on a mission to redefine training and
           quality assurance, empowering
            <br className="hidden lg:block" />
            organizations to make the most of every
            <br className="hidden lg:block" />
            conversation.
          </h2>
        </div>
      </div>
    </section>
  );
}
