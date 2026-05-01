'use client';

import EmailForm from './EmailForm';
import { InfiniteSlider } from './ui/infinite-slider';
import AnimatedBackground from './AnimatedBackground';
import { ActivityBadge } from '@/components/ui/activity-badge';
import { getActiveActivity, getActivities } from '@/data/activities';

// Capitalize and strip suffixes like "May-1" → "May", "mai" → "Mai"
function displayMonth(rawMonth: string): string {
  const base = rawMonth.split('-')[0];
  return base.charAt(0).toUpperCase() + base.slice(1).toLowerCase();
}

// Company logos data
const companies = [
  { name: 'Logo 1', logo: '/logo1.gif' },
  { name: 'Skills Canada', logo: '/logo2.png' },
  { name: 'thinkAG', logo: '/thinkag-logo.png' },
  { name: 'Logo 4', logo: '/logo4.png' },
  { name: 'Logo 5', logo: '/logo5.png' },
  { name: 'Logo 6', logo: '/logo6.jpeg' },
  { name: 'Discover Tourism', logo: '/images/discover-tourism-logo.png' },
  { name: 'HVACR Career Connections', logo: '/hvacr-career-connections.png' },
  { name: 'Jack', logo: '/jack-logo.png' },
];

// French elision: "de avril" → "d'avril", but "de mars" stays as "de mars".
function frMonthPhrase(month: string): string {
  const lower = month.toLowerCase();
  const startsWithVowel = /^[aeiouéèêh]/.test(lower);
  return startsWithVowel ? `d'${lower}` : `de ${lower}`;
}

// Localized text content (functions take the active month name in the right language)
const text = {
  en: (month: string) => ({
    title: 'Industry Immersion Series',
    subtitle1: '$100,000+ in micro grants and incentives available to grade 7-12 students (and their educators) across Canada.',
    subtitle2: {
      bold: `The ${month} activity is now live! Scroll down `,
      regular: 'to learn how the program works, and view open activities.'
    },
    subtitle3: 'And join the mailing list so you and your students are the first to know how to get involved.',
    emailPlaceholder: 'Enter your email address',
    signUpButton: 'Sign Up',
    badge: `${month} Activity Live`
  }),
  fr: (month: string) => ({
    title: <>Série <br className="hidden md:block" />d&apos;immersion <br className="hidden md:block" />dans l&apos;industrie</>,
    subtitle1: "Plus de 100 000 $ en microbourses et incitatifs offerts aux élèves de la 7e à la 12e année (et à leurs éducateurs) partout au Canada.",
    subtitle2: {
      bold: `L'activité ${frMonthPhrase(month)} est maintenant en ligne ! Faites défiler la page `,
      regular: "pour découvrir comment le fonctionnement du programme et consulter les activités offertes."
    },
    subtitle3: "Inscrivez-vous à la liste d'envoi pour être les premiers, vous et vos élèves, à savoir comment participer.",
    emailPlaceholder: "Entrez votre adresse courriel",
    signUpButton: "S'inscrire",
    badge: `Activité ${frMonthPhrase(month)} en ligne`
  })
};

// Off-season fallback (no activity active — e.g. June onward)
const offSeasonText = {
  en: {
    title: 'Industry Immersion Series',
    subtitle1: '$100,000+ in micro grants and incentives available to grade 7-12 students (and their educators) across Canada.',
    subtitle2: { bold: '', regular: 'Scroll down to learn how the program works.' },
    subtitle3: 'And join the mailing list so you and your students are the first to know how to get involved.',
    emailPlaceholder: 'Enter your email address',
    signUpButton: 'Sign Up',
    badge: ''
  },
  fr: {
    title: <>Série <br className="hidden md:block" />d&apos;immersion <br className="hidden md:block" />dans l&apos;industrie</>,
    subtitle1: "Plus de 100 000 $ en microbourses et incitatifs offerts aux élèves de la 7e à la 12e année (et à leurs éducateurs) partout au Canada.",
    subtitle2: { bold: '', regular: "Faites défiler la page pour découvrir le fonctionnement du programme." },
    subtitle3: "Inscrivez-vous à la liste d'envoi pour être les premiers, vous et vos élèves, à savoir comment participer.",
    emailPlaceholder: "Entrez votre adresse courriel",
    signUpButton: "S'inscrire",
    badge: ''
  }
};

