"use client";

import { motion, Variants } from "framer-motion";

export default function AnimatedHeading() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.h1
      className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] pb-2 flex flex-col font-normal text-[var(--ink)]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap justify-center md:justify-start gap-x-3 md:gap-x-4">
        <motion.span variants={child}>Building</motion.span>
        <motion.span
          variants={child}
          className="italic text-[var(--accent)] cursor-default transition-transform hover:-translate-y-0.5 inline-block"
        >
          real systems,
        </motion.span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-x-3 md:gap-x-4 mt-1 md:mt-2 text-[var(--muted)]">
        <motion.span variants={child}>learning</motion.span>
        <motion.span variants={child}>by</motion.span>
        <motion.span
          variants={child}
          className="text-[var(--ink)] relative"
        >
          doing.
          <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[var(--accent)]" />
        </motion.span>
      </div>
    </motion.h1>
  );
}
