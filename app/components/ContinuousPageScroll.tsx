"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_SEQUENCE = ["/", "/projects", "/about", "/contact"];
const EDGE_OFFSET = 8;
const NAVIGATION_COOLDOWN = 1100;
const TRANSITION_DELAY = 260;
const TRANSITION_DURATION = 720;
const SCROLL_TARGET_KEY = "devanshu-continuous-scroll-target";

function isNearPageBottom() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  return scrollPosition >= pageHeight - EDGE_OFFSET;
}

function isNearPageTop() {
  return window.scrollY <= EDGE_OFFSET;
}

export default function ContinuousPageScroll() {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastNavigationAt = useRef(0);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const target = sessionStorage.getItem(SCROLL_TARGET_KEY);

    if (!target) {
      return;
    }

    sessionStorage.removeItem(SCROLL_TARGET_KEY);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: target === "bottom" ? document.documentElement.scrollHeight : 0,
          behavior: "instant",
        });
      });
    });
  }, [pathname]);

  useEffect(() => {
    const currentIndex = ROUTE_SEQUENCE.indexOf(pathname);

    if (currentIndex === -1) {
      return;
    }

    const canNavigate = () => {
      const now = Date.now();

      if (now - lastNavigationAt.current < NAVIGATION_COOLDOWN) {
        return false;
      }

      lastNavigationAt.current = now;
      return true;
    };

    const navigateTo = (direction: 1 | -1) => {
      const nextRoute = ROUTE_SEQUENCE[currentIndex + direction];

      if (!nextRoute || !canNavigate()) {
        return;
      }

      setIsTransitioning(true);
      sessionStorage.setItem(SCROLL_TARGET_KEY, direction > 0 ? "top" : "bottom");

      window.setTimeout(() => {
        router.push(nextRoute, { scroll: false });
      }, TRANSITION_DELAY);

      window.setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    };

    const handleDirectionalScroll = (deltaY: number) => {
      if (deltaY > 0 && isNearPageBottom()) {
        navigateTo(1);
      }

      if (deltaY < 0 && isNearPageTop()) {
        navigateTo(-1);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning) {
        event.preventDefault();
        return;
      }

      handleDirectionalScroll(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isTransitioning) {
        event.preventDefault();
        return;
      }

      if (touchStartY.current === null) {
        return;
      }

      const currentY = event.touches[0]?.clientY;

      if (currentY === undefined) {
        return;
      }

      handleDirectionalScroll(touchStartY.current - currentY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isTransitioning, pathname, router]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[90] bg-[#050505] transition-all duration-500 ${
        isTransitioning ? "opacity-80" : "opacity-0"
      }`}
    />
  );
}
