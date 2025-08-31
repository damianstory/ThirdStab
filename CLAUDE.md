# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application for the "Industry Immersion Series by myBlueprint" - a platform for Canadian students (grades 7-12) to discover career opportunities through industry partnerships, micro grants, and mentorship programs.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## High-Level Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom brand typography utilities and Open Sans font
- **Animation**: Framer Motion for page transitions, CSS transforms for 3D effects
- **3D Graphics**: OGL library for WebGL hero background
- **State Management**: Local React state (useState/useEffect), no global state management
- **Email Integration**: Zoho Campaigns API with OAuth 2.0

### Application Structure

Single-page application with component-based sections:
1. **Header** - Navigation bar
2. **Hero** - Landing section with animated WebGL background
3. **Content Sections** - HowItWorks, WhyMicroGrants, Timeline
4. **Sponsor Showcases** - Incentives and Sponsors with interactive carousels
5. **Engagement** - FAQ and StayInformed (newsletter signup)
6. **Footer**

### Key Architectural Patterns

**Server Components First**: Minimize 'use client' directives, favoring React Server Components for better performance.

**Dual Sponsor Management System**:
- **Main Sponsors**: Centralized in `src/data/sponsors.ts` with four categories (student, completion, educator, school)
- **Carousel Sponsors**: Separate data in `src/data/carousel-sponsors.ts` optimized for 3D carousel display
- Helper functions: `getSponsorsByType()`, `getLimitedSponsorsByType()` for data filtering
- Different sponsor types serve different UI components and use cases

**Email Capture System**:
- OAuth 2.0 integration with Zoho Campaigns
- Automatic token refresh mechanism
- Fallback logging if external service fails
- Source tracking for analytics

**Component Architecture**:
```
src/
├── app/
│   ├── api/
│   │   ├── auth/callback/     # OAuth callback handler
│   │   └── email-capture/     # Newsletter signup with Zoho integration
│   └── page.tsx              # Main application page
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── circular-sponsor-carousel.tsx
│   │   ├── infinite-slider.tsx
│   │   └── [other UI components]
│   └── [section components]  # Page sections (Hero, Sponsors, etc.)
└── data/
    ├── sponsors.ts           # Complete sponsor database
    └── carousel-sponsors.ts  # Carousel-specific sponsor data
```

## Code Style Guidelines

From `.cursorrules`:
- Use TypeScript with interfaces (not types); avoid enums, use maps instead
- Functional programming patterns (no classes)
- Descriptive variable names with auxiliary verbs (isLoading, hasError)
- Named exports for components
- "function" keyword for pure functions
- Early returns and guard clauses
- Mobile-first responsive design with Tailwind CSS
- Minimize 'use client' - favor React Server Components (RSC)
- Use Zod for form validation, model expected errors as return values
- Use Shadcn UI, Radix, and Tailwind Aria for components and styling
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading

**Component Structure**:
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content
5. Type definitions

**Directory Naming**: lowercase with dashes (e.g., `auth-wizard`)

**Performance Optimization**:
- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client' usage to Web API access in small components only
- Avoid 'use client' for data fetching or state management

## Environment Variables

Required for Zoho Campaigns integration:
- `ZOHO_CAMPAIGNS_CLIENT_ID`
- `ZOHO_CAMPAIGNS_CLIENT_SECRET`
- `ZOHO_CAMPAIGNS_REFRESH_TOKEN`
- `ZOHO_CAMPAIGNS_LIST_KEY`

## Brand Design System

**Typography Scale** (added to `globals.css`):
- `brand-h1` through `brand-h4`: Primary headings with Open Sans font
- `brand-subheader`, `brand-body1`, `brand-body2`: Content text styles
- Mobile-responsive typography with breakpoint adjustments

**Color Palette** (in `tailwind.config.ts`):
- `navy` (#22224C): Primary headers and important text
- `brandBlue` (#0092ff): CTAs and accent elements
- `lightBlue`, `offWhite`: Background variations
- `neutral1-6`: Text color hierarchy from light to dark

## Important Implementation Details

**3D Sponsor Carousel**:
- `CircularSponsorCarousel`: CSS transforms with perspective for 3D effect
- Automatic rotation with pause on hover
- Click handlers navigate directly to Notion sponsor page
- Custom logo sizing for specific sponsors

**Email Capture System**:
1. Reusable `EmailForm` component with source attribution
2. Form submission to `/api/email-capture`
3. OAuth token refresh from Zoho Campaigns
4. Bulk subscriber API call with error handling
5. Fallback logging and user-friendly error messages

**Animation Layers**:
- WebGL animated background (OGL library) in Hero section
- Framer Motion for component transitions
- CSS animations for gradients and fade-ins
- Infinite logo slider with gradient edge masks

**Performance Patterns**:
- Server Components by default (client components only for interactivity)
- Local state management (no global state)
- Static data with helper functions for filtering
- Mobile-first responsive design

## Development Workflow

**Standard Development Process**:
1. Think through the problem and read relevant codebase files
2. Create a plan with actionable todo items using TodoWrite tool
3. Check in with user for plan verification before starting work
4. Work through todo items, marking them complete as you go
5. Provide high-level explanations of changes at each step
6. Keep changes simple - minimize code impact and avoid complex modifications
7. Add review section summarizing all changes made

## Testing

Currently no testing framework is configured. When implementing tests, consider:
- Jest or Vitest for unit tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests