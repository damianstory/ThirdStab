import EmailForm from './EmailForm';

export default function StayInformed() {
  return (
    <section id="stay-informed" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0092ff] to-[#0070cc]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stay <span className="text-[#0092ff]">Informed</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'll only email you with the specifics about what you and your students need to know to take advantage of each month's industry sponsored skill building opportunity.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <EmailForm 
                placeholder="Enter your email address"
                buttonText="Sign Up"
                source="stay-informed"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}