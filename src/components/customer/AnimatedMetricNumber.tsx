

"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type AnimatedMetricNumberProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  replayKey?: string | number;
};

export function AnimatedMetricNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.4,
  className,
  replayKey,
}: AnimatedMetricNumberProps) {
  const count = useMotionValue(0);

  const formattedValue = useTransform(count, (latest) => {
    return `${prefix}${Math.round(latest).toLocaleString("en-US")}${suffix}`;
  });

  useEffect(() => {
    count.set(0);

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [count, value, duration, replayKey]);

  return <motion.span className={className}>{formattedValue}</motion.span>;
}