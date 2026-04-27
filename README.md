# Hannes Birker — Portfolio Website

A premium personal brand portfolio built with React + Vite + Tailwind CSS.

## Tech Stack

- **React 18** — Component-based UI
- **Vite 5** — Fast dev server & build tool
- **Tailwind CSS 3** — Utility-first styling
- **Google Fonts** — Syne (display), DM Sans (body), JetBrains Mono (code/labels)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
hannes-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx               ← Reusable card
│   │   └── SectionWrapper.jsx     ← Reusable section layout
│   ├── hooks/
│   │   └── useScrollReveal.js     ← Scroll-triggered animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

- **Colors** — Edit CSS variables in `src/index.css` (`:root` block)
- **Content** — Edit text directly in each component file
- **Email** — Replace `hannes@birker.dev` in `Contact.jsx`
- **GitHub/LinkedIn** — Replace URLs in `Contact.jsx` → `CONTACT_ITEMS`
- **Projects** — Edit `PROJECTS` array in `Projects.jsx`

## Design System

| Token | Value |
|-------|-------|
| Background | `#020817` (navy-950) |
| Accent | `#fbbf24` (amber) |
| Display Font | Syne |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |
