import { phases } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

export function HowItWorks() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <TypewriterTitle
            as="h2"
            text="Come funziona"
            className="text-center font-display text-3xl text-ink sm:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-muted sm:text-xl">
            Il percorso si sviluppa in tre fasi, pensate per trasformare il tuo
            progetto in una presenza online completa e coerente.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:gap-5">
          {phases.map((phase, index) => {
            const squareLeft = index % 2 === 0;
            const isLight = index === 1;

            return (
              <Reveal key={phase.title} delayMs={index * 100}>
                <div
                  className={`grid items-stretch gap-3 sm:gap-5 ${
                    squareLeft
                      ? "md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)]"
                      : "md:grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)]"
                  }`}
                >
                  {/* Mobile: always label above content. Desktop: staggered via order */}
                  <div
                    className={`flex items-center justify-center rounded-2xl bg-white px-4 py-5 md:aspect-square md:h-full md:px-0 md:py-0 ${
                      squareLeft ? "order-1" : "order-1 md:order-2"
                    }`}
                  >
                    <p className="font-display text-2xl text-green-dark sm:text-4xl md:text-5xl lg:text-6xl">
                      Fase {phase.step}
                    </p>
                  </div>

                  <div
                    className={`flex h-full flex-col justify-center rounded-2xl px-7 py-8 sm:px-8 sm:py-10 ${
                      isLight ? "bg-green-light" : "bg-green-dark"
                    } ${squareLeft ? "order-2" : "order-2 md:order-1"}`}
                  >
                    <h3
                      className={`font-display text-2xl sm:text-4xl ${
                        isLight ? "text-green-dark" : "text-green-light"
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className={`text-lg leading-relaxed ${
                            isLight ? "text-ink" : "text-white/90"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
