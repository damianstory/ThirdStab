# Design Principles Reference

## Visual Hierarchy

### Scale & Contrast
Create drama through extreme differences:
- **Headings:** 72px-120px for heroes (not 48px)
- **Subheadings:** 24px-32px (create 3x+ jumps)
- **Body:** 16px-18px baseline
- **Small text:** 12px-14px (use sparingly)

### Weight Contrasts
```css
/* Weak contrast - AVOID */
font-weight: 400; → font-weight: 600;

/* Strong contrast - USE */
font-weight: 200; → font-weight: 900;
font-weight: 100; → font-weight: 800;
```

## Composition Patterns

### Breaking the Grid
Move beyond centered, symmetrical layouts:

**Asymmetric Heroes:**
- Content pushed to one side
- Overlapping image elements
- Diagonal section breaks
- Off-canvas elements

**Dynamic Sections:**
- Alternating alignments
- Staggered cards
- Broken grid columns
- Intentional misalignment

## Color Theory

### Gradient Mastery
```css
/* Basic (avoid) */
background: linear-gradient(blue, purple);

/* Sophisticated */
background: linear-gradient(137deg,
  #667eea 0%,
  #764ba2 25%,
  #f093fb 50%,
  #c471f5 75%,
  #667eea 100%);

/* Mesh gradients */
background:
  radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%);
```

### Shadow Systems
```css
/* Subtle depth */
box-shadow:
  0 1px 2px 0 rgb(0 0 0 / 0.05),
  0 4px 8px -2px rgb(0 0 0 / 0.1);

/* Dramatic elevation */
box-shadow:
  0 20px 25px -5px rgb(0 0 0 / 0.1),
  0 10px 10px -5px rgb(0 0 0 / 0.04),
  inset 0 -1px 2px 0 rgb(0 0 0 / 0.06);

/* Colorful shadows */
box-shadow:
  0 20px 40px -15px rgba(124, 58, 237, 0.5);
```

## Motion Design

### Easing Functions
```javascript
// Natural movement
const easings = {
  smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.5, 1.5, 0.5, -0.5)',
}
```

### Stagger Animations
```css
/* Sequential entry */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}

.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 50ms; }
.item:nth-child(3) { animation-delay: 100ms; }
```

## Texture & Depth

### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Neumorphism
```css
.neumorphic {
  background: #e0e5ec;
  box-shadow:
    9px 9px 16px #a3b1c6,
    -9px -9px 16px #ffffff;
}
```

### Grain & Noise
```css
.grain {
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}
```

## Advanced Techniques

### Variable Fonts
```css
@font-face {
  font-family: 'Variable Display';
  src: url('font.woff2') format('woff2-variations');
  font-weight: 100 900;
}

/* Animate weight */
h1 {
  font-variation-settings: 'wght' 100;
  transition: font-variation-settings 0.3s;
}
h1:hover {
  font-variation-settings: 'wght' 900;
}
```

### CSS Custom Properties
```css
:root {
  --golden-ratio: 1.618;
  --type-scale: calc(var(--golden-ratio) * 1rem);
  --space-unit: calc(var(--golden-ratio) * 0.5rem);
}
```

### Blend Modes
```css
.overlay-text {
  mix-blend-mode: difference;
  color: white;
}

.image-overlay {
  mix-blend-mode: multiply;
  background: linear-gradient(45deg, #f093fb, #f5576c);
}
```

## Accessibility Within Aesthetics

Beautiful doesn't mean inaccessible:
- Maintain WCAG AA contrast ratios (4.5:1 for body, 3:1 for large text)
- Ensure focus states are visible and distinctive
- Respect prefers-reduced-motion
- Test with keyboard navigation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
