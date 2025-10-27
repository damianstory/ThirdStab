# Aesthetic Styles Reference

Different aesthetic directions for various project needs. Each includes complete implementation details.

## Neo-Brutalism

**Characteristics:** Bold borders, stark contrasts, playful asymmetry, unapologetic colors

```css
/* Core styles */
.neo-brutal {
  border: 4px solid #000;
  box-shadow: 8px 8px 0 #000;
  background: #ff90e8;
  transform: rotate(-0.5deg);
}

/* Typography */
font-family: 'Space Grotesk', 'Archivo Black', sans-serif;
letter-spacing: -0.02em;
text-transform: uppercase;

/* Colors */
--brutal-pink: #ff90e8;
--brutal-yellow: #ffc900;
--brutal-mint: #23f0c7;
--brutal-purple: #7c4dff;
```

**Prompt injection:**
```
Style with neo-brutalist aesthetics: thick black borders, harsh shadows offset by 8px,
clashing bright colors (#ff90e8, #ffc900, #23f0c7), slight rotations on elements,
and heavy sans-serif typography. Make it loud and unapologetic.
```

## Glass Morphism

**Characteristics:** Transparency, blur effects, subtle borders, ethereal feeling

```css
/* Core styles */
.glassmorphic {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

/* Colors */
--glass-gradient: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1),
  rgba(255, 255, 255, 0.05)
);
```

**Prompt injection:**
```
Apply glassmorphism: translucent panels with backdrop-filter blur,
subtle white borders with opacity, soft shadows, and gradient mesh backgrounds.
Create an ethereal, floating feeling with depth layers.
```

## Editorial / Magazine

**Characteristics:** Large serif typography, sophisticated layouts, high contrast, generous whitespace

```css
/* Typography */
.editorial {
  font-family: 'Playfair Display', 'Freight Display Pro', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
}

/* Layout */
.editorial-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 4rem;
}

/* Accent styles */
.drop-cap {
  initial-letter: 3;
  font-weight: 900;
}
```

**Prompt injection:**
```
Design with editorial/magazine aesthetics: massive serif headlines (Playfair Display),
sophisticated column layouts, drop caps, pull quotes, generous white space,
and high typographic contrast. Think Vogue meets The New Yorker.
```

## Retro Futurism

**Characteristics:** Neon gradients, grid patterns, glows, synthwave colors

```css
/* Core styles */
.retro-future {
  background: linear-gradient(180deg, #0a0e27 0%, #3b1e4f 100%);
  text-shadow: 0 0 30px rgba(255, 71, 255, 0.8);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.retro-future::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

/* Grid overlay */
.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

**Prompt injection:**
```
Apply retro-futuristic aesthetics: neon gradients (#ff0080 to #40e0d0),
glowing text effects, grid overlays, dark backgrounds (#0a0e27),
chrome text effects, and animated scan lines. Channel Tron meets Miami Vice.
```

## Minimal Luxury

**Characteristics:** Extreme whitespace, thin typography, monochrome palette, subtle animations

```css
/* Typography */
.minimal-luxury {
  font-family: 'Bodoni Moda', 'Didot', serif;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
}

/* Layout */
.luxury-container {
  padding: 15vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

/* Subtle elements */
.divider {
  width: 1px;
  height: 100px;
  background: #000;
  opacity: 0.1;
  margin: 4rem auto;
}
```

**Prompt injection:**
```
Design with minimal luxury: extreme whitespace, thin serif typography (Bodoni Moda),
monochrome palette, hairline borders, subtle fade-ins on scroll,
and refined micro-interactions. Think high-end fashion brand.
```

## Organic / Natural

**Characteristics:** Curved shapes, earth tones, hand-drawn elements, organic movement

```css
/* Shapes */
.organic {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
}

/* Colors */
--earth-brown: #8B4513;
--sage-green: #87A96B;
--warm-beige: #F5E6D3;
--terracotta: #C65D00;
```

**Prompt injection:**
```
Apply organic design: irregular curved shapes using border-radius,
earth tone palette (#8B4513, #87A96B, #F5E6D3), hand-drawn SVG elements,
gentle morphing animations, and natural textures. Create a handcrafted feeling.
```

## Maximalist / Busy

**Characteristics:** Information density, multiple fonts, vibrant colors, overlapping elements

```css
/* Multiple fonts */
.maximalist-heading { font-family: 'Bebas Neue', sans-serif; }
.maximalist-accent { font-family: 'Permanent Marker', cursive; }
.maximalist-body { font-family: 'Comic Neue', cursive; }

/* Overlapping */
.overlap-1 { z-index: 10; transform: rotate(3deg); }
.overlap-2 { z-index: 20; margin-top: -50px; margin-left: 30px; }
.overlap-3 { z-index: 15; transform: rotate(-5deg); }

/* Colors everywhere */
.rainbow-border {
  border: 5px solid;
  border-image: linear-gradient(45deg,
    #ff0000, #ff7f00, #ffff00, #00ff00,
    #0000ff, #4b0082, #9400d3) 1;
}
```

**Prompt injection:**
```
Create maximalist design: multiple contrasting fonts, overlapping elements,
rainbow gradients, busy patterns, animated elements everywhere,
clashing colors, and information overload. Make it chaotic but intentional.
```

## Dark Mode Excellence

**Characteristics:** True blacks, neon accents, high contrast, sophisticated shadows

```css
/* Color system */
:root {
  --dark-bg: #0a0a0a;
  --dark-surface: #1a1a1a;
  --dark-border: #2a2a2a;
  --neon-accent: #00ff88;
  --text-primary: #f0f0f0;
  --text-secondary: #a0a0a0;
}

/* Glowing elements */
.glow {
  box-shadow:
    0 0 20px rgba(0, 255, 136, 0.5),
    inset 0 0 20px rgba(0, 255, 136, 0.1);
  border: 1px solid var(--neon-accent);
}
```

**Prompt injection:**
```
Design for dark mode: true black backgrounds (#0a0a0a), neon accent colors (#00ff88),
subtle gradients in grays, glowing elements on hover, high contrast text,
and sophisticated shadow layers. Make darkness feel premium, not depressing.
```

## Implementation Strategy

When applying a style:
1. Choose core characteristics that fit the project
2. Inject the specific prompt for that style
3. Combine with functional requirements
4. Adjust intensity based on brand needs

Example combined prompt:
```
Build a SaaS dashboard with neo-brutalist aesthetics:
[functional requirements] + [aesthetic injection from above]
```
