import { TypewriterTitle } from "./TypewriterTitle";
import { HeroVideo } from "./HeroVideo";

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
            Strategia + Sito
          </p>
          <TypewriterTitle
            as="h1"
            text="Il tuo sito professionale in 12 settimane"
            startOnMount
            className="mt-4 font-display text-3xl leading-tight text-ink sm:mt-3 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
          />
          <p
            className="mt-8 animate-fade-up text-xl font-semibold leading-snug text-ink sm:mt-8 sm:text-2xl"
            style={{ animationDelay: "120ms" }}
          >
            Sei una libera professione o una piccola attività e vuoi finalmente
            avere un sito professionale, senza improvvisare o riempire un
            template a caso?
          </p>
          <p
            className="mt-6 animate-fade-up text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "200ms" }}
          >
            Porta online un sito che vada oltre i social: il tuo punto
            ufficiale, che racconta chi sei e ti fa scegliere dalle persone
            giuste.
          </p>
          <p
            className="mt-5 animate-fade-up text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "260ms" }}
          >
            Trasformiamo insieme le tue idee in un sito che funziona e che è
            davvero tuo partendo dalla cosa più importante: le parole.
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
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
