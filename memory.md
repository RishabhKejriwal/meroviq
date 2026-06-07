# Meroviq Launchpad - Project Memory

## Current Context
- **Project Name**: Meroviq Technologies (meroviq-technologies)
- **Type**: Marketing website + SaaS landing page
- **Framework**: React 19 + JavaScript (converted from TypeScript)
- **Build Tool**: Vite 8.0.0
- **Styling**: Tailwind CSS v4.2.1 with custom design system
- **UI Library**: shadcn/ui (New York style) + Radix UI primitives
- **Routing**: React Router DOM v7.16.0
- **Package Manager**: npm (switched from Bun)
- **Target**: Small businesses, entrepreneurs, IT freshers

## Tech Stack
- **Core**: React 19.2.0, JavaScript (ES2022)
- **Routing**: react-router-dom v7.16.0
- **Styling**: Tailwind CSS 4.2.1, @tailwindcss/vite 4.2.1
- **UI Components**: Radix UI primitives (45 components), shadcn/ui
- **Icons**: Lucide React 0.575.0
- **Forms**: React Hook Form 7.71.2, Zod 3.24.2, @hookform/resolvers 5.2.2
- **Charts**: Recharts 2.15.4 (deprecated, consider v3 upgrade)
- **Animations**: tw-animate-css 1.3.4
- **Build**: esbuild 0.28.0

## Project Structure
```
src/
├── components/
│   ├── site/          # Custom site components (Header, Footer, ContactForm, etc.)
│   └── ui/            # shadcn/ui components (45 components)
├── lib/
│   ├── error-capture.js # Error handling utility
│   ├── error-page.js  # Fallback error page
│   ├── lovable-error-reporting.js # Error reporting
│   └── utils.js       # cn() utility for class merging
├── routes/            # Route components (19 routes)
├── App.jsx            # Main app with routing configuration
├── main.jsx           # React entry point
└── styles.css         # Tailwind v4 with custom theme
```

## Conversion Details
- **Conversion Date**: June 2, 2026
- **Conversion Tool**: Custom esbuild-based script (convert.mjs - now removed)
- **Files Changed**: 147 files (4438 insertions, 6772 deletions)
- **Removed Files**: TanStack-specific files (server.ts, start.ts, router.tsx, routeTree.gen.ts, __root.tsx, sitemap.xml.ts, config.server.ts, api functions)
- **New Files**: index.html, App.jsx, main.jsx, jsconfig.json, vite.config.js
- **Package Manager Switch**: Bun → npm (June 2, 2026)
- **Removed**: bun.lock, bunfig.toml, convert.mjs, fix-routes.mjs
- **Added**: package-lock.json, react-router-dom dependency

## Design System
- **Brand Colors**: 
  - Primary (brand): #004188 (blue)
  - Secondary (accent2): #008369 (green)
  - Surface: #f8f9fa
  - Ink: #1e293b
  - Hairline: #e5e7eb
- **Fonts**: Inter (sans), Poppins (display)
- **Radius**: 0.875rem base
- **Shadows**: 
  - shadow-soft: subtle elevation
  - shadow-glow: brand-colored glow
- **Gradients**: Linear gradient from brand to accent2
- **Animations**: fade-in, fade-up, float
- **Utilities**: container-page, gradient-brand, text-gradient-brand, grid-pattern, glass-card

## Routes & Pages
### Main Pages
- `/` - Homepage with hero, services, why meroviq, tools, impact, about, contact
- `/meroviq-360` - CRM product landing page (coming soon)
- `/services` - Services overview
- `/services/development` - Development & Testing services
- `/services/marketing` - Digital Marketing services
- `/launchpad` - Internship program landing page
- `/impact` - Community initiatives page
- `/tools` - Free tools overview
- `/resources` - Guides & FAQs with search/filter
- `/contact` - Contact page with form
- `/privacy` - Privacy policy with sticky TOC

### Tool Pages
- `/tools/digital-signature` - Canvas-based signature drawing
- `/tools/grammar-corrector` - Rule-based grammar checker
- `/tools/file-converter` - Image format converter (PNG/JPG/WebP)
- `/tools/qa-estimator` - QA effort calculator with heuristics

### Resource Pages
- `/resources/it-professionals-faq` - IT careers FAQ
- `/resources/salesforce-career-faq` - Salesforce career FAQ
- `/resources/qa-tester-faq` - QA testing career FAQ

### Special Routes
- `*` - 404 Not Found page

## Key Components
### Site Components
- **Header**: Fixed navigation with scroll effect, mobile menu, active route highlighting
- **Footer**: Multi-column links, contact info, social links
- **ContactForm**: Form with validation, mock submission (API-ready)
- **PageHero**: Reusable hero section with badge, title, subtitle, CTA
- **Section**: Container with consistent padding
- **EyebrowHeading**: Section header with eyebrow label, title, subtitle
- **ToolPage**: Reusable tool page layout with interface, features, steps, benefits
- **Guide**: Reusable guide layout component

### UI Components (shadcn/ui)
45 components including: button, card, input, form, dialog, dropdown-menu, select, tabs, accordion, etc.

