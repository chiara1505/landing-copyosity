"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  // Start visible so the button still shows if JS/hydration fails (e.g. phone → LAN IP)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setVisible(y > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Torna su"
      title="Torna su"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-dark text-white shadow-[0_10px_28px_rgba(36,92,71,0.35)] transition-[opacity,transform] duration-300 sm:right-8 sm:h-14 sm:w-14 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
