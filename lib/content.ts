export const months = [
  { value: "settembre-2026", label: "Settembre 2026" },
  { value: "ottobre-2026", label: "Ottobre 2026" },
  { value: "novembre-2026", label: "Novembre 2026" },
  { value: "dicembre-2026", label: "Dicembre 2026" },
  { value: "non-lo-so", label: "Non lo so ancora" },
] as const;

export const onlineStatusOptions = [
  { value: "da-zero", label: "Sto iniziando da zero" },
  {
    value: "sito-da-ripartire",
    label: "Ho già un sito ma voglio ripartire con una nuova direzione",
  },
  {
    value: "manca-strategia",
    label: "Ho già una presenza online ma manca una strategia chiara",
  },
  { value: "altro", label: "Altro" },
] as const;

export const availability = [
  { month: "Settembre 2026", spots: "1 spazio disponibile" },
  { month: "Ottobre 2026", spots: "1 spazio disponibile" },
  { month: "Novembre 2026", spots: "1 spazio disponibile" },
  { month: "Dicembre 2026", spots: "1 spazio disponibile" },
] as const;

export const pillars = [
  {
    title: "Troviamo la tua voce, unica, vera e riconoscibile",
    body: "Definiamo cosa vuoi raccontare, a chi vuoi parlare e quale valore vuoi trasmettere. Insieme troviamo il modo più sincero ed efficace per presentarti online.",
  },
  {
    title: "Costruiamo il sito partendo dal messaggio",
    body: "Non adattiamo dei testi a una struttura già definita: prima definiamo cosa comunicare, poi costruiamo il modo migliore per valorizzarlo.",
  },
  {
    title: "Creiamo contenuti pensati per farti trovare",
    body: "Prepariamo testi e contenuti coerenti, pensati per comunicare con le persone giuste e costruire una presenza online solida nel tempo.",
  },
] as const;

export type OutcomePart = {
  text: string;
  bold?: boolean;
};

export type Outcome = {
  id: string;
  parts: OutcomePart[];
};

export const outcomes: Outcome[] = [
  {
    id: "strategia",
    parts: [
      { text: "Una " },
      { text: "strategia definita", bold: true },
      { text: ", un’identità unica e contenuti pronti per raccontarti" },
    ],
  },
  {
    id: "testi",
    parts: [
      { text: "Testi strategici", bold: true },
      {
        text: " per le principali pagine del sito, chiari per le persone e ",
      },
      { text: "ottimizzati SEO", bold: true },
    ],
  },
  {
    id: "voce",
    parts: [
      { text: "Una " },
      { text: "voce riconoscibile", bold: true },
      { text: ", con parole e tono che ti rappresentano" },
    ],
  },
  {
    id: "sito",
    parts: [
      { text: "Un " },
      { text: "sito web", bold: true },
      {
        text: " costruito intorno al messaggio e non a un template da riempire",
      },
    ],
  },
  {
    id: "blog",
    parts: [
      { text: "I primi " },
      { text: "articoli di blog", bold: true },
      {
        text: " ottimizzati per iniziare a rispondere ai bisogni del tuo pubblico",
      },
    ],
  },
  {
    id: "metodo",
    parts: [
      { text: "Un " },
      { text: "metodo pratico", bold: true },
      {
        text: " per continuare a curare la tua presenza online anche in ",
      },
      { text: "autonomia", bold: true },
    ],
  },
];

export const forYouIf = [
  "Hai rimandato il sito per mesi perché non sapevi da dove partire o avevi paura di buttare soldi",
  "Hai già un sito o una presenza online, ma non ti rappresenta",
  "Vuoi un sito professionale, senza scegliere template a caso e scrivere testi da sola/o",
  "Sai cosa fai bene, ma fatichi a spiegarlo online in modo chiaro e convincente",
  "Vuoi sfruttare ogni opportunità del web per farti trovare dalle persone giuste",
  "Preferisci un percorso guidato in poche settimane da un’unica professionista",
] as const;

