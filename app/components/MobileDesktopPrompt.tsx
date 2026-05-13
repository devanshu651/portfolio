"use client";

import { useEffect, useState } from "react";

const DESKTOP_VIEW_KEY = "devanshu-desktop-view";
const PROMPT_DISMISSED_KEY = "devanshu-mobile-prompt-dismissed";
const DESKTOP_VIEWPORT = "width=1024";
const DEFAULT_VIEWPORT = "width=device-width, initial-scale=1";

function setViewport(content: string) {
  let viewport = document.querySelector<HTMLMetaElement>("meta[name='viewport']");

  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.name = "viewport";
    document.head.appendChild(viewport);
  }

  viewport.content = content;
}

function applyDesktopView(enabled: boolean) {
  document.documentElement.classList.toggle("desktop-view", enabled);
  setViewport(enabled ? DESKTOP_VIEWPORT : DEFAULT_VIEWPORT);
}

export default function MobileDesktopPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const desktopViewEnabled = localStorage.getItem(DESKTOP_VIEW_KEY) === "true";

    if (desktopViewEnabled) {
      applyDesktopView(true);
      return;
    }

    if (isMobile && localStorage.getItem(PROMPT_DISMISSED_KEY) !== "true") {
      window.setTimeout(() => setShowPrompt(true), 0);
    }
  }, []);

  const enableDesktopView = () => {
    localStorage.setItem(DESKTOP_VIEW_KEY, "true");
    localStorage.setItem(PROMPT_DISMISSED_KEY, "true");
    applyDesktopView(true);
    setShowPrompt(false);
  };

  const continueMobileView = () => {
    localStorage.setItem(PROMPT_DISMISSED_KEY, "true");
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 px-4 pb-5 backdrop-blur-sm sm:hidden">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/60">
        <div className="mb-4 flex items-start gap-3">
          <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-white">
              Better visuals ke liye
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Is portfolio ko mobile par desktop view me dekhna better rahega.
              Desktop-style layout turn on karna hai?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={continueMobileView}
            className="rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-zinc-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            No
          </button>
          <button
            type="button"
            onClick={enableDesktopView}
            className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
