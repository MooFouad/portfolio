# Mohamed Fouad — Portfolio

Personal portfolio of **Mohamed Fouad**, Software Engineer based in Riyadh, Saudi Arabia.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What's on the site

- **Featured Projects** — production work only: Daftaar (a commercial SaaS I built and operate), plus the enterprise internal systems I deliver at GTS (intranet platform, project progress tracking, FLS pricing & quotation, internal AI assistant).
- **Experience & Education** — roles, dates, and scope, kept in sync with my CV and LinkedIn.
- **About** — the technologies I use day to day.
- **Contact** — email, phone, and WhatsApp.

The CV PDF served at `/Mohamed_Fouad_CV.pdf` is the current version.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/          # App Router entry, metadata, JSON-LD structured data
  sections/     # Hero, Projects, Experience, Testimonials (approach), About, Contact, Footer
  components/   # Card, CardHeader, SectionHeader, TechIcon, ToolboxItems, HeroOrbit
  assets/       # images and SVG icons
public/         # CV PDF, OG image, robots.txt, sitemap.xml
```

## Notes

- Internal systems built for an employer are described at a functional level only — no source, screenshots, or client data.
- `public/og-image.png` is the link preview card used by LinkedIn, X, and WhatsApp.

## Contact

- Email: mofouad001@gmail.com
- LinkedIn: https://www.linkedin.com/in/mohamed-fouad001
- GitHub: https://github.com/MooFouad
