---
name: frontend-aesthetics
description: Aesthetic enhancement system for frontend development. Injects creative design principles, distinctive typography, sophisticated color systems, and polished micro-interactions into any frontend code generation. Transforms generic UI into visually compelling, original designs while maintaining modern web development best practices.
---

# Frontend Aesthetics Skill

Elevates frontend code generation from functional-but-generic to visually distinctive and professionally polished. Based on Anthropic's frontend aesthetics research.

## Quick Start

When building any frontend interface, inject this aesthetic prompt into your request:

```
Create [your component/page] with sophisticated aesthetic choices:
- Use distinctive typography (avoid Inter/Roboto)
- Apply creative color combinations beyond standard palettes
- Include thoughtful micro-interactions and transitions
- Emphasize visual hierarchy through dramatic scale/weight contrasts
- Polish with subtle details like shadows, gradients, and hover states
```

## Core Aesthetic Injection Prompts

### The Universal Enhancer
Add this to any frontend request for immediate aesthetic improvement:

```
AESTHETIC REQUIREMENTS:
Push visual creativity while maintaining usability. Make bold, distinctive design choices:
- Typography: Choose unexpected font combinations. Mix serif + mono, or display + geometric sans
- Colors: Go beyond safe choices. Use vibrant gradients, bold contrasts, or sophisticated monochromes
- Spacing: Use dramatic scale differences (3x+ jumps, not 1.5x)
- Details: Add polish through transitions, hover states, and micro-animations
Create something visually memorable, not generic.
```

### Component-Specific Enhancements

**For Marketing/Landing Pages:**
```
Design with editorial sophistication:
- Hero: Asymmetric layouts, overlapping elements, bold typography
- Sections: Varied rhythms, unexpected alignments, creative use of whitespace
- CTAs: Make them impossible to ignore through size, color, and animation
```

**For Web Applications:**
```
Balance functionality with visual interest:
- Data displays: Use color/size to create clear hierarchies
- Forms: Thoughtful focus states, smooth transitions, helpful micro-animations
- Navigation: Distinctive but intuitive, with clear active states
```

## Typography System

**Never use these generic fonts:**
- Inter, Roboto, Open Sans, Lato, Montserrat, Poppins

**Instead, choose distinctive combinations:**

```
// Modern Editorial
font-family: 'Fraunces', 'Crimson Pro', serif;  // Headers
font-family: 'Work Sans', 'DM Sans', sans-serif; // Body

// Technical/Dev
font-family: 'JetBrains Mono', 'Fira Code', monospace; // Headers
font-family: 'Space Grotesk', 'IBM Plex Sans', sans-serif; // Body

// Bold Startup
font-family: 'Clash Display', 'Bricolage Grotesque', sans-serif; // Headers
font-family: 'Satoshi', 'Cabinet Grotesk', sans-serif; // Body

// Sophisticated Business
font-family: 'Playfair Display', 'Newsreader', serif; // Headers
font-family: 'Source Sans 3', 'Instrument Sans', sans-serif; // Body
```

## Color Psychology

Move beyond basic color schemes:

```
// Instead of: primary-blue, secondary-gray
// Try: Deep ocean gradients, sunset oranges, forest greens

// Sophisticated Palettes:
Midnight Professional: #0A0E27 → #1E3A8A → #60A5FA
Warm Earth: #7C2D12 → #EA580C → #FED7AA
Electric Dreams: #6D28D9 → #EC4899 → #06B6D4
Forest Depth: #14532D → #16A34A → #BBF7D0
```

## Animation Principles

Always include these micro-interactions:

```css
/* Universal transitions */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover transformations */
transform: translateY(-2px) scale(1.02);
box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);

/* Focus states */
outline: 2px solid currentColor;
outline-offset: 2px;

/* Loading states */
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

## Framework-Specific Guidelines

### Tailwind CSS
```
- Use custom values beyond default scale: text-[72px], gap-[35px]
- Layer utilities creatively: bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400
- Combine with arbitrary properties: [text-shadow:_0_4px_12px_rgb(0_0_0_/_25%)]
```

### shadcn/ui
```
- Override default radius to extremes: --radius: 1.5rem or --radius: 0
- Customize component variants beyond defaults
- Add glass morphism: backdrop-blur-xl bg-white/10
```

### React
```
- Use Framer Motion for sophisticated animations
- Implement intersection observers for scroll-triggered effects
- Add particle effects or animated gradients for backgrounds
```

## Quality Checklist

Before considering any frontend complete, verify:

- [ ] **Typography:** No generic fonts, strong hierarchy, extreme weight contrasts
- [ ] **Colors:** Distinctive palette, intentional use of gradients/shadows
- [ ] **Spacing:** Dramatic scale differences, purposeful white space
- [ ] **Animation:** Smooth transitions, hover states, micro-interactions
- [ ] **Polish:** Consistent border-radius, thoughtful shadows, refined details
- [ ] **Uniqueness:** Would this stand out in a portfolio?

## Advanced Techniques

For deeper aesthetic control, see:
- `references/design-principles.md` - Comprehensive design theory
- `references/aesthetic-styles.md` - Style-specific implementations
- `scripts/inject_aesthetics.py` - Automated aesthetic enhancement

## Usage in Claude Code

When using Claude Code for frontend development:
1. Start requests with "Apply frontend-aesthetics skill"
2. Specify any aesthetic direction (or let it surprise you)
3. Review the visual choices and iterate on what you like

Remember: Push beyond safe choices. Create interfaces that are memorable, not just functional.
