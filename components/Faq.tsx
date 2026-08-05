"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <TypewriterTitle
            as="h2"
            text="Avere qualche dubbio può succedere. Sciogliamolo!"
            className="text-center font-display text-3xl text-ink sm:text-5xl"
          />
        </Reveal>

        <div className="mt-14 divide-y divide-green-dark/15 border-y border-green-dark/15 sm:mt-20">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.q} delayMs={Math.min(index * 40, 200)}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span className="font-display text-xl text-ink sm:text-2xl">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 text-xl text-blue transition-transform"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 leading-relaxed text-ink-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
