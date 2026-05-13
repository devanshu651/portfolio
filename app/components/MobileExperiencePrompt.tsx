"use client";

import { useEffect, useState } from "react";

const PROMPT_DISMISSED_KEY = "devanshu-mobile-experience-prompt-dismissed";

export default function MobileExperiencePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const dismissed = localStorage.getItem(PROMPT_DISMISSED_KEY) === "true";

    if (isMobile && !dismissed) {
      window.setTimeout(() => setShowPrompt(true), 0);
    }
  }, []);

  const dismissPrompt = () => {
    localStorage.setItem(PROMPT_DISMISSED_KEY, "true");
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 px-4 pb-5 backdrop-blur-sm sm:hidden">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/60">
        <div className="mb-5">
          <h2 className="font-display text-lg font-semibold tracking-tight text-white">
            Better Viewing Experience
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            For better visuals and understanding, it is suggested to turn on
            desktop mode in your browser.
          </p>
        </div>

        <button
          type="button"
          onClick={dismissPrompt}
          className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          OK
        </button>
      </div>
    </div>
  );
}
