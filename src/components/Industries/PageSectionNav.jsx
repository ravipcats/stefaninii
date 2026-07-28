import { useEffect, useState } from "react";

const sections = [
    {
        id: "services",
        label: "Services",
    },
    {
        id: "results",
        label: "Results",
    },
    {
        id: "contact",
        label: "Contact us",
    },
];

export default function PageSectionNav({
    title = "Industrial Goods Industry",
}) {
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);

                if (!element) return;

                if (
                    scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight
                ) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const headerOffset = 120;

        const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <div className="sticky top-[80px] z-40 w-full bg-[#0066CC] shadow-sm">
            <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 lg:px-10">

                {/* Left */}

                <h2 className="text-[20px] font-semibold text-white">
                    {title}
                </h2>

                {/* Right */}

                <nav className="flex items-center gap-10">

                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative text-[17px] font-medium transition-all duration-300
                                ${active === item.id
                                    ? "text-white"
                                    : "text-white/90 hover:text-white"
                                }`}
                        >
                            {item.label}

                            <span
                                className={`absolute left-0 -bottom-[16px] h-[3px] rounded-full bg-white transition-all duration-300
                                ${active === item.id
                                        ? "w-full"
                                        : "w-0"
                                    }`}
                            />
                        </button>
                    ))}

                </nav>
            </div>
        </div>
    );
}