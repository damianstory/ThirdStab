import { SponsorPageData } from '../sponsors';

/**
 * Language-aware sponsor page data loader
 * Dynamically imports the correct sponsor data file based on language and slug
 *
 * @param slug - Sponsor slug (e.g., 'shad-canada', 'skills-canada')
 * @param language - Language code ('en' or 'fr')
 * @returns SponsorPageData object for the specified sponsor and language
 */
export async function getSponsorPageData(
  slug: string,
  language: 'en' | 'fr' = 'en'
): Promise<SponsorPageData | null> {
  const slugLower = slug.toLowerCase();

  try {
    // Dynamically import the correct language version
    const sponsorModule = await import(`./${language}/${slugLower}`);

    // Return the sponsor data from the module
    // Convention: each file exports a sponsor named `${camelCaseSlug}Sponsor`
    const sponsorKey = `${toCamelCase(slugLower)}Sponsor`;
    return sponsorModule[sponsorKey] || null;
  } catch (error) {
    console.warn(`Sponsor data not found for slug: ${slugLower}, language: ${language}`);
    return null;
  }
}

// Helper to convert slug to camelCase for export name lookup
function toCamelCase(slug: string): string {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Re-export types for convenience
export type { SponsorPageData } from '../sponsors';
