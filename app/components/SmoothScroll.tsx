"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lenis smooths wheel input only; touch retains the browser's native scroll.
    const lenis = prefersReducedMotion ? null : new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis?.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis?.raf(time * 1000);
    };

    if (lenis) {
      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    }

    // Scroll progress bar
    const handleScroll = () => {
      if (!progressBarRef.current) return;
      ScrollTrigger.update();
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      progressBarRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] z-[60] origin-left pointer-events-none"
      style={{ transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
