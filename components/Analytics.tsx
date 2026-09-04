"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { readCookieConsent } from "@/lib/cookieConsent";

type AnalyticsProps = {
  gaId?: string;
  clarityId?: string;
};

export function Analytics({ gaId, clarityId }: AnalyticsProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(readCookieConsent() === "accepted");
    sync();
    window.addEventListener("copyosity-cookie-consent", sync);
    return () => window.removeEventListener("copyosity-cookie-consent", sync);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      ) : null}
      {clarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      ) : null}
    </>
  );
}