interface HeroProps {
  language?: 'en' | 'fr';
}

export default function Hero({ language = 'en' }: HeroProps) {
  // Find the currently active activity (status driven by getCurrentStatus, ET-based).
  // For the localized month name, look up the same id in the FR/EN list.
  const activeEn = getActiveActivity();
  const activeLocalized = activeEn
    ? getActivities(language).find(a => a.id === activeEn.id) ?? activeEn
    : null;
  const activeMonthLabel = activeLocalized ? displayMonth(activeLocalized.month) : '';
  const activeSlug = activeEn?.slug ?? '';

  const t = activeLocalized
    ? text[language](activeMonthLabel)
    : offSeasonText[language];

  const handleScrollToActive = () => {
    if (!activeSlug) return;
    const targetCard = document.getElementById(`${activeSlug}-activity-card`);
    if (targetCard) {
      const headerHeight = 64; // Height of fixed header
      const extraOffset = 250; // Extra offset to show cards below
      const elementPosition = targetCard.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

      // Custom smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1800; // 1.8 seconds
      let start: number | null = null;

      const smoothScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // Ease-in-out cubic function for smooth animation
        const ease = percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

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
        <div className="relative z-10 w-full flex min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center justify-start px-6 lg:px-20 pt-24 md:pt-32 lg:pt-32">
          <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:max-w-xl lg:text-left lg:mr-auto">
            <h1 className="w-full md:max-w-2xl brand-h1 animate-fade-in-up break-words hyphens-auto">
              <span
                className="break-words"
                style={{
                  background: 'linear-gradient(to right, #0070cc, #00b4ff, #0070cc)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-animation 3s ease-in-out infinite',
                  display: 'inline',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                {t.title}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-balance brand-body1 text-neutral5 animate-fade-in-up animation-delay-100">
              {t.subtitle1}
            </p>
            <p className="mt-6 max-w-2xl text-balance brand-body1 text-neutral5 animate-fade-in-up animation-delay-100">
              <span className="font-bold">{t.subtitle2.bold}</span>{t.subtitle2.regular}
            </p>
            <p className="mt-6 max-w-2xl text-balance brand-body1 text-neutral5 animate-fade-in-up animation-delay-100">
              {t.subtitle3}
            </p>

            {/* Email Capture Form */}
            <div className="mt-12 max-w-md animate-fade-in-up animation-delay-300">
              <EmailForm
                placeholder={t.emailPlaceholder}
                buttonText={t.signUpButton}
                source="hero"
                className=""
              />
            </div>

            {/* Activity Badge — only render when an activity is active */}
            {activeLocalized && t.badge ? (
              <div className="mt-8 mb-24 md:mb-12 lg:mb-24 flex justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <ActivityBadge
                  expandedText={t.badge}
                  emoji="🎉"
                  onClick={handleScrollToActive}
                  collapseDelay={6000}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section className="bg-white pb-2">
        <div className="relative w-full animate-fade-in animation-delay-700">
          <div className="relative pt-12 pb-8">
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
                      company.logo === '/logo1.gif' ? 'h-[5.47rem] lg:h-[6.56rem]' :
                      company.logo === '/logo2.png' ? 'h-[2.768rem] lg:h-[3.322rem]' :
                      company.logo === '/thinkag-logo.png' ? 'h-[2.1rem] lg:h-[2.55rem]' :
                      company.logo === '/logo5.png' ? 'h-[3.85rem] lg:h-[4.675rem]' :
                      company.logo === '/images/discover-tourism-logo.png' ? 'h-[2.41rem] lg:h-[2.75rem]' :
                      company.logo === '/hvacr-career-connections.png' ? 'h-[1.97rem] lg:h-[2.39rem]' :
                      company.logo === '/jack-logo.png' ? 'h-[2.36rem] lg:h-[2.84rem]' : 'h-full'
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