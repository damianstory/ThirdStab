---
title: Promotional Banner Feature - Design Documentation
description: Overview and navigation for promotional banner design specifications and implementation guides
feature: Promotional Banner Component
last-updated: 2025-10-30
version: 1.0.0
status: approved
---

# Promotional Banner Feature - Design Documentation

## Overview

The Promotional Banner component displays time-sensitive promotional content for partner organizations and special events. The current implementation focuses on the National Skilled Trades and Technology Week (NSTTW) campaign banner for November 2025.

## Current Implementation Status

**Component Location**: `/src/components/activity/PromotionalBanner.tsx`
**Data Configuration**: `/src/data/activity-pages/en/november.ts` (line 238-248)
**Asset Location**: `/public/promotional-banners/`

**Known Issues**:
- ❌ Image quality degradation (fuzzy/soft rendering)
- ❌ Using native `<img>` instead of Next.js `<Image>` optimization
- ❌ No responsive image serving strategy
- ❌ Missing pixel density optimization for Retina displays

## Documentation Files

### 1. Image Quality Optimization Specification
**File**: [image-quality-optimization.md](./image-quality-optimization.md)

**Contents**:
- Root cause analysis of image quality issues
- Comprehensive design specifications for high-quality banner display
- Technical implementation recommendations
- Testing and quality assurance procedures
- Performance optimization strategies

**Use this document for**:
- Understanding why images appear blurry
- Implementation guidance for fixing quality issues
- Performance optimization requirements
- Cross-browser testing procedures

### 2. Implementation Checklist (Quick Reference)

#### Phase 1: Critical Quality Fix (Current Sprint - P0)

**Estimated Effort**: 2-3 hours

**Tasks**:
1. ✅ Update `PromotionalBanner.tsx` to use Next.js `<Image>` component
2. ✅ Add explicit width/height props (2560×800)
3. ✅ Set quality={95} for promotional material
4. ✅ Add priority={true} for above-fold loading
5. ✅ Apply CSS rendering optimization (`image-rendering: crisp-edges`)
6. ✅ Remove scale hover effect (replace with shadow elevation)
7. ✅ Test on 1× and 2× displays for quality verification

**Acceptance Criteria**:
- Banner displays with crisp, sharp text matching source file
- Zero Cumulative Layout Shift (CLS) during load
- Hover interaction maintains image quality
- Works across Chrome, Safari, Firefox, Edge

**Code Changes Required**:
```tsx
// Before (current)
<img src={image} alt={altText} className="w-full h-auto object-contain hover:scale-[1.01]" />

// After (optimized)
<Image
  src={image}
  alt={altText}
  width={2560}
  height={800}
  quality={95}
  priority={true}
  sizes="(max-width: 1024px) 100vw, 1280px"
  className="w-full h-auto"
  style={{ imageRendering: 'crisp-edges', transform: 'translateZ(0)' }}
/>
```

#### Phase 2: Format Optimization (Next Sprint - P1)

**Estimated Effort**: 1-2 hours

**Tasks**:
1. Generate WebP assets from source PNG
2. Verify automatic format serving by Next.js
3. Measure performance improvements
4. Document file size reductions

**Expected Results**:
- 60%+ file size reduction (470KB PNG → ~180KB WebP)
- Improved page load performance
- Maintained visual quality

#### Phase 3: Responsive Assets (Future Enhancement - P2)

**Estimated Effort**: 4-6 hours

**Tasks**:
1. Generate multi-resolution assets (640px, 1280px, 2560px, 3840px)
2. Configure responsive image serving with `sizes` prop
3. Test on real devices at different pixel densities
4. Document asset generation process

## Design Principles for Promotional Content

### Visual Quality Standards
- **Text Crispness**: All text must be razor-sharp and fully legible
- **Professional Appearance**: Image quality reflects brand credibility
- **Responsive Quality**: Quality maintained across all viewport sizes
- **Performance Balance**: High quality without compromising load times

### User Experience Considerations
- **Visual Hierarchy**: Banner should be prominent but not overwhelming
- **Readability**: Clear call-to-action and informational text
- **Accessibility**: Proper alt text, keyboard navigation, color contrast
- **Loading States**: Zero layout shift, smooth loading experience

### Brand Consistency
- **Color Accuracy**: Partner brand colors must render accurately
- **Logo Quality**: Sponsor logos display with professional crispness
- **Typography**: Text rendering matches source design specifications

## Technical Architecture

### Component Data Flow
```
Activity Page Data (november.ts)
  ↓
  promotionalBanner: {
    imageEn: string,
    imageFr: string,
    altTextEn: string,
    altTextFr: string,
    link: string,
    displayDates: { start: Date, end: Date }
  }
  ↓
PromotionalBanner Component
  ↓
  - Date range validation
  - Language selection (en/fr)
  - Image rendering with optimization
  - Link wrapping (if URL provided)
  ↓
Rendered Banner with Attribution
```

