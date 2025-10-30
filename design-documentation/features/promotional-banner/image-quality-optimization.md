---
title: Promotional Banner Image Quality Optimization
description: Comprehensive design specifications and technical recommendations for displaying high-quality promotional banners with maximum crispness and clarity
feature: Promotional Banner Component
last-updated: 2025-10-30
version: 1.0.0
related-files:
  - /src/components/activity/PromotionalBanner.tsx
  - /src/data/activity-pages/en/november.ts
  - /public/promotional-banners/
dependencies:
  - Next.js Image optimization system
  - Browser rendering pipeline
  - Responsive design system
status: approved
---

# Promotional Banner Image Quality Optimization

## Problem Statement

The National Skilled Trades and Technology Week promotional banner displays with degraded visual quality on the website despite having a high-quality source file. The rendered version appears fuzzy and less crisp, undermining the professional appearance and brand credibility of the campaign.

**Current State**: Banner appears soft and lacks the sharpness of the source file
**Desired State**: Banner displays with crisp, professional quality matching source file appearance
**Impact**: Reduced visual impact, diminished brand perception, poor user experience

---

## Root Cause Analysis

### Technical Issues Identified

**1. Using Standard `<img>` Tag Instead of Next.js `<Image>`**
- Current implementation uses native HTML `<img>` element
- Missing Next.js automatic image optimization
- No responsive image serving (srcset/sizes)
- Browser applies default scaling algorithms which can cause blur

**2. Image Dimensions vs Display Size Mismatch**
- Source image: **2560 × 800 pixels** (ultra-wide format, 3.2:1 ratio)
- Container: `max-w-7xl` = 1280px maximum width
- This creates a **2× downscale ratio** on desktop displays
- Browser's default image scaling can introduce blur during downscaling

**3. No Pixel Density Optimization**
- Single image served to all devices regardless of pixel density
- Retina/high DPI displays (2× or 3× pixel density) render the image at insufficient resolution
- 2560px image on a 1280px container looks sharp on 1× displays but can appear soft on 2× displays

**4. CSS Object-Fit and Transform Issues**
- `object-contain` + `hover:scale-[1.01]` applies CSS transforms
- Transforms can trigger browser resampling, potentially degrading quality
- No explicit image rendering hints to browser

**5. Missing Image Rendering Optimization Directives**
- No `image-rendering` CSS property specified
- No explicit width/height attributes causing layout shift
- Browser lacks performance hints for crisp rendering

---

## Design Specifications

### Visual Quality Requirements

#### Clarity Standards
- **Text Readability**: All text within banner must be razor-sharp at all viewing distances
- **Photo Quality**: Subject photography must display with professional crispness
- **Color Accuracy**: Turquoise background and color elements must render true to brand
- **Edge Sharpness**: All graphic elements must have clean, crisp edges without blur or aliasing

#### Performance Targets
- **Largest Contentful Paint (LCP)**: Banner should not delay LCP beyond 2.5 seconds
- **Cumulative Layout Shift (CLS)**: Zero layout shift during image load
- **Visual Stability**: Image must appear crisp immediately, no progressive blur-to-sharp

#### Responsive Quality Matrix

| Breakpoint | Display Width | Optimal Image Width | Pixel Density Support |
|------------|---------------|---------------------|----------------------|
| Mobile (320-639px) | 320-639px | 640-1280px | 1×, 2× |
| Tablet (640-1023px) | 640-1023px | 1280-2048px | 1×, 2× |
| Desktop (1024-1439px) | 1024-1280px | 2048-2560px | 1×, 2× |
| Wide (1440px+) | 1280px (max) | 2560-3840px | 1×, 2×, 3× |

---

## Recommended Solution Architecture

### 1. Image Format Strategy

**Primary Recommendation: Multi-Format with WebP + PNG Fallback**

#### Format Specifications

**WebP Format** (Primary)
- **Why**: 25-35% better compression than PNG with equivalent quality
- **Browser Support**: 97%+ of global browsers (as of 2025)
- **Quality Settings**: 90-95 quality for promotional materials
- **Implementation**: Next.js automatically serves WebP to supporting browsers

