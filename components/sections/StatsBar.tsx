"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

const stats = [
  { from: 0, to: 5, suffix: "+", label: "Projects" },
  { from: 0, to: 6, suffix: "+", label: "Industry Simulations" },
  { from: 0, to: 10, suffix: "+", label: "Certifications" },
  { from: 0, to: 4, suffix: "", label: "Tata · Deloitte · AWS · HPE" },
];

export function StatsBar() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      rootRef.current.querySelectorAll("[data-stat-value]").forEach((node, index) => {
        node.textContent = `${stats[index].to}${stats[index].suffix}`;
      });
      return;
    }

    let revert = () => {};
    getGsap().then(({ gsap }) => {
      const ctx = gsap.context(() => {
        rootRef.current?.querySelectorAll("[data-stat-value]").forEach((node, index) => {
          const stat = stats[index];
          const value = { current: stat.from };
          gsap.to(value, {
            current: stat.to,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              node.textContent = `${Math.round(value.current)}${stat.suffix}`;
            },
          });
        });
      }, rootRef);
      revert = () => ctx.revert();
    });

    return () => revert();
  }, []);

  return (
    <section className="stats-section section-reveal" id="stats" ref={rootRef}>
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong data-stat-value>{stat.from}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