export const phases = [
  {
    step: "1",
    title: "Fondamenta",
    items: [
      "Analizziamo il tuo progetto, il mercato e il pubblico a cui vuoi parlare per definire una direzione chiara.",
      "Definiamo il tono di voce e il modo in cui il tuo brand parlerà alle persone.",
      "Mettiamo nero su bianco ciò che rende unico il tuo progetto e i principi che guideranno la tua comunicazione.",
    ],
  },
  {
    step: "2",
    title: "Contenuti",
    items: [
      "Progettiamo e realizziamo il sito web, dalla struttura alla pubblicazione.",
      "Scriviamo i testi delle pagine principali, pensati per raccontare il tuo progetto e ottimizzati per il web.",
      "Creiamo 3 articoli strategici per costruire una base di contenuti utile nel tempo.",
    ],
  },
  {
    step: "3",
    title: "Continuità",
    items: [
      "Creiamo una direzione editoriale per i prossimi mesi, con temi, parole chiave e idee di contenuto da sviluppare.",
      "Ricevi una guida pratica per continuare a comunicare online in autonomia.",
    ],
  },
] as const;

export const inclusions = [
  "Analisi iniziale del progetto, del pubblico e dei competitor",
  "Definizione del posizionamento e della comunicazione",
  "Struttura strategica e realizzazione di un sito web di 5 pagine",
  "Creazione del sito personalizzato",
  "Testi delle pagine principali ottimizzati SEO per il web e le AI",
  "3 articoli di blog strategici per iniziare a costruire autorevolezza online",
  "Una revisione completa del progetto prima della consegna",
  "Assistenza per gestire il sito in autonomia",
] as const;

export const faqs = [
  {
    q: "Ho già una presenza online, ma non mi rappresenta. Posso comunque scegliere questo percorso?",
    a: "Sì. Il percorso non è pensato solo per chi parte da zero, ma anche per chi ha già iniziato a comunicare online e sente che manca una direzione chiara. Possiamo lavorare per riorganizzare la tua presenza digitale e renderla più coerente con il progetto che vuoi costruire.",
  },
  {
    q: "Il mio sito sarà online alla fine delle 12 settimane?",
    a: "Sì, l’obiettivo del percorso è arrivare alla pubblicazione del sito entro circa 12 settimane. Le tempistiche possono variare leggermente in base alla rapidità con cui riceverò materiali, feedback e approvazioni necessarie per procedere.",
  },
  {
    q: "Cosa comprende la realizzazione del sito?",
    a: "Il percorso include la progettazione e realizzazione di un sito web di 5 pagine principali. Partiremo dalla strategia e dai contenuti definiti insieme, per costruire uno spazio online coerente con il tuo progetto. Il dominio, l’hosting e eventuali fotografie professionali non sono inclusi.",
  },
  {
    q: "Quanto tempo dovrò dedicare al progetto?",
    a: "Il tuo coinvolgimento è importante, soprattutto nella fase iniziale. Ti chiederò informazioni sul progetto, feedback sui materiali e alcune revisioni durante il percorso. L’obiettivo è costruire insieme una presenza online che ti rappresenti, senza lasciarti sola/o a gestire ogni scelta.",
  },
  {
    q: "Cosa succede dopo le 12 settimane e cosa riceverò alla fine del percorso?",
    a: "Alla fine del percorso avrai una presenza online completa: un sito web professionale, testi strategici, una base di contenuti e una direzione chiara per continuare a comunicare anche in autonomia.",
  },
  {
    q: "Perché partire dalle parole prima di creare il sito?",
    a: "Perché un sito efficace non è solo una struttura grafica: deve raccontare chiaramente chi sei, cosa offri e perché le persone dovrebbero sceglierti. Definire prima messaggi e contenuti permette di costruire un sito con una direzione precisa, invece di riempire semplicemente degli spazi vuoti.",
  },
  {
    q: "Posso continuare a lavorare con te dopo?",
    a: "Sì. Dopo la conclusione del percorso possiamo valutare insieme eventuali attività successive, come la creazione di nuovi contenuti, il supporto alla comunicazione o altri interventi utili alla crescita del progetto.",
  },
  {
    q: "Come avviene il pagamento?",
    a: "Ti chiederò il 30% della cifra mostrata in preventivo all’inizio dei lavori. Il resto potrai saldarlo alla consegna, quando riceverai la fattura. Puoi pagare con bonifico o PayPal. Se hai bisogno di rateizzare, parliamone.",
  },
  {
    q: "Mi garantisci che il mio sito sarà in prima pagina sui motori di ricerca?",
    a: "No, nessuno può garantire il raggiungimento della prima posizione sui motori di ricerca. Durante il percorso però lavoreremo su una struttura e contenuti ottimizzati secondo le migliori pratiche SEO, creando basi solide per migliorare la visibilità online nel tempo.",
  },
] as const;
