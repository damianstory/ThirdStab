# Individual Activity Landing Pages - Design Specification Document

## Document Overview
This design specification document provides comprehensive visual and interaction guidelines for the individual activity landing pages of the Industry Immersion Series. All specifications align with the existing design system while creating a flexible template for monthly customization.

## Design System Foundation

### Core Design Principles
- **Mobile-first responsive design** with touch-friendly interfaces
- **Bold simplicity** with clear visual hierarchy
- **Consistent branding** matching the main landing page
- **Performance-conscious** design decisions
- **Accessibility-first** approach with WCAG 2.1 AA compliance

### Color Palette Application

**Primary Colors**
- **Brand Blue**: `#0092ff` - CTAs, links, active states
- **Navy**: `#22224C` - Primary headings, important text
- **Light Blue**: `#E6F4FF` - Background accents, hover states
- **Off White**: `#F8FAFB` - Section backgrounds

**Neutral Scale**
- `neutral1`: `#F5F5F5` - Lightest backgrounds
- `neutral2`: `#E0E0E0` - Borders, dividers
- `neutral3`: `#BDBDBD` - Disabled states
- `neutral4`: `#757575` - Secondary text
- `neutral5`: `#616161` - Body text
- `neutral6`: `#424242` - Dark text

**Semantic Colors**
- **Success**: `#10B981` - Submission confirmations
- **Warning**: `#F59E0B` - Deadline warnings
- **Error**: `#EF4444` - Form errors
- **Info**: `#3B82F6` - Information badges

### Typography Scale

**Font Family**: Open Sans (consistent with main site)

**Heading Hierarchy**
- **Page Title** (brand-h1): 64px/80px desktop, 32px/40px mobile
- **Section Headers** (brand-h2): 40px/56px desktop, 28px/36px mobile
- **Subsection Headers** (brand-h3): 32px/48px desktop, 24px/32px mobile
- **Card Titles** (brand-h4): 24px/36px desktop, 20px/28px mobile
- **Body Large** (brand-body1): 20px/32px
- **Body Regular** (brand-body2): 16px/28px
- **Caption**: 14px/20px

### Spacing System
Base unit: `8px`
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Wide**: 1440px+

## Section-by-Section Specifications

### 1. Hero Section

#### Visual Design
**Container**
- Height: 500px desktop, 400px tablet, 350px mobile
- Background: White with optional subtle gradient overlay
- Padding: 48px desktop, 32px tablet, 24px mobile

**Logo Placement**
- Industry Immersion logo: Top left, 140px width desktop, 100px mobile
- Sponsor logo: Top right, max 200px width, max 100px height
- Mobile: Stack vertically, center-aligned

