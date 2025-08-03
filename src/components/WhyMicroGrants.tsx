export default function WhyMicroGrants() {
  return (
    <section id="why-micro-grants" className="pt-32 pb-32 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Text content - left column */}
          <div className="h-full flex flex-col justify-between">
            <h2 className="brand-h2 text-navy mb-4 text-center lg:text-left">
              Why <span className="text-[#0092ff]">Micro Grants?</span>
            </h2>
            
            <p className="brand-body1 text-neutral5 mb-6 leading-relaxed">
              In 2025, students no longer need to wait for permission to start developing industry relevant 
              skills outside of the classroom. What they often need is a little more support and a few more 
              resources. Industry sponsored micro grants can remove both of those constraints, while 
              helping students develop a portfolio of projects they will be excited to share.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">
                Scholarships are great, but...
              </h3>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-md text-neutral5">Not every student is headed to college or university</li>
                  <li className="text-md text-neutral5">Not every role requires them to</li>
                  <li className="text-md text-neutral5">
                    And for those that are, micro grants can help fund projects that allow them to develop 
                    the skills now that will make their applications stand out that much more
                  </li>
                </ul>
              </div>
            </div>

            {/* Student testimonial */}
            <blockquote className="italic text-neutral4 border-l-4 border-[#0092ff] pl-4 mb-8">
              <p className="leading-relaxed">
                "Good morning, Mr. Matheson. I had a lot of fun with the micro grant contest, so I decided to take your 
                recommendation and apply for Basecamp. Thank you so much for giving me the opportunity to 
                develop the skills and confidence I need to thrive in a place like Basecamp. I'm really excited to see 
                what this summer has in store for me."
              </p>
              <cite className="mt-2 font-semibold not-italic block">
                — Student from micro grant pilot with DMZ
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