**PNG Format** (Fallback)
- **Why**: Universal compatibility, lossless quality preservation
- **Current Format**: Already using PNG (nsttw-2025-en-new.png)
- **Optimization**: Ensure PNG is properly compressed (current: 470KB is reasonable for 2560×800)
- **Implementation**: Serves to legacy browsers via Next.js fallback

**Do NOT Use JPEG**
- Text rendering becomes blurry due to lossy compression
- Color banding in solid color backgrounds (turquoise)
- Not suitable for graphics with text overlays

**AVIF Format** (Future Enhancement)
- **Why**: 50% better compression than WebP with same quality
- **Browser Support**: 85%+ (growing rapidly)
- **Quality Settings**: 75-85 quality equivalent to PNG/WebP 95
- **Consideration**: Next.js supports AVIF; can add as future optimization

#### Recommended Format Priority
```
1st: WebP (95 quality) - Modern browsers
2nd: AVIF (80 quality) - Cutting-edge browsers (optional)
3rd: PNG (optimized) - Legacy browsers
```

### 2. Image Dimension Strategy

**Multiple Resolution Assets for Responsive Serving**

#### Asset Generation Matrix

| Asset Name | Dimensions | Use Case | Pixel Density |
|------------|------------|----------|---------------|
| `banner-mobile.webp` | 640 × 200px | Mobile 1× | 1× |
| `banner-mobile@2x.webp` | 1280 × 400px | Mobile 2× | 2× |
| `banner-tablet.webp` | 1024 × 320px | Tablet 1× | 1× |
| `banner-tablet@2x.webp` | 2048 × 640px | Tablet 2× | 2× |
| `banner-desktop.webp` | 1280 × 400px | Desktop 1× | 1× |
| `banner-desktop@2x.webp` | 2560 × 800px | Desktop 2× | 2× (current source) |
| `banner-desktop@3x.webp` | 3840 × 1200px | Retina XDR | 3× (optional) |

**Recommendation**: Maintain current 2560×800 source as 2× desktop asset. Generate additional sizes for optimal responsive delivery.

### 3. Component Architecture

**Migrate to Next.js `<Image>` Component**

#### Benefits of Next.js Image Component
- ✅ Automatic image optimization and format selection
- ✅ Automatic `srcset` generation for responsive images
- ✅ Built-in lazy loading with proper intersection observer
- ✅ Automatic WebP/AVIF serving to supporting browsers
- ✅ Prevents Cumulative Layout Shift (CLS) with proper sizing
- ✅ Priority loading for above-fold images
- ✅ Image caching and CDN optimization

#### Technical Implementation Specification

```tsx
import Image from 'next/image';

<Image
  src="/promotional-banners/nsttw-2025-en-new.png"
  alt="National Skilled Trades and Technology Week - November 2 to 8, 2025"
  width={2560}
  height={800}
  quality={95}
  priority={true}
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 100vw,
         1280px"
  className="w-full h-auto"
  style={{
    imageRendering: 'crisp-edges',
    WebkitFontSmoothing: 'antialiased',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)'
  }}
/>
```

**Key Parameters Explained**:

- **`width={2560}` & `height={800}`**: Intrinsic dimensions prevent layout shift and enable proper aspect ratio
- **`quality={95}`**: Higher quality setting for promotional materials (default is 75)
- **`priority={true}`**: Disables lazy loading for above-fold content, preloads image
- **`sizes` attribute**: Tells browser which image size to fetch based on viewport
  - Mobile (≤640px): Full viewport width
  - Tablet (≤1024px): Full viewport width
  - Desktop (>1024px): Fixed 1280px (matching container max-width)

### 4. CSS Optimization Strategy

#### Image Rendering Directives

```css
.promotional-banner-image {
  /* Core sharpness optimization */
  image-rendering: -webkit-optimize-contrast; /* Safari/Chrome */
  image-rendering: crisp-edges; /* Firefox */

  /* Hardware acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;

  /* Anti-aliasing optimization */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Prevent blur on transforms */
  will-change: transform;

  /* Ensure sharp scaling */
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated; /* Fallback for crisp rendering */
}
```

