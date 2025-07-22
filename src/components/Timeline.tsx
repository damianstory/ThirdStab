export default function Timeline() {
  const timelineData = [
    {
      year: "2025",
      month: "September",
      title: "Promotional Month",
      industry: "",
      description: "We'll use this month to welcome students back to school and make sure they know how to participate in the program.",
      status: "confirmed",
      position: "left"
    },
    {
      year: "2025",
      month: "October",
      title: "Mining Industry Human Resources Council",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "right"
    },
    {
      year: "2025",
      month: "November",
      title: "Mydoh",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "left"
    },
    {
      year: "2025",
      month: "December",
      title: "myBlueprint",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "January",
      title: "NAV CANADA",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "February",
      title: "Zurich Canada",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "March",
      title: "H&R Block Canada",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "April",
      title: "Tourism HR Canada",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "right"
    },
    {
      year: "2026",
      month: "May",
      title: "Heating, Refrigeration and Air Conditioning Institute of Canada",
      industry: "Incentive: $10,000 in micro grants",
      description: "Activity Details: Join the mailing list to be the first to find out   👀",
      status: "tba",
      position: "left"
    },
    {
      year: "2026",
      month: "June",
      title: "Incentive Distribution",
      industry: "",
      description: "We'll use this time to distribute any final school-level and series completion incentives.",
      status: "tba",
      position: "right"
    }
  ];

  let currentYear = "";

  return (
    <section id="timeline" className="pt-24 pb-16 px-4 md:px-12 bg-white">
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
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2"></div>
          
          {/* Left Timeline Line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-blue-100"></div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => {
              const showYear = item.year !== currentYear;
              currentYear = item.year;
              
              return (
                <>
                  {/* Year Indicator - Only on tablet/desktop */}
                  {showYear && index > 0 && (
                    <div className="relative z-20 hidden md:block text-center mb-4 lg:mb-6">
                      <span className="bg-white px-4 py-1 text-[#0092ff] font-semibold text-sm lg:text-base">
                        {item.year}
                      </span>
                    </div>
                  )}
                  
                  <div key={index} className="relative mb-8 md:mb-12 lg:mb-16">
                    {/* Timeline Item Container */}
                    <div className={`
                    flex items-center
                    lg:justify-between
                    ${item.position === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                  `}>
                    {/* Timeline Dot */}
                    <div className="absolute left-6 lg:left-1/2 w-6 h-6 bg-[#0092ff] rounded-full -translate-x-1/2 z-10 border-4 border-white"></div>
                    
                    {/* Spacer for desktop */}
                    <div className="hidden lg:block w-1/2"></div>
                    
                    {/* Content Card */}
                    <div className={`
                      ml-16 lg:ml-0 lg:w-5/12
                      ${item.position === 'left' ? 'lg:pr-8' : 'lg:pl-8'}
                    `}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        {/* Year Label */}
                        <div className="text-[#0092ff] font-semibold mb-2">
                          {item.year}
                        </div>
                        
                        {/* Month Name */}
                        <h3 className="text-xl font-bold mb-2">
                          {item.month}
                        </h3>
                        
                        {/* Activity Title */}
                        <h4 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h4>
                        
                        {/* Industry Label */}
                        <p className="text-gray-500 text-sm mb-2">
                          {item.industry}
                        </p>
                        
                        {/* Description Text */}
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                </>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}