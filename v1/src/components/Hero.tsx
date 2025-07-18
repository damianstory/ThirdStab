'use client';

import { useEffect, useState } from 'react';
import EmailForm from './EmailForm';
import { InfiniteSlider } from './ui/infinite-slider';
import AnimatedBackground from './AnimatedBackground';

// Company logos data
const companies = [
  { name: 'TechCorp', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=TechCorp' },
  { name: 'InnovateLab', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=InnovateLab' },
  { name: 'FutureWorks', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=FutureWorks' },
  { name: 'DigitalPro', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=DigitalPro' },
  { name: 'CodeMasters', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=CodeMasters' },
  { name: 'DataDrive', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=DataDrive' },
  { name: 'CloudNext', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=CloudNext' },
  { name: 'AIVentures', logo: 'https://via.placeholder.com/150x60/e5e7eb/6b7280?text=AIVentures' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Parallax effect for desktop only
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined' && window.innerWidth > 1024) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 pt-24">
      {/* Animated WebGL Background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      {/* Main content wrapper - takes up available space */}
      <div className="flex-grow flex flex-col justify-between relative z-10">
        {/* Hero content (text + image) */}
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="order-1 lg:order-1">
              <div className={`space-y-6 transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Headings */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                    Discover Your Future Through{' '}
                    <span className="text-[#0092ff]">Industry Immersion</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join monthly skill-building challenges designed by leading Canadian companies. Build real skills, explore careers, and win microgrants.
                  </p>
                </div>

                {/* Email Capture Form */}
                <div className={`max-w-md transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <EmailForm 
                    placeholder="Enter your email address"
                    buttonText="Get Started"
                    source="hero"
                    className="shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Hero Image Column */}
            <div className="order-2 lg:order-2 relative">
              <div className={`relative transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Floating Elements Container */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Flow Lines */}
                  <div className="absolute top-[30%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse transform -rotate-12" />
                  <div className="absolute bottom-[40%] right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse transform rotate-12" style={{animationDelay: '3s'}} />
                  
                  {/* Floating Bubbles */}
                  <div 
                    className="absolute top-[10%] -right-8 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-xl overflow-hidden animate-bounce transition-transform duration-300"
                    style={{ 
                      transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                      animationDelay: '0s',
                      animationDuration: '3s'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600" />
                  </div>
                  
                  <div 
                    className="absolute top-[40%] -left-8 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-xl overflow-hidden animate-bounce transition-transform duration-300"
                    style={{ 
                      transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`,
                      animationDelay: '1s',
                      animationDuration: '3.5s'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500" />
                  </div>
                  
                  <div 
                    className="absolute bottom-[20%] right-5 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full bg-white shadow-xl overflow-hidden animate-bounce transition-transform duration-300"
                    style={{ 
                      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                      animationDelay: '2s',
                      animationDuration: '4s'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500" />
                  </div>
                </div>
                
                {/* Hero Image Placeholder */}
                <div className="relative z-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl lg:rounded-3xl h-[400px] lg:h-[500px] flex items-center justify-center shadow-2xl">
                  <div className="text-center text-gray-500">
                    <svg 
                      className="w-20 h-20 mx-auto mb-4"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-lg font-medium">Student Image Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite slider - centered in remaining space */}
        <div className={`w-full py-16 lg:py-20 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Activity Sponsors</p>
          </div>
          <InfiniteSlider gap={40} duration={30} className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center h-16 lg:h-20 px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}