**Property Explanations**:

- **`image-rendering: crisp-edges`**: Forces browser to use nearest-neighbor scaling for sharper edges
- **`transform: translateZ(0)`**: Creates new composite layer, triggers GPU acceleration
- **`backface-visibility: hidden`**: Optimizes 3D transform rendering
- **`will-change: transform`**: Hints to browser about upcoming animations, prevents blur during hover

#### Container Optimization

```css
.promotional-banner-container {
  /* Ensure crisp rendering context */
  transform: translate3d(0, 0, 0);

  /* Prevent subpixel rendering issues */
  position: relative;

  /* Ensure integer pixel alignment */
  width: 100%;
  max-width: 1280px; /* Matches image 2× density target */
}
```

### 5. Hover Effect Optimization

**Problem**: Current `hover:scale-[1.01]` can trigger image resampling blur

**Solution**: Optimize hover effect to maintain sharpness

```tsx
// Option 1: Remove scale transform (recommended for image quality)
className="transition-shadow duration-300"

// Option 2: Use subtle scale with optimization (if scale is required)
className="hover:scale-[1.005] transition-transform duration-300"
style={{
  willChange: 'transform',
  imageRendering: 'crisp-edges'
}}

// Option 3: Alternative visual feedback without scale
className="hover:brightness-105 transition-all duration-300"
```

**Recommendation**: Remove scale transform entirely for promotional banners. Use shadow elevation or subtle brightness adjustment instead.

---

## Accessibility Specifications

### Color Contrast Requirements
- **Text on Turquoise Background**: Verify WCAG AA compliance (4.5:1 minimum)
- **White Text**: Should maintain 7:1+ contrast ratio for enhanced readability
- **Focus States**: Keyboard navigation must show clear focus indicator around entire banner

### Screen Reader Optimization
```tsx
<Image
  src="/promotional-banners/nsttw-2025-en-new.png"
  alt="National Skilled Trades and Technology Week, November 2 to 8, 2025. Presented by Skills Competences Canada. Features student working in skilled trade environment."
  aria-label="Promotional banner for National Skilled Trades and Technology Week"
  role="img"
/>
```

**Alt Text Requirements**:
- Describe the visual content comprehensively
- Include all text visible in the image
- Provide context about the promotion
- Keep under 125 characters for optimal screen reader experience

### Keyboard Navigation
- **Tab Focus**: Entire banner should be keyboard accessible when link is present
- **Focus Indicator**: 2px solid outline with 4px offset
- **Enter/Space**: Should activate link consistently

---

## Implementation Guidelines

### Phase 1: Immediate Quality Fix (Current Sprint)

**Priority: P0 - Critical Visual Quality Issue**

#### Tasks
1. **Replace `<img>` with Next.js `<Image>` component**
   - Update `src/components/activity/PromotionalBanner.tsx`
   - Add width={2560} and height={800} props
   - Set quality={95} for promotional material
   - Add priority={true} for above-fold loading

2. **Add CSS rendering optimization**
   - Apply `image-rendering: crisp-edges`
   - Add GPU acceleration hints
   - Optimize for hardware rendering

3. **Update hover interaction**
   - Remove or reduce scale transform to prevent blur
   - Implement shadow-based hover feedback instead

4. **Test across devices**
   - Verify sharpness on 1× displays (standard monitors)
   - Verify sharpness on 2× displays (MacBook Retina, iPhone)
   - Verify sharpness on 3× displays (iPhone Pro models)

#### Acceptance Criteria
- [ ] Banner displays with crisp, sharp text at all viewport sizes
- [ ] No visible blur or softness compared to source file
- [ ] Zero Cumulative Layout Shift (CLS) during load
- [ ] Hover interaction maintains image quality
- [ ] Works across Chrome, Safari, Firefox, Edge

### Phase 2: Format Optimization (Next Sprint)

**Priority: P1 - Performance Enhancement**

#### Tasks
1. **Generate WebP assets**
   - Convert source PNG to WebP at 95 quality
   - Verify file size reduction (target: 30-40% smaller)
   - Test visual quality parity with PNG

