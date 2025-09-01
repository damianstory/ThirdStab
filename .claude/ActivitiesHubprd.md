# Activities Hub Page - Product Requirements Document

## Document Overview
This PRD outlines the requirements for adding a new "Activities" section to the Industry Immersion Series website. This hub page will serve as a central launching point for all eight monthly skill-building activities, with navigation to individual activity landing pages.

## Product Vision
Create a centralized, mobile-first activities hub that provides students with clear visibility of all Industry Immersion Series activities, their current status, and easy access to participate in challenges that interest them.

## Product Context
The Industry Immersion Series currently presents activities in a timeline format on the main landing page. We need a dedicated space where students can explore all activities in detail, understand their status, and access individual activity pages as they become available.

## Objectives
- Provide a central hub for all eight monthly activities
- Enable clear navigation to individual activity landing pages
- Show activity status to guide student participation
- Maintain mobile-first responsive design consistency
- Support future expansion to individual activity pages

## Target Audience
- **Primary**: Students in grades 7-12 across Canada (predominantly mobile users)
- **Secondary**: Educators guiding students to appropriate activities
- **Tertiary**: Parents exploring opportunities for their children

## User Problems
Students currently need to:
- Scroll through the timeline to find specific activities
- Lack clear visibility of which activity is currently active
- Cannot easily access detailed information about each activity
- Have no central place to see all available activities at once

## Solution Overview
Create a dedicated `/activities` page featuring:
- 8 consistent, visually appealing activity cards
- Clear status indicators (Coming Soon, Active, Ongoing)
- Visual emphasis on the current month's activity
- Mobile-first responsive design matching existing site aesthetics
- Seamless navigation to individual activity landing pages

## User Stories

### Primary User Story
**As a** grade 7-12 student  
**I want to** see all available Industry Immersion activities in one place  
**So that I can** plan my participation and easily access the current month's challenge

### Supporting User Stories
- **As a student**, I want to know which activity is currently active so I can participate this month
- **As a student**, I want to see upcoming activities so I can prepare for future challenges
- **As a student**, I want to access past activities marked as ongoing so I can complete them at my own pace
- **As an educator**, I want a clear overview of all activities so I can guide my students effectively
- **As a mobile user**, I want the page to load quickly and be easy to navigate on my smartphone

## Functional Requirements

### 1. Navigation Update
**Requirement**: Add "Activities" navigation item

**Specifications**:
- Add new "Activities" link to main navigation
- Position between "Timeline" and "Incentives" items
- Link behavior:
  - From homepage: Direct link to `/activities` (no smooth scroll)
  - From activities page: Smooth scroll if implementing anchor sections
- Mobile menu: Include in hamburger menu with same positioning
- Maintain 44px minimum touch target

### 2. Activities Hub Page (`/activities`)

#### 2.1 Page Header Section
**Requirement**: Simple, informative header section

