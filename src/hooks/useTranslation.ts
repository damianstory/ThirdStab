import { useLanguageContext } from '@/contexts/LanguageContext';

/**
 * Custom hook for accessing translation functionality
 * Provides easy access to the current language and translation function
 *
 * @returns {object} Translation utilities
 * @returns {function} t - Translation function that takes a key and returns the translated string
 * @returns {string} language - Current language code ('en' or 'fr')
 * @returns {boolean} isLoading - Whether translations are currently being loaded
 *
 * @example
 * const { t, language } = useTranslation();
 * const title = t('header.navigation.howItWorks');
 * const frenchTitle = t('home:hero.title'); // Specify namespace with colon
 */
export function useTranslation() {
  const { t, language, isLoading } = useLanguageContext();

  return {
    t,
    language,
    isLoading,
  };
}
