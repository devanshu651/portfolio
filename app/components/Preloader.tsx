"use client";

import { useEffect, useState } from "react";

const PRELOADER_STORAGE_KEY = "devanshu_portfolio_preloaded_v1";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(PRELOADER_STORAGE_KEY);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (visited || prefersReducedMotion) {
      return;
    }

    const timer = setTimeout(() => {
      setShow(true);

      const startTime = performance.now();
      const duration = 850;

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
        setProgress(pct);

        if (elapsed < duration) {
          requestAnimationFrame(animateCount);
        } else {
          setProgress(100);
          setTimeout(() => {
            setIsWiping(true);
            sessionStorage.setItem(PRELOADER_STORAGE_KEY, "true");
            setTimeout(() => {
              setShow(false);
            }, 450);
          }, 150);
        }
      };

      requestAnimationFrame(animateCount);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col justify-between p-8 sm:p-12 bg-[var(--paper)] text-[var(--ink)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isWiping ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      {/* Top Meta Header */}
      <div className="flex justify-between items-center font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
        <span>§ INITIALIZING PORTFOLIO</span>
        <span>INDEX 2026</span>
      </div>

      {/* Middle Brand Name */}
      <div className="text-center my-auto">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl italic font-normal tracking-tight text-[var(--ink)]">
          Devanshu Raut
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mt-4">
          SYSTEMS · ARCHITECTURE · MACHINE LEARNING
        </p>
      </div>

      {/* Bottom Counter & Loading Bar */}
      <div className="space-y-4 max-w-xl mx-auto w-full">
        <div className="flex justify-between items-baseline font-mono text-xs uppercase text-[var(--ink)]">
          <span className="text-[var(--muted)]">LOADING EXPERIENCE</span>
          <span className="text-2xl sm:text-3xl font-serif italic text-[var(--accent)] font-normal">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </div>
        
        {/* Editorial 1px Progress Bar */}
        <div className="h-[2px] w-full bg-[var(--ink)]/10 overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
