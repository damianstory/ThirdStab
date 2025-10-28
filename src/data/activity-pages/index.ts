import { ActivityPageData } from '../activities';

/**
 * Language-aware activity data loader
 * Dynamically imports the correct activity data file based on language and month
 *
 * @param month - Activity month slug (e.g., 'october', 'november')
 * @param language - Language code ('en' or 'fr')
 * @returns ActivityPageData object for the specified month and language
 */
export async function getActivityPageData(
  month: string,
  language: 'en' | 'fr' = 'en'
): Promise<ActivityPageData | null> {
  const monthLower = month.toLowerCase();

  try {
    // Dynamically import the correct language version
    const activityModule = await import(`./${language}/${monthLower}`);

    // Return the activity data from the module
    // Convention: each file exports an activity named `${month}Activity`
    const activityKey = `${monthLower}Activity`;
    return activityModule[activityKey] || null;
  } catch (error) {
    console.warn(`Activity data not found for month: ${monthLower}, language: ${language}`);
    return null;
  }
}

// Re-export types for convenience
export type { ActivityPageData } from '../activities';
