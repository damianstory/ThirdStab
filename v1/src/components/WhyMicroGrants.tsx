export default function WhyMicroGrants() {
  return (
    <section id="why-micro-grants" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Text content - left column */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-[#0092ff]">Micro Grants?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              In 2025, students no longer need to wait for permission to start developing industry relevant 
              skills outside of the classroom. What they often need is a little more support and a few more 
              resources. Industry sponsored micro grants can remove both of those constraints, while 
              helping students develop a portfolio of projects they will be excited to share.
            </p>

            <div className="mb-10 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Scholarships are great, but...
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Not every student is headed to college or university</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Not every role requires them to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    And for those that are, micro grants can help fund projects that allow them to develop 
                    the skills now that will make their applications stand out that much more
                  </span>
                </li>
              </ul>
            </div>

            {/* Student testimonial */}
            <blockquote className="border-l-4 border-[#0092ff] pl-6 py-4 bg-gray-50 rounded-r-lg">
              <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                "Good morning, Mr. Matheson. I had a lot of fun with the micro grant contest, so I decided to take your 
                recommendation and apply for Basecamp. Thank you so much for giving me the opportunity to 
                develop the skills and confidence I need to thrive in a place like Basecamp. I'm really excited to see 
                what this summer has in store for me."
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                — Student from micro grant pilot with DMZ
              </cite>
            </blockquote>
          </div>

          {/* Video - right column */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[9/16]">
                <iframe 
                  src="https://www.youtube.com/embed/qEogEfRqnXM" 
                  title="Why Micro Grants?"
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