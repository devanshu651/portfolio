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
      className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight pb-2 flex flex-col font-display"
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
          {/* Base Text (yellow-gold premium gradient) */}
          <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-40 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
            real systems,
          </span>

          {/* Glowing Spotlight Overlay */}
          <motion.span 
            className="absolute inset-x-1 top-0 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)]"
            style={{
              backgroundImage: useMotionTemplate`
                radial-gradient(
                  150px circle at ${mouseX}px ${mouseY}px,
                  #facc15 0%,
                  #eab308 60%,
                  transparent 100%
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
