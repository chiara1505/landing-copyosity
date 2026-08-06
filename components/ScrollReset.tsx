"use client";

import { useEffect } from "react";

/**
 * Soft scroll setup only. Avoid aggressive scrollTo loops —
 * they yank users back to the top on mobile (esp. Safari bfcache).
 */
export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    document.documentElement.classList.add("is-smooth-ready");
  }, []);

  return null;
}
