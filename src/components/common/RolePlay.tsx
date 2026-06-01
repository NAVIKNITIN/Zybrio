"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────
const VW = 760;
const VH = 620;
const CX = 380; // center x in VW/VH space
const CY = 310; // center y

// 9-point polygon unit vectors from center
const UNIT: [number, number][] = [
  [380,   0], [629,  74], [760, 267], [712, 484], [516, 620],
  [244, 620], [ 46, 484], [  0, 267], [131,  74],
].map(([x, y]) => [x - CX, y - CY] as [number, number]);

// Ring scales (outer → inner dashed, then filled)
const RING_SCALES = [1.00, 0.76, 0.54];
const FILL_SCALE  = 0.47;

// Rotation speed: full rotation every ~60 seconds (matches video)
const ROTATE_SPEED = (2 * Math.PI) / 60; // rad/sec
// Traveler: one full lap every ~25 seconds
const TRAVELER_SPEED = 1 / 25; // laps/sec

// Each ring gets 2 orbiting dots (clipped to inner filled shape)
const RING_DOTS = [
  { ringIdx: 0, t: 0.00, speed: 0.055, size: 5.5 },
  { ringIdx: 0, t: 0.50, speed: 0.055, size: 5.5 },
  { ringIdx: 1, t: 0.25, speed: 0.070, size: 5.0 },
  { ringIdx: 1, t: 0.75, speed: 0.070, size: 5.0 },
  { ringIdx: 2, t: 0.10, speed: 0.090, size: 4.5 },
  { ringIdx: 2, t: 0.60, speed: 0.090, size: 4.5 },
];

// ─── Tooltip cards ────────────────────────────────────────────────────────────
const CARDS = [
  {
    iconBg: "#d0edb0",
    bold: "AI-powered call simulation,",
    muted: " designed for real-world nuance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#3a7a28"/>
        <path d="M18 2.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" fill="#3a7a28"/>
      </svg>
    ),
  },
  {
    iconBg: "#ddeef5",
    bold: "Security-first design,",
    muted: " trusted by the world's highest-stakes industries.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" fill="#5aaa70"/>
        <circle cx="12" cy="12" r="2.5" fill="white"/>
      </svg>
    ),
  },
  {
    iconBg: "#e4e0f8",
    bold: "Training and QA in one platform,",
    muted: " customizable for your team's standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="18" height="2.5" rx="1.2" fill="#6e8ab0" opacity="0.45"/>
        <rect x="3" y="10" width="18" height="2.5" rx="1.2" fill="#6e8ab0" opacity="0.7"/>
        <rect x="3" y="6"  width="18" height="2.5" rx="1.2" fill="#6e8ab0"/>
      </svg>
    ),
  },
  {
    iconBg: "#f0e4f8",
    bold: "Measurable impact from Day One,",
    muted: " see results as soon as teams start training.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3"   y="13" width="4" height="8"  rx="1.5" fill="#9333ea" opacity="0.65"/>
        <rect x="9.5" y="8"  width="4" height="13" rx="1.5" fill="#9333ea" opacity="0.82"/>
        <rect x="16"  y="3"  width="4" height="18" rx="1.5" fill="#9333ea"/>
      </svg>
    ),
  },
];

// ─── Geometry helpers ─────────────────────────────────────────────────────────
function getPts(scale: number): [number, number][] {
  return UNIT.map(([x, y]) => [CX + x * scale, CY + y * scale]);
}
function rotatePts(pts: [number, number][], angle: number): [number, number][] {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  return pts.map(([x, y]) => {
    const dx = x - CX, dy = y - CY;
    return [CX + dx * cos - dy * sin, CY + dx * sin + dy * cos];
  });
}
function pLen(a: [number,number], b: [number,number]) { return Math.hypot(b[0]-a[0],b[1]-a[1]); }
function perim(pts: [number,number][]) { let s=0; for(let i=0;i<pts.length;i++) s+=pLen(pts[i],pts[(i+1)%pts.length]); return s; }
function ptAtT(pts: [number,number][], t: number): [number,number] {
  t = ((t%1)+1)%1;
  let rem = t*perim(pts);
  for(let i=0;i<pts.length;i++){
    const a=pts[i],b=pts[(i+1)%pts.length];
    const l=pLen(a,b);
    if(rem<=l){ const f=rem/l; return[a[0]+(b[0]-a[0])*f, a[1]+(b[1]-a[1])*f]; }
    rem-=l;
  }
  return pts[0];
}

