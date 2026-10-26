"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const media = gsap.matchMedia();
    media.add("(max-width: 1023px)", () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = gsap.utils.toArray<HTMLElement>("main section[id], main article > section, footer");
      const ctx = gsap.context(() => {
        targets.forEach((target) => {
          gsap.fromTo(target, { opacity: reduced ? 0.78 : 0, y: reduced ? 3 : 14 }, {
            opacity: 1,
            y: 0,
            duration: reduced ? 0.2 : 0.55,
            ease: "power2.out",
            clearProps: "opacity,transform",
            scrollTrigger: { trigger: target, start: "top 92%", once: true },
          });
        });
      });
      return () => ctx.revert();
    });
    return () => media.revert();
  }, [pathname]);

  return null;
}
