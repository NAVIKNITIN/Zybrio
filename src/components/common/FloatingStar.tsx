"use client";
import { useEffect, useState } from "react";

const toolTipData = [
    { title: "aaaaaa", sub: "customizable for your team's standards." },
    { title: "bbbbbb", sub: "track quality across every conversation." },
    { title: "cccccc", sub: "onboard faster with guided workflows." },
    { title: "dddddd", sub: "built for modern support teams." },
];

export const FloatingStar = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const start = Date.now();
        let updated = false;

        const interval = setInterval(() => {
            const elapsed = (Date.now() - start) % 10000;
            const percent = Math.floor((elapsed / 10000) * 100);

            if (percent >= 90 && !updated) {
                setCurrent((prev) => (prev + 1) % toolTipData.length);
                updated = true;
            }

            if (percent < 90) {
                updated = false;
            }

            // console.log(percent + "%");
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setVisible(false);
    //         setTimeout(() => {
    //             setCurrent((prev) => (prev + 1) % toolTipData.length);
    //             setVisible(true);
    //         }, 6000); // fade out duration
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    const currentItem = toolTipData[current];

    return (
        <div className="relative flex items-center justify-center w-[950px] h-[950px]">
            {/* 1. The Rotating Star */}
            <div className="animate-spin w-full h-full flex items-center justify-center"
                style={{
                    animationDuration: "25s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite"
                }}
            >
                <svg width="950" height="950" viewBox="0 0 24 24" className="fill-yellow-400">
                    <path d="M12 2L14.9 8.3L22 9.2L17 14L18.2 21L12 17.5L5.8 21L7 14L2 9.2L9.1 8.3L12 2Z" />
                </svg>
            </div>

            {/* 2. The Tooltip with Fade Transition */}
            <div
                className={`absolute top-[35%] left-[15%] z-20 transition-opacity  toolTip ${visible ? "opacity-100" : "opacity-0"}`}
            >
                <div className="bg-[#f9f8f4] border border-[#e0ddd4] rounded-2xl px-4 py-3 shadow-md w-[290px]">
                    <p className="text-[14px] font-medium text-gray-900">
                        {currentItem.title}
                    </p>
                    <p className="text-[12.5px] text-gray-400">
                        {currentItem.sub}
                    </p>
                    <div className="absolute top-1/2 -left-[7px] -translate-y-1/2 w-3 h-3 bg-[#f9f8f4] border-l border-b border-[#e0ddd4] -rotate-45" />
                </div>
            </div>
        </div>
    );
};