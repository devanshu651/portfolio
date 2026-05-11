"use client";

import { motion, Variants, useMotionValue, useMotionTemplate } from "framer-motion";

export default function AnimatedHeading() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      filter: "blur(10px)",
    },
  };

  // Mouse tracking for "real systems" spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.h1
      className="text-5xl md:text-7xl font-bold tracking-tight leading-tight pb-2 flex flex-col"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap gap-x-3 md:gap-x-4 text-white">
        <motion.span variants={child}>Building</motion.span>
        
        {/* Interactive "real systems" with cursor spotlight */}
        <motion.span 
          variants={child} 
          onMouseMove={handleMouseMove}
          className="relative group cursor-crosshair px-1 -mx-1"
        >
          {/* Base Text (subtle slate gradient) */}
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-40 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]">
            real systems,
          </span>

          {/* Glowing Spotlight Overlay */}
          <motion.span 
            className="absolute inset-x-1 top-0 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_25px_rgba(6,182,212,0.9)]"
            style={{
              backgroundImage: useMotionTemplate`
                radial-gradient(
                  150px circle at ${mouseX}px ${mouseY}px,
                  #06b6d4, /* cyan-500 */
                  #ec4899, /* pink-500 */
                  transparent 80%
                )
              `,
            }}
          >
            real systems,
          </motion.span>
        </motion.span>
      </div>
      
      <div className="flex flex-wrap gap-x-3 md:gap-x-4 mt-1 md:mt-2 text-slate-400">
        <motion.span variants={child}>learning</motion.span>
        <motion.span variants={child}>by</motion.span>
        <motion.span 
          variants={child} 
          className="relative group cursor-default text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          doing.
          {/* Intense glowing underline aesthetic on "doing." */}
          <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-yellow-400/90 rounded-full blur-[2px] group-hover:blur-[4px] transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
        </motion.span>
      </div>
    </motion.h1>
  );
}
