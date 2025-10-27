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

# Type checking
npm run typecheck
```

## High-Level Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom brand typography utilities and Open Sans font
- **Animation**: Framer Motion for page transitions, CSS transforms for 3D effects
- **3D Graphics**: OGL library for WebGL hero background
- **State Management**: Local React state (useState/useEffect), no global state management
- **Email Integration**: Zoho Campaigns API with OAuth 2.0
- **Icons**: Lucide React and React Icons libraries

### Application Structure

**Dual-Mode Application Architecture**:
1. **Landing Page Mode** (`/`) - Single-page application with component-based sections
2. **Activity Pages Mode** (`/[month]`) - Dynamic monthly activity detail pages

**Landing Page Sections**:
1. **Header** - Navigation bar with conditional routing logic
2. **Hero** - Landing section with animated WebGL background
3. **Content Sections** - HowItWorks, WhyMicroGrants, Timeline
4. **Sponsor Showcases** - Incentives and Sponsors with interactive carousels
5. **Engagement** - FAQ and StayInformed (newsletter signup)
6. **Footer**

### Key Architectural Patterns

**Server Components First**: Minimize 'use client' directives, favoring React Server Components for better performance.

**Dynamic Activity System**:
- **Base Activities**: Core activity data in `src/data/activities.ts` with status calculation logic
- **Extended Activity Pages**: Full page content in `src/data/activity-pages/[month].ts` using `ActivityPageData` interface
- **Dynamic Routing**: `/[month]` pages with static generation for valid activity months
- **Conditional Rendering**: Full template for complete activity data, fallback template for basic activities
- **Status Management**: Real-time activity status calculation (`coming-soon`, `active`, `ongoing`) based on current date

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
│   ├── [month]/              # Dynamic activity pages
│   │   └── page.tsx          # Activity page with conditional rendering
│   └── page.tsx              # Main landing page
├── components/
│   ├── activity/             # Activity page components
│   │   ├── ActivityHero.tsx
│   │   ├── VideoAndExplainer.tsx
│   │   ├── ActivityDetailAndRubric.tsx
│   │   ├── ActivityFAQ.tsx
│   │   ├── SponsorResources.tsx
│   │   └── IncentivesAndNavigation.tsx
│   ├── ui/                   # Reusable UI components
│   │   ├── circular-sponsor-carousel.tsx
│   │   ├── infinite-slider.tsx
│   │   └── [other UI components]
│   └── [section components]  # Landing page sections
└── data/
    ├── activities.ts         # Core activity data and helper functions
    ├── activity-pages/       # Extended activity page content
    │   ├── october.ts        # Full October activity page data
    │   └── november.ts       # Full November activity page data
    ├── sponsors.ts           # Complete sponsor database
    └── carousel-sponsors.ts  # Carousel-specific sponsor data
```

## Code Style Guidelines

From `.cursorrules`:
- **TypeScript**: Use interfaces over types; avoid enums, use maps instead
- **Programming Style**: Functional and declarative patterns; avoid classes
- **Naming**: Descriptive variable names with auxiliary verbs (isLoading, hasError)
- **Components**: Named exports; use "function" keyword for pure functions
- **Error Handling**: Early returns and guard clauses; prioritize error handling
- **Forms**: Use Zod for validation; model expected errors as return values
- **UI Framework**: Shadcn UI, Radix, and Tailwind Aria for components
- **Styling**: Mobile-first responsive design with Tailwind CSS
- **State Management**: Use 'nuqs' for URL search parameter state management
- **Performance**: Minimize 'use client' - favor React Server Components (RSC)
- **Client Components**: Wrap in Suspense with fallback; use dynamic loading for non-critical components
- **Images**: Use WebP format, include size data, implement lazy loading

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
- Follow Next.js docs for Data Fetching, Rendering, and Routing

## Environment Variables

Required for Zoho Campaigns integration:
- `ZOHO_CAMPAIGNS_CLIENT_ID`
- `ZOHO_CAMPAIGNS_CLIENT_SECRET`
- `ZOHO_CAMPAIGNS_REFRESH_TOKEN`
- `ZOHO_CAMPAIGNS_LIST_KEY`

## Brand Design System

### Custom Skills

Two brand-specific skills are available in `.claude/skills/`:

1. **frontend-aesthetics** - Aesthetic enhancement system
   - Provides creative visual enhancement and design sophistication
   - Distinctive typography recommendations (avoid Inter/Roboto)
   - Sophisticated color palettes and gradients
   - Micro-interactions and animation principles
   - Framework-specific guidelines (Tailwind, shadcn/ui, React)

2. **myb-brand-guide** - myBlueprint official brand guidelines
   - Official color system and typography scale
   - Component styling patterns (buttons, cards, forms)
   - React/shadcn and Tailwind implementations
   - Voice & tone guidelines for educational content

**Using Skills Together**:
```
Apply myb-brand-guide and frontend-aesthetics:
Create a landing page for the Industry Immersion Series
```

This combined approach ensures brand consistency while allowing creative, polished implementations.

### Typography Scale

Custom utilities in `globals.css`:
- `brand-h1` through `brand-h4`: Primary headings with Open Sans font
- `brand-subheader`, `brand-body1`, `brand-body2`: Content text styles
- Mobile-responsive typography with breakpoint adjustments

