import React from "react";
import {
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    // Updated data structures to include specific links for each topic
    const solutions = [
        { name: "Artificial Intelligence", path: "/solutions/artificial-intelligence-2" },
        { name: "Consulting Services", path: "/solutions/consulting-services-2" },
        { name: "Cloud", path: "/solutions/cloud" },
        { name: "Cybersecurity", path: "/solutions/cybersecurity-2" },
        { name: "Topaz", path: "/solutions/topaz-2" },
        { name: "Marketing", path: "/solutions/marketing-2" },
        { name: "Manufacturing", path: "/solutions/manufacturing-2" },
        { name: "Data & Analytics", path: "/solutions/data-analytics-2" },
        { name: "Enterprise Platforms", path: "/solutions/enterprise-platforms-2" },
        { name: "Digital Workplace Services", path: "/solutions/digital-workplace-2" },
        { name: "Hybrid Infrastructure", path: "/solutions/hybrid-infrastructure" },
        { name: "Applications", path: "/solutions/applicationssolutions" },
        { name: "Operations", path: "/solutions/operations" },
    ];

    const industries = [
        { name: "Consumer Services", path: "/industries/consumerservices" },
        { name: "Telecom", path: "/industries/telecom" },
        { name: "Retail Industry", path: "/industries/retailindustry" },
        { name: "Financial Services", path: "/industries/financialservices" },
        { name: "Public and Social Sector", path: "/industries/publicandsocialsector" },
        { name: "Natural Resources", path: "/industries/naturalresources" },
        { name: "Consumer Goods", path: "/industries/consumergoods" },
        { name: "Industrial Goods", path: "/industries/industrialgoods" },
        { name: "Health and Life Sciences", path: "/industries/healthandlifesciences" },
    ];

    const institutional = [
        { name: "Stefanini", path: "/" },
        { name: "News Room", path: "/Insights/NewsRoom/Newsroom" },
        { name: "Library", path: "#" },
        { name: "Case Studies", path: "#" },
        { name: "Contact", path: "#" },
        { name: "Information Security Policy", path: "#" },
        { name: "Occupational Health & Safety Policy", path: "#" },
        { name: "Privacy Policy", path: "#" },
        "Stefanini",
        "Library",
        "Case Studies",
        // "Contact",
        // "Information Security Policy",
        // "Occupational Health & Safety Policy",
        // "Privacy Policy",
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
                                href="https://www.instagram.com/stefanini_na_apac/"
                                className="hover:text-blue-400 duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/stefanini/"
                                className="hover:text-blue-400 duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.youtube.com/@StefaniniGlobal"
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
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item.name}
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
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item.name}
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
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-[18px] text-gray-200 hover:text-white transition"
                                    >
                                        {item.name}
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

export default Footer;