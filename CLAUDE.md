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
- **Styling**: Tailwind CSS with Shadcn UI components (new-york style)
- **Animation**: Framer Motion for page transitions
- **3D Graphics**: OGL library for WebGL hero background
- **State Management**: URL parameters with 'nuqs' library
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

**Sponsor Management System**:
- Centralized sponsor data in `src/data/sponsors.ts`
- Four sponsor categories: student, completion, educator, school
- Helper functions for filtering and pagination
- Separate carousel data in `src/data/carousel-sponsors.ts`

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
- Use TypeScript with interfaces (not types)
- Functional programming patterns (no classes)
- Descriptive variable names with auxiliary verbs (isLoading, hasError)
- Named exports for components
- "function" keyword for pure functions
- Early returns and guard clauses
- Mobile-first responsive design

**Component Structure**:
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content
5. Type definitions

**Directory Naming**: lowercase with dashes (e.g., `auth-wizard`)

## Environment Variables

Required for Zoho Campaigns integration:
- `ZOHO_CAMPAIGNS_CLIENT_ID`
- `ZOHO_CAMPAIGNS_CLIENT_SECRET`
- `ZOHO_CAMPAIGNS_REFRESH_TOKEN`
- `ZOHO_CAMPAIGNS_LIST_KEY`

## Important Implementation Details

**Sponsor Display Logic**:
- `CircularSponsorCarousel`: 3D carousel with automatic rotation
- Click handlers navigate to Notion sponsor page
- Custom sizing for specific sponsor logos
- Type-based styling (activity vs incentive sponsors)

**Email Capture Flow**:
1. Form submission to `/api/email-capture`
2. OAuth token refresh from Zoho
3. Bulk subscriber API call
4. Fallback logging on failure
5. User-friendly error messages

**Performance Considerations**:
- Server Components by default
- Dynamic imports for non-critical components
- Optimized images with Next.js Image component
- Suspense boundaries for async components

## Testing

Currently no testing framework is configured. When implementing tests, consider:
- Jest or Vitest for unit tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests