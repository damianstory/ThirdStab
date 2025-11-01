// Localized text content
const text = {
  en: {
    heading: "Why",
    headingAccent: "Micro Grants?",
    intro: "In 2025, students no longer need to wait for permission to start developing industry relevant skills outside of the classroom. What they often need is a little more support and a few more resources. Industry sponsored micro grants can remove both of those constraints, while helping students develop a portfolio of projects they will be excited to share.",
    scholarshipHeading: "Scholarships are great, but...",
    scholarshipPoints: [
      "Not every student is headed to college or university",
      "Not every role requires them to",
      "And for those that are, micro grants can help fund projects that allow them to develop the skills now that will make their applications stand out that much more"
    ],
    testimonial: {
      quote: "Good morning, Mr. Matheson. I had a lot of fun with the micro grant contest, so I decided to take your recommendation and apply for Basecamp. Thank you so much for giving me the opportunity to develop the skills and confidence I need to thrive in a place like Basecamp. I'm really excited to see what this summer has in store for me.",
      attribution: "— Student from micro grant pilot with DMZ"
    }
  },
  fr: {
    heading: "Pourquoi des",
    headingAccent: "microbourses?",
    intro: "En 2025, les élèves n'ont plus besoin d'attendre la permission pour commencer à développer des compétences pertinentes à l'industrie, en dehors de la salle de classe. Les élèves ont souvent simplement besoin d'un peu plus de soutien et de quelques ressources supplémentaires. Les microbourses offertes par l'industrie peuvent lever ces deux obstacles, tout en aidant les élèves à bâtir un portfolio de projets dont ils seront fiers de les présenter.",
    scholarshipHeading: "Les bourses d'études, c'est bien, mais…",
    scholarshipPoints: [
      "Certains élèves n'ont pas l'intention de poursuivre des études collégiales ou universitaires.",
      "Tous les rôles ne l'exigent pas.",
      "Et pour ceux et celles qui poursuivent des études, les microbourses peuvent aider à financer des projets qui leur permettent de développer les compétences qui feront ressortir leur candidature encore davantage."
    ],
    testimonial: {
      quote: "Bonjour, M. Matheson. J'ai eu beaucoup de plaisir à participer au concours de microbourses, alors j'ai décidé de suivre votre recommandation et de poser ma candidature à Basecamp. Merci beaucoup de m'avoir donné l'occasion de développer les compétences et la confiance dont j'ai besoin pour m'épanouir dans un environnement comme Basecamp. J'ai très hâte de voir ce que cet été me réserve.",
      attribution: "— Élève participant au projet pilote de microbourses avec le DMZ"
    }
  }
};

interface WhyMicroGrantsProps {
  language?: 'en' | 'fr';
}

export default function WhyMicroGrants({ language = 'en' }: WhyMicroGrantsProps) {
  const t = text[language];

  return (
    <section id="why-micro-grants" className="pt-32 pb-32 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Text content - left column */}
          <div className="h-full flex flex-col justify-between">
            <h2 className="brand-h2 text-navy mb-4 text-center lg:text-left">
              {t.heading} <span className="text-[#0092ff]">{t.headingAccent}</span>
            </h2>

            <p className="brand-body1 text-neutral5 mb-6 leading-relaxed">
              {t.intro}
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">
                {t.scholarshipHeading}
              </h3>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  {t.scholarshipPoints.map((point, index) => (
                    <li key={index} className="text-md text-neutral5">{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Student testimonial */}
            <blockquote className="italic text-neutral4 border-l-4 border-[#0092ff] pl-4 mb-8">
              <p className="leading-relaxed">
                &ldquo;{t.testimonial.quote}&rdquo;
              </p>
              <cite className="mt-2 font-semibold not-italic block">
                {t.testimonial.attribution}
              </cite>
            </blockquote>
          </div>

          {/* Video - right column */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] lg:max-w-[320px] bg-gray-100 rounded-xl overflow-hidden aspect-[3/4]">
              <div className="relative w-full h-full">
                <iframe 
                  src="https://www.youtube.com/embed/87uU-eFE4_E" 
                  title="Why Micro Grants??"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}