import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly title: string;
  readonly color: string;
  readonly bgColor: string;
  readonly width?: string;
  readonly height?: string;
  readonly px?: string;
  readonly py?: string;
  readonly radius?: string;
  readonly size?: string;
}

// Exact bar data from ReflexAI source: [heightPercent, delayMs]
// Right side bars have lowest delays → appear first, spreading leftward
const BARS: [number, number][] = [
  [5, 120], [10, 100], [20, 60], [30, 40], [30, 20],
  [30, 70], [35, 80], [30, 100], [40, 120], [50, 130],
  [60, 120], [50, 100], [70, 90], [60, 110], [50, 130],
  [40, 160], [30, 190], [30, 220], [30, 200], [20, 170],
  [15, 140], [10, 110], [5, 90], [5, 70], [5, 60],
  [10, 50], [15, 40], [10, 30], [8, 25], [5, 20],
];

const CommonButton = ({
  title,
  size,
  color,
  bgColor,
  width,
  height = "auto",
  px = "px-6",
  py = "py-2.5",
  radius = "rounded-lg",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      style={{ width, height, ...props.style }}
      className={cn(`
        font-heading text-base leading-[1.01] overflow-hidden
        tracking-[0.01em] font-medium relative cursor-pointer
        ease-in-out transition-[scale,color,background-color,border-color]
        whitespace-nowrap text-center items-center
        group duration-500 justify-center select-none appearance-none
        group-active:scale-[0.975] active:scale-[0.975]
        inline-flex gap-2
        bg-[bgColor] text-[color]
        hover:bg-lime hover:text-forest
        hover:delay-100 delay-[220ms]
        ${px} ${py} min-h-10 ${radius} ${className}
      `,
        title === "Start a Project →" && "bg-[#EDEDE1] text-[black]",
        title === "See Our Work →" &&  "bg-forest text-lime",
        title === "Start a Project → " &&  "bg-forest text-lime"
          // : "bg-forest text-lime",

      )}
    >
      {/* Waveform bars — clipped by overflow-hidden on button */}
      <div className="pointer-events-none absolute inset-x-0 -inset-y-5 flex w-full items-center justify-center whitespace-nowrap">
        {BARS.map(([barHeight, delay], i) => (
          <div
            key={i}
            className="flex-[0_0_4px] scale-x-0 scale-y-0 rounded-lg transition-transform duration-300 group-hover:scale-x-100 group-hover:scale-y-100 bg-lime"
            style={{
              height: `${barHeight}%`,
              transitionDelay: `${delay}ms`,
            }}
          />
        ))}
      </div>

      {/* Text label */}
      <span className={`pointer-events-none relative z-[5] text-[${size}px]`}>{title}</span>
    </button>
  );
};

export default CommonButton;