2. **Configure Next.js for automatic format serving**
   - Next.js handles this automatically with `<Image>` component
   - No additional configuration needed

3. **Performance testing**
   - Measure LCP improvement
   - Verify bandwidth savings
   - Confirm quality maintenance

#### Acceptance Criteria
- [ ] WebP assets generated and optimized
- [ ] File size reduced by 25%+ without quality loss
- [ ] Automatic format selection working (WebP to modern browsers, PNG to legacy)
- [ ] Visual quality identical to PNG version

### Phase 3: Responsive Asset Generation (Future Enhancement)

**Priority: P2 - Advanced Optimization**

#### Tasks
1. **Generate multi-resolution assets**
   - Create 640px, 1280px, 1920px, 2560px, 3840px variants
   - Both WebP and PNG formats for each size
   - Maintain consistent aspect ratio (3.2:1)

2. **Configure responsive image serving**
   - Update `sizes` prop with precise breakpoint mapping
   - Verify correct image loaded at each breakpoint
   - Test on real devices at different pixel densities

3. **CDN optimization**
   - Leverage Next.js automatic image CDN
   - Configure edge caching for promotional assets
   - Set appropriate cache headers for long-term campaigns

#### Acceptance Criteria
- [ ] Appropriate image size served to each device type
- [ ] Mobile devices receive smaller files (bandwidth savings)
- [ ] High-DPI displays receive appropriate resolution
- [ ] Image quality remains consistent across all sizes

---

## Testing & Quality Assurance

### Visual Quality Checklist

#### Desktop Testing (1920×1080, 1× density)
- [ ] Text in banner is razor-sharp and fully legible
- [ ] No visible pixelation or blur on text edges
- [ ] Background color renders smoothly without banding
- [ ] Photo/imagery is crisp with clear details
- [ ] Hover interaction maintains quality

#### Retina Display Testing (MacBook Pro, 2× density)
- [ ] Text appears perfectly sharp at native resolution
- [ ] No softness or blur visible when viewed closely
- [ ] Image appears as crisp as native screenshot
- [ ] Zoom to 200% still shows sharp rendering

#### Mobile Device Testing (iPhone, 3× density)
- [ ] Banner scales responsively without quality loss
- [ ] Text remains legible at small sizes
- [ ] Touch target meets 44×44px minimum
- [ ] Fast loading with no visible blur-to-sharp transition

### Performance Testing Checklist

- [ ] **LCP < 2.5s**: Banner loads and displays within performance budget
- [ ] **CLS = 0**: No layout shift during image load
- [ ] **File Size Acceptable**: WebP < 200KB, PNG < 500KB for 2560×800
- [ ] **Format Serving**: Correct format delivered based on browser support
- [ ] **Caching**: Proper cache headers set for repeat visits

### Cross-Browser Testing Matrix

| Browser | Version | 1× Display | 2× Display | Notes |
|---------|---------|------------|------------|-------|
| Chrome | Latest | ✓ Test | ✓ Test | Primary browser |
| Safari | Latest | ✓ Test | ✓ Test | Important for Mac/iOS |
| Firefox | Latest | ✓ Test | ✓ Test | Different rendering engine |
| Edge | Latest | ✓ Test | ✓ Test | Chromium-based |
| Mobile Safari | iOS 15+ | N/A | ✓ Test | High-DPI mobile |
| Chrome Mobile | Android | N/A | ✓ Test | High-DPI mobile |

---

## Technical Debt & Future Considerations

### Short-term Improvements
1. **Automated image optimization pipeline**
   - Script to generate all required sizes from source
   - Automatic WebP/AVIF conversion
   - Quality consistency checks

2. **Design system integration**
   - Document banner image specifications
   - Create reusable patterns for promotional content
   - Establish image quality standards across site

### Long-term Enhancements
1. **Dynamic image optimization**
   - Server-side image processing API
   - Real-time format/size optimization based on device detection
   - Advanced compression techniques (AVIF, WebP2 when available)

2. **A/B testing framework**
   - Test different quality settings vs file size
   - Measure user engagement with varying visual quality
   - Optimize for best balance of quality and performance

