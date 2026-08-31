"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

export function AboutMe() {
  return (
    <section className="border-t border-black/5 bg-white px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <TypewriterTitle
            as="h2"
            text="Ad accompagnarti ci sarò io"
            className="text-center font-display text-3xl text-ink sm:text-5xl"
          />
        </Reveal>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <Reveal className="w-full">
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-[14rem] select-none overflow-hidden rounded-2xl bg-green-light/45 sm:max-w-[16rem] lg:max-w-[18rem]"
              onContextMenu={(event) => event.preventDefault()}
            >
              <Image
                src="/images/chiara.jpg"
                alt="Chiara di Copyosity"
                fill
                draggable={false}
                className="pointer-events-none object-cover object-top"
                sizes="(max-width: 640px) 14rem, 18rem"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delayMs={80} className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-ink">
              Sono Chiara, e mi occupo di marketing e copywriting conversazionale.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Dal 2019 lavoro con le parole per aiutare libere professioni e
              piccole realtà a comunicare online, soprattutto nei settori del
              turismo, ristorazione, benessere e agricoltura.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              In questo percorso lavoriamo insieme su strategia, testi e
              realizzazione del sito, partendo dalle parole giuste per
              raccontarti e farti scegliere.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
