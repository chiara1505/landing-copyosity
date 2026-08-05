import { TypewriterTitle } from "./TypewriterTitle";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-white px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-10 lg:flex lg:min-h-[calc(100svh-4.75rem)] lg:items-center"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <p
            className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted sm:text-sm"
            style={{ animationDelay: "40ms" }}
          >
            Sito + Copy
          </p>
          <TypewriterTitle
            as="h1"
            text="Costruisci la tua presenza digitale in 12 settimane"
            startOnMount
            className="mt-4 font-display text-3xl leading-tight text-ink sm:mt-3 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
          />
          <p
            className="mt-8 animate-fade-up text-xl font-semibold leading-snug text-ink sm:mt-8 sm:text-2xl"
            style={{ animationDelay: "120ms" }}
          >
            Sei una libera professione o una piccola attività e vuoi finalmente
            avere un sito professionale, senza improvvisare e complicarti la
            vita?
          </p>
          <p
            className="mt-6 hidden animate-fade-up text-lg leading-relaxed text-ink-muted sm:block"
            style={{ animationDelay: "200ms" }}
          >
            Porta online un sito che racconti chi sei, faccia capire il valore
            del tuo lavoro e ti aiuti a raggiungere le persone giuste.
          </p>
          <p
            className="mt-5 animate-fade-up text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "260ms" }}
          >
            Trasformiamo insieme le tue idee in un sito coerente e davvero tuo
            partendo dalla cosa più importante: le parole.
          </p>
          <div
            className="mt-10 animate-fade-up sm:mt-8"
            style={{ animationDelay: "340ms" }}
          >
            <a href="#perche-le-parole" className="cta-button">
              Perché partire dalle parole
            </a>
          </div>
        </div>

        <div
          className="mt-4 animate-fade-up sm:mt-0"
          style={{ animationDelay: "180ms" }}
        >
          {/* Placeholder: sostituisci con foto o video esplicativo */}
          <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-pink/50 sm:h-72 lg:h-[min(34rem,calc(100svh-11rem))]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-2xl text-green-dark"
              >
                ▶
              </span>
              <p className="font-display text-lg text-green-dark">
                Spazio per foto o video
              </p>
              <p className="max-w-xs text-sm text-ink-muted">
                Qui potrai inserire un’immagine o un video che spiega il
                percorso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
