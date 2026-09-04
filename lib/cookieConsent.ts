export const COOKIE_CONSENT_KEY = "copyosity-cookie-consent";

export type CookieConsent = "accepted" | "rejected";

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function writeCookieConsent(value: CookieConsent) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
}