### Color Palette

In `tailwind.config.ts`:
- `navy` (#22224C): Primary headers and important text
- `brandBlue` (#0092ff): CTAs and accent elements
- `lightBlue` (#C6E7FF), `offWhite` (#F6F6FF): Background variations
- `neutral1-6`: Text color hierarchy from light to dark

### Custom Animations

Configured in `tailwind.config.ts`:
- `fadeIn`: 300ms fade-in effect
- `modalSlideIn`: Modal entrance animation
- `blob`: Organic blob animation (7s infinite)
- `gradient-shift`: Gradient background animation (3s infinite)

## Important Implementation Details

### 3D Sponsor Carousel
- `CircularSponorCarousel`: CSS transforms with perspective for 3D effect
- Automatic rotation with pause on hover
- Click handlers navigate directly to Notion sponsor page
- Custom logo sizing for specific sponsors

### Email Capture System
1. Reusable `EmailForm` component with source attribution
2. Form submission to `/api/email-capture`
3. OAuth token refresh from Zoho Campaigns
4. Bulk subscriber API call with error handling
5. Fallback logging and user-friendly error messages

### Timeline Activity System
- `Timeline` component renders monthly activities from `activities.ts`
- `TimelineCard` handles both promotional and sponsored activity cards
- Special rendering logic for September 2025 promotional month
- Custom button text and spacing for promotional cards
- Line break handling with `whitespace-pre-line` CSS class

### Activity Page Template System

**Fully Reusable Template**: All activity pages follow a consistent 6-component structure. Each component is 100% data-driven with no hardcoded content:

1. **ActivityHero**: Dynamic background images, taglines, and intro text per activity
2. **VideoAndExplainer**: Two separate videos per activity
   - Challenge Overview video (main educational content)
   - "How this Works" video (instructional/tutorial)
3. **ActivityDetailAndRubric**: Step-by-step activity instructions
   - Fully dynamic steps defined in data (not hardcoded)
   - Last step automatically renders submission button and rubric link
   - All URLs (submission, rubric) come from activity data
4. **SponsorResources**: Resource gallery with categorized links (videos, PDFs, articles)
5. **ActivityFAQ**: Expandable FAQ section with activity-specific questions
6. **IncentivesAndNavigation**: Cross-activity navigation with incentive highlighting

### Data Architecture for Activities

**Two-tier system** for maximum flexibility:

**Base `Activity` interface** (`src/data/activities.ts`):
- Core timeline data for all 8 activities (Oct 2025 - May 2026)
- Used by Timeline component on landing page
- Contains: id, month, year, title, description, sponsor, incentive, slug

**Extended `ActivityPageData` interface** (`src/data/activities.ts`):
- Full page content for complete activity pages
- Extends `Activity` with additional sections:
  - `hero`: backgroundImage, tagline, introText
  - `video`: Challenge Overview video details
  - `howThisWorksVideo`: Separate instructional video (optional)
  - `explainer`: Challenge Overview table data
  - `activityDetail`: description + steps array (fully customizable per activity)
  - `rubric`: criteria array + detailedRubricUrl
  - `submission`: url, deadline, instructions
  - `faqs`: question/answer pairs
  - `resources`: links with type categorization
  - `meta`: SEO/OG metadata

**Activity Page Data Files** (`src/data/activity-pages/[month].ts`):
- Each month has its own data file (e.g., `october.ts`, `november.ts`)
- Export `[month]Activity` object implementing `ActivityPageData`
- Imported in `src/app/[month]/page.tsx` via `getActivityPageData()` function

### Adding a New Activity Page

1. Create `src/data/activity-pages/[month].ts` following `ActivityPageData` interface
2. Add import in `src/app/[month]/page.tsx`
3. Add case to `getActivityPageData()` function
4. Ensure month slug is in `validActivityMonths` array
5. All components automatically render with new data - no code changes needed!

### Dynamic Status Calculation

`getCurrentStatus()` automatically determines if activity is `coming-soon`, `active`, or `ongoing` based on current date. Used for badge colors, button states, and conditional rendering throughout the app.

### Animation Layers
- WebGL animated background (OGL library) in Hero section
- Framer Motion for component transitions
- CSS animations for gradients and fade-ins
- Infinite logo slider with gradient edge masks

### Performance Patterns
- Server Components by default (client components only for interactivity)
- Local state management (no global state)
- Static data with helper functions for filtering
- Mobile-first responsive design

## Development Workflow

**Standard Development Process** (from `.claude/CLAUDE.md`):
1. Think through the problem and read relevant codebase files
2. Create a plan with actionable todo items using TodoWrite tool
3. Check in with user for plan verification before starting work
4. Work through todo items, marking them complete as you go
5. Provide high-level explanations of changes at each step
6. Keep changes simple - minimize code impact and avoid complex modifications
7. Add review section summarizing all changes made

**Key Development Principles**:
- **Simplicity First**: Every change should impact as little code as possible
- **Plan Before Execute**: Always create and verify plans before starting work
- **Progressive Disclosure**: Provide high-level explanations at each step
- **Prefer Editing**: Always prefer editing existing files over creating new ones
- **No Proactive Documentation**: Never create documentation files unless explicitly requested

## Testing

Currently no testing framework is configured. When implementing tests, consider:
- Jest or Vitest for unit tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests
