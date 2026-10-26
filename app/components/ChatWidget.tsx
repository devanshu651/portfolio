"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
  time?: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Yo, I'm Devanshu's digital twin. Ask me anything about my projects (SafeRide, PromptLab, CampusEye), internships, philosophy, or background.",
      time: "NOW",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll messages
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  // Focus management & Escape key listener
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          triggerRef.current?.focus();
        }

        // Trap focus inside dialog
        if (e.key === "Tab" && panelRef.current) {
          const focusable = panelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  // Form submit handler with Groq SSE streaming logic intact
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading) return;

      const userMessage = inputValue.trim();
      setInputValue("");

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add user message immediately
      const newMessages: Message[] = [
        ...messages,
        { role: "user", content: userMessage, time: currentTime },
      ];
      setMessages(newMessages);
      setIsLoading(true);

      // Add empty assistant message to append streaming chunks to
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "", time: currentTime },
      ]);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map(({ role, content }) => ({ role, content })),
          }),
        });

        if (!response.ok) {
          throw new Error("API response not ok");
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");

        if (!reader) {
          throw new Error("No reader available");
        }

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunkText = decoder.decode(value, { stream: true });
          buffer += chunkText;

          const lines = buffer.split("\n\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.trim() === "") continue;

            if (line.startsWith("data: ")) {
              const dataStr = line.replace("data: ", "").trim();
              if (dataStr === "[DONE]") {
                continue;
              }
              try {
                const data = JSON.parse(dataStr);
                const delta = data.choices?.[0]?.delta;

                if (delta?.content) {
                  const newContent = delta.content;
                  setMessages((prev) => {
                    const updated = [...prev];
                    const lastIndex = updated.length - 1;
                    updated[lastIndex] = {
                      ...updated[lastIndex],
                      content: updated[lastIndex].content + newContent,
                    };
                    return updated;
                  });
                }
              } catch (err) {
                console.warn("Failed to parse SSE data line", err);
              }
            }
          }
        }
      } catch (error) {
        console.error("Chat error:", error);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Oops! Connection dropped. Feel free to try again or email me at rautdevanshu24@gmail.com.",
            time: currentTime,
          };
          return updated;
        });
      } finally {
        setIsLoading(false);
      }
    },
    [inputValue, isLoading, messages]
  );

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      {/* EXPANDABLE CHAT PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Chat with AI Devanshu"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 sm:inset-auto sm:right-6 sm:bottom-6 w-full sm:w-[420px] h-[85dvh] sm:h-[560px] flex flex-col border border-[var(--ink)]/20 bg-[var(--paper)] shadow-2xl overflow-hidden z-[100]"
          >
            {/* Corner Registration Stamps */}
            <span className="absolute top-1 left-1 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>
            <span className="absolute top-1 right-1 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>

            {/* Panel Header */}
            <header className="p-4 sm:p-5 border-b border-[var(--ink)]/15 bg-[var(--paper)] flex items-center justify-between shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[var(--muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>ONLINE · BOT DIALOGUE</span>
                </div>
                <h3 className="font-serif text-2xl text-[var(--ink)] font-normal leading-none pt-1">
                  AI Devanshu
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                className="font-mono text-xs uppercase px-2.5 py-1.5 border border-[var(--ink)]/20 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:outline-none transition-colors"
                aria-label="Close chat window (Escape)"
              >
                ✕ ESC
              </button>
            </header>

            {/* Messages Scroll Area */}
            <div
              tabIndex={0}
              data-lenis-prevent
              aria-label="Chat conversation history"
              className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 focus-visible:ring-1 focus-visible:ring-[var(--accent)] focus:outline-none scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Timestamp & Role */}
                  <div className="font-mono text-[10px] uppercase text-[var(--muted)] mb-1 px-1">
                    {msg.role === "user" ? "YOU" : "DEVANSHU"} {msg.time ? `· ${msg.time}` : ""}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[88%] p-3.5 sm:p-4 text-sm leading-relaxed font-sans whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-[var(--ink)] text-[var(--paper)]"
                        : "border border-[var(--ink)]/15 bg-[var(--paper)] text-[var(--ink)]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator: three bouncing ink dots */}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex flex-col items-start">
                  <span className="font-mono text-[10px] uppercase text-[var(--muted)] mb-1 px-1">
                    DEVANSHU IS TYPING
                  </span>
                  <div className="border border-[var(--ink)]/15 bg-[var(--paper)] p-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[var(--ink)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[var(--ink)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[var(--ink)] rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input & Form Area */}
            <footer className="p-3 sm:p-4 border-t border-[var(--ink)]/15 bg-[var(--paper)] shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, hackathons, skills..."
                  disabled={isLoading}
                  className="flex-1 bg-[var(--paper)] border border-[var(--ink)]/20 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50 transition-colors"
                  aria-label="Your message to AI Devanshu"
                />

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  data-cursor="SEND"
                  className="bg-[var(--ink)] text-[var(--paper)] px-4 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] disabled:opacity-40 disabled:hover:bg-[var(--ink)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:outline-none transition-colors shrink-0"
                >
                  SEND ↗
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TRIGGER PILL */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            data-cursor="CHAT"
            className="group flex items-center gap-3 border border-[var(--ink)]/25 bg-[var(--paper)] px-5 py-3 shadow-xl hover:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:outline-none transition-all duration-200"
            aria-expanded={isOpen}
            aria-label="Ask Devanshu's Bot — Open AI Chat Assistant"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
              ASK DEVANSHU&apos;S BOT ↗
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
