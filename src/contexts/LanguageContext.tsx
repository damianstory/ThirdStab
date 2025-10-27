'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface TranslationData {
  [key: string]: string | TranslationData;
}

interface Translations {
  [lang: string]: {
    [namespace: string]: TranslationData;
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Detect language from URL pathname
  useEffect(() => {
    const detectedLanguage = pathname.endsWith('/fr') ? 'fr' : 'en';
    setLanguage(detectedLanguage);
  }, [pathname]);

  // Load translations for current language
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Load all translation files for the current language
        const namespaces = ['common', 'home', 'activities', 'october', 'november'];
        const loadedTranslations: { [namespace: string]: TranslationData } = {};

        await Promise.all(
          namespaces.map(async (namespace) => {
            try {
              const translation = await import(`@/translations/${language}/${namespace}.json`);
              loadedTranslations[namespace] = translation.default;
            } catch (error) {
              console.warn(`Translation file not found: ${language}/${namespace}.json`);
              loadedTranslations[namespace] = {};
            }
          })
        );

        setTranslations((prev) => ({
          ...prev,
          [language]: loadedTranslations,
        }));
      } catch (error) {
        console.error('Error loading translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  // Translation function with nested key support
  const t = useCallback(
    (key: string): string => {
      // Key format: "namespace:path.to.key" or "path.to.key" (defaults to common namespace)
      const [namespaceOrKey, ...rest] = key.split(':');
      const namespace = rest.length > 0 ? namespaceOrKey : 'common';
      const path = rest.length > 0 ? rest.join(':') : namespaceOrKey;

      const keys = path.split('.');
      let current: TranslationData | string | undefined = translations[language]?.[namespace];

      // Navigate through nested keys
      for (const k of keys) {
        if (current && typeof current === 'object') {
          current = current[k];
        } else {
          current = undefined;
          break;
        }
      }

      // If translation not found, try English as fallback
      if (current === undefined && language !== 'en') {
        let fallback: TranslationData | string | undefined = translations['en']?.[namespace];
        for (const k of keys) {
          if (fallback && typeof fallback === 'object') {
            fallback = fallback[k];
          } else {
            fallback = undefined;
            break;
          }
        }
        if (typeof fallback === 'string') {
          return fallback;
        }
      }

      // Return the translation or the key itself if not found
      return typeof current === 'string' ? current : key;
    },
    [language, translations]
  );

  // Toggle between English and French
  const toggleLanguage = useCallback(() => {
    const newLanguage = language === 'en' ? 'fr' : 'en';

    // Update URL to reflect language change
    let newPath: string;
    if (newLanguage === 'fr') {
      // Handle root path specially
      if (pathname === '/') {
        newPath = '/fr';
      } else if (pathname.endsWith('/fr')) {
        // Already on French version
        newPath = pathname;
      } else {
        // Add /fr suffix to other paths
        newPath = `${pathname}/fr`;
      }
    } else {
      // Remove /fr suffix if present
      if (pathname === '/fr') {
        newPath = '/';
      } else if (pathname.endsWith('/fr')) {
        newPath = pathname.slice(0, -3);
      } else {
        // Already on English version
        newPath = pathname;
      }
    }

    // Ensure root path doesn't become empty
    if (newPath === '') {
      newPath = '/';
    }

    // Navigate to new URL
    window.location.href = newPath;
  }, [language, pathname]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
