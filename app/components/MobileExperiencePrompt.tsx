"use client";

import { useEffect, useState } from "react";

const PROMPT_DISMISSED_KEY = "devanshu-mobile-experience-prompt-dismissed-session";

export default function MobileExperiencePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
    const dismissed = sessionStorage.getItem(PROMPT_DISMISSED_KEY) === "true";

    if (isMobile && !dismissed) {
      window.setTimeout(() => setShowPrompt(true), 0);
    }
  }, []);

  const dismissPrompt = () => {
    sessionStorage.setItem(PROMPT_DISMISSED_KEY, "true");
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[var(--ink)]/60 px-4 pb-5 backdrop-blur-sm sm:hidden">
      <div className="w-full max-w-sm border border-[var(--ink)]/20 bg-[var(--paper)] p-5 shadow-2xl">
        <div className="mb-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] block mb-1">
            § VIEWPORT NOTICE
          </span>
          <h2 className="font-serif text-2xl text-[var(--ink)] font-normal">
            Viewing Experience
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)] font-sans">
            Designed as an editorial notebook. For full layout scale, view on desktop or expand horizontally.
          </p>
        </div>

        <button
          type="button"
          onClick={dismissPrompt}
          className="w-full bg-[var(--ink)] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--paper)] hover:bg-[var(--accent)] transition-colors"
        >
          ACKNOWLEDGE →
        </button>
      </div>
    </div>
  );
}
