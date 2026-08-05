import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Copyosity"
            width={180}
            height={56}
            className="h-11 w-auto sm:h-12"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href="https://www.copyosity.it/"
            className="font-medium text-green-dark underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Torna al sito copyosity.it
          </a>
          <a
            href="mailto:copyosity@gmail.com"
            className="text-ink-muted underline-offset-4 hover:underline"
          >
            copyosity@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
