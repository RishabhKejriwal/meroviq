# Meroviq Technologies

Official website for Meroviq Technologies — scalable digital solutions for growing businesses, entrepreneurs, and the next generation of IT talent.

## Tech Stack

- **Framework:** React 19 + React Router 7
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod
- **Bundler:** Bun

## Project Structure

```
meroviq/
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── site/        # Header, Footer
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions (cn, etc.)
│   ├── routes/          # Page-level route components
│   ├── App.jsx          # Root app with routing
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles + Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies & scripts
└── components.json      # shadcn/ui configuration
```

## Available Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/meroviq-360` | Meroviq 360 (CRM) |
| `/services` | Services Overview |
| `/services/development` | Development & Testing |
| `/services/marketing` | Digital Marketing |
| `/launchpad` | Launchpad Internships |
| `/impact` | Community Impact |
| `/tools` | Free Tools Hub |
| `/tools/digital-signature` | Digital Signature Tool |
| `/tools/file-converter` | File Converter |
| `/tools/grammar-corrector` | Grammar Corrector |
| `/tools/qa-estimator` | QA Estimator |
| `/resources` | Resources & FAQs |
| `/resources/it-professionals-faq` | IT Professionals FAQ |
| `/resources/qa-tester-faq` | QA Tester FAQ |
| `/resources/salesforce-career-faq` | Salesforce Career FAQ |
| `/contact` | Contact Page |
| `/privacy` | Privacy Policy |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js + npm)

### Install Dependencies

```bash
bun install
```

### Run Development Server

```bash
bun run dev
```

Server starts at `http://localhost:3000`.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start Vite dev server |
| `build` | Build for production |
| `build:dev` | Build for development mode |
| `preview` | Preview production build |
| `lint` | Run ESLint |
| `format` | Format code with Prettier |

## Key Features

- **Responsive Design** — Mobile-first, works across all screen sizes
- **Organized Navigation** — Desktop dropdown menus + mobile grouped menu
- **Accessibility** — Skip links, semantic HTML, ARIA labels
- **SEO Ready** — Meta tags, Open Graph, JSON-LD schema
- **Interactive Tools** — Digital signature, file converter, grammar corrector, QA estimator
- **Smooth Interactions** — Scroll-based header transparency, hover states

## License

© 2026 Meroviq Technologies. All rights reserved.
