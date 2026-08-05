import { pillars } from "@/lib/content";
import { Reveal } from "./Reveal";

function IconMegaphone() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
      <path
        d="M8 20h6l16-8v24L14 28H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"
        stroke="#DB7234"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 28v6a4 4 0 0 0 4 4"
        stroke="#DB7234"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M34 18c2.5 2 2.5 10 0 12"
        stroke="#DB7234"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCycle() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
      <path
        d="M14 18a12 12 0 0 1 20-2"
        stroke="#3D8BC9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M34 10v6h-6"
        stroke="#3D8BC9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30a12 12 0 0 1-20 2"
        stroke="#3D8BC9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 38v-6h6"
        stroke="#3D8BC9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPencil() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
      <path
        d="M28 12 36 20 18 38H10v-8L28 12Z"
        stroke="#245C47"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="m24 16 8 8" stroke="#245C47" strokeWidth="2.5" />
    </svg>
  );
}

const icons = [<IconMegaphone key="1" />, <IconCycle key="2" />, <IconPencil key="3" />];
const cardClassName =
  "bg-white border border-green-dark/10 shadow-[0_12px_32px_rgba(36,92,71,0.08)] transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_20px_40px_rgba(36,92,71,0.14)]";

export function Pillars() {
  return (
    <section className="bg-transparent px-5 pb-32 pt-14 sm:px-8 sm:pb-72 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div id="pillar-cards" className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 90}>
              <article className={`pastel-card text-center ${cardClassName}`}>
                <div className="flex justify-center">{icons[index]}</div>
                <h3 className="mt-5 font-display text-xl text-ink sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:mt-7">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={160}>
          <blockquote className="mx-auto mt-28 max-w-5xl text-center sm:mt-32">
            <p className="font-sans text-xl font-normal leading-snug text-green-dark sm:text-3xl lg:text-[2.05rem] lg:leading-[1.4]">
              Un sito non dovrebbe essere una semplice vetrina costruita prima
              di sapere cosa raccontare.
              <br className="sm:hidden" /> Per questo lavoreremo insieme alla
              strategia e alla struttura della tua comunicazione, definendo fin
              dall’inizio cosa dire, come dirlo e a chi dirlo.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
