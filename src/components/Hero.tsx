'use client';

import EmailForm from './EmailForm';
import { InfiniteSlider } from './ui/infinite-slider';
import AnimatedBackground from './AnimatedBackground';

// Company logos data
const companies = [
  { name: 'Logo 1', logo: '/logo1.gif' },
  { name: 'Logo 2', logo: '/logo2.jpeg' },
  { name: 'Logo 3', logo: '/logo3.png' },
  { name: 'Logo 4', logo: '/logo4.png' },
  { name: 'Logo 5', logo: '/logo5.png' },
  { name: 'Logo 6', logo: '/logo6.jpeg' },
  { name: 'Logo 7', logo: '/logo7.png' },
  { name: 'Logo 8', logo: '/logo8.png' },
];

export default function Hero() {

  return (
    <section className="overflow-x-hidden">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col">
        {/* Background layers container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background */}
          <AnimatedBackground />
          
          {/* Hero image with smart positioning */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-40 md:opacity-50 hero-bg-mobile md:hero-bg-desktop"
            style={{
              backgroundImage: 'url(/hero-background.jpeg)',
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
        <div className="relative z-10 w-full flex min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center justify-center px-6 lg:px-20">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-xl lg:text-left lg:mr-auto">
            <h1 className="max-w-2xl text-balance text-5xl md:text-6xl xl:text-7xl font-bold animate-fade-in-up">
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
            <p className="mt-8 max-w-2xl text-balance text-lg text-gray-700 animate-fade-in-up animation-delay-100">
              $100,000+ in micro grants and incentives available to grade 7-12 students (and their educators) across North America.
            </p>
            <p className="mt-4 max-w-2xl text-balance text-lg text-gray-700 animate-fade-in-up animation-delay-150">
              The first activity launches this October. Join the mailing list so you and your students are the first to know how to get involved.
            </p>

            {/* Email Capture Form */}
            <div className="mt-12 max-w-md animate-fade-in-up animation-delay-300">
              <EmailForm 
                placeholder="Enter your email address"
                buttonText="Sign Up"
                source="hero"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section className="bg-white pb-2">
        <div className="relative w-full animate-fade-in animation-delay-700">
          <div className="relative py-8">
            <InfiniteSlider gap={40} duration={30}>
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center h-14 lg:h-17 px-8"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={`w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 ${
                      company.logo === '/logo1.gif' ? 'h-[4.375rem] lg:h-[5.25rem]' :
                      company.logo === '/logo2.jpeg' ? 'h-[4.375rem] lg:h-[5.25rem]' :
                      company.logo === '/logo3.png' ? 'h-[2.625rem] lg:h-[3.1875rem]' :
                      company.logo === '/logo5.png' ? 'h-[3.85rem] lg:h-[4.675rem]' :
                      company.logo === '/logo7.png' ? 'h-[1.925rem] lg:h-[2.2rem]' : 
                      company.logo === '/logo8.png' ? 'h-[2.625rem] lg:h-[3.1875rem]' : 'h-full'
                    }`}
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