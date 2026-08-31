import { Resend } from "resend";
import { NextResponse } from "next/server";
import { months, onlineStatusOptions } from "@/lib/content";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  month?: string;
  status?: string;
  project?: string;
  company?: string;
  privacy?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function labelFromOptions(
  value: string,
  options: readonly { value: string; label: string }[],
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const month = body.month?.trim() ?? "";
  const status = body.status?.trim() ?? "";
  const project = body.project?.trim() ?? "";
  const privacy = Boolean(body.privacy);

  if (!name || !email || !month || !status || !project) {
    return NextResponse.json(
      { error: "Compila tutti i campi obbligatori." },
      { status: 400 },
    );
  }

  if (!privacy) {
    return NextResponse.json(
      {
        error:
          "Per inviare la candidatura devi accettare la Privacy Policy e la Cookie Policy.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Inserisci un’email valida." },
      { status: 400 },
    );
  }

  if (project.length < 20) {
    return NextResponse.json(
      {
        error:
          "Raccontami un po’ di più del progetto (almeno un paio di frasi).",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Il form non è ancora configurato. Scrivimi a copyosity@gmail.com.",
      },
      { status: 503 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "copyosity@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Copyosity <onboarding@resend.dev>";

  const monthLabel = labelFromOptions(month, months);
  const statusLabel = labelFromOptions(status, onlineStatusOptions);

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Candidatura Da 0 a Digital — ${name}`,
      text: [
        "Nuova candidatura Da 0 a Digital",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Mese preferito: ${monthLabel}`,
        `Presenza online: ${statusLabel}`,
        "",
        "Progetto:",
        project,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Invio non riuscito. Riprova tra poco." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Invio non riuscito. Riprova tra poco." },
      { status: 500 },
    );
  }
}
