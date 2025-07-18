import EmailForm from './EmailForm';

export default function StayInformed() {
  return (
    <section id="stay-informed" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0092ff] to-[#0070cc]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to know when applications open. Get exclusive updates about 
              new industry partners, success stories, and program expansions.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <EmailForm 
                placeholder="Enter your email address"
                buttonText="Join Waitlist"
                source="stay-informed"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}