3. **Progressive image loading**
   - LQIP (Low Quality Image Placeholder) for faster perceived load
   - Blur-up technique with smooth transition
   - Maintain quality in final render

---

## Code Examples

### Before: Current Implementation (Problematic)

```tsx
// Current implementation causing quality issues
<img
  src={image}
  alt={altText}
  className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
  loading="eager"
/>
```

**Problems**:
- Native `<img>` lacks Next.js optimizations
- No responsive image serving
- No pixel density optimization
- Transform can cause blur
- Missing explicit dimensions (causes CLS)

### After: Optimized Implementation (Recommended)

```tsx
import Image from 'next/image';

// Optimized implementation for maximum quality
<Image
  src={image}
  alt={altText}
  width={2560}
  height={800}
  quality={95}
  priority={true}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
  className="w-full h-auto transition-shadow duration-300"
  style={{
    imageRendering: 'crisp-edges',
    WebkitFontSmoothing: 'antialiased',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
  }}
/>
```

**Improvements**:
- ✅ Next.js automatic optimization
- ✅ Responsive image serving via sizes
- ✅ High quality setting (95 vs default 75)
- ✅ Priority loading for above-fold
- ✅ Sharp rendering optimization
- ✅ Hardware acceleration
- ✅ Explicit dimensions prevent CLS
- ✅ Hover effect uses shadow instead of scale

### Full Component Implementation

