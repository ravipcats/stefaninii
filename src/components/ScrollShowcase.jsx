import { useEffect, useState } from "react";
import { scrollData } from "../components/scrollData";

export default function ScrollShowcase() {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const sections = document.querySelectorAll(".scroll-item");

            sections.forEach((section, index) => {

                const rect = section.getBoundingClientRect();

                if (
                    rect.top <= window.innerHeight * 0.45 &&
                    rect.bottom >= window.innerHeight * 0.45
                ) {
                    setActive(index);
                }

            });

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <section className="bg-white">

            {/* Desktop - Full Screen Scroll */}
            <div className="hidden lg:block max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="lg:sticky lg:top-28 h-screen flex items-center justify-center">
                        <div className="relative w-full h-[550px] flex items-center justify-center">
                            {scrollData.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.image}
                                    alt={item.title}
                                    className={`absolute transition-all duration-700
                    ${active === index
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-90"
                                        }
                    w-[420px]
                    rounded-3xl
                    shadow-2xl
                    `}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="py-32">
                        {scrollData.map((item, index) => (
                            <div
                                key={index}
                                className="scroll-item min-h-screen flex items-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-semibold uppercase tracking-widest">
                                        {item.small}
                                    </span>
                                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                                        {item.title}
                                    </h2>
                                    <p className="mt-8 text-xl leading-9 text-gray-600 max-w-xl">
                                        {item.description}
                                    </p>
                                    <button className="mt-10 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet - Compact Layout */}
            <div className="lg:hidden max-w-7xl mx-auto px-4 py-12">
                {scrollData.map((item, index) => (
                    <div
                        key={index}
                        className="scroll-item mb-16 flex flex-col gap-6"
                    >
                        <div className="relative h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            
                            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                                {item.title}
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>

    );

}