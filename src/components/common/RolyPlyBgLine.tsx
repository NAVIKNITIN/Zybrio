import { FloatingStar } from "./FloatingStar";

export const RolyPlyBgLine = () => {
    const polygonPoints =
        "50,0 80,10 100,35 100,70 80,90 50,100 20,90 0,70 0,35 20,10";

    return (
        <div className="flex mr-5 mt-10 items-center justify-center overflow-hidden">
            <svg
                height="140vh"
                viewBox="0 0 100 100"
                className="animate-spin"
                style={{
                    animationDuration: "25s",
                    animationTimingFunction: "linear",
                    transformOrigin: "50% 50%", // <-- center of SVG
                }}
            >
                {/* Outer */}
                <polygon
                    points={polygonPoints}
                    fill="none"
                    stroke="gray"
                    strokeWidth="0.2"
                    strokeDasharray="1 1"
                />

                {/* Middle */}
                <polygon
                    points={polygonPoints}
                    transform="translate(8 8) scale(0.84)"
                    fill="none"
                    stroke="gray"
                    strokeWidth="0.2"
                    strokeDasharray="1 1"
                />

                {/* Inner */}
                <polygon
                    points={polygonPoints}
                    transform="translate(16 16) scale(0.68)"
                    fill="none"
                    stroke="gray"
                    strokeWidth="0.2"
                    strokeDasharray="1 1"
                />
            </svg>
            <div className="absolute"
                style={{
                    animationDuration: "25s",
                    animationTimingFunction: "linear",
                    transformOrigin: "50% 50%", // <-- center of SVG
                }}
                >
                {/* <FloatingStar /> */}
            </div>
            {/* <div className="absolute animate-spin"
                style={{
                    animationDuration: "25s",
                    animationTimingFunction: "linear",
                    transformOrigin: "50% 50%", // <-- center of SVG
                }}>
                <FloatingStar />
            </div> */}
        </div>
    );
};
