# Individual Activity Landing Pages - Product Requirements Document

## Document Overview
This PRD outlines the requirements for creating individual landing pages for each monthly activity in the Industry Immersion Series. These pages will serve as detailed activity hubs where students can learn about the monthly challenge, understand requirements, access resources, and submit their work.

## Product Vision
Transform the activity cards from the main landing page into comprehensive, engaging activity pages that provide students with everything they need to successfully participate in each month's industry challenge.

## Objectives
- Provide detailed information about each monthly activity in a structured, accessible format
- Create a reusable template that can be easily customized for each month's sponsor
- Maintain mobile-first responsive design for student accessibility
- Streamline the submission process with clear CTAs and requirements
- Support activity discovery through integrated navigation

## Target Audience
- **Primary**: Students in grades 7-12 across Canada (predominantly mobile users)
- **Secondary**: Educators guiding students through activities
- **Tertiary**: Parents and sponsors reviewing activity details

## User Problems
- Students need comprehensive information about each activity beyond the brief card description
- Users require clear submission guidelines and rubric criteria
- Students need access to sponsor-specific resources and materials
- Users want to understand the incentive structure for each activity
- Students need an easy way to navigate between different monthly activities

## Solution Overview
Create templated individual activity pages at `/{month}` URLs featuring:
- Comprehensive activity information with sponsor branding
- Video explainers and visual timelines
- Clear rubric and submission guidelines
- Sponsor resources and FAQs
- Integrated navigation to other activities
- Mobile-optimized responsive design

## User Stories

### Primary User Stories
**As a** grade 7-12 student  
**I want to** access detailed information about a monthly activity  
**So that I can** understand requirements and successfully complete the challenge

**As a** student viewing an active month  
**I want to** see a countdown timer and clear submission button  
**So that I can** submit my work before the deadline

**As an** educator  
**I want to** access activity resources and rubrics  
**So that I can** guide my students effectively

### Supporting User Stories
- **As a student**, I want to watch an intro video so I can understand the industry context
- **As a student**, I want to see the rubric criteria so I know how my work will be evaluated
- **As a student**, I want to access sponsor resources so I can learn more about the industry
- **As a student**, I want to navigate to other activities so I can plan my participation
- **As a mobile user**, I want the page to load quickly and be easy to navigate on my phone

## Functional Requirements

### 1. URL Architecture Update

**Requirement**: Update routing to support individual activity pages

**Specifications**:
- **URL Pattern**: `/{month}` (e.g., `/october`, `/november`)
- **Valid Routes**: October through May (8 activity pages)
- **No Routes for**: September (promotional) or June (incentive distribution)
- **404 Handling**: Invalid month routes redirect to main activities section
- **Dynamic Routing**: Use Next.js dynamic routes with `[month]` parameter

**Implementation**:
```
/app/
  [month]/
    page.tsx  # Dynamic activity page template
```

### 2. Data Architecture Extension

**Requirement**: Extend activities.ts to support full page content

**Extended Data Structure**:
```typescript
interface ActivityPageData extends Activity {
  // Hero Section
  hero: {
    backgroundImage?: string;
    tagline: string;
    introText: string;
  };
  
  // Video Section
  video: {
    embedUrl: string;
    title: string;
    description: string;
  };
  
  // Explainer Table/Timeline
  explainer: {
    title: string;
    rows: Array<{
      label: string;
      content: string;
    }>;
  };
  
  // Activity Detail & Rubric
  activityDetail: {
    description: string;
    requirements: string[];
    deliverables: string[];
  };
  
  rubric: {
    criteria: Array<{
      category: string;
      weight: number;
      description: string;
    }>;
    totalPoints: number;
  };
  
  // Submission
  submission: {
    googleFormUrl: string;
    deadline: Date;
    instructions: string;
  };
  
  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Resources
  resources: Array<{
    title: string;
    description: string;
    url: string;
    type: 'pdf' | 'video' | 'link' | 'article';
    thumbnail?: string;
  }>;
  
  // Meta/SEO
  meta: {
    title: string;
    description: string;
    ogImage: string; // Use sponsor logo
  };
}
```

