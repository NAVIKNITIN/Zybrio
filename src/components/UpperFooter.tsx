"use client";

import { useEffect, useRef } from "react";
import { AppButton } from "@/components/common/app-button";
import FooterBlobAnimation from "./FooterBlobAnimation";
import CommonButton from "./common/commonBtn";

export default function UpperFooter() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  type Point = {
    x: number;
    y: number;
    ox: number;
    oy: number;
    vx: number;
    vy: number;
    drag: boolean;
  } | null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    ctx.scale(devicePixelRatio, devicePixelRatio);

    const points: Exclude<Point, null>[] = [
      { x: 130, y: 120, ox: 130, oy: 120, vx: 0, vy: 0, drag: false },
      { x: 420, y: 220, ox: 420, oy: 220, vx: 0, vy: 0, drag: false },
      { x: 580, y: 520, ox: 580, oy: 520, vx: 0, vy: 0, drag: false },
    ];

    let mouseX = 0;
    let mouseY = 0;
    let activePoint: Exclude<Point, null> | null = null;

    const getMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseX = ((e.clientX - rect.left) / rect.width) * 750;
      mouseY = ((e.clientY - rect.top) / rect.height) * 560;
    };

    const down = (e: MouseEvent) => {
      getMouse(e);

      points.forEach((p) => {
        const d = Math.hypot(mouseX - p.x, mouseY - p.y);

        if (d < 30) {
          activePoint = p;
          p.drag = true;
        }
      });
    };

    const move = (e: MouseEvent) => {
      getMouse(e);

      if (activePoint) {
        activePoint.x = Math.max(40, Math.min(710, mouseX));
        activePoint.y = Math.max(20, Math.min(500, mouseY));
      }
    };

    const up = () => {
      if (activePoint) {
        activePoint.drag = false;
      }

      activePoint = null;
    };

    window.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    const influence = (x: number, y: number) => {
      let ox = 0;
      let oy = 0;

      points.forEach((p) => {
        const dx = p.x - p.ox;
        const dy = p.y - p.oy;

        const dist = Math.hypot(x - p.ox, y - p.oy);

        const power = Math.max(0, 1 - dist / 320);

        const weight = power * power;

        ox += dx * weight;
        oy += dy * weight;
      });

      return {
        x: x + ox,
        y: y + oy,
      };
    };

    let rafId: number | null = null;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      points.forEach((p) => {
        if (!p.drag) {
          const dx = p.ox - p.x;
          const dy = p.oy - p.y;

          p.vx += dx * 0.04;
          p.vy += dy * 0.04;

          p.vx *= 0.82;
          p.vy *= 0.82;

          p.x += p.vx;
          p.y += p.vy;
        }
      });

      ctx.beginPath();

      const a = influence(120, 0);
      const topControl = influence(120, -40);
      const b = influence(90, 40);
      const c = influence(90, 120);
      const d = influence(150, 175);
      const e = influence(360, 220);
      const f = influence(455, 360);
      const g = influence(520, 520);
      const h = influence(590, 535);

      ctx.moveTo(a.x, a.y);

      ctx.quadraticCurveTo(topControl.x, topControl.y, b.x, b.y);
      ctx.quadraticCurveTo(c.x - 10, c.y, c.x, c.y);

      ctx.quadraticCurveTo(d.x, d.y, e.x, e.y);

      ctx.quadraticCurveTo(f.x, f.y, g.x, g.y);

      ctx.quadraticCurveTo(535, 560, h.x, h.y);

      ctx.lineTo(750, 470);
      ctx.lineTo(750, 0);

      ctx.closePath();

      ctx.fillStyle = "#A3E000";
      ctx.fill();

      points.forEach((p) => {
        ctx.beginPath();

        ctx.arc((p.x / 750) * width, (p.y / 560) * height, 6, 0, Math.PI * 2);

        ctx.fillStyle = "black";
        ctx.fill();
      });
      rafId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("resize", resize);

      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative flex pt-20 pb-8 lg:min-h-[560px] w-max md:w-full items-center overflow-hidden bg-[#ECEBE4] pl-0 pr-28">
      <div className="z-10 lg:ml-20 max-w-[680px]">
        <h1 className="px-4 lg:text-center text-[35px] lg:text-[clamp(2rem,6vw,4.125rem)] font-semibold leading-[0.95] tracking-tight text-black lg:ml-10 lg:px-0 lg:text-left">
          Ready to elevate
          <br />
          every conversation?
        </h1>

        <div className="mt-6 flex items-center gap-6">
          <CommonButton title="Start a Project → " size="15" color="lime" bgColor="#072300" className="ml-5 md:ml-10" />
          {/* <AppButton className="ml-5 md:ml-10 cursor-pointer rounded-[10px] bg-black px-6 py-5 text-base font-medium text-lime-400 transition hover:opacity-90">
            Get a demo
          </AppButton> */}

          <button className="text-sm font-bold text-black">Take a tour →</button>
        </div>
      </div>

      <div className="absolute top-0 right-0 h-full w-[46%]">
        {/* <FooterBlobAnimation/> */}
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
    </section>
  );
}
