"use client";

import { useEffect } from "react";
import { getGsap } from "@/lib/gsap";

export function SectionReveal() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    let revert = () => {};
    getGsap().then(({ gsap }) => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
          gsap.from(section, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      });
      revert = () => ctx.revert();
    });

    return () => revert();
  }, []);

  return null;
}