**Typography**
- Activity Title: brand-h1, Navy (#22224C)
- Month/Year Badge: 14px, uppercase, #0092ff background, white text, rounded-full (24px)
- Tagline: brand-h3, neutral5
- Intro Text: brand-body1, neutral4, max-width 800px

**Visual Elements**
- Optional background pattern: 10% opacity geometric shapes
- Gradient mesh: Subtle blue gradient (5% opacity) from top-right

#### Responsive Behavior
**Mobile (320-767px)**
```css
.hero-section {
  min-height: 350px;
  padding: 24px 16px;
  text-align: center;
}
.logos {
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
```

**Tablet (768-1023px)**
```css
.hero-section {
  min-height: 400px;
  padding: 32px 24px;
}
```

**Desktop (1024px+)**
```css
.hero-section {
  min-height: 500px;
  padding: 48px 32px;
}
.logos {
  justify-content: space-between;
}
```

### 2. Intro Video & Explainer Section

#### Visual Design
**Container**
- Background: #F8FAFB (off-white)
- Padding: 64px 0 desktop, 48px 0 tablet, 32px 0 mobile
- Max-width: 1200px, centered

**Layout Grid**
- Desktop: 2 columns, 48px gap
- Tablet: 2 columns, 32px gap
- Mobile: Single column, stack vertically

**Video Component (Left Column)**
- Aspect ratio: 16:9
- Border-radius: 12px
- Box-shadow: 0 4px 6px rgba(0,0,0,0.1)
- Placeholder: Blurred sponsor logo with play button overlay

**Explainer Table (Right Column)**
- Background: White
- Border-radius: 12px
- Padding: 24px
- Border: 1px solid neutral2

**Table Styling**
```css
.explainer-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}
.table-row {
  padding: 16px 24px;
  border-bottom: 1px solid #E0E0E0;
}
.table-row:last-child {
  border-bottom: none;
}
.table-label {
  font-weight: 600;
  color: #22224C;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.table-content {
  color: #616161;
  font-size: 16px;
  margin-top: 4px;
}
```

#### Mobile Adaptations
- Video takes full width
- Table below video with 24px gap
- Collapsible rows for lengthy content
- Minimum touch target: 44px for interactive elements

### 3. Activity Detail & Rubric Section

#### Visual Design
**Container**
- Background: White
- Padding: 64px 0
- Max-width: 1200px

**Two-Column Layout**
- Desktop: 60/40 split (detail/rubric)
- Gap: 48px
- Mobile: Stack vertically

**Activity Detail (Left)**
- Heading: brand-h3, Navy
- Description: brand-body1, neutral5, line-height 1.8
- Requirements list:
  - Bullet points with #0092ff color
  - 16px spacing between items
  - Indented 24px from left

**Rubric Card (Right)**
- Background: Linear gradient (#F8FAFB to white)
- Border: 2px solid #0092ff
- Border-radius: 16px
- Padding: 32px
- Position: Sticky top-80px on desktop

**Rubric Table**
```css
.rubric-header {
  background: #0092ff;
  color: white;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 8px 8px 0 0;
}
.rubric-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 12px 16px;
  border-bottom: 1px solid #E0E0E0;
}
.rubric-category {
  font-weight: 500;
  color: #22224C;
}
.rubric-weight {
  text-align: right;
  color: #0092ff;
  font-weight: 600;
}
```

**Submission Area**
- Countdown Timer (Active months only):
  ```css
  .countdown-timer {
    background: linear-gradient(135deg, #0092ff, #0070cc);
    color: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 24px;
  }
  .countdown-number {
    font-size: 36px;
    font-weight: 700;
  }
  .countdown-label {
    font-size: 14px;
    opacity: 0.9;
  }
  ```

- Submit Button:
  ```css
  .submit-button {
    width: 100%;
    padding: 16px 32px;
    background: #0092ff;
    color: white;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s;
    box-shadow: 0 4px 6px rgba(0,146,255,0.2);
  }
  .submit-button:hover {
    background: #0080e6;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,146,255,0.3);
  }
  .submit-button:disabled {
    background: #BDBDBD;
    cursor: not-allowed;
  }
  ```

#### Mobile Adaptations
- Full-width cards
- Rubric as expandable accordion
- Sticky submit button at bottom of viewport (optional)
- Countdown timer: Reduce font sizes by 20%

### 4. FAQ Section

#### Visual Design
**Container**
- Background: #F8FAFB
- Padding: 64px 0
- Max-width: 900px, centered

**Section Header**
- brand-h2, centered
- Margin-bottom: 48px

**FAQ Accordion (Reuse existing component)**
- Background: White
- Border-radius: 12px
- Margin-bottom: 16px
- Padding: 20px 24px
- Transition: all 0.3s ease

**Question State**
```css
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #22224C;
  font-size: 18px;
  font-weight: 500;
}
.faq-icon {
  transition: transform 0.3s;
  color: #0092ff;
}
.faq-question[aria-expanded="true"] .faq-icon {
  transform: rotate(180deg);
}
```

**Answer State**
```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  color: #616161;
  line-height: 1.6;
}
.faq-answer.open {
  max-height: 500px;
  padding-top: 16px;
}
```

### 5. Sponsor Resources Section

#### Visual Design
**Container**
- Background: White
- Padding: 64px 0

**Section Header**
- brand-h2 with sponsor name
- Subtitle: "Resources to help you succeed"

**Resource Grid**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

**Resource Card**
```css
.resource-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s;
  cursor: pointer;
}
.resource-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  border-color: #0092ff;
}
.resource-icon {
  width: 48px;
  height: 48px;
  background: #E6F4FF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #0092ff;
}
.resource-title {
  font-size: 18px;
  font-weight: 600;
  color: #22224C;
  margin-bottom: 8px;
}
.resource-description {
  font-size: 14px;
  color: #757575;
  line-height: 1.5;
  margin-bottom: 16px;
}
.resource-link {
  color: #0092ff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
```

**Resource Type Indicators**
- PDF: Red accent color (#EF4444)
- Video: Purple accent (#8B5CF6)
- Article: Green accent (#10B981)
- Link: Blue accent (#0092ff)

### 6. Incentives Reminder Section

#### Visual Design
**Container**
- Background: Linear gradient (white to #F8FAFB)
- Padding: 64px 0

**Two-Column Layout**
- Desktop: 50/50 split
- Gap: 48px
- Mobile: Stack vertically

**Left Column - Incentives Grid**
- Mini version of main page incentive cards
- 2x2 grid on desktop
- Scale: 80% of original size
- Remove detailed descriptions, keep amounts
- "View All Incentives" link button at bottom

**Right Column - Activity Navigation**
- Header: "Explore Other Activities"
- 2x4 grid of mini activity cards
- Current activity highlighted with border
- Card height: 100px
- Show: Logo, Month, Status badge

**Mini Activity Card**
```css
.mini-activity-card {
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
}
.mini-activity-card:hover {
  border-color: #0092ff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.mini-activity-card.current {
  border: 2px solid #0092ff;
  background: #E6F4FF;
}
.mini-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.mini-info {
  flex: 1;
}
.mini-month {
  font-size: 12px;
  color: #757575;
  text-transform: uppercase;
}
.mini-status {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 4px;
}
```

### 7. Footer Section

#### Visual Design
- Reuse exact footer from main site
- Optional: Add "Back to Activities" button above standard footer
- Maintain consistent padding and styling

## Interactive Elements

### Countdown Timer Component
```javascript
// Visual structure
<div className="countdown-container">
  <div className="countdown-item">
    <span className="countdown-number">{days}</span>
    <span className="countdown-label">Days</span>
  </div>
  <div className="countdown-separator">:</div>
  <div className="countdown-item">
    <span className="countdown-number">{hours}</span>
    <span className="countdown-label">Hours</span>
  </div>
  <div className="countdown-separator">:</div>
  <div className="countdown-item">
    <span className="countdown-number">{minutes}</span>
    <span className="countdown-label">Minutes</span>
  </div>
</div>
```

### Button States
**Primary Button (Submit)**
- Default: #0092ff background, white text
- Hover: #0080e6 background, translateY(-2px)
- Active: #0070cc background, scale(0.98)
- Disabled: #BDBDBD background, opacity 0.6

**Secondary Button (Resources)**
- Default: White background, #0092ff border and text
- Hover: #E6F4FF background
- Active: #CCE7FF background

### Loading States
- Skeleton screens for content loading
- Shimmer effect: Linear gradient animation
- Spinner: #0092ff with 2px white border

## Animation Specifications

### Page Load Sequence
1. Hero fades in: 0-0.5s, opacity 0→1, translateY(20px)→0
2. Video section: 0.3-0.8s, same animation
3. Content sections: Stagger 0.1s between each
4. Use Intersection Observer for scroll-triggered animations

### Micro-interactions
- Button hover: 200ms ease-out
- Accordion expand: 300ms ease-in-out
- Card hover: 200ms ease-out
- Tab switches: 250ms ease-in-out

### Scroll Behaviors
- Smooth scroll for anchor links: 800ms duration
- Parallax on hero background (optional): 0.5 speed
- Sticky elements: Use CSS position: sticky

## Mobile-Specific Adaptations

### Touch Interactions
- Minimum touch target: 44x44px
- Increased padding on interactive elements
- Swipe gestures for resource cards (optional)
- Pull-to-refresh disabled

### Performance Optimizations
- Lazy load video embeds
- Progressive image loading
- Reduced animation on low-end devices
- CSS containment for better paint performance

### Viewport Considerations
- Safe area insets for notched devices
- Minimum font size: 16px (prevents zoom on iOS)
- Landscape orientation support
- Bottom navigation clearance: 80px

## Accessibility Specifications

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum
- Focus indicators: 3:1 against all backgrounds

### Keyboard Navigation
- Tab order follows visual hierarchy
- Skip links to main content
- Focus trap in modals
- Escape key closes overlays

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for interactive elements
- Live regions for countdown timer
- Descriptive link text

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Reusability Matrix

| Component | Reused From Main Site | New Component | Customization Needed |
|-----------|----------------------|---------------|---------------------|
| Header | ✓ | | Add activity name |
| FAQ Accordion | ✓ | | Content only |
| Button styles | ✓ | | None |
| Card layouts | ✓ | | Sizing adjustments |
| Typography | ✓ | | None |
| Countdown Timer | | ✓ | Per activity |
| Rubric Table | | ✓ | Per activity |
| Resource Cards | | ✓ | Per sponsor |
| Video Embed | | ✓ | Per activity |

## Implementation Notes

### CSS Architecture
- Use CSS Modules or styled-components
- Maintain existing Tailwind utilities
- Create component-specific styles
- Ensure cascade specificity management

### Performance Budget
- Initial load: <3 seconds on 3G
- Time to Interactive: <5 seconds
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Browser Support
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

## Quality Assurance Checklist

### Visual Consistency
- [ ] Colors match brand palette
- [ ] Typography follows established scale
- [ ] Spacing uses 8px grid system
- [ ] Shadows and borders consistent
- [ ] Icons from same family

### Responsive Design
- [ ] Mobile layout tested 320px-767px
- [ ] Tablet layout tested 768px-1023px
- [ ] Desktop layout tested 1024px+
- [ ] No horizontal scroll on mobile
- [ ] Touch targets minimum 44px

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation complete
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Focus indicators visible

### Performance
- [ ] Images optimized and lazy loaded
- [ ] CSS minimized and critical path optimized
- [ ] JavaScript bundle under 200KB
- [ ] Fonts preloaded
- [ ] Animations GPU accelerated

---