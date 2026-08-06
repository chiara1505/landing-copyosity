"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { months, onlineStatusOptions } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TypewriterTitle } from "./TypewriterTitle";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  month: "",
  status: "",
  project: "",
  company: "",
};

const fieldClassName =
  "mt-2 w-full rounded-xl border-[1.5px] border-green-dark/20 bg-white px-4 py-3 text-ink outline-none transition focus:border-blue focus:shadow-[0_0_0_3px_rgba(61,139,201,0.22)]";

export function ApplicationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Qualcosa è andato storto. Riprova tra poco.",
        );
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Non riesco a inviare la candidatura al momento. Scrivimi a copyosity@gmail.com.",
      );
    }
  }

  return (
    <section
      id="candidati"
      className="border-t border-black/5 bg-pink/35 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <TypewriterTitle
            as="h2"
            text="Raccontami il tuo progetto"
            className="text-center font-display text-3xl text-ink sm:text-5xl"
          />
        </Reveal>

        <Reveal delayMs={100}>
          {status === "success" ? (
            <div
              className="mt-10 rounded-3xl bg-white px-6 py-10 text-center shadow-[0_12px_40px_rgba(36,92,71,0.1)]"
              role="status"
            >
              <p className="font-display text-2xl text-green-dark">Fatto</p>
              <p className="mt-4 text-ink-muted">
                Ti risponderò personalmente per capire se il percorso è adatto
                al tuo progetto e concordare insieme i prossimi passi.
              </p>
              <button
                type="button"
                className="link-soft mt-8"
                onClick={() => setStatus("idle")}
              >
                Torna al form
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 space-y-6 rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(36,92,71,0.1)] sm:p-8"
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, company: e.target.value }))
                  }
                />
              </div>

              <Field label="Come ti chiami?" htmlFor="name" hint="Nome e cognome">
                <input
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className={fieldClassName}
                  placeholder="Nome e cognome"
                />
              </Field>

              <Field
                label="Qual è la tua email?"
                htmlFor="email"
                hint="Inserisci l’indirizzo a cui preferisci ricevere la mia risposta."
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={fieldClassName}
                  placeholder="la.tua.email@gmail.com"
                />
              </Field>

              <Field
                label="Quale mese preferiresti per iniziare?"
                htmlFor="month"
              >
                <select
                  id="month"
                  name="month"
                  required
                  aria-required="true"
                  value={form.month}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, month: e.target.value }))
                  }
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Seleziona un’opzione
                  </option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="A che punto sei con la tua presenza online?"
                htmlFor="status"
              >
                <select
                  id="status"
                  name="status"
                  required
                  aria-required="true"
                  value={form.status}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, status: e.target.value }))
                  }
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Seleziona un’opzione
                  </option>
                  {onlineStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Raccontami il tuo progetto: cosa fai, a chi ti rivolgi e cosa vorresti costruire online?"
                htmlFor="project"
              >
                <textarea
                  id="project"
                  name="project"
                  required
                  aria-required="true"
                  rows={6}
                  value={form.project}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, project: e.target.value }))
                  }
                  className={`${fieldClassName} resize-y`}
                />
              </Field>

              {status === "error" && (
                <p
                  className="rounded-xl bg-orange/10 px-4 py-3 text-sm text-orange"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="cta-button w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Invio in corso…" : "Fatto!"}
              </button>
              <p className="text-sm leading-relaxed text-ink-muted">
                Ti risponderò personalmente per capire se il percorso è adatto
                al tuo progetto e concordare insieme i prossimi passi.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-medium text-ink">
        {label}
      </label>
      {hint ? <p className="mt-1 text-sm text-ink-muted">{hint}</p> : null}
      {children}
    </div>
  );
}
