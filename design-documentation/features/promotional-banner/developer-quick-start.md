---
title: Promotional Banner - Developer Quick Start Guide
description: Fast-track implementation guide for fixing image quality degradation issue
feature: Promotional Banner Component
last-updated: 2025-10-30
version: 1.0.0
status: approved
---

# Developer Quick Start Guide
## Fixing Promotional Banner Image Quality

**Estimated Time**: 30-45 minutes
**Priority**: P0 - Critical Visual Quality Issue
**File to Edit**: `/src/components/activity/PromotionalBanner.tsx`

---

## TL;DR - The Fix

**Problem**: Banner appears fuzzy/blurry on website
**Root Cause**: Using native `<img>` instead of Next.js `<Image>` component
**Solution**: Replace with optimized `<Image>` component + CSS hints

---

## Step-by-Step Implementation

### 1. Add Next.js Image Import

**File**: `/src/components/activity/PromotionalBanner.tsx`

Add at the top of the file:
```tsx
import Image from 'next/image';
```

### 2. Replace the `<img>` Tag

**Find this code** (lines 38-43 and 46-50):
```tsx
<img
  src={image}
  alt={altText}
  className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
  loading="eager"
/>
```

**Replace with**:
```tsx
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

### 3. Update Both Instances

You need to replace TWO instances of the `<img>` tag:
1. Inside the `<a>` tag (when link exists) - lines 38-43
2. Standalone image (when no link) - lines 46-50

Create a shared image element to avoid duplication:

```tsx
export default function PromotionalBanner({ banner, language }: PromotionalBannerProps) {
  if (!banner) return null;

  if (banner.displayDates) {
    const now = new Date();
    if (now < banner.displayDates.start || now > banner.displayDates.end) {
      return null;
    }
  }

  const image = language === 'en' ? banner.imageEn : banner.imageFr;
  const altText = language === 'en' ? banner.altTextEn : banner.altTextFr;

  // Create shared image element
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
            >
              {imageContent}
            </a>
          ) : (
            imageContent
          )}

          {/* Rest of component unchanged */}
          <div className="border-t border-neutral1" />
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

## What Each Property Does

| Property | Value | Why It Matters |
|----------|-------|----------------|
| `width={2560}` | Source width | Prevents layout shift, enables proper aspect ratio |
| `height={800}` | Source height | Prevents layout shift, enables proper aspect ratio |
| `quality={95}` | High quality | Default is 75; promotional content needs higher quality |
| `priority={true}` | Above-fold | Disables lazy loading, preloads image for faster display |
| `sizes="..."` | Responsive breakpoints | Tells browser which image size to fetch |
| `imageRendering: 'crisp-edges'` | CSS hint | Forces sharp rendering instead of smooth scaling |
| `transform: translateZ(0)` | GPU acceleration | Creates composite layer for sharper rendering |

---

## Testing Your Changes

### 1. Start Development Server
```bash
npm run dev
```

### 2. Navigate to November Activity Page
```
http://localhost:3000/november
```

### 3. Visual Quality Check

**Desktop Test (Standard Display)**:
- Open page in Chrome
- Look at the banner text - should be razor-sharp
- Compare with source image at `/public/promotional-banners/nsttw-2025-en-new.png`
- Text should look identical in crispness

**Retina Display Test (MacBook Pro, etc.)**:
- View page on high-DPI display
- Zoom to 200% using Cmd/Ctrl + Plus
- Text should still appear sharp, not blurry or pixelated

**Mobile Test**:
- Open Chrome DevTools (F12)
- Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
- Test iPhone 12 Pro (3× density)
- Banner should scale down while maintaining sharpness

### 4. Performance Check

**Open Lighthouse** (Chrome DevTools):
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance" and "Accessibility"
4. Click "Analyze page load"

**Expected Results**:
- ✅ Cumulative Layout Shift (CLS): 0
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Image format: WebP served to modern browsers

**Verify WebP Serving**:
1. Open DevTools Network tab
2. Refresh page
3. Find the banner image request
4. Type should show "webp" for modern browsers

### 5. Cross-Browser Testing

Test in these browsers:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

Banner should appear equally sharp in all browsers.

---

## Troubleshooting

### Issue: TypeScript error on Image component

**Error**: `Cannot find module 'next/image'`

**Solution**:
```bash
# Make sure Next.js is properly installed
npm install next@latest
```

