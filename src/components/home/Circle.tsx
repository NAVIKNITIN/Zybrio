// components/PolygonCircle.tsx
"use client";

export const CircleAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-[420px] h-[420px]">
        {/* Outer Gray Ring 1 */}
        <div
          className="absolute inset-0 border-[2px] border-gray-300"
          style={{
            clipPath:
              "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
          }}
        />

        {/* Outer Gray Ring 2 */}
        <div
          className="absolute inset-[18px] border-[2px] border-gray-300"
          style={{
            clipPath:
              "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
          }}
        />

        {/* Outer Gray Ring 3 */}
        <div
          className="absolute inset-[36px] border-[2px] border-gray-300"
          style={{
            clipPath:
              "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
          }}
        />

        {/* Colored Shape */}
        <div
          className="absolute inset-[72px] bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600"
          style={{
            clipPath:
              "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
          }}
        >
          {/* Center Dot */}
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg">
            <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-50" />
          </div>
        </div>

        {/* Optional Glow */}
        <div
          className="absolute inset-[72px] opacity-30 blur-2xl bg-cyan-400"
          style={{
            clipPath:
              "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
          }}
        />
      </div>
    </div>
  );
}