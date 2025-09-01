# Activities Hub Design Specification Document

## Project Context
Adding a new Activities Hub page to the Industry Immersion Series website that showcases all 8 monthly skill-building activities with clear status indicators and navigation to individual activity pages.

## Design System Alignment
**Must maintain consistency with existing site:**
- **Typography**: Open Sans font family with existing brand scale
- **Colors**: Primary blue (#0092ff), Navy (#22224C), Neutral scale (neutral1-6)
- **Border Radius**: 12-16px for cards (matching existing patterns)
- **Shadows**: Subtle elevation matching existing card shadows
- **Spacing**: 8px grid system
- **Animation**: Framer Motion for transitions, matching existing duration/easing

## Page Structure

### 1. Activities Hub Header Section

#### Visual Design
```
Height: 200-300px desktop | 150-200px mobile
Background: White with animated gradient elements
```

**Animated Title Treatment:**
- Text: "Monthly Challenges" 
- Style: brand-h2 (2.5rem/3.5rem desktop, 1.75rem/2.25rem mobile)
- Animation: Blue gradient effect similar to main hero
  - Gradient: `from-[#0070cc] via-[#00b4ff] to-[#0070cc]`
  - Animation: 3s ease-in-out infinite gradient shift
  - Apply to "Challenges" word only (keep "Monthly" in navy)

**Animated Background:**
- Reuse `AnimatedBackground` component pattern but with 50% opacity
- Blue gradient blobs with blur effect
- Subtle, not overwhelming (half intensity of main hero)

**Subheadline:**
- Text: "Explore eight unique industry-sponsored activities designed to build real-world skills and earn microgrants"
- Style: text-xl text-neutral4
- Max-width: 3xl, centered

**CTA Button:**
- Text: "View Active Challenge" (dynamically shows only when an activity is active)
- Style: Primary button (#0092ff background, white text)
- Size: px-6 py-3, min-height 44px
- Action: Smooth scroll to active month card with 80px offset
- Hidden when no active challenge (before October 2025)

### 2. Activity Cards Grid

#### Grid Layout
```
Desktop (1024px+): 3 columns, 32px gap
Tablet (768-1023px): 2 columns, 24px gap  
Mobile (320-767px): 1 column, 24px vertical spacing
Container max-width: 1200px
```

#### Individual Activity Card Design

**Card Container:**
```css
/* Base styles */
- Background: white
- Border-radius: 12-16px
- Padding: 24px (desktop) | 20px (mobile)
- Min-height: 200px (desktop) | 180px (mobile)
- Shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)
- Border: 2px solid transparent
- Transition: all 200ms ease-in-out

/* Active month special styling */
- Border: 2px solid #0092ff
- Transform: scale(1.02)
- Shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)

/* Hover state (desktop only) */
- Transform: translateY(-2px) scale(1.01)
- Shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

**Card Internal Layout:**

Desktop Layout (left to right):
```
[Logo Section] [Content Section] [Button Section]
   100x100px      Flexible          Auto width
```

Mobile Layout (stacked):
```
[Logo Section]
   80x80px
[Content Section]
[Button Section]
```

**Content Elements Specifications:**

1. **Sponsor Logo**
   - Desktop: 100x100px container
   - Mobile: 80x80px container
   - Object-fit: contain
   - Source: Use logos from infinite slider component
   - Specific logos from Hero section infinite slider

2. **Activity Title**
   - Font: brand-h4 (24px/32px)
   - Color: Navy (#22224C)
   - Examples: "Mining Industry Challenge", "Aviation & Aerospace Challenge"

3. **Month Label**
   - Font: brand-body2 (16px/24px)
   - Color: Neutral4
   - Format: "October 2025"

4. **Description**
   - Font: brand-body2 
   - Color: Neutral5
   - Max 60 characters
   - Line-clamp: 2 lines

5. **Incentive Display**
   - Icon: 💰 emoji or DollarSign from lucide-react
   - Text: "20 x $500 microgrants"
   - Font: brand-body2 medium weight
   - Color: #0092ff

6. **Status Badge** (Top-right corner)
   ```css
   Position: absolute top-4 right-4
   Padding: 4px 12px
   Border-radius: 12px
   Font: 12px medium
   
   /* Active state */
   Background: #0092ff
   Color: white
   
   /* Ongoing state */
   Background: #10B981
   Color: white
   
   /* Coming Soon state */
   Background: #E5E7EB
   Color: #374151
   ```

7. **View Activity Button**
   ```css
   /* Enabled (Active/Ongoing) */
   Background: #0092ff
   Color: white
   Padding: 12px 24px
   Border-radius: 8px
   Min-height: 44px
   Hover: background #0080e6
   
   /* Disabled (Coming Soon) */
   Background: #E5E7EB
   Color: #9CA3AF
   Cursor: not-allowed
   Opacity: 0.6
   ```

### 3. Status Logic Implementation

**Automatic Status Detection:**
```javascript
getCurrentStatus(activityMonth, activityYear) {
  const now = new Date();
  const activityDate = new Date(activityYear, monthToNumber(activityMonth));
  
  if (now < activityDate) return 'coming-soon';
  if (now.getMonth() === activityDate.getMonth() && 
      now.getFullYear() === activityDate.getFullYear()) return 'active';
  return 'ongoing';
}
```

**Special Active Month Handling:**
- Apply blue border and slight scale transform
- "View Active Challenge" button in hero scrolls to this card
- Ensure only one card can be active at a time

### 4. Footer Email Capture Section
When "Coming Soon" cards are clicked, scroll to this section:

**Reuse from main page StayInformed component:**
- Gradient background: `from-[#0092ff] to-[#0070cc]`
- White rounded container with shadow
- EmailForm component with source="activities"
- Same styling and functionality as main page

## Sponsor Logo Mapping
Use logos from the Hero section infinite slider:

```javascript
const activitySponsors = [
  { month: 'October', logo: '/logo1.gif', name: 'MiHR' },
  { month: 'November', logo: '/images/avatar-2.png', name: 'Coming Soon' },
  { month: 'December', logo: '/logo3.png', name: 'myBlueprint' },
  { month: 'January', logo: '/logo4.png', name: 'NAV CANADA' },
  { month: 'February', logo: '/logo5.png', name: 'Zurich Canada' },
  { month: 'March', logo: '/logo6.jpeg', name: 'H&R Block Canada' },
  { month: 'April', logo: '/logo7.png', name: 'Tourism HR Canada' },
  { month: 'May', logo: '/hvacr-career-connections.png', name: 'HRAI' }
];
```

## Navigation Integration

**Update Header component:**
- Add "Activities" between "Timeline" and "Incentives"
- Direct link to `/activities` (no smooth scroll)
- Mobile: Include in hamburger menu
- Desktop: Fit within existing navigation spacing

## Responsive Behavior

### Mobile (320-767px)
- Single column layout
- Full-width cards with 16px horizontal margin
- 24px vertical spacing between cards
- Stack all card content vertically
- Disable hover effects, use tap feedback
- Header height: 150-200px

### Tablet (768-1023px)
- 2-column grid
- 24px gaps
- Maintain touch-friendly targets
- Header height: 200-250px

### Desktop (1024px+)
- 3-column grid preferred
- 32px gaps
- Enable hover states
- Header height: 200-300px

## Animation Specifications

**Page Load Sequence:**
1. Header fades in with gradient animation (0-0.5s)
2. Cards stagger in from bottom (0.3s delay between each)
3. Use Framer Motion with existing patterns

**Scroll Animations:**
- Smooth scroll duration: 800ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Offset: 80px from top for sticky header

**Card Interactions:**
- Hover transition: 200ms ease-in-out
- Scale on hover: 1.01
- Active card pulse: subtle 0.02 scale animation

## Accessibility Requirements
- All interactive elements: min 44x44px
- Focus indicators matching existing site patterns
- ARIA labels for status badges
- Keyboard navigation support
- Screen reader announcements for status
- Respect prefers-reduced-motion

## File Structure
```
/app/activities/
  page.tsx              # Main activities hub page
  [month]/
    page.tsx           # Individual activity pages (future)

/components/
  ActivitiesHero.tsx   # Header section with CTA
  ActivityCard.tsx     # Reusable card component
  ActivityGrid.tsx     # Grid container with status logic
```

## Implementation Notes

1. **Reuse existing components:**
   - AnimatedBackground (with reduced opacity)
   - EmailForm component
   - Button styles from existing UI

2. **Data source:**
   - Create `/data/activities.ts` similar to sponsors.ts
   - Include all activity metadata
   - Helper functions for status calculation

3. **Performance:**
   - Lazy load images below fold
   - Use Next.js Image component
   - Optimize logo file sizes

4. **SEO:**
   - Page title: "Monthly Industry Challenges | Industry Immersion Series"
   - Meta description focusing on activities and microgrants
   - Structured data for educational programs

## Technical Implementation Guidelines

### Component Architecture
```typescript
// ActivityCard Component Props
interface ActivityCardProps {
  id: string;
  month: string;
  year: string;
  title: string;
  description: string;
  sponsor: {
    name: string;
    logo: string;
  };
  incentive: {
    total: number;
    individual: number;
    count: number;
  };
  status: 'coming-soon' | 'active' | 'ongoing';
  slug: string;
}
```

### Routing Strategy
- Activities hub: `/activities`
- Individual activities: `/activities/[month]`
- Use Next.js dynamic routing
- Implement 404 handling for invalid months

### State Management
- Use React hooks for local state
- Status calculation in server components
- Client-side scroll interactions only

### Performance Optimization
- Server-side render status badges
- Lazy load card images
- Preload active month assets
- Use CSS transforms for animations (GPU acceleration)

## Quality Checklist

### Design Consistency
- [ ] Typography matches brand scale
- [ ] Colors use existing palette
- [ ] Spacing follows 8px grid
- [ ] Border radius consistent (12-16px)
- [ ] Shadows match existing patterns

### Functionality
- [ ] Status auto-updates monthly
- [ ] Active challenge highlighted
- [ ] Smooth scroll works correctly
- [ ] Coming Soon cards disabled properly
- [ ] Navigation updated correctly

### Responsive Design
- [ ] Mobile layout single column
- [ ] Tablet layout 2 columns
- [ ] Desktop layout 3 columns
- [ ] Touch targets 44px minimum
- [ ] Images scale appropriately

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Reduced motion respected

### Performance
- [ ] Page loads under 2 seconds
- [ ] Images optimized
- [ ] Animations 60fps
- [ ] Lazy loading implemented
- [ ] No layout shift

This specification provides complete design direction while maintaining consistency with the existing Industry Immersion Series website. The Activities Hub will feel like a natural extension of the current site while effectively showcasing the monthly challenges.