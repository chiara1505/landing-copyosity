import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-green-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-8 sm:py-4">
        <a
          href="https://www.copyosity.it/"
          className="inline-flex min-w-0 shrink items-center"
          aria-label="Vai al sito Copyosity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/logo.png"
            alt="Copyosity — Tante buone parole"
            width={160}
            height={50}
            className="h-8 w-auto sm:h-11 md:h-12"
            priority
          />
        </a>
        <a
          href="#candidati"
          className="cta-button shrink-0"
        >
          <span className="sm:hidden">Scrivimi</span>
          <span className="hidden sm:inline">Raccontami il tuo progetto</span>
        </a>
      </div>
    </header>
  );
}
