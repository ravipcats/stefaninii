import React from "react";

export default function RecognitionsSection({
  title = "Our Recognitions",
  subtitle = "Our passion for driving business with technology is backed by global experts and institutions.",
  recognitions = [
    "Gartner Magic Quadrant 2025",
    "IT Executive of the Year Award 2024",
    "People's Choice Stevie® Award 2024",
    "ISG Star of Excellence™ 2023",
    "+ 96 awards"
  ],
  quoteText = "Technology only has value when it creates the future, and we anticipate it by co-creating with innovation and purpose.",
  authorName = "Marco Stefanini",
  authorTitle = "Founder and Global CEO",
  authorImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800" // Replace with your CEO image URL or local import
}) {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Section: Title & Recognitions List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Subtitle */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right Column: Recognitions List with Divider Lines */}
          <div className="divide-y divide-slate-200">
            {recognitions.map((item, index) => (
              <div key={index} className="py-5 first:pt-0 last:pb-0">
                <span className="text-base sm:text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Section: CEO Quote Card */}
        <div className="mt-20 bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* CEO Image */}
            <div className="w-full lg:w-[350px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] lg:aspect-square bg-slate-200">
                <img
                  src={authorImage}
                  alt={authorName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quote and Author Details */}
            <div className="space-y-6 text-left flex-grow">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B3D] leading-snug">
                "{quoteText}"
              </blockquote>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {authorName}
                </h4>
                <p className="text-sm sm:text-base text-slate-500 font-medium">
                  {authorTitle}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}