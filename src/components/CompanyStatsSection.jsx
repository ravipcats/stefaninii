import React from 'react';

/**
 * Reusable Company Stats Section Component
 * 
 * @param {string} badgeText - Small uppercase category label (e.g., "WHO WE ARE")
 * @param {string} heading - Main bold section title (e.g., "Stefanini Group")
 * @param {string} description - Paragraph text underneath the heading
 * @param {Array} stats - Array of objects containing card details (image, alt, text)
 */
export default function CompanyStatsSection({
  badgeText = "WHO WE ARE",
  heading = "Stefanini Group",
  description = "We are 7 business units with an AI-first mindset, a co-creation instinct, and a one-stop-shop structure.",
  stats = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", // Replace with your number block image asset
      alt: "2,000 clients",
      text: "clients around the world"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", 
      alt: "35,000 employees",
      text: "employees"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop", 
      alt: "46 countries",
      text: "presence in 46 countries."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", 
      alt: "40 years",
      text: "years in the market"
    }
  ]
}) {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Number / Graphic Image */}
              <div className="h-28 flex items-center justify-center mb-6 w-full">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Descriptive Text */}
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}