import React, { useState } from 'react';

/**
 * Reusable Hero Video Section Component
 * 
 * @param {string} subtitle - Small uppercase label text (e.g., "Global Tech Consulting Company")
 * @param {string} title - Main heading text (e.g., "For 40 years, we’ve been transforming technology into business results.")
 * @param {string} headingPrefix - Top highlighted small heading text (e.g., "LET'S MAKE IT HAPPEN")
 * @param {string} youtubeVideoId - The YouTube Video ID to stream (e.g., "dQw4w9WgXcQ")
 * @param {string} thumbnailUrl - Image URL for the video thumbnail before play is clicked
 * @param {string} watchText - Text displayed next to the play button (e.g., "Watch the campaign film")
 */
export default function TechConsultingHero({
  subtitle = "Global Tech Consulting Company",
  title = "For 40 years, we’ve been transforming technology into business results.",
  headingPrefix = "LET'S MAKE IT HAPPEN",
  youtubeVideoId = "36YnV9STBqc", // Replace with your default YouTube Video ID
  thumbnailUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop", // Fallback thumbnail
  watchText = "Watch the campaign film"
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-[#070b19] text-white min-h-screen overflow-hidden flex flex-col items-center justify-start pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Floating Lego Bricks (Absolute positioned like reference) */}
      <div className="absolute top-8 left-12 animate-bounce duration-1000 hidden md:block opacity-90">
        <div className="bg-blue-600 px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold tracking-wider uppercase rotate-[-12deg] border border-blue-400">
          Data & Analytics
        </div>
      </div>

      <div className="absolute top-10 right-16 hidden md:block opacity-90">
        <div className="bg-blue-600 px-4 py-2 rounded-lg shadow-xl text-xs font-bold tracking-wider uppercase rotate-[15deg] border border-blue-400">
          Cyber
        </div>
      </div>

      <div className="absolute top-36 left-8 hidden lg:block opacity-80">
        <div className="bg-blue-500 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase rotate-[25deg]">
          Technology
        </div>
      </div>

      <div className="absolute top-52 right-24 hidden lg:block opacity-80">
        <div className="bg-purple-600 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase rotate-[-10deg]">
          Manufacturing
        </div>
      </div>

      <div className="absolute bottom-16 right-16 hidden md:block opacity-90">
        <div className="bg-emerald-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase rotate-[8deg]">
          Financial Tech
        </div>
      </div>

      <div className="absolute bottom-20 left-16 hidden md:block opacity-90">
        <div className="bg-red-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase rotate-[-18deg]">
          Marketing
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center z-10 mt-6">
        
        {/* Top Header Identifier */}
        <div className="inline-block mb-3">
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400 uppercase">
            {headingPrefix}
          </span>
        </div>

        {/* Subtitle / Company Tag */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="h-[1px] w-12 bg-slate-700"></div>
          <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            {subtitle}
          </span>
          <div className="h-[1px] w-12 bg-slate-700"></div>
        </div>

        {/* Main Title Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] mb-12 max-w-3xl mx-auto">
          {title}
        </h1>

      </div>

      {/* Video Box Container */}
      <div className="w-full max-w-4xl z-10 px-2 sm:px-0">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 aspect-video group">
          
          {!isPlaying ? (
            /* Thumbnail & Play Overlay State */
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Background Thumbnail Image */}
              <img 
                src={thumbnailUrl} 
                alt="Campaign Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20"></div>

              {/* Play Button & Label Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                {/* Circular Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900 translate-x-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Campaign Text Label */}
                <span className="text-white text-sm sm:text-base font-medium tracking-wide drop-shadow-md">
                  {watchText}
                </span>
              </div>
            </div>
          ) : (
            /* Active YouTube Embedded Player State */
            <div className="relative w-full h-full">
              <iframe
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

        </div>
      </div>

    </section>
  );
}