## Client-Side Architecture
- **Entry Point**: `index.html` - HTML entry with root div
- **React Entry**: `main.jsx` - React 19 root rendering with BrowserRouter
- **App Component**: `App.jsx` - Route configuration with all 19 routes
- **Routing**: React Router DOM v6 with manual route definitions
- **Scroll Management**: ScrollToTop component for route changes
- **Error Handling**: 404 Not Found component for unmatched routes

## Data Layer
- **Current State**: Client-side only, no external APIs connected
- **Contact Form**: Mock submission with setTimeout (ready for API integration)
- **No Database**: No database connections configured yet
- **No Server Functions**: Removed during conversion (was TanStack-specific)

## Key Features
1. **Client-Side SPA**: Single Page Application with React Router DOM
2. **Manual Routing**: Explicit route definitions in App.jsx
3. **SEO Optimized**: Meta tags in index.html, Open Graph, structured data
4. **Responsive Design**: Mobile-first with breakpoints
5. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
6. **Error Handling**: 404 Not Found page for unmatched routes
7. **Performance**: Vite build optimization, code splitting

## Tools Implementation
- **Digital Signature**: HTML5 Canvas, pointer events, transparent PNG export
- **Grammar Corrector**: Regex-based rules, client-side processing
- **File Converter**: Canvas API, format conversion, drag-and-drop
- **QA Estimator**: Heuristic calculation, range sliders, real-time updates

## Configuration Files
- **vite.config.js**: Standard Vite config with React plugin, Tailwind CSS, path aliases
- **jsconfig.json**: JavaScript config with path aliases (@/*), ES2022 target, checkJs: false
- **index.html**: HTML entry with meta tags, Open Graph, structured data
- **components.json**: shadcn/ui config (New York style, Lucide icons)
- **package-lock.json**: npm lock file for dependency management
- **eslint.config.js**: ESLint with Prettier, React hooks rules

## Decisions
- **TypeScript to JavaScript Conversion**: Converted from TanStack Start (SSR) to React Router DOM (SPA) for simplicity
- **React Router DOM**: Chosen for standard client-side routing after removing TanStack
- **Package Manager Switch**: Switched from Bun to npm for broader compatibility
- **Tailwind CSS v4**: Latest version with inline theme configuration
- **shadcn/ui**: Component library for consistent UI patterns
- **Client-side Tools**: All tools run in-browser for privacy (no server uploads)
- **Mock Contact Form**: Ready for API integration when backend is ready
- **Manual Route Definitions**: All routes explicitly defined in App.jsx instead of file-based

## Bugs & Fixes
- **Type Stripping**: Used esbuild to remove TypeScript types during conversion
- **Import Renaming**: TanStack Router imports replaced with react-router-dom
- **Route Meta Handling**: Converted TanStack head() functions to useEffect for document.title updates
- **Active Route State**: Removed TanStack activeProps, simplified to basic Link components

## In Progress
- None currently

## Completed Tasks
- Initial codebase analysis and documentation
- Memory file creation with comprehensive project context
- TypeScript to JavaScript conversion analysis
- Updated memory.md with new SPA architecture
- Package manager switch from Bun to npm
- UI/UX enhancements (June 2, 2026):
  - Added skip link for keyboard navigation
  - Added reduced-motion support for accessibility
  - Fixed button touch targets to minimum 44px
  - Added active route state in navigation with aria-current
  - Enhanced contact form with inline validation and helper text
  - Improved input touch targets to minimum 44px
  - Added proper ARIA attributes for form fields
  - Interactive design improvements:
    - Created useScrollReveal hook for scroll-based animations
    - Added scroll reveal animations (fade-up, scale-in, slide-left, slide-right)
    - Applied staggered animations to services, why, and tools sections
    - Enhanced hover states with scale, rotate, and color transitions
    - Added shimmer gradient effect to hero text
    - Added floating and pulse glow animations
    - Improved card depth with enhanced shadows and hover effects
  - Visual design enhancements (June 2, 2026):
    - Created AnimatedBackground component with floating particles and connections
    - Created GradientOrbs component with animated floating gradient blobs
    - Added bg-gradient-mesh utility for hero section background
    - Added bg-gradient-radial utility for section backgrounds
    - Added bg-dots pattern utility for subtle texture
    - Added bg-circuit pattern utility for tech-themed backgrounds
    - Enhanced hero section with animated background, gradient mesh, and glass morphism
    - Enhanced Services section with radial gradient and dots pattern
    - Enhanced Why section with circuit pattern and gradient overlay
    - Enhanced Tools section with circuit pattern background
    - Enhanced Impact section with dots pattern and glass morphism card
    - Enhanced About section with circuit pattern and gradient overlay
    - Enhanced PageHero component with gradient mesh and floating orbs for all pages
    - Enhanced Services page with circuit pattern and gradient overlay
    - Enhanced Tools page with dots pattern and gradient overlay
    - Enhanced Contact page with circuit pattern and gradient overlay
    - Enhanced Launchpad page with dots/circuit patterns and glass morphism cards
    - Enhanced Meroviq 360 page with dots/circuit patterns and glass morphism cards
    - Enhanced Impact page with circuit pattern and glass morphism cards
    - Enhanced Services Development page with dots/circuit patterns
    - Enhanced Services Marketing page with dots/circuit patterns
    - Enhanced Resources page with circuit pattern and glass morphism cards
