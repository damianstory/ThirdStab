export default function Incentives() {
  const incentives = [
    {
      number: "01",
      title: "Monthly Student Microgrants",
      description: "Each month, we award 20 microgrants of $500 each to students who submit outstanding work for that month's industry challenge.",
      iconBg: "bg-blue-500",
      iconLabel: "Total Monthly Distribution",
      iconValue: "$10,000 Every Month",
      bullets: [
        "20 microgrants awarded each month",
        "$500 per student recipient",
        "Assessed against activity specific rubric"
      ]
    },
    {
      number: "02", 
      title: "Series Completion Incentive",
      description: "Students who complete all (8) monthly activities are eligible for separate series completion incentives.",
      iconBg: "bg-purple-500",
      iconLabel: "Effort Rewarded",
      iconValue: "More Chances to Win",
      bullets: [
        "Must complete all eight monthly activities",
        "Winners will be randomly chosen",
        "Multiple different incentives available"
      ]
    },
    {
      number: "03",
      title: "Educator-Level Incentives",
      description: "Educators on the Industry Immersion Series mailing list can win prizes designed to support your classroom, and make you smile!",
      iconBg: "bg-green-500",
      iconLabel: "Why Should Students Have All The Fun?",
      iconValue: "Educator Incentive",
      bullets: [
        "Monthly prizes for educators on the mailing list",
        "Winners will be randomly chosen", 
        "Sign up with your school email to be eligible."
      ]
    },
    {
      number: "04",
      title: "School-Level Incentive",
      description: "Schools with 100+ students who complete all monthly activities are entered to win some legit school-level prizes.",
      iconBg: "bg-orange-500",
      iconLabel: "Building Incentive",
      iconValue: "Recognition Award",
      bullets: [
        "Requires 100+ student participants from your school",
        "Those students must each complete all monthly activities",
        "More students participating = more chances to win"
      ]
    }
  ];

  return (
    <section id="incentives" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Incentives
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not just for students. Educators and schools are also eligible for participation prizes.
          </p>
        </div>

        {/* Incentive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {incentives.map((incentive, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 lg:p-8 border border-gray-100"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="text-primary-600 font-bold text-lg">
                    {incentive.number}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">
                    {incentive.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                {incentive.description}
              </p>

              {/* Icon Circle with Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`${incentive.iconBg} rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0`}>
                  {/* Icon placeholder - in production, add actual SVG icons */}
                  {incentive.number === "01" && (
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
                    </svg>
                  )}
                  {incentive.number === "02" && (
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  )}
                  {incentive.number === "03" && (
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  )}
                  {incentive.number === "04" && (
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{incentive.iconLabel}</p>
                  <p className="text-lg font-bold text-gray-900">{incentive.iconValue}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {incentive.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span className="text-sm lg:text-base text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}