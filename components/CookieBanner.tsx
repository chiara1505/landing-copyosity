"use client";

import { useEffect, useState } from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookieConsent";

function notifyConsentChange() {
  window.dispatchEvent(new Event("copyosity-cookie-consent"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readCookieConsent() === null);
  }, []);

  function choose(value: CookieConsent) {
    writeCookieConsent(value);
    setVisible(false);
    notifyConsentChange();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          Usiamo cookie analitici (Google Analytics e Microsoft Clarity) per
          capire come viene usata questa pagina.{" "}
          <a
            href="https://www.copyosity.it/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-green-dark underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          {" · "}
          <a
            href="https://www.copyosity.it/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-green-dark underline-offset-2 hover:underline"
          >
            Cookie Policy
          </a>
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-md border border-green-dark/25 px-4 py-2.5 text-sm font-semibold text-green-dark transition hover:bg-green-dark/5"
          >
            Solo necessari
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="cta-button px-4 py-2.5 text-sm"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