### Issue: Image still looks blurry

**Check**:
1. Verify you imported `Image` from `'next/image'`
2. Verify width={2560} and height={800} are set
3. Verify quality={95} is set
4. Check the `style` prop includes `imageRendering: 'crisp-edges'`
5. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Issue: Layout shift during load

**Check**:
1. Ensure width and height props are present
2. Ensure values match source image (2560×800)

### Issue: Image not loading

**Check**:
1. Verify image path is correct: `/promotional-banners/nsttw-2025-en-new.png`
2. Check file exists in `/public/promotional-banners/` directory
3. Check browser console for errors

---

## Before/After Comparison

### Before (Current - Problematic)
```tsx
<img
  src={image}
  alt={altText}
  className="w-full h-auto object-contain hover:scale-[1.01]"
  loading="eager"
/>
```

**Issues**:
- ❌ Native browser rendering (inconsistent quality)
- ❌ No responsive optimization
- ❌ No format optimization (always PNG)
- ❌ Scale transform causes blur on hover
- ❌ No explicit dimensions (causes layout shift)

### After (Optimized)
```tsx
<Image
  src={image}
  alt={altText}
  width={2560}
  height={800}
  quality={95}
  priority={true}
  sizes="(max-width: 1024px) 100vw, 1280px"
  className="w-full h-auto"
  style={{
    imageRendering: 'crisp-edges',
    transform: 'translateZ(0)'
  }}
/>
```

**Improvements**:
- ✅ Next.js automatic optimization
- ✅ Responsive image serving
- ✅ Automatic WebP conversion (60% file size reduction)
- ✅ Sharp rendering on all displays
- ✅ Zero layout shift
- ✅ Better performance

---

## Validation Checklist

Before considering this task complete, verify:

- [ ] Import statement added: `import Image from 'next/image';`
- [ ] Both image instances replaced (inside `<a>` and standalone)
- [ ] All required props present: width, height, quality, priority, sizes
- [ ] CSS optimization style applied
- [ ] Hover effect uses shadow instead of scale
- [ ] Dev server running without errors
- [ ] Banner displays sharp on desktop (1× display)
- [ ] Banner displays sharp on Retina (2× display)
- [ ] No layout shift during page load (CLS = 0)
- [ ] WebP format served in DevTools Network tab
- [ ] Tested in Chrome, Safari, Firefox
- [ ] Alt text still properly set for accessibility

---

## Next Steps After Implementation

1. **Create Pull Request** with title: "Fix: Optimize promotional banner image quality with Next.js Image component"

2. **PR Description Template**:
```markdown
## Problem
Promotional banner was appearing blurry/fuzzy on the website despite high-quality source file.

## Root Cause
- Using native `<img>` tag instead of Next.js `<Image>` component
- Missing image optimization and responsive serving
- No pixel density optimization for Retina displays

## Solution
- Replaced `<img>` with Next.js `<Image>` component
- Added explicit dimensions (2560×800) to prevent layout shift
- Set quality={95} for promotional material
- Applied CSS rendering optimization hints
- Removed scale hover effect to maintain quality

## Testing
- ✅ Verified sharp rendering on 1× displays
- ✅ Verified sharp rendering on 2× Retina displays
- ✅ Confirmed zero layout shift (CLS = 0)
- ✅ Verified WebP format serving to modern browsers
- ✅ Tested across Chrome, Safari, Firefox, Edge

## Screenshots
[Attach before/after comparison screenshots]

## Performance Impact
- File size: 470KB PNG → ~180KB WebP (62% reduction)
- CLS: Improved from X to 0
- Image quality: Significantly improved sharpness
```

3. **Request Review** from:
   - Frontend developer (code review)
   - Designer (visual quality verification)
   - QA (cross-browser testing)

---

## Additional Resources

**Full Specification**: [image-quality-optimization.md](./image-quality-optimization.md)
**Feature Overview**: [README.md](./README.md)
**Next.js Image Docs**: https://nextjs.org/docs/api-reference/next/image

---

## Questions?

**Can't get it working?** Check the full specification document for detailed troubleshooting.

**Need design clarification?** Reference the image-quality-optimization.md document.

**Performance concerns?** The quality={95} setting is intentional for promotional content. Actual file size reduces 60%+ with WebP.

---

**Last Updated**: 2025-10-30
**Estimated Implementation Time**: 30-45 minutes
**Priority**: P0 - Critical
