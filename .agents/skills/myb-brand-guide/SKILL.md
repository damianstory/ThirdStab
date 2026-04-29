---
name: myb-brand-guide
description: myBlueprint brand style guide for consistent UI development. Applies official brand colors, typography (Museo Sans/Open Sans), spacing systems, and educational tone to all frontend components. Ensures proper logo usage and maintains brand consistency across marketing sites and web applications for career education programs.
---

# myBlueprint Brand Style Guide

Official brand guidelines for myBlueprint edtech products and marketing materials. Ensures consistent visual identity across all UI components.

## Quick Reference

When building any myBlueprint interface, apply these brand requirements:

```
BRAND REQUIREMENTS:
- Colors: Primary Blue (#0092FF), Navy (#22224C), Light Blue (#C6E7FF)
- Typography: Museo Sans (primary), Open Sans (fallback)
- Voice: Professional yet approachable, focused on student growth and educational empowerment
- Logo: Maintain proper spacing and never alter colors or proportions
```

## Color System

### Primary Colors

```css
:root {
  /* Core Brand Colors */
  --myb-primary-blue: #0092FF;    /* R0 G146 B255 - Main brand color */
  --myb-navy: #22224C;            /* R34 G34 B76 - Headers and emphasis */
  --myb-light-blue: #C6E7FF;      /* R198 G231 B255 - Backgrounds */
  --myb-off-white: #F6F6FF;       /* R246 G246 B255 - Light backgrounds */

  /* Neutral Palette */
  --myb-neutral-1: #E5E9F1;       /* Lightest gray */
  --myb-neutral-2: #D9DFEA;       /* Light gray */
  --myb-neutral-3: #AAB7CB;       /* Medium gray */
  --myb-neutral-4: #65738B;       /* Dark gray */
  --myb-neutral-5: #485163;       /* Darker gray */
  --myb-neutral-6: #252A33;       /* Darkest gray */
}
```

### Usage Guidelines

**Primary Blue (#0092FF)**
- CTAs and primary buttons
- Links and interactive elements
- Icon highlights
- Progress indicators

**Navy (#22224C)**
- Main headings
- Navigation bars
- Footer backgrounds
- Text on light backgrounds

**Light Blue (#C6E7FF)**
- Section backgrounds
- Card backgrounds
- Hover states (with opacity)
- Info alerts

**Neutrals**
- Body text: Neutral 5 or 6
- Subtle borders: Neutral 2
- Disabled states: Neutral 3
- Secondary text: Neutral 4

## Typography

### Font Stack

```css
/* Primary Font - Museo Sans */
font-family: 'Museo Sans', -apple-system, BlinkMacSystemFont, sans-serif;

/* Fallback Font - Open Sans (when Museo Sans unavailable) */
font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Type Scale

```css
/* Headers */
.h1 {
  font-size: 64px;
  line-height: 80px;
  font-weight: 900;
}

.h2 {
  font-size: 40px;
  line-height: 56px;
  font-weight: 900;
}

.h3 {
  font-size: 32px;
  line-height: 48px;
  font-weight: 900;
}

.h4 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 900;
}

/* Body Text */
.subheader {
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
}

.body-1 {
  font-size: 20px;
  line-height: 32px;
  font-weight: 300; /* Regular: 300, Medium: 500, Bold: 900 */
}

.body-2 {
  font-size: 16px;
  line-height: 28px;
  font-weight: 300; /* Regular: 300, Medium: 500, Bold: 900 */
}

.compact {
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
}

/* Subtitles */
.subtitle-1 {
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.subtitle-2 {
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

### Font Loading

```html
<!-- Google Fonts Fallback -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<!-- For Museo Sans, use Adobe Fonts or self-host -->
```

## Component Styling

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--myb-primary-blue);
  color: white;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #0080E6; /* Slightly darker */
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: var(--myb-navy);
  border: 2px solid var(--myb-neutral-2);
  font-weight: 500;
}
```

### Cards

```css
.card {
  background: white;
  border: 1px solid var(--myb-neutral-2);
  border-radius: 12px;
  padding: 24px;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(34, 34, 76, 0.1);
}
```

### Forms

```css
.input {
  border: 1px solid var(--myb-neutral-3);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--myb-primary-blue);
  box-shadow: 0 0 0 3px rgba(0, 146, 255, 0.1);
}
```

## Logo Usage

### Proper Implementation

```html
<!-- Full Logo -->
<div class="logo-container">
  <div class="logo-icon">
    <!-- Blue circle with white 'm' icon -->
    <svg><!-- Icon SVG --></svg>
  </div>
  <span class="logo-text">myBlueprint</span>
</div>

<!-- Icon Only -->
<div class="logo-icon-only">
  <svg><!-- Icon SVG --></svg>
</div>
```

### Logo Rules
- **Never**: Distort, rotate, or change colors
- **Never**: Apply drop shadows or effects
- **Never**: Use on complex backgrounds without proper contrast
- **Always**: Maintain clear space equal to icon height around logo
- **Always**: Use inverted version (white icon) on dark backgrounds

## Voice & Tone

### Writing Principles

**Professional yet Approachable**
- Clear, educational language
- Focus on student empowerment
- Avoid jargon, explain technical terms

**Action-Oriented**
- "Capture the moments where growth happens"
- "Build your future"
- "Discover your path"

**Supportive**
- Encouraging without being patronizing
- Focus on possibilities and potential
- Celebrate student achievements

### UI Copy Examples

**Headers:**
- "Welcome to Your Career Journey"
- "Industry Immersion Series"
- "Build Your Digital Portfolio"

**CTAs:**
- "Start Your Portfolio"
- "Explore Industries"
- "Connect with Mentors"

**Helper Text:**
- "Add media to showcase your learning"
- "Select industries that interest you"
- "Share your growth with educators"

## Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### Mobile Considerations
- Minimum touch target: 44px
- Increased padding on mobile
- Stack elements vertically
- Maintain readability with minimum 14px font

## Integration with Other Skills

When used with `frontend-aesthetics`:
1. This skill provides the brand constraints
2. Frontend-aesthetics adds creative enhancements within brand guidelines
3. Result: On-brand yet visually distinctive interfaces

Example combined prompt:
```
Apply myb-brand-guide and frontend-aesthetics:
Create a landing page for the Industry Immersion Series
```

## Quick Implementation

For any myBlueprint project:

```css
/* Import brand tokens */
@import 'myblueprint-brand-tokens';

/* Apply to root */
html {
  font-family: 'Museo Sans', 'Open Sans', sans-serif;
  color: var(--myb-navy);
  background: var(--myb-off-white);
}

/* Headers automatically styled */
h1, h2, h3, h4 {
  color: var(--myb-navy);
  font-weight: 900;
}

/* Links and CTAs */
a {
  color: var(--myb-primary-blue);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 0.8;
}
```

## Quality Checklist

Before delivering any myBlueprint UI:

- [ ] **Colors**: Using official palette (no random blues)
- [ ] **Typography**: Museo Sans or Open Sans loaded
- [ ] **Spacing**: Following 8px grid system
- [ ] **Logo**: Properly implemented if included
- [ ] **Voice**: Professional yet approachable
- [ ] **Accessibility**: Meets WCAG AA standards
- [ ] **Mobile**: Responsive and touch-friendly
