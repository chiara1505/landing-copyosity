import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

export function WhyWords() {
  return (
    <section
      id="perche-le-parole"
      className="border-t border-black/5 bg-transparent px-5 pt-20 sm:px-8 sm:pt-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <TypewriterTitle
            as="h2"
            text="Perché partire dalle parole"
            className="font-display text-3xl text-ink sm:text-5xl"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <p
            id="why-words-intro"
            className="mt-8 text-lg leading-relaxed text-ink-muted sm:mt-12 sm:text-xl"
          >
            Le parole giuste danno una direzione, sono il cuore del tuo progetto
            e, come tali, non possono essere incastrate a forza in uno spazio
            digitale prima ancora di aver identificato chi sei, perché fai
            quello che fai e perché qualcuno dovrebbe scegliere proprio te.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
