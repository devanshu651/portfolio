"use client";

import { useMotionValue, useSpring, motion, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for a premium feel
  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Top-level hook calls to comply with Rules of Hooks
  const primaryGlow = useMotionTemplate`
    radial-gradient(
      800px circle at ${smoothX}px ${smoothY}px,
      rgba(6, 182, 212, 0.2), /* cyan-500, higher opacity for intense glow */
      transparent 80%
    )
  `;

  const secondaryGlow = useMotionTemplate`
    radial-gradient(
      450px circle at ${smoothX}px ${smoothY}px,
      rgba(236, 72, 153, 0.25), /* pink-500, higher opacity */
      transparent 80%
    )
  `;

  useEffect(() => {
    setMounted(true);
    // Initial position center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#000000] overflow-hidden pointer-events-none">
      {/* 1. Static Blended Background 
          Blends pure black with deep neon yellow and electric purple undertones */}
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top_right,_#422006_0%,_transparent_60%),radial-gradient(circle_at_bottom_left,_#3b0764_0%,_transparent_60%)]" />

      {/* Interactive Cursor Glows */}
      {mounted && (
        <>
          {/* Primary Glow (Cyan) */}
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{ background: primaryGlow }}
          />
          
          {/* Secondary Core Glow (Blue) */}
          <motion.div
            className="absolute inset-0 opacity-50"
            style={{ background: secondaryGlow }}
          />
        </>
      )}

      {/* Subtle Dot Grid overlay to add texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_80%,transparent_100%)]" />
    </div>
  );
}
