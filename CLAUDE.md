# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 14 application for the "Industry Immersion Series by myBlueprint" - a platform for Canadian students (grades 7-12) to discover career opportunities through industry partnerships, micro grants, and mentorship programs.

**Main application directory**: `/v1/` (all development happens in this subdirectory)

**Architecture**:
- **Frontend**: React/Next.js with TypeScript, using App Router
- **Styling**: Tailwind CSS with Shadcn UI components
- **Animation**: Framer Motion for page transitions and interactions
- **3D Graphics**: OGL library for WebGL background animations
- **Icons**: Lucide React and React Icons
- **Email Capture**: Simple API route for newsletter signups

## Development Commands

```bash
# Navigate to the main application directory first
cd v1

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

## Code Architecture

**Page Structure**: Single-page application with component-based sections:
- Header (navigation)
- Hero (landing section with animated background)
- HowItWorks, WhyMicroGrants, Timeline (information sections)
- Incentives/Sponsors (partner showcase with carousels)
- FAQ, StayInformed (user engagement)
- Footer

**Key Components**:
- `Sponsors.tsx` + `IncentivePartners.tsx`: Display sponsor information with carousels
- `SponsorAvatarGroup.tsx`: Shows limited sponsor previews with overflow indicators
- `CircularSponsorCarousel.tsx` (in ui/): Animated sponsor logo carousel
- `EmailForm.tsx`: Newsletter signup with validation
- `AnimatedBackground.tsx`: WebGL-based hero background using OGL

**Data Management**:
- `src/data/sponsors.ts`: Complete sponsor database with categorization by incentive type
- `src/data/carousel-sponsors.ts`: Specific sponsor data for carousel displays
- Helper functions for sponsor filtering and pagination

**API Routes**:
- `/api/email-capture`: POST endpoint for email newsletter signups (currently logs to console, ready for external service integration)

## Code Style Guidelines

**From .cursorrules**:
- Use TypeScript for all code; prefer interfaces over types
- Functional programming patterns; avoid classes
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Favor named exports for components
- Use "function" keyword for pure functions
- Implement early returns and guard clauses
- Minimize 'use client' - favor React Server Components
- Use Shadcn UI, Radix, and Tailwind for styling
- Mobile-first responsive design approach

**Component Structure**:
```
- Exported component
- Subcomponents
- Helper functions
- Static content
- Type definitions
```

**Directory Naming**: lowercase with dashes (e.g., `auth-wizard`)

## Sponsor System

The application features a comprehensive sponsor management system:

**Sponsor Categories**:
- `student`: Monthly microgrant providers for various challenges
- `completion`: Series completion incentive partners
- `educator`: Professional development and classroom resources
- `school`: School-wide recognition and technology upgrades

**Helper Functions** (in `sponsors.ts`):
- `getSponsorsByType()`: Filter sponsors by category
- `getLimitedSponsorsByType()`: Paginated sponsor retrieval with metadata

## Email Integration

The email capture system is set up for easy integration with external services:
- Validation for email format and required fields
- Ready for database storage and email service integration
- Source tracking for analytics (tracks where signup originated)
- Error handling with user-friendly messages

## UI Components

**Custom Components** (in `src/components/ui/`):
- `circular-sponsor-carousel.tsx`: Animated rotating sponsor display
- `infinite-slider.tsx`: Continuous scrolling content
- `sponsor-carousel.tsx`: Standard sponsor showcase
- `shape-landing-hero.tsx`: Geometric background shapes
- `avatar-group.tsx`: Grouped avatar display with overflow handling

**Shadcn Configuration**: Uses "new-york" style with CSS variables, neutral base color, RSC support enabled.