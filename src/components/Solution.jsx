import React from "react";

export default function Solutions ({
    title = "Applications Solutions",
    subtitle = "Applications Solutions",
    description1 = "We develop AI-First solutions covering the entire software engineering lifecycle: discovery, design, development, testing, operation, and evolution. With code assistants, AI agents, automation, and proprietary data, we orchestrate modernization, cloud, and digital products in a multi-capable, results-",
    description2 = "oriented delivery model. In all our offerings, we guarantee efficiency, reliability, and innovation that impacts revenue, customer experience, and time-to-market, with governance and increased digital maturity.",
    heroImage = "https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-18.jpg",
    bannerImage = "https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-1.jpg",
    onTalkClick,
}) {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* TOP BLUE SUB-NAV BAR */}
            <div className="bg-blue-700 text-white py-3 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
                    <span className="font-semibold tracking-wide">{title}</span>
                    <div className="flex gap-6 sm:gap-8">
                        <a href="#services" className="hover:underline transition-colors">
                            Services
                        </a>
                        <a href="#results" className="hover:underline transition-colors">
                            Results
                        </a>
                        <a href="#contact" className="hover:underline transition-colors">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Title & CTA */}
                    <div className="lg:w-1/2 space-y-6 text-left">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                                <span className="text-blue-600 font-black">//</span> stefanini
                            </span>
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                                technology
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            {subtitle}
                        </h1>

                        <div>
                            <button
                                onClick={onTalkClick}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors text-base"
                            >
                                Talk to an expert
                            </button>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-100">
                            <img
                                src={heroImage}
                                alt={title}
                                className="w-full h-auto object-cover aspect-[18/13]"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* FULL WIDTH BANNER IMAGE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-h-[350px]">
                    <img
                        src={bannerImage}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </section>

            {/* DESCRIPTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-slate-600 text-base sm:text-lg leading-relaxed">
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
            </section>

        </div>
    );
}