**Specifications**:
- **Headline**: "Monthly Industry Challenges" (brand-h2 styling)
- **Subheadline**: "Explore eight unique industry-sponsored activities designed to build real-world skills and earn microgrants"
- **Visual element**: Optional hero image or graphic (smaller than main landing page hero)
- **CTA button** (optional): "View This Month's Activity" 
  - Links directly to current active month
  - Use primary button styling (#0092ff)
  - Only display when an activity is active
- **Background**: Light gradient or subtle pattern consistent with site design
- **Height**: 200-300px desktop, 150-200px mobile

#### 2.2 Activity Cards Grid
**Requirement**: Responsive grid of 8 activity cards

**Layout Specifications**:
- **Mobile (320-767px)**: 
  - Single column
  - Full width cards with 16px horizontal margin
  - 24px vertical spacing between cards
- **Tablet (768-1023px)**: 
  - 2 columns
  - 24px gap between columns and rows
- **Desktop (1024px+)**: 
  - 2-3 columns optimal (3 preferred)
  - 32px gap between columns and rows
  - Max container width: 1200px

#### 2.3 Individual Activity Card Structure
**Requirement**: Consistent card component for each activity

**Visual Design**:
- **Dimensions**: 
  - Minimum height: 180px mobile, 200px desktop
  - Aspect ratio: Flexible based on content
- **Border radius**: 12-16px (match existing card patterns)
- **Shadow**: Subtle elevation (match existing cards)
- **Background**: White with hover state
- **Border**: 2px solid transparent, #0092ff for active month
- **Padding**: 20px mobile, 24px desktop

**Content Layout - Desktop**:
```
[Logo]  [Content Block]  [Button]
        - Title
        - Month
        - Description
        - Incentive
        - Status Badge
```

**Content Layout - Mobile**:
```
[Logo]
[Content Block]
- Title
- Month  
- Description
- Incentive
- Status Badge
[Button]
```

**Content Elements**:
1. **Sponsor Logo**
   - Size: 80x80px mobile, 100x100px desktop
   - Object-fit: contain
   - Fallback: Placeholder image if not available

2. **Activity Title**
   - Font: brand-h4 styling
   - Color: Navy (#22224C)
   - Example: "Mining Industry Challenge"

3. **Month Label**
   - Font: brand-body2
   - Color: Neutral4
   - Format: "October 2025"

4. **Brief Description**
   - Font: brand-body2
   - Color: Neutral5
   - Max length: 60 characters
   - Example: "Explore careers in mining and natural resources"

5. **Incentive Display**
   - Font: brand-body2 with medium weight
   - Color: #0092ff
   - Format: "💰 20 x $500 microgrants"
   - Icon: Money emoji or DollarSign icon from lucide-react

6. **Status Badge**
   - Position: Top right corner of card
   - Padding: 4px 12px
   - Border radius: 12px
   - Font: 12px medium
   - States:
     - **Active**: Background #0092ff, white text
     - **Ongoing**: Background green-500, white text  
     - **Coming Soon**: Background gray-300, gray-700 text

7. **View Activity Button**
   - Text: "View Activity" (consistent across all cards)
   - Style: Primary button if enabled, disabled state if Coming Soon
   - Width: Full width mobile, auto desktop
   - States:
     - **Enabled** (Active/Ongoing): #0092ff background, hover state
     - **Disabled** (Coming Soon): Gray background, no hover, cursor not-allowed

**Interactive Behaviors**:
- **Hover effect** (desktop only):
  - Card: Slight elevation increase (larger shadow)
  - Transform: scale(1.02)
  - Transition: 200ms ease-in-out
  - Button: Darker shade if enabled
- **Click behavior**:
  - Entire card clickable on mobile
  - Button click navigates to `/activities/[month]`
  - Disabled state prevents navigation for Coming Soon

### 3. Status Logic & Rules

**Status Determination**:
- **Active**: 
  - Current calendar month only
  - Only one card can be Active at a time
  - Receives visual emphasis (border highlight)
  
- **Ongoing**: 
  - Any past month that has been Active
  - Remains clickable and accessible
  - Students can complete past activities
  
- **Coming Soon**: 
  - Future months not yet reached
  - View Activity button disabled
  - Card remains visible but non-interactive

### 4. Routing Architecture

**URL Structure**:
- Hub page: `/activities`
- Individual activity pages: `/activities/[month]`
  - Format: Lowercase month name
  - Examples: `/activities/october`, `/activities/november`

**Implementation Notes**:
- Create dynamic route structure to support all months
- Prepare for individual landing page templates (future PRD)
- Include 404 handling for invalid month routes

## Content Specifications

### Activity Data Structure
Each activity requires:
```javascript
{
  id: string,
  month: string, // "October"
  year: string, // "2025"
  title: string,
  description: string,
  sponsor: {
    name: string,
    logo: string // file path
  },
  incentive: {
    total: number, // 10000
    individual: number, // 500
    count: number // 20
  },
  status: "coming-soon" | "active" | "ongoing",
  slug: string // "october"
}
```

### Placeholder Content

**October 2025**
- Logo: `/images/mihr-logo.jpg`
- Title: "Mining Industry Challenge"
- Description: "Explore careers in mining and natural resources"
- Status: Will be "active" in October 2025

**November 2025**
- Logo: `/images/avatar-2.png`
- Title: "Coming Soon"
- Description: "Industry partner to be announced"
- Status: "coming-soon" until November 2025

**December 2025**
- Logo: `/logo3.png`
- Title: "myBlueprint Challenge"
- Description: "Discover career planning and exploration tools"
- Status: "coming-soon" until December 2025

**January 2026**
- Logo: `/images/nav-canada.png`
- Title: "Aviation & Aerospace Challenge"
- Description: "Navigate careers in aviation and air traffic control"
- Status: "coming-soon" until January 2026

**February 2026**
- Logo: `/logo5.png`
- Title: "Insurance Industry Challenge"
- Description: "Understanding risk management and insurance careers"
- Status: "coming-soon" until February 2026

**March 2026**
- Logo: `/logo6.jpeg`
- Title: "Tax & Finance Challenge"
- Description: "Explore careers in accounting and financial services"
- Status: "coming-soon" until March 2026

**April 2026**
- Logo: `/logo7.png`
- Title: "Tourism & Hospitality Challenge"
- Description: "Discover opportunities in tourism and hospitality"
- Status: "coming-soon" until April 2026

**May 2026**
- Logo: `/hvacr-career-connections.png`
- Title: "Skilled Trades Challenge"
- Description: "Hands-on careers in HVAC and refrigeration"
- Status: "coming-soon" until May 2026

## Non-Functional Requirements

### Performance Requirements
- Page load time: <2 seconds on 3G connection
- Time to Interactive: <3 seconds
- Lazy load images below the fold
- Use optimized sponsor logos from existing assets
- Implement proper image sizing and srcset

### Accessibility Requirements
- WCAG 2.1 AA compliance
- All interactive elements keyboard navigable
- Focus indicators visible and clear
- Screen reader announces:
  - Activity status
  - Disabled state for Coming Soon activities
  - Current/active month
- Alt text for all sponsor logos
- Minimum touch targets: 44x44px
- Color contrast ratios meet standards

### Mobile-First Requirements
- Touch-friendly interface
- Thumb-reachable key actions
- No horizontal scrolling
- Fast load on mobile networks
- Optimized images for mobile bandwidth
- Smooth scrolling performance

### Browser Compatibility
- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Edge (last 2 versions)
- Safari iOS (last 2 versions)
- Chrome Android (last 2 versions)

## Technical Requirements

### Architecture Alignment
- Follow Next.js 14 App Router patterns
- Utilize React Server Components where possible
- Minimal client-side JavaScript
- Follow existing component structure

### Component Reusability
- Create reusable ActivityCard component
- Leverage existing button components
- Use existing responsive utilities
- Maintain design token consistency

### Data Management
- Static data for initial implementation
- Prepare for future dynamic content
- Consider future CMS integration
- Status calculation based on current date

### SEO Considerations
- Proper meta tags for activities page
- Structured data for activities
- Semantic HTML structure
- Meaningful page title and description

## Success Metrics

### Engagement Metrics
- Click-through rate from hub to individual activities >30%
- Average time on page >45 seconds
- Mobile vs desktop usage tracking
- Most clicked activities ranking

### Performance Metrics
- Page Speed Score >90
- First Contentful Paint <1.5s
- Largest Contentful Paint <2.5s
- Cumulative Layout Shift <0.1

### Usability Metrics
- Task completion rate >95% (finding and accessing an activity)
- Error rate <5% (mis-clicks, wrong navigation)
- Mobile usability score >95%

## Future Considerations
1. **Individual Activity Landing Pages** (separate PRD to follow)
   - Detailed activity information
   - Submission forms
   - Resources and materials
   - Progress tracking

2. **Enhanced Features** (Phase 2)
   - User authentication
   - Activity completion tracking
   - Progress indicators on cards
   - Bookmark/favorite activities
   - Filter by status or date
   - Search functionality

3. **Personalization** (Phase 3)
   - Recommended activities based on interests
   - Completion certificates
   - Student portfolio integration
   - School-specific views

## Dependencies
- Existing sponsor logos from infinite slider component
- Navigation component update capability
- Routing system for future pages
- Current design system components
- Existing responsive breakpoint system

## Acceptance Criteria
- [ ] Activities link appears in main navigation
- [ ] /activities page loads successfully
- [ ] All 8 activity cards display correctly
- [ ] Current month shows as "Active" with border highlight
- [ ] Past months show as "Ongoing" 
- [ ] Future months show as "Coming Soon" with disabled button
- [ ] Cards are responsive across all breakpoints
- [ ] Hover effects work on desktop
- [ ] Click/tap navigates to correct month page (for enabled activities)
- [ ] Page loads in under 2 seconds on 3G
- [ ] All accessibility requirements met
- [ ] Visual design consistent with existing site

## Timeline & Priority
- **Priority**: High - needed before October 2025 launch
- **Estimated Development**: 3-5 days
- **Testing & QA**: 2 days
- **Total Timeline**: 1 week

## Appendix

### A. Mobile-First Design Principles
- Start with 320px width constraints
- Progressive enhancement for larger screens
- Touch-first interaction patterns
- Performance budget for mobile networks

### B. Existing Design Tokens Reference
- Primary blue: #0092ff
- Navy: #22224C
- Neutral scale: neutral1-6
- Border radius: 12-16px for cards
- Shadow: Consistent with existing cards

### C. Component Reuse Opportunities
- Button component from existing UI
- Card patterns from Incentives section
- Grid system from Sponsors section
- Status badges (new, but follow existing pill patterns)

---

