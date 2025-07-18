'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Micro Grants?', href: '#why-micro-grants' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Incentives', href: '#incentives' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Stay Informed', href: '#stay-informed' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const additionalOffset = 24; // Extra breathing room (24px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Three Sections */}
        <div className="hidden xl:grid xl:grid-cols-3 items-center h-16">
          {/* Left Section - myBlueprint Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <div className="bg-primary-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold flex items-center h-9">
                myBlueprint
              </div>
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <div className="flex items-center justify-center">
            <div className="flex items-baseline space-x-3 lg:space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-700 hover:text-primary-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Industry Immersion Series Logo */}
          <div className="flex items-center justify-end">
            <Link href="/" className="inline-block">
              <div className="bg-primary-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap flex items-center h-9">
                Industry Immersion Series
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Three Sections */}
        <div className="xl:hidden flex items-center justify-between h-14 sm:h-16">
          {/* Left - myBlueprint Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <div className="bg-primary-600 text-white px-3 py-1 rounded text-xs font-semibold flex items-center h-7">
                myBlueprint
              </div>
            </Link>
          </div>

          {/* Center - Mobile menu button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 min-w-[44px] min-h-[44px]"
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
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <div className="bg-primary-700 text-white px-3 py-1 rounded text-xs font-semibold flex items-center h-7">
                <span className="hidden xs:inline">Industry Immersion</span>
                <span className="xs:hidden">IIS</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} xl:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 min-h-[44px] flex items-center"
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