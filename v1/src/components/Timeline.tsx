export default function Timeline() {
  const timelineData = [
    {
      year: "2025",
      month: "September",
      title: "Promotional Month",
      industry: "myBlueprint",
      description: "We'll use this month to welcome students back to school and make sure they know what's coming.",
      status: "confirmed",
      position: "left"
    },
    {
      year: "2025",
      month: "October",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "right"
    },
    {
      year: "2025",
      month: "November",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "left"
    },
    {
      year: "2025",
      month: "December",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "January",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "February",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "March",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "April",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "May",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "June",
      title: "Sign up to find out",
      industry: "Industry TBA",
      description: "You thought you could inspect element your way to seeing out partners? Go apply!",
      status: "tba",
      position: "right"
    }
  ];

  let currentYear = "";

  return (
    <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activity <span className="text-[#0092ff]">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each month will have a different activity sponsored by a different industry partner. 
            Sign up to be the first to find out who they are 👀
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
          
          {/* Left Timeline Line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {timelineData.map((item, index) => {
              const showYear = item.year !== currentYear;
              currentYear = item.year;
              
              return (
                <div key={index} className="relative">
                  {/* Year Indicator */}
                  {showYear && (
                    <div className="relative z-20">
                      <div className="text-[#0092ff] font-semibold text-sm lg:text-base mb-4 lg:mb-6 lg:text-center">
                        <span className="bg-white px-4 py-1 relative z-20">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Timeline Item Container */}
                  <div className={`
                    flex items-center
                    lg:justify-between
                    ${item.position === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                  `}>
                    {/* Timeline Dot */}
                    <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-[#0092ff] rounded-full -translate-x-1/2 z-10 ring-4 ring-gray-50"></div>
                    
                    {/* Spacer for desktop */}
                    <div className="hidden lg:block w-1/2"></div>
                    
                    {/* Content Card */}
                    <div className={`
                      ml-16 lg:ml-0 lg:w-1/2
                      ${item.position === 'left' ? 'lg:pr-12' : 'lg:pl-12'}
                    `}>
                      <div className={`
                        bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200
                        ${item.status === 'confirmed' 
                          ? 'border-l-4 border-[#0092ff]' 
                          : 'border-l-4 border-dashed border-gray-300'
                        }
                      `}>
                        {/* Month */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {item.month}
                        </h3>
                        
                        {/* Title */}
                        <p className={`
                          text-base lg:text-lg font-semibold mb-1
                          ${item.status === 'confirmed' ? 'text-gray-900' : 'text-gray-500'}
                        `}>
                          {item.title}
                        </p>
                        
                        {/* Industry */}
                        <p className={`
                          text-sm mb-3
                          ${item.status === 'confirmed' ? 'text-[#0092ff]' : 'text-gray-400'}
                        `}>
                          Industry: {item.industry}
                        </p>
                        
                        {/* Description */}
                        <p className={`
                          text-lg
                          ${item.status === 'confirmed' ? 'text-gray-600' : 'text-gray-400'}
                        `}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Ready to discover which amazing companies are sponsoring each month?
          </p>
          <a
            href="#stay-informed"
            className="inline-block bg-[#0092ff] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0082e6] transition-colors duration-200 text-base"
          >
            Be the First to Know
          </a>
        </div>
      </div>
    </section>
  );
}