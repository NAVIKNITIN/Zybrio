"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * FooterBlobAnimation
 * -------------------
 * Exact recreation of the ReflexAI footer/CTA lime-green morphing blob.
 *
 * The shape has 3 visible black control-point dots that follow the mouse and
 * pull the SVG bezier curve — matching the animation in the video exactly.
 *
 * Usage (wrap in a relative + overflow-hidden container):
 *
 *   <section className="relative overflow-hidden min-h-[520px] bg-[#f0ede0]">
 *     <FooterBlobAnimation />
 *     {/* your CTA content here *\/}
 *   </section>
 */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

interface Pt {
  x: number;
  y: number;
}

// ── Resting positions of the 3 control-point dots ─────────────────────────────
// SVG viewBox is 1000 × 600
// Matches the 3 black squares seen in the video:
//   P1 – top-left corner where the concave notch starts
//   P2 – the elbow mid-way down the diagonal cut
//   P3 – the bottom tip of the whole blob
const REST: [Pt, Pt, Pt] = [
  { x: 148, y: 152 },
  { x: 345, y: 258 },
  { x: 455, y: 518 },
];

// How far each dot travels from rest as the mouse moves (in SVG units)
const INFLUENCE: [Pt, Pt, Pt] = [
  { x: 60, y: 50 },
  { x: 70, y: 60 },
  { x: 55, y: 48 },
];

// Build the lime blob SVG path from the 3 animated control points.
// The blob always covers the full right + top edges of its container.
// Only the concave left-side cut morphs with the mouse.
function buildPath(p1: Pt, p2: Pt, p3: Pt): string {
  return [
    `M 1000 0`,
    `L 1000 600`,
    `L ${p3.x + 100} 600`,
    // Round the bottom-left corner of the blob near p3
    `C ${p3.x + 50} 600 ${p3.x + 10} ${p3.y + 35} ${p3.x} ${p3.y}`,
    // Diagonal sweep from p3 up to p2 (the elbow)
    `C ${p3.x - 15} ${p3.y - 45} ${p2.x + 40} ${p2.y + 55} ${p2.x} ${p2.y}`,
    // From elbow up to p1 (top corner of notch)
    `C ${p2.x - 45} ${p2.y - 42} ${p1.x + 25} ${p1.y + 35} ${p1.x} ${p1.y}`,
    // From p1 sweep back up to top-left corner (0,0)
    `C ${p1.x - 15} ${p1.y - 50} 70 15 0 0`,
    `L 1000 0`,
    `Z`,
  ].join(" ");
}

export default function FooterBlobAnimation() {
  const svgRef  = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dot1Ref = useRef<SVGCircleElement>(null);
  const dot2Ref = useRef<SVGCircleElement>(null);
  const dot3Ref = useRef<SVGCircleElement>(null);

  const cur = useRef<[Pt, Pt, Pt]>([
    { ...REST[0] },
    { ...REST[1] },
    { ...REST[2] },
  ]);

  const tgt = useRef<[Pt, Pt, Pt]>([
    { ...REST[0] },
    { ...REST[1] },
    { ...REST[2] },
  ]);

  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    const EASE = 0.065;
    const c = cur.current;
    const t = tgt.current;

    for (let i = 0; i < 3; i++) {
      c[i].x = lerp(c[i].x, t[i].x, EASE);
      c[i].y = lerp(c[i].y, t[i].y, EASE);
    }

    if (pathRef.current) {
      pathRef.current.setAttribute("d", buildPath(c[0], c[1], c[2]));
    }
    if (dot1Ref.current) {
      dot1Ref.current.setAttribute("cx", String(c[0].x));
      dot1Ref.current.setAttribute("cy", String(c[0].y));
    }
    if (dot2Ref.current) {
      dot2Ref.current.setAttribute("cx", String(c[1].x));
      dot2Ref.current.setAttribute("cy", String(c[1].y));
    }
    if (dot3Ref.current) {
      dot3Ref.current.setAttribute("cx", String(c[2].x));
      dot3Ref.current.setAttribute("cy", String(c[2].y));
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    // Normalise to [-1, 1] within the SVG element bounds
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    const t = tgt.current;
    for (let i = 0; i < 3; i++) {
      t[i].x = REST[i].x + mx * INFLUENCE[i].x;
      t[i].y = REST[i].y + my * INFLUENCE[i].y;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const t = tgt.current;
    for (let i = 0; i < 3; i++) {
      t[i].x = REST[i].x;
      t[i].y = REST[i].y;
    }
  }, []);

  useEffect(() => {
    // Set initial path before first RAF fires
    if (pathRef.current) {
      pathRef.current.setAttribute(
        "d",
        buildPath(cur.current[0], cur.current[1], cur.current[2])
      );
    }

    rafId.current = requestAnimationFrame(animate);

    // Listen on the SVG element so movement anywhere in the section is captured
    const svg = svgRef.current;
    svg?.addEventListener("mousemove", handleMouseMove);
    svg?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId.current);
      svg?.removeEventListener("mousemove", handleMouseMove);
      svg?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate, handleMouseMove, handleMouseLeave]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-auto select-none"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      {/* Lime green morphing blob */}
      <path ref={pathRef} fill="#aaee00" d="" />

      {/* 3 black control-point dots that move with the mouse */}
      <circle ref={dot1Ref} cx={REST[0].x} cy={REST[0].y} r="6" fill="#1c2e1c" />
      <circle ref={dot2Ref} cx={REST[1].x} cy={REST[1].y} r="6" fill="#1c2e1c" />
      <circle ref={dot3Ref} cx={REST[2].x} cy={REST[2].y} r="6" fill="#1c2e1c" />
    </svg>
  );
}
