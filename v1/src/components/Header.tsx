'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Micro Grants?', href: '#why-micro-grants' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Incentives', href: '#incentives' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Stay Informed', href: '#stay-informed' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Ensure we're in the browser
    if (typeof window === 'undefined') return;
    
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const additionalOffset = 40; // Extra breathing room (reduced by half)
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
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Three Sections */}
        <div className="hidden xl:grid xl:grid-cols-[auto_1fr_auto] items-center h-16 pt-1">
          {/* Left Section - myBlueprint Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <img 
                src="https://i.imgur.com/lVesOAU.png" 
                alt="myBlueprint" 
                className="h-9"
              />
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <div className="flex items-center justify-center overflow-visible">
            <div className="flex items-baseline space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-700 hover:text-[#0092ff] px-1 xl:px-2 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Industry Immersion Series Logo */}
          <div className="flex items-center justify-end">
            <Link href="/" className="inline-block">
              <img 
                src="https://i.imgur.com/oFmdCeW.png" 
                alt="Industry Immersion Series" 
                className="h-9"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Three Sections */}
        <div className="xl:hidden flex items-center justify-between h-14 sm:h-16 pt-1">
          {/* Left - myBlueprint Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="inline-block">
              <img 
                src="https://i.imgur.com/lVesOAU.png" 
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
            <Link href="/" className="inline-block">
              <img 
                src="https://i.imgur.com/oFmdCeW.png" 
                alt="Industry Immersion Series" 
                className="h-7"
              />
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