// ─── Canvas drawing helpers ───────────────────────────────────────────────────
function canvasPt(x: number, y: number, W: number, H: number): [number, number] {
  return [x/VW*W, y/VH*H];
}
function polyPath(ctx: CanvasRenderingContext2D, pts: [number,number][], W: number, H: number) {
  ctx.beginPath();
  const [fx,fy] = canvasPt(...pts[0],W,H);
  ctx.moveTo(fx,fy);
  for(let i=1;i<pts.length;i++){
    const [px,py] = canvasPt(...pts[i],W,H);
    ctx.lineTo(px,py);
  }
  ctx.closePath();
}
function drawRing(ctx: CanvasRenderingContext2D, pts: [number,number][], dash: number, gap: number, alpha: number, W: number, H: number) {
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.strokeStyle="#b8b4a0";
  ctx.lineWidth=1.1*(W/760);
  ctx.setLineDash([dash*(W/760), gap*(W/760)]);
  polyPath(ctx,pts,W,H);
  ctx.stroke();
  ctx.restore();
}
function drawFilled(ctx: CanvasRenderingContext2D, pts: [number,number][], W: number, H: number) {
  ctx.save();
  ctx.shadowColor="rgba(0,0,0,0.12)";
  ctx.shadowBlur=28*(W/760);
  ctx.shadowOffsetY=12*(H/620);
  ctx.fillStyle="#dddad0";
  ctx.globalAlpha=0.94;
  polyPath(ctx,pts,W,H);
  ctx.fill();
  ctx.restore();
}
function drawSquareDot(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, alpha: number, W: number, H: number) {
  const [px,py] = canvasPt(x,y,W,H);
  const s = size*(W/760);
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.fillStyle=color;
  ctx.beginPath();
  (ctx as any).roundRect(px-s/2,py-s/2,s,s,s*0.2);
  ctx.fill();
  ctx.restore();
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RoleplaySection() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const sceneRef   = useRef<HTMLDivElement>(null);
  const tipRef     = useRef<HTMLDivElement>(null);
  const stateRef   = useRef({
    angle: 0,
    travelerT: 0.08,
    ringDots: RING_DOTS.map(d => ({ ...d })),
    last: null as number | null,
    cardIdx: 0,
    wasInWindow: false,
    inTransition: false,
    tipVisible: false,
  });
  const [cardIdx, setCardIdx] = useState(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const scene  = sceneRef.current;
    if (!canvas || !scene) return;
    const dpr = window.devicePixelRatio || 1;
    const W = scene.offsetWidth;
    const H = W * (VH / VW);
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + "px";
    canvas.style.height = H + "px";
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    let raf = 0;

    function frame(ts: number) {
      const s = stateRef.current;
      if (!s.last) s.last = ts;
      const dt = Math.min((ts - s.last) / 1000, 0.05);
      s.last = ts;

      const canvas = canvasRef.current;
      const scene  = sceneRef.current;
      const tipEl  = tipRef.current;
      if (!canvas || !scene || !tipEl) { raf = requestAnimationFrame(frame); return; }

      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width  / dpr;
      const H = canvas.height / dpr;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, W, H);

      // Advance state
      s.angle      = (s.angle + ROTATE_SPEED * dt) % (2 * Math.PI);
      s.travelerT  = (s.travelerT + TRAVELER_SPEED * dt) % 1;
      s.ringDots.forEach(d => { d.t = (d.t + d.speed * dt) % 1; });

      // Build rotated polygons
      const rings   = RING_SCALES.map(sc => rotatePts(getPts(sc), s.angle));
      const fillPts = rotatePts(getPts(FILL_SCALE), s.angle);

      // Draw dashed rings
      drawRing(ctx, rings[0], 7, 8, 0.50, W, H);
      drawRing(ctx, rings[1], 6, 7, 0.44, W, H);
      drawRing(ctx, rings[2], 6, 7, 0.36, W, H);

      // Draw filled shape
      drawFilled(ctx, fillPts, W, H);

      // Draw traveler dot on filled shape border
      const [tx, ty] = ptAtT(fillPts, s.travelerT);
      drawSquareDot(ctx, tx, ty, 6.5, "#1a1a12", 0.85, W, H);

      // Draw ring dots — clipped inside filled polygon
      ctx.save();
      polyPath(ctx, fillPts, W, H);
      ctx.clip();
      s.ringDots.forEach(d => {
        const [rx, ry] = ptAtT(rings[d.ringIdx], d.t);
        drawSquareDot(ctx, rx, ry, d.size, "#787868", 0.58, W, H);
      });
      ctx.restore();

      // Position tooltip at traveler dot
      const [tpx, tpy] = canvasPt(tx, ty, W, H);
      const tipW = tipEl.offsetWidth  || 240;
      const tipH = tipEl.offsetHeight || 72;
      let lx = tpx - tipW * 0.5;
      let ly = tpy + 18;
      lx = Math.max(6, Math.min(W - tipW - 6, lx));
      ly = Math.max(6, Math.min(H - tipH - 6, ly));
      tipEl.style.left = lx + "px";
      tipEl.style.top  = ly + "px";

      // Show/hide logic
      const inWin = s.travelerT >= 0.0 && s.travelerT <= 0.55;
      if (inWin && !s.wasInWindow && !s.inTransition) {
        s.wasInWindow = true;
        tipEl.style.transition = "opacity 0.55s cubic-bezier(.22,1,.36,1),transform 0.55s cubic-bezier(.22,1,.36,1)";
        tipEl.style.opacity   = "1";
        tipEl.style.transform = "translateY(0)";
      } else if (!inWin && s.wasInWindow && !s.inTransition) {
        s.wasInWindow   = false;
        s.inTransition  = true;
        tipEl.style.transition = "opacity 0.42s ease-in,transform 0.42s cubic-bezier(.4,0,1,1)";
        tipEl.style.opacity   = "0";
        tipEl.style.transform = "translateY(18px)";
        setTimeout(() => {
          s.cardIdx = (s.cardIdx + 1) % CARDS.length;
          setCardIdx(s.cardIdx);
          tipEl.style.transition = "none";
          tipEl.style.transform  = "translateY(-12px)";
          s.inTransition = false;
        }, 440);
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const card = CARDS[cardIdx];

  return (
    <section style={{ background: "#f0ede3", overflow: "hidden" }} className="relative w-full min-h-screen  flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
        className="text-center px-4 pt-12 pb-2 relative z-10"
      >
        <h2 style={{ fontSize:"clamp(26px,4.5vw,48px)", fontWeight:800, color:"#1c2e10", letterSpacing:"-0.025em", lineHeight:1.14 }}>
          <span className="inline-flex flex-wrap items-center justify-center">
            <span>Roleplay</span>
            {/* Avatar badge */}
            <span style={{ display:"inline-flex",alignItems:"center",justifyContent:"center",width:34,height:34,borderRadius:"50%",overflow:"hidden",border:"2.5px solid #bcd490",background:"#7a9e4e",verticalAlign:"middle",position:"relative",top:-2,margin:"0 5px",flexShrink:0 }}>
              <svg viewBox="0 0 34 34" width="34" height="34"><circle cx="17" cy="17" r="17" fill="#7a9e4e"/><circle cx="17" cy="12" r="5" fill="#4e6e2e"/><ellipse cx="17" cy="26" rx="8" ry="5.5" fill="#4e6e2e"/></svg>
            </span>
            {/* Score pill */}
            <span style={{ display:"inline-flex",alignItems:"center",gap:4,background:"#1a3d0f",borderRadius:999,padding:"3px 10px 3px 7px",verticalAlign:"middle",position:"relative",top:-2,margin:"0 4px" }}>
              <span style={{ color:"#a8d070",fontSize:12,fontWeight:800,lineHeight:1 }}>83%</span>
              <span style={{ display:"flex",gap:3 }}>
                {[1,2,3,4,5].map(i=>(
                  <span key={i} style={{ display:"inline-block",width:7,height:7,borderRadius:"50%",background:i<=4?"#4ade80":"#2d5a1a" }}/>
                ))}
              </span>
            </span>
            <span>&nbsp;and QA</span>
          </span>
          <br/>
          <span>that&apos;s real-world ready</span>
        </h2>
      </motion.div>

      {/* Scene */}
      <div ref={sceneRef} style={{ position:"relative",top:50, width:"100%", maxWidth:760 }}>
        {/* Spacer to establish height */}
        <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width:"100%",height:"auto",display:"block" }}/>
        {/* Canvas for all animated polygon + dots */}
        <canvas ref={canvasRef} style={{ position:"absolute",top:0,left:0,pointerEvents:"none" }}/>
        {/* Tooltip card */}
        <div
          ref={tipRef}
          style={{
            position:"absolute", left:0, top:0,
            background:"#ffffff", borderRadius:14,
            padding:"11px 15px",
            display:"flex", alignItems:"center", gap:13,
            boxShadow:"0 4px 24px rgba(0,0,0,0.09),0 1px 4px rgba(0,0,0,0.05)",
            border:"1px solid rgba(0,0,0,0.06)",
            maxWidth:260, zIndex:30,
            opacity:0, transform:"translateY(-12px)",
            pointerEvents:"none",
            willChange:"opacity,transform,left,top",
          }}
        >
          <div style={{ flexShrink:0,width:42,height:42,borderRadius:11,background:card.iconBg,display:"flex",alignItems:"center",justifyContent:"center" }}>
            {card.icon}
          </div>
          <p style={{ fontSize:12.5,lineHeight:1.55,color:"#555",margin:0 }}>
            <strong style={{ fontWeight:700,color:"#111" }}>{card.bold}</strong>
            <span style={{ color:"#999" }}>{card.muted}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
