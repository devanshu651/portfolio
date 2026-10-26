"use client";

export default function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden opacity-[0.045] transition-opacity duration-300 dark-section:opacity-[0.03]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-20 lg:hidden [background-image:radial-gradient(rgba(20,19,15,0.45)_0.5px,transparent_0.7px)] [background-size:4px_4px]" />
      <div className="absolute -inset-[100%] hidden w-[300%] h-[300%] animate-film-grain bg-repeat lg:block">
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
