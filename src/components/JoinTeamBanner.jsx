import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function JoinTeamBanner({
  title = "Join the Stefanini team",
  linkText = "Careers",
  linkUrl = "/careers",
  graphicImage = "https://stefanini.com/wp-content/uploads/2025/12/544X672-1.webp" // Default image URL or your local imported image path
}) {
  return (
    <section className="w-full bg-white py-24 px-6 sm:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editable Title and Link */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              {title}
            </h2>
            
            <div>
              <Link
                to={linkUrl}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0B1B3D] hover:text-blue-600 transition-colors group"
              >
                <span>{linkText}</span>
                <span className="transform transition-transform group-hover:translate-x-1">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Fixed "ONE GROUP. MULTIPLE POSSIBILITIES." Image */}
          <div className="flex items-center justify-start lg:justify-end">
            <div className="w-full max-w-[420px]">
              <img
                src={graphicImage}
                alt="One Group Multiple Possibilities"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}