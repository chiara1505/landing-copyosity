import { availability, inclusions } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

export function Pricing() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <TypewriterTitle
                as="h2"
                text="Quanto investire per il tuo sito professionale"
                className="font-display text-3xl text-ink sm:text-5xl"
              />
              <div className="mt-10 sm:mt-12">
                <p className="font-display text-xl text-ink-muted line-through decoration-2 sm:text-2xl">
                  € 2.049
                </p>
                <p className="mt-1 font-display text-5xl text-green-dark sm:mt-2 sm:text-6xl">
                  € 1.800
                </p>
              </div>
              <p className="mt-3 text-base font-medium text-green-dark sm:text-lg">
                Prezzo in promo per progetti fino a dicembre 2026
              </p>
            </Reveal>

            <Reveal delayMs={100}>
              <h3 className="mt-10 font-display text-2xl text-ink">
                Il percorso include
              </h3>
              <ul className="mt-5 space-y-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-ink-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-light text-xs font-bold text-green-dark"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted">
                Sono esclusi dominio, hosting e materiali fotografici
                professionali.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Pagamento del 30% all’avvio dei lavori e saldo alla consegna.
                Se ti è più comodo, possiamo valutare una rateizzazione.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={120}>
            <div className="rounded-3xl bg-[#f3f3f3] px-6 py-8 text-ink shadow-[0_18px_48px_rgba(36,92,71,0.1)] sm:px-8">
              <h3 className="font-display text-2xl text-ink">
                Scegli quando iniziare il tuo percorso
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Per dedicare il tempo e l’attenzione necessaria a ogni fase del
                percorso, seguo un solo progetto al mese.
              </p>
              <ul className="mt-8 space-y-3">
                {availability.map((slot) => {
                  const [monthName, year] = slot.month.split(" ");

                  return (
                    <li
                      key={slot.month}
                      className="flex items-center justify-between gap-4 rounded-xl bg-pink px-4 py-3 text-ink"
                    >
                      <span className="font-semibold leading-tight">
                        <span className="block">{monthName}</span>
                        <span className="block">{year}</span>
                      </span>
                      <span className="text-right text-sm font-medium leading-tight text-green-dark">
                        <span className="block">1 spazio</span>
                        <span className="block">disponibile</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                Il percorso dura circa 12 settimane. La data di avvio viene
                confermata dopo una prima valutazione del progetto e una
                chiamata conoscitiva gratuita.
              </p>
              <a href="#candidati" className="cta-button mt-8 w-full sm:w-auto">
                Raccontami il tuo progetto
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
