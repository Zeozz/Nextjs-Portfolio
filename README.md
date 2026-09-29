# Ahmad Syakir — Portfolio (Next.js Mockup)

A responsive single-page portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for the K-Youth AI Competency "Vibe Coding" assignment.

## Sections

- **Home**: intro, call-to-action buttons, quick stats
- **About Me**: bio, skills, and a journey timeline
- **Projects**: project cards with categories and tags
- **Contact**: contact details plus a demo contact form (it shows a thank-you message; nothing is sent)

## Features

- Responsive layout for mobile, tablet, and desktop, with a hamburger menu on small screens
- Automatic light and dark themes that follow the device setting
- Custom fonts (Fraunces for headings, Plus Jakarta Sans for body text) via `next/font`
- All content kept in one file for easy editing

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, page metadata
│   ├── page.tsx          # Puts all the sections together
│   └── globals.css       # Tailwind setup + colour theme
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Home section
│   ├── About.tsx         # About Me section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   ├── ContactForm.tsx   # Demo contact form
│   ├── SectionHeading.tsx
│   └── Footer.tsx
└── data/
    └── portfolio.ts      # All text content (edit this to customise)
```

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deployment

The site is deployed to **GitHub Pages** by the workflow in `.github/workflows/deploy.yml`. Every push to `main` builds a static export (`output: "export"` in `next.config.ts`) and publishes it.

One-time setup: in the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Notes

Content marked `// sample` in `src/data/portfolio.ts` (email, links, location, degree) is placeholder content for this mockup.
