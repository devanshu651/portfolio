"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer:fine and not prefers-reduced-motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;

    const timer = setTimeout(() => {
      setIsFinePointer(true);
    }, 0);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element for cursor label
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [data-cursor]");
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute("data-cursor");
          if (customText) {
            setCursorText(customText);
          } else if (interactive.tagName.toLowerCase() === "a") {
            const isExternal = interactive.getAttribute("target") === "_blank";
            setCursorText(isExternal ? "OPEN ↗" : "VIEW");
          } else if (interactive.tagName.toLowerCase() === "button") {
            setCursorText("");
          }
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerping for the lagging ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
      aria-hidden="true"
    >
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white will-change-transform"
      />

      {/* Lagging trailing ring that expands with label */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-white will-change-transform transition-all duration-300 ${
          isHovered
            ? cursorText
              ? "w-16 h-16 -ml-8 -mt-8 bg-white/20 border-white"
              : "w-10 h-10 -ml-5 -mt-5 bg-white/10"
            : "w-8 h-8 -ml-4 -mt-4 border-white/60"
        }`}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="font-mono text-[9px] uppercase tracking-wider text-white text-center select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
