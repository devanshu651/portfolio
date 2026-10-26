"use client";

export default function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden opacity-[0.055]"
      aria-hidden="true"
    >
      <div className="absolute -inset-[100%] w-[300%] h-[300%] animate-film-grain bg-repeat">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <filter id="film-grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#film-grain-filter)" />
        </svg>
      </div>
    </div>
  );
}
