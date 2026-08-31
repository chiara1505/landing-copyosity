const siteUrl = "https://sito-professionale.copyosity.it";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Copyosity",
      url: "https://www.copyosity.it/",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
      email: "copyosity@gmail.com",
      founder: {
        "@type": "Person",
        name: "Chiara Proietto",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Strategia + Sito | Copyosity",
      description:
        "Strategia, testi SEO e sito web in 12 settimane, senza improvvisare. Per libere professioni e piccole attività.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "it-IT",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Sito professionale in 12 settimane | Copyosity",
      description:
        "Strategia, testi SEO e sito web in 12 settimane, senza improvvisare. Per libere professioni e piccole attività. Basta rimandare! Raccontami il tuo progetto.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#service` },
      inLanguage: "it-IT",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Strategia + Sito",
      alternateName: "Sito professionale in 12 settimane",
      description:
        "Percorso di 12 settimane per costruire una presenza online completa: strategia di comunicazione, testi SEO e realizzazione del sito web professionale.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "Italy",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Libere professioni e piccole attività",
      },
      serviceType: "Web design, copywriting e strategia digitale",
      offers: {
        "@type": "Offer",
        url: `${siteUrl}/#candidati`,
        priceCurrency: "EUR",
        price: "1800",
        availability: "https://schema.org/InStock",
        description:
          "Prezzo promozionale fino a dicembre 2026. Prezzo pieno €2.049.",
      },
    },
  ],
};
