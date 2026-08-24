"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Yo, I'm Devanshu 👋 Feel free to ask me anything about my projects, skills, or what I like to do!" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("chat_greeting_shown");
    if (!hasShown) {
      const showTimer = setTimeout(() => {
        setShowGreeting(true);
        sessionStorage.setItem("chat_greeting_shown", "true");
      }, 1500);

      const dismissTimer = setTimeout(() => {
        setShowGreeting(false);
      }, 7500); // 1.5s + 6s

      return () => {
        clearTimeout(showTimer);
        clearTimeout(dismissTimer);
      };
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    
    // Add user message immediately
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    
    // Add an empty assistant message to append chunks to
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
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

        // Decode the chunk, stream: true ensures characters aren't split across chunks
        const chunkText = decoder.decode(value, { stream: true });
        buffer += chunkText;

        const lines = buffer.split("\n\n");
        // Keep the last partial line in the buffer
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
                    content: updated[lastIndex].content + newContent
                  };
                  return updated;
                });
              }
              // We explicitly ignore any delta.reasoning fields here
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
        // Replace the last empty assistant message with error state
        updated[updated.length - 1] = { 
          role: "assistant", 
          content: "Oops! Connection dropped. Feel free to try again in a sec." 
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[340px] h-[450px] sm:w-[380px] sm:h-[500px] flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121212] border-b border-white/10 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <h3 className="text-[#f4f1ea] font-medium tracking-wide text-sm">Chat with me</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-[#f4f1ea] transition-colors p-1"
                aria-label="Close chat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user" 
                      ? "bg-white/10 text-white rounded-br-sm" 
                      : "bg-[#161616] border border-white/5 text-zinc-300 rounded-bl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1].role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-[#161616] border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-[#0a0a0a] shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-zinc-600 text-white rounded-xl px-4 py-2 flex items-center justify-center transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Popup */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2 flex items-center gap-3 z-40 w-max max-w-[calc(100vw-2rem)]"
          >
            {/* Speech Bubble */}
            <div 
              className="relative bg-zinc-900 border border-white/10 rounded-2xl p-3.5 pr-8 shadow-2xl cursor-pointer hover:bg-zinc-800 transition-colors"
              onClick={() => { setIsOpen(true); setShowGreeting(false); }}
            >
              <p className="text-sm text-zinc-200">
                Hi! 👋 Ask me anything about myself
              </p>
              {/* Tail */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 border-t border-r border-white/10 transform rotate-45" />
              
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                className="absolute top-2 right-2 p-1 text-zinc-500 hover:text-white transition-colors"
                aria-label="Dismiss greeting"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Avatar */}
            <div 
              className="relative shrink-0 cursor-pointer"
              onClick={() => { setIsOpen(true); setShowGreeting(false); }}
            >
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-amber-400/40 blur-md animate-pulse" />
              {/* Avatar container */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-amber-400 bg-zinc-900 overflow-hidden shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                <img src="/chat-logo.png" alt="Chatbot Logo" className="w-full h-full object-cover" />
              </div>
              {/* Waving Emoji */}
              <motion.div 
                className="absolute -top-3 -right-2 text-xl sm:text-2xl origin-[70%_70%]"
                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                transition={{ duration: 1.5, repeat: 2, repeatDelay: 1, ease: "easeInOut" }}
              >
                👋
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence>
        {(!showGreeting || isOpen) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-400 bg-zinc-900 shadow-[0_0_15px_rgba(251,191,36,0.3)] flex items-center justify-center overflow-hidden transition-colors"
            aria-label="Toggle chat"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f4f1ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <img src="/chat-logo.png" alt="Chatbot Logo" className="w-full h-full object-cover" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
