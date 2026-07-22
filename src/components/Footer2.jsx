import React from "react";
import {
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const Footer2 = () => {
    const solutions = [
        "Artificial Intelligence",
        "Consulting Services",
        "Cloud",
        "Cybersecurity",
        "Topaz",
        "Marketing",
        "Manufacturing",
        "Data & Analytics",
        "Enterprise Platforms",
        "Digital Workplace Services",
        "Hybrid Infrastructure",
        "Applications",
        "Operations",
    ];

    const industries = [
        "Consumer Services",
        "Telecom",
        "Retail Industry",
        "Financial Services",
        "Public and Social Sector",
        "Natural Resources",
        "Consumer Goods",
        "Industrial Goods",
        "Health and Life Sciences",
    ];

    const institutional = [
        "Stefanini",
        "Library",
        "Case Studies",
        "Contact",
        "Information Security Policy",
        "Occupational Health & Safety Policy",
        "Privacy Policy",
    ];

    return (
        <footer className="bg-[#0E184C] text-white rounded-t-3xl mt-20">
            <div className="max-w-[1700px] mx-auto px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="flex flex-col justify-between min-h-[380px]">
                        <div>
                            <img
                                src="../favicon2.png"
                                alt="Logo"
                                className="w-56"
                            />
                        </div>
                        <div className="flex gap-6 text-3xl">
                            <a
                                href="#"
                                className="hover:text-blue-400 duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="hover:text-blue-400 duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="#"
                                className="hover:text-blue-400 duration-300"
                            >
                                <FaYoutube />
                            </a>

                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-3xl mb-8">
                            Solutions
                        </h3>

                        <ul className="space-y-4">
                            {solutions.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-3xl mb-8">
                            Industries
                        </h3>

                        <ul className="space-y-4">
                            {industries.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-3xl mb-8">
                            Institutional
                        </h3>

                        <ul className="space-y-4">
                            {institutional.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer2;