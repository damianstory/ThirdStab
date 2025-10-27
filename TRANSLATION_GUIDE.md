# Translation Guide

This guide explains how to add French translations to the Industry Immersion Series website.

## Overview

The site is now set up with a complete translation infrastructure. All English content is stored in JSON files, and the components use translation keys to display text. **When you receive French translations, you simply paste them into the JSON files - no code changes needed!**

## Translation File Structure

All translation files are located in `/src/translations/`:

```
src/translations/
├── en/
│   ├── common.json      # Header, footer, navigation
│   ├── home.json        # Homepage content
│   ├── activities.json  # Timeline/activities section
│   ├── october.json     # October activity page
│   └── november.json    # November activity page
└── fr/
    ├── common.json      # (Same structure as EN, but in French)
    ├── home.json
    ├── activities.json
    ├── october.json
    └── november.json
```

## How to Add French Translations

### Step 1: Get Your English Text as Reference

Each English JSON file contains the text currently displayed on the site. For example, `/src/translations/en/home.json` contains:

```json
{
  "hero": {
    "title": "Industry Immersion Series",
    "paragraph1": "$100,000+ in micro grants...",
    "paragraph2Bold": "The first activity is now live! Scroll down ",
    "paragraph2Rest": "to learn how the program works...",
    ...
  }
}
```

### Step 2: Translate the Values (Not the Keys!)

**Important:** Only translate the VALUES (text in quotes after the colon). Keep the KEYS (words before the colon) exactly the same.

```json
// CORRECT ✓
{
  "hero": {
    "title": "Série d'immersion industrielle",
    "paragraph1": "Plus de 100 000 $ en micro-subventions..."
  }
}

// WRONG ✗ - Don't translate the keys!
{
  "heros": {
    "titre": "Série d'immersion industrielle"
  }
}
```

### Step 3: Paste Into French Files

Once you have your translations, paste them into the corresponding French file:

1. Open `/src/translations/fr/home.json`
2. Replace the English values with your French translations
3. Keep all the keys exactly as they are
4. Save the file

That's it! The website will automatically display the French translations.

## Current Translation Status

### ✅ Translation Infrastructure Ready

The translation system is fully set up with:
- Language detection from URL (EN vs FR)
- Translation loading system
- JSON files with proper structure
- Fallback to English when translations missing

### 📋 All Sections Still Use Hardcoded English

**Currently, ALL content shows English text on both EN and FR pages.**

This is intentional until you receive French translations. All sections need to be converted to use translation keys:

- Header Navigation
- Hero Section
- How It Works section
- Why Micro Grants section
- Timeline/Activities section
- Incentives section
- Sponsors section
- FAQ section
- Stay Informed section
- Footer section
- Language Toggle labels
- Activity detail pages (October, November)

The JSON files are ready with English content - when you get French translations, you can:
1. Paste French text into `/src/translations/fr/*.json` files
2. Convert components to use `useTranslation()` hook
3. French content will appear immediately

## Testing Your Translations

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000` to see English
3. Click the language dropdown and select "French"
4. Visit `http://localhost:3000/fr` to see French
5. Check that your translations appear correctly

## Tips for Translators

1. **Preserve formatting**: If English has bold text or line breaks, keep those in French
2. **Keep placeholders**: If you see `{variable}` or similar, keep those exactly as-is
3. **Check lengths**: Some French text may be longer than English - test that it fits
4. **Dollar amounts**: Decide if you want to keep $ or convert to CAD
5. **Grade levels**: "Grades 7-12" might need adjustment for Quebec system

## Fallback Behavior

If a French translation is missing:
- The site automatically shows the English version
- No errors or broken text
- You can add translations incrementally

## Need Help?

If you're unsure about a translation key or how to structure something, check:
1. The English JSON files for the current structure
2. The component files (`.tsx`) to see how keys are used
3. This guide for examples

## Future Sections

When you're ready to translate more sections, follow the same pattern:

1. Add English content to appropriate JSON file
2. Update component to use translation keys
3. Add French translations to corresponding French JSON file

The infrastructure is ready - just add the French content when you have it!
