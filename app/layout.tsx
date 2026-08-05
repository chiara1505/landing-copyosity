import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Da 0 a Digital | Copyosity",
  description:
    "Percorso di 12 settimane per costruire la tua presenza digitale partendo dalle parole: strategia, testi SEO e sito professionale.",
  openGraph: {
    title: "Da 0 a Digital | Copyosity",
    description:
      "Porta online un sito che racconti chi sei, faccia capire il valore del tuo lavoro e ti aiuti a raggiungere le persone giuste.",
    locale: "it_IT",
    type: "website",
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
      <body className="min-h-full flex flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
