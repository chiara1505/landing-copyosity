"use client";

import { useEffect, useRef, useState } from "react";
import { forYouIf } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

const pairs = Array.from({ length: Math.ceil(forYouIf.length / 2) }, (_, i) =>
  forYouIf.slice(i * 2, i * 2 + 2),
);

function ForYouCard({
  item,
  visible,
  pairIndex,
}: {
  item: string;
  visible: boolean;
  pairIndex: number;
}) {
  return (
    <li
      className={`outcome-row flex gap-3 rounded-2xl bg-white/55 px-5 py-4 text-lg leading-relaxed text-ink backdrop-blur-sm sm:text-xl ${
        visible ? "outcome-row-visible" : ""
      }`}
      style={
        {
          ["--pair-delay" as string]: `${pairIndex * 320}ms`,
        }
      }
    >
      <span
        aria-hidden
        className={`outcome-check mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-green-dark text-green-light ${
          visible ? "outcome-check-on" : ""
        }`}
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
          <path
            className="outcome-check-path"
            d="M3 8.2 6.2 11.5 13 4.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{item}</span>
    </li>
  );
}

export function ForYou() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-pink py-20 text-ink sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="px-5 sm:px-0">
          <Reveal>
            <TypewriterTitle
              as="h2"
              text="Questo percorso fa per te se"
              className="text-center font-display text-3xl text-ink sm:text-5xl"
            />
          </Reveal>
        </div>

        <Reveal className="relative mt-10 sm:hidden">
          <p className="mb-4 flex items-center justify-center gap-2 px-5 text-sm text-ink-muted">
            <span aria-hidden>←</span>
            Scorri con il dito
            <span aria-hidden>→</span>
          </p>

          <div
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Questo percorso fa per te se, scorri con il dito per vedere le altre voci"
          >
            {pairs.map((pair) => (
              <ul
                key={pair.join("-")}
                className="grid w-[85%] shrink-0 snap-center grid-rows-2 gap-3"
              >
                {pair.map((item) => (
                  <ForYouCard
                    key={item}
                    item={item}
                    visible
                    pairIndex={0}
                  />
                ))}
              </ul>
            ))}
            <div className="w-[10%] shrink-0" aria-hidden />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-10 right-0 w-10 bg-gradient-to-l from-pink to-transparent"
          />
        </Reveal>

        <ul
          ref={listRef}
          className="mt-12 hidden gap-4 px-5 sm:grid sm:grid-cols-2 sm:px-0"
        >
          {forYouIf.map((item, index) => (
            <ForYouCard
              key={item}
              item={item}
              visible={visible}
              pairIndex={Math.floor(index / 2)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
