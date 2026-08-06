"use client";

import { useEffect, useRef, useState } from "react";

const KEYS = [
  { label: "Ctrl", left: "5%", delay: 0.08, duration: 4.2, rotate: -8, size: "md", tone: "gray" },
  { label: "Alt", left: "13%", delay: 0.45, duration: 4.6, rotate: 6, size: "md", tone: "gray" },
  { label: "Q", left: "21%", delay: 0.2, duration: 3.9, rotate: -3, size: "sm", tone: "gray" },
  { label: "W", left: "29%", delay: 0.7, duration: 4.8, rotate: 10, size: "sm", tone: "pink" },
  { label: "E", left: "37%", delay: 0.35, duration: 4.3, rotate: -12, size: "sm", tone: "gray" },
  { label: "R", left: "45%", delay: 0.9, duration: 4.5, rotate: 4, size: "sm", tone: "gray" },
  { label: "Shift", left: "54%", delay: 0.55, duration: 5.0, rotate: -6, size: "lg", tone: "lime" },
  { label: "A", left: "64%", delay: 0.28, duration: 4.0, rotate: 8, size: "sm", tone: "gray" },
  { label: "S", left: "72%", delay: 0.8, duration: 4.7, rotate: -5, size: "sm", tone: "pink" },
  { label: "Enter", left: "80%", delay: 0.6, duration: 4.4, rotate: 7, size: "lg", tone: "green" },
  { label: "Esc", left: "9%", delay: 1.15, duration: 5.1, rotate: -10, size: "md", tone: "gray" },
  { label: "Tab", left: "26%", delay: 1.35, duration: 4.6, rotate: 5, size: "lg", tone: "gray" },
  { label: "Z", left: "50%", delay: 1.05, duration: 4.2, rotate: -7, size: "sm", tone: "pink" },
  { label: "Space", left: "70%", delay: 1.45, duration: 5.2, rotate: 3, size: "xl", tone: "gray" },
] as const;

const sizeClass = {
  sm: "min-w-14 px-3.5 py-3 text-base",
  md: "min-w-[4.5rem] px-5 py-3.5 text-base",
  lg: "min-w-24 px-6 py-3.5 text-lg",
  xl: "min-w-40 px-7 py-3.5 text-lg",
} as const;

const toneClass = {
  gray: "falling-key-gray",
  pink: "falling-key-pink",
  lime: "falling-key-lime",
  green: "falling-key-green",
} as const;

export function FallingKeys() {
  const layerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Skip on mobile — keys aren't readable on small screens
    const desktopOrTablet = window.matchMedia("(min-width: 768px)");
    if (!desktopOrTablet.matches) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const trigger = document.getElementById("why-words-intro");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px",
      },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      {KEYS.map((key) => (
        <span
          key={`${key.label}-${key.left}`}
          className={`falling-key absolute inline-flex items-center justify-center font-semibold tracking-wide ${sizeClass[key.size]} ${toneClass[key.tone]} ${
            active ? "falling-key-active" : "opacity-0"
          }`}
          style={{
            left: key.left,
            ["--fall-delay" as string]: `${key.delay}s`,
            ["--fall-duration" as string]: `${key.duration}s`,
            ["--fall-rotate" as string]: `${key.rotate}deg`,
          }}
        >
          {key.label}
        </span>
      ))}
    </div>
  );
}
