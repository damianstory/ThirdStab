'use client';

import { useEffect, useState } from 'react';
import EmailForm from './EmailForm';
import { InfiniteSlider } from './ui/infinite-slider';
import AnimatedBackground from './AnimatedBackground';

// Company logos data
const companies = [
  { name: 'Industry Immersion Series', logo: 'https://i.imgur.com/oFmdCeW.png' },
  { name: 'myBlueprint', logo: 'https://i.imgur.com/lVesOAU.png' },
  { name: 'Industry Immersion Series', logo: 'https://i.imgur.com/oFmdCeW.png' },
  { name: 'myBlueprint', logo: 'https://i.imgur.com/lVesOAU.png' },
  { name: 'Industry Immersion Series', logo: 'https://i.imgur.com/oFmdCeW.png' },
  { name: 'myBlueprint', logo: 'https://i.imgur.com/lVesOAU.png' },
  { name: 'Industry Immersion Series', logo: 'https://i.imgur.com/oFmdCeW.png' },
  { name: 'myBlueprint', logo: 'https://i.imgur.com/lVesOAU.png' },
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-24 md:pb-32 lg:pb-36 lg:pt-40">
        {/* Background layers container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background */}
          <AnimatedBackground />
          
          {/* Hero image with smart positioning */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-40 md:opacity-50 hero-bg-mobile md:hero-bg-desktop"
            style={{
              backgroundImage: 'url(https://i.imgur.com/tJvD84G.png)',
            }}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0">
            {/* Mobile gradient */}
            <div className="md:hidden absolute inset-0 hero-gradient-mobile" />
            
            {/* Desktop gradient */}
            <div className="hidden md:block absolute inset-0 hero-gradient-desktop" />
          </div>
        </div>

        {/* Content layer */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
            <h1 className={`mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span 
                className="bg-gradient-to-r from-[#0070cc] via-[#00b4ff] to-[#0070cc] bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-animation 3s ease-in-out infinite'
                }}
              >
                Industry Immersion Series
              </span>
            </h1>
            <p className={`mt-8 max-w-2xl text-balance text-lg text-gray-700 transition-all duration-1000 delay-100 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              $100,000+ in micro grants and incentives available to grade 7-12 students (and their educators) across North America.
            </p>
            <p className={`mt-4 max-w-2xl text-balance text-lg text-gray-700 transition-all duration-1000 delay-150 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The first activity launches this October. Join the mailing list so you and your students are the first to know how to get involved.
            </p>

            {/* Email Capture Form */}
            <div className={`mt-12 max-w-md transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <EmailForm 
                placeholder="Enter your email address"
                buttonText="Get Started"
                source="hero"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section className="bg-white pb-2">
        <div className={`relative w-full transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative py-6">
            <InfiniteSlider gap={40} duration={30}>
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center h-12 lg:h-15 px-8"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </InfiniteSlider>
            
            {/* Gradient masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </section>
  );
}