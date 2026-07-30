import React from "react";

export default function GlobalTechBanner({
  title = "Hello, we are Stefanini",
  subtitle = "We co-create AI-powered solutions to accelerate results and transform businesses.",
  bannerImage = "https://stefanini.com/wp-content/uploads/2025/12/1304x604-1.webp", // Replace with your image URL or local import
  features = [
    {
      title: "AI-First",
      description: "With 14 years of leadership in applied AI, 49 proprietary platforms, and cost reductions of up to 62%, we continue to use artificial intelligence as an engine for efficiency, performance, and sustainable growth."
    },
    {
      title: "Co-creation",
      description: "We create tailor-made projects in partnership with you, uniting strategy and implementation in a unique journey."
    },
    {
      title: "Global & Local",
      description: "Global presence in 46 countries and 23 delivery centers, delivering the agility of a startup with the scale and robustness of a multinational."
    }
  ]
}) {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Editable Main Heading & Subtitle */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Banner Graphic (Fixed Image instead of coded layout) */}
        <div className="mt-10 relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#071330]">
          <img
            src={bannerImage}
            alt="Global Tech Consulting Company"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Dynamic Three-Column Features Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}