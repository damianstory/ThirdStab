'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageContext } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t, isLoading } = useLanguageContext();

  // Only build navigation array when translations are loaded
  const navigation = isLoading ? [] : [
    { name: t('header.navigation.howItWorks'), href: '#how-it-works' },
    { name: t('header.navigation.whyMicroGrants'), href: '#why-micro-grants' },
    { name: t('header.navigation.activities'), href: '#timeline' },
    { name: t('header.navigation.incentives'), href: '#incentives' },
    { name: t('header.navigation.sponsors'), href: '#sponsors' },
    { name: t('header.navigation.faq'), href: '#faq' },
    { name: t('header.navigation.stayInformed'), href: '#stay-informed' },
  ];

  // Determine the home path based on current language
  const homePath = language === 'fr' ? '/fr' : '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a direct route (not an anchor), don't prevent default
    if (!href.startsWith('#')) {
      setIsMenuOpen(false);
      return;
    }

    // If we're not on the home page, navigate to home page with the hash (maintaining language)
    const isOnHomePage = pathname === '/' || pathname === '/fr';
    if (!isOnHomePage) {
      setIsMenuOpen(false);
      window.location.href = `${homePath}${href}`;
      return;
    }

    e.preventDefault();

    // Ensure we're in the browser
    if (typeof window === 'undefined') return;

    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const additionalOffset = 10; // Extra breathing room (reduced by half)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  // Language dropdown component for desktop
  const LanguageDropdown = () => (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="text-gray-700 hover:text-[#0092ff] px-1 xl:px-2 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1"
        aria-expanded={isLanguageDropdownOpen}
        aria-label="Select language"
      >
        <span>{language}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLanguageDropdownOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50">
          <button
            onClick={() => {
              if (language !== 'en') toggleLanguage();
              setIsLanguageDropdownOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
              language === 'en'
                ? 'bg-blue-50 text-[#0092ff] font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              if (language !== 'fr') toggleLanguage();
              setIsLanguageDropdownOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
              language === 'fr'
                ? 'bg-blue-50 text-[#0092ff] font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            French
          </button>
        </div>
      )}
    </div>
  );

  // Language dropdown component for mobile
  const MobileLanguageDropdown = () => (
    <div className="language-dropdown px-3 pb-2">
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="w-full text-gray-700 hover:text-[#0092ff] px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 min-h-[44px] flex items-center justify-between"
        aria-expanded={isLanguageDropdownOpen}
      >
        <span>{language === 'en' ? 'English' : 'French'}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLanguageDropdownOpen && (
        <div className="mt-1 bg-gray-50 rounded-md py-1">
          <button
            onClick={() => {
              if (language !== 'en') toggleLanguage();
              setIsLanguageDropdownOpen(false);
              setIsMenuOpen(false);
            }}
            className={`w-full text-left px-6 py-2 text-sm transition-colors duration-150 ${
              language === 'en'
                ? 'bg-blue-50 text-[#0092ff] font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              if (language !== 'fr') toggleLanguage();
              setIsLanguageDropdownOpen(false);
              setIsMenuOpen(false);
            }}
            className={`w-full text-left px-6 py-2 text-sm transition-colors duration-150 ${
              language === 'fr'
                ? 'bg-blue-50 text-[#0092ff] font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            French
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Three Sections */}
        <div className="hidden xl:grid xl:grid-cols-[auto_1fr_auto] items-center h-16 pt-1">
          {/* Left Section - myBlueprint Logo */}
          <div className="flex items-center">
            <Link href={homePath} className="inline-block">
              <img
                src="/myblueprint-logo.png"
                alt="myBlueprint"
                className="h-9"
              />
            </Link>
          </div>

          {/* Center Section - Navigation + Language Dropdown */}
          <div className="flex items-center justify-center overflow-visible">
            <div className="flex items-baseline space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-[#0092ff] px-1 xl:px-2 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              {/* Language Dropdown integrated into navigation */}
              <LanguageDropdown />
            </div>
          </div>

          {/* Right Section - Industry Immersion Series Logo */}
          <div className="flex items-center justify-end">
            <Link href={homePath} className="inline-block">
              <img
                src="/industry-immersion-logo.png"
                alt="Industry Immersion Series"
                className="h-11 -mt-1"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Three Sections */}
        <div className="xl:hidden flex items-center justify-between h-14 sm:h-16 pt-1">
          {/* Left - myBlueprint Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={homePath} className="inline-block">
              <img
                src="/myblueprint-logo.png"
                alt="myBlueprint"
                className="h-7"
              />
            </Link>
          </div>

          {/* Center - Mobile menu button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0092ff] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0092ff] min-w-[44px] min-h-[44px]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Right - Industry Immersion Series Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={homePath} className="inline-block">
              <img
                src="/industry-immersion-logo.png"
                alt="Industry Immersion Series"
                className="h-9 -mt-1"
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} xl:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Language Dropdown - Mobile */}
            <MobileLanguageDropdown />
            {/* Navigation Items */}
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-[#0092ff] block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 min-h-[44px] flex items-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}