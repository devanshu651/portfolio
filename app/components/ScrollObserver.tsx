"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal:not(.active)");
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();
    
    // Small delay to ensure any dynamic content is also caught
    const timeout = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
