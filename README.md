# Landing page Da 0 a Digital — Copyosity

Next.js landing for the **Da 0 a Digital** service. Goal: collect application form submissions.

## Local development

```bash
npm install
cp .env.example .env.local
# add your RESEND_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without `RESEND_API_KEY`, the form UI works but submissions return a clear configuration error.

## Deploy on Vercel (test domain)

1. Push this `landing` folder (or the repo) to GitHub.
2. Import the project in [Vercel](https://vercel.com) — root directory: `landing` if the repo is the parent folder.
3. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL=copyosity@gmail.com`
   - `CONTACT_FROM_EMAIL=Copyosity <onboarding@resend.dev>` (or your verified domain sender)
4. Deploy. Use the `*.vercel.app` URL for testing.
5. Later: point a custom path/subdomain and redirect from the Wix page.

## Brand assets

- Colors: green dark `#245C47`, green light `#CEC053`, blue `#3D8BC9`, orange `#DB7234`, pink `#E1C6DC`
- Fonts: Varela Round (headings), Nunito Sans (body)
- Logo: `public/images/logo.png`
