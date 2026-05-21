"use client";

let registered = false;

export async function getGsap() {
  const [{ default: gsap }, { ScrollTrigger }, { TextPlugin }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("gsap/TextPlugin"),
  ]);

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    registered = true;
  }

  return { gsap, ScrollTrigger, TextPlugin };
}