### 3. Page Template Structure

#### 3.1 Hero Section
**Requirements**: 
- Full-width hero with sponsor branding
- Industry Immersion Series logo (top left)
- Sponsor logo (top right)
- Activity title and tagline
- Month/Year display
- Brief introduction text
- Optional background image/pattern

**Mobile Considerations**:
- Stack logos vertically on mobile
- Reduce hero height on mobile (vh-50 instead of vh-75)
- Ensure text remains readable over any background

#### 3.2 Intro Video Section
**Requirements**:
- Two-column layout (video left, explainer table right)
- Embedded YouTube/Vimeo player
- Responsive 16:9 aspect ratio
- Title and description text

**Mobile Considerations**:
- Stack video above table on mobile
- Full-width video player
- Collapsible table rows if needed

#### 3.3 Explainer Table/Timeline
**Requirements**:
- Structured information display
- Key dates and milestones
- Requirements overview
- Visual timeline or table format

**Specifications**:
- Use existing Timeline component styling
- Clear label/value pairs
- Mobile-friendly scrolling if needed

#### 3.4 Activity Detail & Rubric Section
**Requirements**:
- Two-column layout
- Left: Detailed activity description, requirements, deliverables
- Right: Rubric criteria and submission area

**Rubric Display**:
- Category breakdown with point values
- Weight percentages
- Clear evaluation criteria
- Total points display

**Submission Area** (Right Column):
- Countdown timer (for active months only)
  - Display: "X days, Y hours remaining"
  - Prominent positioning above submit button
  - Only shows during active month
- Submit button
  - Text: "Submit Your Activity"
  - Opens Google Form in new tab
  - Disabled state for non-active months
- Submission instructions

**Mobile Considerations**:
- Stack columns vertically
- Rubric as expandable accordion
- Fixed submit button at bottom of viewport (optional)

#### 3.5 FAQ Section
**Requirements**:
- Activity-specific FAQs
- Accordion-style interface
- Reuse existing FAQ component styling

**Content Examples**:
- "What format should my submission be?"
- "Can I work in a group?"
- "How will winners be selected?"
- "When will results be announced?"

#### 3.6 Sponsor Resources Section
**Requirements**:
- Grid of resource cards
- 2-3 columns on desktop, 1 on mobile
- Each card includes:
  - Icon/thumbnail
  - Resource title
  - Brief description
  - Download/view link

**Resource Types**:
- PDF guides
- Video tutorials
- External articles
- Interactive tools

#### 3.7 Incentives Reminder Section
**Requirements**:
- Two-part section

**Left Half**: Incentives reminder
- Smaller version of 4-card incentive grid from main page
- Quick reminder of available prizes
- Link to full incentives section

**Right Half**: Activity navigation
- Mini activity grid (2x2 on desktop, 2x4 on mobile)
- Current activity highlighted
- Quick navigation to other months
- Coming soon states maintained

#### 3.8 Footer Section
**Requirements**:
- Consistent with main site footer
- Optional email capture for activity updates
- Copyright and links

### 4. Interactive Features

#### 4.1 Countdown Timer
**Specifications**:
- Display format: "X days, Y hours, Z minutes"
- Updates in real-time
- Only visible during active month
- Prominent but not distracting
- Mobile-friendly size

#### 4.2 Navigation Between Activities
**Requirements**:
- Previous/Next activity arrows (desktop)
- Activity grid for quick navigation
- Maintain coming soon/active/ongoing states
- Smooth transitions

#### 4.3 Resource Interactions
**Requirements**:
- Click to download PDFs
- Open videos in modal or new tab
- Track resource downloads (analytics)

### 5. Template Customization System

**Approach**: Configuration-driven content
```typescript
// /data/activity-pages/october.ts
export const octoberActivity: ActivityPageData = {
  // All content for October activity
  month: 'October',
  year: '2025',
  hero: {
    tagline: 'Explore Mining Careers',
    // ... etc
  },
  // ... rest of content
};
```

