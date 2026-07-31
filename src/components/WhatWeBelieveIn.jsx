import React from 'react';

/**
 * Reusable "What We Believe In" / Pillars Section Component
 * 
 * @param {string} sectionBadge - Top small subtitle label (e.g., "THE 3 PILLARS")
 * @param {string} sectionTitle - Main section headline (e.g., "What we believe in")
 * @param {string} sectionDescription - Short text explaining the commitments
 * @param {Array} pillars - Array of pillar objects containing title, text, stats, image, etc.
 */
export default function WhatWeBelieveIn({
  sectionBadge = "THE 3 PILLARS",
  sectionTitle = "What we believe in",
  sectionDescription = "Three commitments that go beyond promises: this is how we make it happen, from diagnosis to execution.",
  pillars = [
    {
      id: 1,
      badge: "AI-FIRST MINDSET",
      title: "We think and act AI-First.",
      paragraphs: [
        "With 14 years of leadership in applied AI, 49 proprietary platforms, and cost reductions of up to 62%, we use artificial intelligence as a driver of efficiency, performance, and sustainable growth.",
        "This is what we call AI-First: leveraging artificial intelligence at the core of every decision, not as an add-on layer, but as the fundamental way we build solutions from the start. The result? Less manual work and a greater ability to anticipate problems and turn data into action."
      ],
      stats: [
        { value: "14", label: "years of AI leadership" },
        { value: "49", label: "proprietary platforms" },
        { value: "-62%", label: "operating costs" }
      ],
      linkText: "View AI-First case studies",
      linkUrl: "#",
      image: "https://stefanini.com/wp-content/uploads/2026/07/lmh-ai-first-1.png", // Replace with your AI First asset path
      imageAlt: "AI First Illustration"
    },
    {
      id: 2,
      badge: "CO-CREATION",
      title: "Co-creating and maximizing results",
      paragraphs: [
        "Collaboration and close relationships with our partners have been fundamental to us since our founding in 1987, and they will continue to guide us in everything we build together.",
        "Co-creation is more than just working for a client; it is working side-by-side, from strategy design to final delivery, to generate customized solutions that address every detail of the problem. Because no off-the-shelf solution yields results as transformative as one built through partnership."
      ],
      stats: [], // Optional stats array if needed
      linkText: "See co-creation case studies",
      linkUrl: "#",
      image: "https://stefanini.com/wp-content/uploads/2026/07/lmh-co-create-1.png", // Replace with your Co-Create asset path
      imageAlt: "Co-Create Illustration"
    },
    {
      id: 3,
      badge: "ONE-STOP SHOP",
      title: "A one-stop shop that goes beyond talk",
      paragraphs: [
        "Technology, Operations, Data & Analytics, Cybersecurity, Manufacturing, Marketing, and Financial Tech. We are a global tech consulting company bringing together diverse disciplines. We have 7 business units ready to work together from the start to the finish of a project. This means fewer vendors to manage, less friction between deliverables, and greater efficiency.",
        "Because being a specialist isn't enough, you have to offer complete solutions."
      ],
      stats: [],
      linkText: "View one-stop shop case studies",
      linkUrl: "#",
      image: "https://stefanini.com/wp-content/uploads/2026/07/lmh-one-stop-1.png", // Replace with your One-Stop-Shop asset path
      imageAlt: "One Stop Shop Illustration"
    }
  ]
}) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Pillars List */}
        <div className="space-y-24">
          {pillars.map((pillar, index) => {
            // Determine layout direction: alternate image left/right if desired, or keep standard layout
            const isEven = index % 2 === 1;

            return (
              <div 
                key={pillar.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  {/* Pillar Subtitle / Badge */}
                  <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    {pillar.badge}
                  </span>

                  {/* Pillar Title */}
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                    {pillar.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                  </div>

                  {/* Optional Stats Row */}
                  {pillar.stats && pillar.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 w-full pt-4 border-t border-slate-100">
                      {pillar.stats.map((stat, sIndex) => (
                        <div key={sIndex} className="flex flex-col">
                          <span className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {stat.value}
                          </span>
                          <span className="text-slate-500 text-xs sm:text-sm font-medium mt-1 leading-tight">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link */}
                  {pillar.linkText && (
                    <a 
                      href={pillar.linkUrl}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm sm:text-base group transition-colors"
                    >
                      <span>{pillar.linkText}</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Image Illustration Column */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-slate-50/60 rounded-3xl border border-slate-100/80">
                  <img 
                    src={pillar.image} 
                    alt={pillar.imageAlt} 
                    className="max-h-80 sm:max-h-96 w-auto object-contain drop-shadow-sm transition-transform duration-500 hover:scale-105"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}