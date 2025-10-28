# Language-Specific Assets Implementation Guide

## Overview

Your French page infrastructure now supports **language-specific images, videos, and external URLs** in addition to text translations. This was implemented using separate data files per language.

## What Changed

### 1. New Directory Structure

```
src/data/activity-pages/
├── en/
│   ├── october.ts    (English activity data)
│   └── november.ts   (English activity data)
├── fr/
│   ├── october.ts    (French activity data with French-specific assets)
│   └── november.ts   (French activity data with French-specific assets)
└── index.ts          (Language-aware data loader)
```

### 2. Language-Aware Data Loader

Created `src/data/activity-pages/index.ts` with a `getActivityPageData(month, language)` function that dynamically loads the correct language version.

### 3. Updated Page Components

All page files now use the new data loader:
- `/app/[month]/page.tsx` - English dynamic route
- `/app/october/fr/page.tsx` - French October route
- `/app/november/fr/page.tsx` - French November route

## How to Add French Content

### For November (or any activity with different images):

1. **Add French Hero Image:**
   ```typescript
   // In src/data/activity-pages/fr/november.ts
   hero: {
     backgroundImage: '/november-hero-fr.jpg',  // ← Update this path
     tagline: 'French tagline here',
     introText: 'French intro text here'
   }
   ```

2. **Update External URLs:**
   ```typescript
   // Different submission form for French
   submission: {
     url: 'https://www.surveymonkey.com/r/NOVEMBER-FR',  // ← Update URL
     deadline: new Date('2025-11-30T23:59:59-05:00'),
     instructions: 'French instructions here'
   }

   // Different rubric URL for French
   rubric: {
     detailedRubricUrl: 'https://claude.ai/.../french-rubric',  // ← Update URL
     // ... other rubric fields
   }

   // Different resource URLs for French
   resources: [
     {
       title: 'Activité 1',
       description: 'Description française',
       url: 'https://example.com/fr/resource',  // ← Update URL
       type: 'link'
     }
   ]
   ```

3. **Translate All Text Content:**
   - Look for `// TODO: Translate to French` comments in the French data files
   - Replace English text with French translations
   - Keep HTML tags like `<strong>`, `<em>`, `<br/>` intact

## Key Features

### ✅ What's Now Supported

1. **Language-Specific Images:**
   - Hero background images can differ between EN/FR
   - Example: `/november-hero.jpg` (EN) vs `/november-hero-fr.jpg` (FR)

2. **Language-Specific External URLs:**
   - Submission forms (SurveyMonkey)
   - Rubric links
   - Resource links
   - External website URLs

3. **Automatic Language Detection:**
   - English routes (`/october`) load English data
   - French routes (`/october/fr`) load French data
   - No component code changes needed

### 🔄 What Stays the Same

- Sponsor logos (shared across languages)
- Video URLs (unless you have separate French videos)
- Dates, numbers, incentive amounts (formatted in data)
- Component structure (100% reusable)

## Testing

### Verified Working:
- ✓ English October page (`/october`)
- ✓ French October page (`/october/fr`)
- ✓ English November page (`/november`)
- ✓ French November page (`/november/fr`) with French hero image path
- ✓ Build process succeeds
- ✓ Development server runs without errors

### To Test in Browser:
1. Start dev server: `npm run dev`
2. Visit `http://localhost:3000/november`
3. Visit `http://localhost:3000/november/fr`
4. Verify French page shows different hero image path in DevTools

## Adding New Activity Months

When adding December, January, etc.:

1. Create `src/data/activity-pages/en/[month].ts`
2. Create `src/data/activity-pages/fr/[month].ts`
3. The data loader automatically handles the new files
4. No component code changes needed

## Example: November French Hero Image

**English version** (`src/data/activity-pages/en/november.ts`):
```typescript
hero: {
  backgroundImage: '/november-hero.jpg',  // English image
  tagline: 'Build Your Skills for Success',
  introText: 'English intro text...'
}
```

**French version** (`src/data/activity-pages/fr/november.ts`):
```typescript
hero: {
  backgroundImage: '/november-hero-fr.jpg',  // French image!
  tagline: 'Développez vos compétences pour réussir',
  introText: 'Texte d\'introduction français...'
}
```

## Important Notes

1. **TODO Comments:** French data files contain `// TODO: Translate to French` comments marking all text that needs translation
2. **File Structure:** Keep English and French files structurally identical (same fields, same order)
3. **Testing:** Always test French routes in browser after updating French data files
4. **Image Assets:** Place French images in `/public/` directory with clear naming (e.g., `-fr.jpg` suffix)
5. **No Code Changes:** Once this infrastructure is set up, adding new content only requires editing data files

## Future Activities

As you receive French translations and assets for future months:
1. Copy the English data file structure
2. Replace text with French translations
3. Update image paths to French versions
4. Update external URLs to French equivalents
5. Deploy - the infrastructure handles the rest!

---

**Status:** ✅ Infrastructure Complete & Tested
**Next Step:** When you receive French November assets, update `src/data/activity-pages/fr/november.ts`
