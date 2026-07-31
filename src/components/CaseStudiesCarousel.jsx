import React, { useState } from 'react';

/**
 * Reusable Case Studies Slider Component with Tab Integration
 * 
 * @param {string} sectionBadge - Small uppercase category label (e.g., "CASES")
 * @param {string} sectionTitle - Main headline text
 * @param {string} sectionDescription - Supporting paragraph text
 * @param {Array} categories - Array of categories with nested case study cards
 */
export default function CaseStudiesCarousel({
  sectionBadge = "CASES",
  sectionTitle = "After 40 years of execution and delivery, it’s time to share the results.",
  sectionDescription = "What we've achieved with our partners, pillar by pillar.",
  categories = [
    {
      id: "ai-first",
      name: "AI-First Mindset",
      count: "03",
      cases: [
        {
          id: 1,
          clientBadge: "One of the 10 largest oil companies in the world",
          title: "An effective ally in anticipating and preventing incidents",
          necessidade: "Create a process for preventing incidents on oil platforms, reduce operational costs, and implement proactive maintenance.",
          solucao: "We used Alice.ai to create a machine learning model capable of analyzing operational histories and predicting possible occurrences up to 30 days in advance. A data-driven and proactive approach to loss prevention that generated results that exceeded expectations.",
          results: [
            { value: "4,376", label: "CPU accidents analyzed" },
            { value: "3,829", label: "possible incidents identified before they happened" },
            { value: "85%", label: "capacity to act proactively" }
          ]
        },
        {
          id: 2,
          clientBadge: "One of the world's most prestigious business schools",
          title: "A more strategic and productive way of working",
          necessidade: "Modernize the digital management ecosystem and automate company processes through AI implementation.",
          solucao: "We monitored the institution's digital journey, created an end-to-end AI implementation strategy, enhanced functionalities, and intelligently automated manual processes.",
          results: [
            { value: "40%", label: "reduction in manual workload" },
            { value: "100%", label: "process continuity" },
            { value: "30%", label: "increase in work efficiency" },
            { value: "3.2/4", label: "rating in target audience statisfication" }
          ]
        },
        {
          id: 3,
          clientBadge: "One of Latin America's leading airlines",
          title: "Precision in baggage tracking and monitoring",
          necessidade: "To reduce passenger baggage loss, incidents, and misplacement during airport handling and transport.",
          solucao: "We developed a web platform and mobile app using AI to monitor baggage in real-time throughout its entire journey, from check-in to delivery, featuring proactive notifications and journey-wide analytics.",
          results: [
            { value: "50%", label: "of baggage items with proactive WhatsApp notifications" },
            { value: "47%", label: "reduction in losses during connections" },
            { value: "90%", label: "Complaints resolved within 48 hours" },
            { value: "3x", label: "Greater passenger control, automation, and reduced delays" }
          ]
        }
      ]
    },
    {
      id: "co-creation",
      name: "Co-creation",
      count: "03",
      cases: [
        {
          id: 1,
          clientBadge: "The world's largest automaker",
          title: "Support for precise decision-making",
          necessidade: "Detect threats to critical systems and support smarter, faster, and more secure business decisions.",
          solucao: "Working in direct partnership with the automaker's teams, we co-created a centralized predictive analytics solution capable of directly impacting decisions, enhancing security, and continuously reducing risk.",
          results: [
            { value: "99.8%", label: "of potential system threats detected" },
            { value: "8Yrs", label: "Annual exercises to refine processes and playbooks" },
            { value: "24/7", label: "Continuous 24/7 monitoring for over 4 years" },
            { label: "Long-term partnership with two contract renewals" }
          ]
        },
        {
          id: 2,
          clientBadge: "One of Latin America's top 3 banks",
          title: "A digital wallet that simplifies processes and generates savings",
          necessidade: "Reduce fraud and create a new form of digital relationship between the bank and its customers without compromising security or reliability.",
          solucao: "In collaboration with the bank's teams, we co-created a digital wallet that simplified new customer onboarding,reduced costs and data vulnerability,eliminated red tape, facilitated",
          results: [
            { value: "65%", label: "lower customer onboarding cost" },
            { value: "90%", label: "greater efficiency" },
            { value: "70%", label: "reduction in fraud" }
          ]
        },
        {
          id: 3,
          clientBadge: "North America’s largest pure-play industrial automation company",
          title: "An integration of technologies to streamline processes",
          necessidade: "To boost productivity and improve an inconsistent service experience characterized by slow response times and recurring incidents.",
          solucao: "We co-created an IT/OT convergence strategy with the client, providing a multi-level support system for help desk users that ensures efficient resolutions and clear, high-quality user communication.",
          results: [
            { value: "35%", label: "higher productivity" },
            { value: "27%", label: "increase in efficiency" },
            { value: "95%", label: "customer satisfaction" }
          ]
        }
      ]
    },
    {
      id: "one-stop-shop",
      name: "One-stop-shop",
      count: "03",
      cases: [
        {
          id: 1,
          clientBadge: "A brand found in virtually every American kitchen",
          title: "A solution that unifies interaction and creates convenience",
          necessidade: "he company's innovation and agility were compromised by the time, energy, and resources consumed in resolving IT problems, gaps, and needs.",
          solucao: "Leveraging our 7 business units, we co-created a transformation journey with the client, delivering business value, agility, and cost management. The solution supports all types of devices, enabling users to connect from anywhere.",
          results: [
            { label: "US$ 15 million in savings over the next 5 years" },
            { label: "Service disruptions reduced by 21%" },
            { value: "94.5%", label: "user satisfaction" },
            { value: "37%", label: "productivity improvement" }
          ]
        },
        {
          id: 2,
          clientBadge: "One of the world’s leading chemical companies",
          title: "A unique and powerful ecosystem",
          necessidade: "Integrate technology, networks, and cybersecurity, and enable these multiple specialties to operate in unison.",
          solucao: "Leveraging the interdisciplinary capabilities of our 7 business units, we unified these technology areas into a single, secure, user-centric, and globally scalable digital ecosystem.",
          results: [
            { value: "12%", label: "reduction in IT costs" },
            { label: "Higher user satisfaction" },
            { label: "Smarter decisions" }
          ]
        },
        {
          id: 3,
          clientBadge: "The company that processes more than half of the world's transactions",
          title: "Greater unity, speed, and security in processes",
          necessidade: "Unify cybersecurity, digital workplace, and AI-driven service management.",
          solucao: "We enable end-to-end integrated solutions with an AI-first mindset and our 7 business units, transforming the workplace, delivering user-centric digital services, and collaborating  in co-creation sessions to define, plan, and drive innovation.",
          results: [
            { value: "95.4%", label: "user satisfaction rate" },
            { value: "67%", label: "faster ticket resolution time" },
            { value: "14%", label: "reduction in IT support costs" },
            { label: "US$ 3.2 million in cost savings" }
          ]
        }
      ]
    }
  ]
}) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const currentCategory = categories[activeCategoryIndex];
  const currentCase = currentCategory.cases[activeCaseIndex];
  const totalCases = currentCategory.cases.length;

  // Handle Category Tab Change
  const handleCategoryChange = (index) => {
    setActiveCategoryIndex(index);
    setActiveCaseIndex(0); // Reset to first case of the new category
  };

  // Handle Next Card Slide
  const handleNext = () => {
    setActiveCaseIndex((prev) => (prev + 1) % totalCases);
  };

  // Handle Previous Card Slide
  const handlePrev = () => {
    setActiveCaseIndex((prev) => (prev - 1 + totalCases) % totalCases);
  };

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Tab Navigation */}
          <div className="lg:col-span-5 flex flex-col">
            
            <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              {sectionBadge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              {sectionTitle}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              {sectionDescription}
            </p>

            {/* Interactive Pillar Selector Tabs */}
            <div className="space-y-3 mb-10">
              {categories.map((cat, index) => {
                const isActive = index === activeCategoryIndex;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(index)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 font-semibold text-sm sm:text-base ${
                      isActive 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-md ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Controls & Pagination Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Previous Arrow */}
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Arrow */}
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Counter Display & Dots */}
              <div className="flex items-center space-x-4">
                <span className="text-slate-500 font-semibold text-sm sm:text-base tracking-wider">
                  {String(activeCaseIndex + 1).padStart(2, '0')} / {String(totalCases).padStart(2, '0')}
                </span>

                <div className="flex space-x-1.5">
                  {currentCategory.cases.map((_, dotIdx) => (
                    <span 
                      key={dotIdx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === activeCaseIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sliding Active Case Study Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-500">
              
              {/* Client Scope Pill */}
              <div className="inline-block bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                {currentCase.clientBadge}
              </div>

              {/* Case Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8 leading-snug">
                {currentCase.title}
              </h3>

              {/* Two Column Text Breakdown (Necessidade vs Solução) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-slate-100">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Necessidade
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {currentCase.necessidade}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Solução
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {currentCase.solucao}
                  </p>
                </div>
              </div>

              {/* Dark Results Footer Box */}
              <div className="bg-[#070b19] rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">
                    📈
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-blue-400">
                    Results
                  </span>
                </div>

                <div className={`grid gap-6 ${
                  currentCase.results.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
                }`}>
                  {currentCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex flex-col">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                        {res.value}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm leading-snug">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}