**Benefits**:
- Easy content updates without touching components
- Consistent structure across all activities
- Version control friendly
- No database required

## Non-Functional Requirements

### Performance Requirements
- Page load time: <2 seconds on 3G
- Video lazy loading
- Optimized images with Next.js Image
- Resource PDFs hosted on CDN
- Minimal JavaScript for interactions

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation for all interactions
- Screen reader friendly accordions and timers
- Alt text for all images and resources
- Video captions/transcripts

### Mobile-First Requirements
- Touch-friendly tap targets (44px minimum)
- Readable font sizes (16px minimum)
- Appropriate spacing for mobile
- Swipeable resource cards (optional)
- Optimized images for mobile bandwidth

### SEO Requirements
- Unique meta tags per activity
- Open Graph images using sponsor logos
- Structured data for educational content
- Semantic URL structure
- Descriptive page titles

## Technical Requirements

### Component Reusability
- Leverage existing components:
  - FAQ accordion
  - Card components
  - Timeline styling
  - Button components
  - Grid layouts
- Create new reusable components:
  - CountdownTimer
  - RubricTable
  - ResourceCard
  - VideoEmbed

### State Management
- Timer state (client-side only)
- Accordion open/close states
- No global state required
- URL-based navigation

### Data Loading Strategy
- Static generation at build time
- No API calls required
- All content from local data files
- ISR not needed (content changes monthly)

## Success Metrics

### Engagement Metrics
- Page views per activity
- Time on page >2 minutes
- Resource download rates
- Video completion rates
- Submit button click rate

### Performance Metrics
- Core Web Vitals scores >90
- Mobile usability score >95
- Page load time <2s on 3G

### Conversion Metrics
- Submission rate from page visitors
- Navigation to other activities
- Email signup rate (if included)

## Implementation Phases

### Phase 1: Template Development
1. Create base template component
2. Implement all section components
3. Set up dynamic routing
4. Create responsive layouts

### Phase 2: Content Integration
1. Extend activities.ts structure
2. Create content files for each month
3. Implement countdown timer
4. Add navigation between activities

### Phase 3: Polish & Optimization
1. Performance optimization
2. Accessibility audit
3. Mobile experience refinement
4. SEO implementation

## Content Management

### Monthly Content Updates
Each month requires:
- Hero content and imagery
- Video URL and description
- Activity details and requirements
- Rubric criteria (may be consistent)
- 5-8 FAQs
- 6-10 sponsor resources
- Google Form URL
- Submission deadline

### Content Preparation Timeline
- Month -2: Gather sponsor materials
- Month -1: Prepare all content
- Month 0: Page goes live

## Risk Mitigation

### Technical Risks
- **Large page size**: Mitigate with lazy loading and optimization
- **Video loading issues**: Provide fallback content
- **Timer accuracy**: Use server time for deadline calculations

### Content Risks
- **Missing sponsor content**: Have placeholder templates ready
- **Resource availability**: Host critical resources locally
- **Form submission issues**: Provide alternative submission email

## Dependencies
- Sponsor logos and branding assets
- Google Form creation for each month
- Video content from sponsors
- Resource materials (PDFs, guides)
- Rubric criteria finalization

## Acceptance Criteria
- [ ] Dynamic routing works for all 8 activity months
- [ ] Template renders correctly with sample content
- [ ] All sections responsive on mobile
- [ ] Countdown timer displays for active month
- [ ] Submit button opens Google Form in new tab
- [ ] Resources downloadable/viewable
- [ ] FAQ accordions functional
- [ ] Navigation between activities works
- [ ] Page loads in <2 seconds
- [ ] Accessibility standards met
- [ ] SEO meta tags implemented
- [ ] Visual design consistent with main site

## Future Considerations
1. **Submission Gallery**: Display selected submissions
2. **Progress Tracking**: User accounts to track completion
3. **Social Sharing**: Share progress on social media
4. **Leaderboards**: School/region participation metrics
5. **Push Notifications**: Deadline reminders
6. **Offline Support**: PWA capabilities

---