```tsx
'use client';

import Image from 'next/image';
import { ActivityPageData } from '@/data/activities';

interface PromotionalBannerProps {
  banner: ActivityPageData['promotionalBanner'];
  language: 'en' | 'fr';
}

export default function PromotionalBanner({ banner, language }: PromotionalBannerProps) {
  if (!banner) return null;

  // Check if banner should be displayed based on date range
  if (banner.displayDates) {
    const now = new Date();
    if (now < banner.displayDates.start || now > banner.displayDates.end) {
      return null;
    }
  }

  const image = language === 'en' ? banner.imageEn : banner.imageFr;
  const altText = language === 'en' ? banner.altTextEn : banner.altTextFr;

  const imageContent = (
    <Image
      src={image}
      alt={altText}
      width={2560}
      height={800}
      quality={95}
      priority={true}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
      className="w-full h-auto transition-shadow duration-300"
      style={{
        imageRendering: 'crisp-edges',
        WebkitFontSmoothing: 'antialiased',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    />
  );

  return (
    <section className="py-8 px-8 md:py-12 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="relative w-full mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">

          {/* Banner Image Section */}
          {banner.link ? (
            <a
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`Visit ${altText}`}
            >
              {imageContent}
            </a>
          ) : (
            imageContent
          )}

          {/* Subtle Divider */}
          <div className="border-t border-neutral1" />

          {/* Attribution Section */}
          <div className="bg-offWhite px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <p className="text-center text-neutral4 text-sm md:text-base leading-relaxed">
              {language === 'en'
                ? 'Complete November\'s Industry Immersion Series Activity as part of National Skilled Trade and Technology Week presented by Skills/Compétences Canada'
                : 'Complétez l\'activité de la série Immersion industrielle de novembre dans le cadre de la Semaine nationale des métiers spécialisés et des technologies présentée par Compétences/Skills Canada'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Design System Impact

### New Standards Established

**High-Quality Promotional Asset Standards**:
- All promotional banners must use Next.js `<Image>` component
- Minimum quality setting: 95 for promotional materials
- All images must have explicit width/height to prevent CLS
- Priority loading for above-fold promotional content
- No CSS transforms that can degrade image quality

**Image Quality Tier System**:

| Tier | Use Case | Quality Setting | Format Priority | Notes |
|------|----------|----------------|-----------------|-------|
| **Critical** | Promotional banners, hero images | 95 | WebP, PNG | Maximum quality, brand-critical |
| **High** | Product images, featured content | 85-90 | WebP, JPEG | High quality, important visuals |
| **Standard** | General content images | 75-80 | WebP, JPEG | Default Next.js quality |
| **Thumbnail** | Small previews, thumbnails | 65-70 | WebP, JPEG | Optimized for fast loading |

### Component Pattern Library Update

Add to component library:
- **PromotionalBanner** - High-quality image display pattern
- **ImageWithQualityTier** - Reusable wrapper for tiered quality
- **ResponsiveMarketingImage** - Marketing asset display pattern

---

## Performance Budget

### Image Size Targets

| Asset Type | Format | Max File Size | Notes |
|------------|--------|---------------|-------|
| Mobile banner (640×200) | WebP | 30KB | 1× mobile |
| Mobile banner (1280×400) | WebP | 80KB | 2× mobile |
| Desktop banner (2560×800) | WebP | 180KB | 2× desktop (primary) |
| Desktop banner (2560×800) | PNG | 470KB | Legacy fallback (current) |
| Desktop banner (3840×1200) | WebP | 350KB | 3× retina (optional) |

**Current State**: 470KB PNG
**Target State**: 180KB WebP (62% reduction) with equivalent quality

### Loading Performance Targets

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s (banner should not be LCP element)
- **Cumulative Layout Shift (CLS)**: 0 (zero layout shift)
- **Time to Interactive (TTI)**: < 3.5s

---

## Related Documentation

### Internal Links
- [Design System Style Guide](/design-documentation/design-system/style-guide.md)
- [Image Optimization Guidelines](/design-documentation/design-system/tokens/images.md)
- [Accessibility Standards](/design-documentation/accessibility/guidelines.md)
- [Performance Budget](/design-documentation/design-system/performance.md)

### External Resources
- [Next.js Image Component Documentation](https://nextjs.org/docs/api-reference/next/image)
- [Web.dev Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [MDN Image-Rendering CSS Property](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)
- [WCAG Image Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text)

### Developer Handoff Checklist
- [ ] Read this entire specification document
- [ ] Review current PromotionalBanner.tsx implementation
- [ ] Understand Next.js Image component API
- [ ] Test changes locally on both 1× and 2× displays
- [ ] Verify WebP format serving in browser DevTools
- [ ] Measure performance impact with Lighthouse
- [ ] Conduct visual quality comparison before/after
- [ ] Test across all supported browsers
- [ ] Validate accessibility with screen reader
- [ ] Document any deviations from spec with rationale

---

## Last Updated

**Date**: 2025-10-30
**Author**: UX/UI Design Team
**Reviewers**: Development Team, Product Team
**Status**: Approved for Implementation

### Change Log
- **2025-10-30**: Initial specification created based on image quality degradation investigation
- **Next Review**: After Phase 1 implementation completion

---

## Summary & Quick Reference

### The Problem
Promotional banner appears blurry/fuzzy on website despite high-quality source file.

### Root Cause
1. Using native `<img>` instead of Next.js `<Image>` component
2. Missing responsive image optimization
3. No pixel density optimization for Retina displays
4. CSS transforms causing resampling blur
5. Missing image rendering optimization hints

### The Solution
1. **Immediate Fix**: Replace `<img>` with Next.js `<Image>` component
2. **Add**: Explicit dimensions (2560×800), quality={95}, priority={true}
3. **Optimize**: CSS with `image-rendering: crisp-edges` and GPU acceleration
4. **Remove**: Scale transform hover effect (use shadow instead)
5. **Test**: Verify crispness across 1×, 2×, 3× displays

### Expected Outcome
- ✅ Razor-sharp text and graphics matching source file quality
- ✅ Professional brand appearance restored
- ✅ Optimal performance across all devices and pixel densities
- ✅ Zero layout shift, improved Core Web Vitals
- ✅ 60%+ file size reduction with WebP format (Phase 2)

### Developer Quick Start
```bash
# 1. Update component file
/src/components/activity/PromotionalBanner.tsx

# 2. Replace <img> with <Image>
import Image from 'next/image';

# 3. Key props to add
width={2560}
height={800}
quality={95}
priority={true}
sizes="(max-width: 1024px) 100vw, 1280px"

# 4. Test command
npm run dev

# 5. Verify at
http://localhost:3000/november
```

---

**Questions or Concerns?** Contact UX/UI Design Team or reference this specification document during implementation sprint planning.
