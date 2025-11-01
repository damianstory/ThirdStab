import EmailForm from './EmailForm';

// Localized text content
const text = {
  en: {
    heading: "Stay",
    headingAccent: "Informed",
    paragraph1: "Want to be the first to find out which activities you and your students can participate in? Sign up below.",
    paragraph2: "We'll only email you with the specifics about what you and your students need to know to take advantage of each month's industry sponsored skill building opportunity.",
    emailPlaceholder: "Enter your email address",
    signUpButton: "Sign Up"
  },
  fr: {
    heading: "Restez",
    headingAccent: "informés",
    paragraph1: "Vous souhaitez être les premiers à découvrir les activités auxquelles vous et vos élèves pouvez participer?\nInscrivez-vous ci-dessous.",
    paragraph2: "Nous vous enverrons uniquement les renseignements essentiels pour que vous et vos élèves puissiez profiter de chaque occasion mensuelle de développement de compétences offerte par nos partenaires de l'industrie.",
    emailPlaceholder: "Entrez votre adresse courriel",
    signUpButton: "S'inscrire"
  }
};

interface StayInformedProps {
  language?: 'en' | 'fr';
}

export default function StayInformed({ language = 'en' }: StayInformedProps) {
  const t = text[language];

  return (
    <section id="stay-informed" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0092ff] to-[#0070cc]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="brand-h2 text-navy mb-4">
              {t.heading} <span className="text-[#0092ff]">{t.headingAccent}</span>
            </h2>
            <p className="text-xl text-neutral4 mb-8 max-w-2xl mx-auto whitespace-pre-line">
              {t.paragraph1}
              <br />
              <br />
              {t.paragraph2}
            </p>

            <div className="max-w-md mx-auto mb-8">
              <EmailForm
                placeholder={t.emailPlaceholder}
                buttonText={t.signUpButton}
                source="stay-informed"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}