### Display Logic
1. **Date Range Check**: Banner only displays between `displayDates.start` and `displayDates.end`
2. **Language Selection**: Automatically selects English or French assets based on `language` prop
3. **Link Handling**: Wraps image in `<a>` tag if `link` is provided
4. **Attribution Display**: Shows contextual text below banner explaining the promotion

## Asset Specifications

### Current Assets
```
/public/promotional-banners/
├── nsttw-2025-en-new.png      # 2560×800, 470KB (current source)
├── nsttw-2025-fr.png          # French version
├── nsttw-2025-en-upscaled.png # Previous attempt (not used)
└── nsttw-2025-fr-upscaled.png # Previous attempt (not used)
```

### Recommended Asset Structure (Future)
```
/public/promotional-banners/
├── nsttw-2025-en/
│   ├── mobile.webp      # 640×200
│   ├── mobile@2x.webp   # 1280×400
│   ├── tablet.webp      # 1024×320
│   ├── tablet@2x.webp   # 2048×640
│   ├── desktop.webp     # 1280×400
│   ├── desktop@2x.webp  # 2560×800 (current as WebP)
│   └── fallback.png     # 2560×800 (legacy browsers)
└── nsttw-2025-fr/
    └── [same structure]
```

## Testing Procedures

### Visual Quality Testing
1. **Desktop (1× density)**: Verify text is sharp on standard 1920×1080 display
2. **MacBook Retina (2× density)**: Verify no softness on high-DPI display
3. **iPhone (3× density)**: Verify mobile rendering maintains quality
4. **Zoom Test**: Zoom to 200% and verify edges remain crisp

### Performance Testing
1. **Lighthouse Audit**: Run full audit, target LCP < 2.5s
2. **Network Throttling**: Test on Fast 3G, verify acceptable load time
3. **Layout Shift**: Measure CLS, must be 0 (zero shift)
4. **Format Verification**: Check DevTools Network tab for WebP serving

### Cross-Browser Testing
- Chrome (latest): Primary browser
- Safari (latest): Important for Mac/iOS users
- Firefox (latest): Different rendering engine
- Edge (latest): Chromium-based verification

### Accessibility Testing
- **Screen Reader**: Test with VoiceOver (Mac) or NVDA (Windows)
- **Keyboard Navigation**: Tab to banner, verify focus indicator, press Enter
- **Color Contrast**: Verify WCAG AA compliance for all text
- **Alt Text**: Verify comprehensive description provided

## Common Issues & Solutions

### Issue: Banner still appears blurry after implementation
**Diagnostic**:
- Check if Next.js `<Image>` component is being used (not native `<img>`)
- Verify width/height props are set correctly (2560×800)
- Check quality prop is set to 95
- Inspect rendered image in DevTools for correct srcset generation

**Solution**: Verify all optimization props are present and CSS rendering hints applied

### Issue: Layout shift during page load
**Diagnostic**:
- Missing width/height props on Image component
- Container doesn't reserve space for image

**Solution**: Always provide explicit width/height to Image component

### Issue: WebP not serving to modern browsers
**Diagnostic**:
- Check Next.js version (should be 13+)
- Verify image optimization is enabled in next.config.mjs

**Solution**: Next.js handles this automatically with `<Image>` component

### Issue: Different quality on mobile vs desktop
**Diagnostic**:
- Single image being scaled for all devices
- No responsive sizes configured

**Solution**: Implement multi-resolution assets (Phase 3)

## Future Enhancements

### Short-term (1-2 sprints)
- [ ] Implement WebP format serving (Phase 2)
- [ ] Add loading skeleton for better perceived performance
- [ ] Create reusable pattern for other promotional banners

### Medium-term (3-6 sprints)
- [ ] Generate and serve responsive image assets (Phase 3)
- [ ] Implement automated asset generation pipeline
- [ ] Add A/B testing framework for different banner styles

### Long-term (6+ sprints)
- [ ] Dynamic banner management system (CMS integration)
- [ ] Advanced analytics tracking for banner engagement
- [ ] Progressive image loading with blur-up effect
- [ ] Support for animated promotional content (video, GIF)

## Related Documentation

### Design System
- [Style Guide](/design-documentation/design-system/style-guide.md)
- [Component Library](/design-documentation/design-system/components/README.md)
- [Image Optimization Standards](/design-documentation/design-system/tokens/images.md)

### Accessibility
- [Accessibility Guidelines](/design-documentation/accessibility/guidelines.md)
- [WCAG Compliance](/design-documentation/accessibility/compliance.md)

### Codebase
- [CLAUDE.md](/CLAUDE.md) - Project overview and development guidelines
- [Activity Page Data Structure](/src/data/activities.ts)
- [November Activity Configuration](/src/data/activity-pages/en/november.ts)

## Questions & Support

**Design Questions**: Reference [image-quality-optimization.md](./image-quality-optimization.md) for detailed specifications

**Implementation Questions**: Check Quick Reference section above or consult development team

**Bug Reports**: Document issue with:
- Browser/device details
- Screenshot comparison (expected vs actual)
- Steps to reproduce
- Network conditions

---

**Last Updated**: 2025-10-30 by UX/UI Design Team
**Next Review**: After Phase 1 implementation
