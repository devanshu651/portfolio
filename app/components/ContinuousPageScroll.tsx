"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_SEQUENCE = ["/", "/projects", "/about", "/contact"];
const EDGE_OFFSET = 8;
const NAVIGATION_COOLDOWN = 900;

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
  const lastNavigationAt = useRef(0);
  const touchStartY = useRef<number | null>(null);

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

      router.push(nextRoute);
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
      handleDirectionalScroll(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) {
        return;
      }

      const currentY = event.touches[0]?.clientY;

      if (currentY === undefined) {
        return;
      }

      handleDirectionalScroll(touchStartY.current - currentY);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [pathname, router]);

  return null;
}
