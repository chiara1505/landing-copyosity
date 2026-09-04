import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import Script from "next/script";
import { jsonLd } from "@/lib/jsonLd";
import "./globals.css";

const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-KSLLNTLY2T";
const clarityId =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "ycydq5ms4f";

const varelaRound = localFont({
  src: "../fonts/VarelaRound-Regular.ttf",
  variable: "--font-varela",
  display: "swap",
  weight: "400",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sito-professionale.copyosity.it"),
  alternates: {
    canonical: "/",
  },
  title: "Sito professionale in 12 settimane | Copyosity",
  description:
    "Strategia, testi SEO e sito web in 12 settimane, senza improvvisare. Per libere professioni e piccole attività. Basta rimandare! Raccontami il tuo progetto.",
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Il tuo sito professionale in 12 settimane",
    description:
      "Strategia, testi e sito web con Copyosity. Un percorso chiaro per libere professioni e piccole realtà che vogliono finalmente andare online.",
    locale: "it_IT",
    type: "website",
    siteName: "Copyosity",
    images: [
      {
        url: "/images/og.jpg",
        width: 1024,
        height: 537,
        alt: "Vai online con il tuo sito professionale in 12 settimane — Copyosity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Il tuo sito professionale in 12 settimane",
    description:
      "Strategia, testi e sito web con Copyosity. Un percorso chiaro per libere professioni e piccole realtà che vogliono finalmente andare online.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${varelaRound.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    var isReload = nav && nav.type === "reload";
    if (!isReload && performance.navigation) isReload = performance.navigation.type === 1;
    // Only on full reload: start from the top (ignore leftover hash position)
    if (isReload) {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      window.scrollTo(0, 0);
    }
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
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
      </body>
    </html>
  );
}
