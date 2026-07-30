import React, { useState } from "react";
import {
    ChevronDown,
    Sparkles,
    BriefcaseBusiness,
    Menu,
    X,
    Building2,
    ChevronRight,
    ShoppingBag,
    Users,
    HeartPulse,
    Globe,
    Landmark,
    CreditCard,
    Store,
    PhoneCall,
    BookOpen,
    FileText,
    Newspaper,
    ArrowLeft,
    Check,
} from "lucide-react";
import { solutionMenu } from "./SolutionData";
import { industriesMenu } from "./IndustriesData";
import { insightsMenu } from "./InsightsData";
import { stefaniniMenu } from "./StefaniniHeaderData";
import { Link,useNavigate } from "react-router-dom";

export default function Header({ currentLang = "EN" }) {
    const [open, setOpen] = useState(false);
    const [showMega, setShowMega] = useState(false);
    const [showIndustriesMega, setShowIndustriesMega] = useState(false);
    const [showInsightsMega, setShowInsightsMega] = useState(false);
    const [showStefaniniMega, setShowStefaniniMega] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const navigate = useNavigate();


    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const [mobileView, setMobileView] = useState("main");
    const [mobileActiveSolutionCat, setMobileActiveSolutionCat] = useState(0);

    const links = [
        { label: "Solutions", mega: true },
        { label: "Industries", mega: true },
        { label: "Insights", mega: true },
        { label: "Stefanini",mega:true },
        { label: "Careers" },
    ];

    const languages = [
        { code: "EN", label: "EN" },
        { code: "ES", label: "ES" },
        { code: "PT", label: "PT" },
    ];

    const handleLanguageChange = (langCode) => {
        setShowLangDropdown(false);
        setOpen(false);
        window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
    };

    const getIndustryIcon = (title) => {
        switch (title) {
            case "Industrial Goods":
                return <Building2 size={20} className="text-blue-600" />;
            case "Consumer Goods":
                return <ShoppingBag size={20} className="text-blue-600" />;
            case "Consumer Services":
                return <Users size={20} className="text-blue-600" />;
            case "Health and Life Sciences":
                return <HeartPulse size={20} className="text-blue-600" />;
            case "Natural Resources":
                return <Globe size={20} className="text-blue-600" />;
            case "Public and Social Sector":
                return <Landmark size={20} className="text-blue-600" />;
            case "Financial Services":
                return <CreditCard size={20} className="text-blue-600" />;
            case "Retail Industry":
                return <Store size={20} className="text-blue-600" />;
            case "Telecom":
                return <PhoneCall size={20} className="text-blue-600" />;
            default:
                return <Building2 size={20} className="text-blue-600" />;
        }
    };

    const getInsightIcon = (title) => {
        switch (title) {
            case "Library":
                return <BookOpen size={20} className="text-blue-600" />;
            case "Case Studies":
                return <FileText size={20} className="text-blue-600" />;
            case "Newsroom":
                return <Newspaper size={20} className="text-blue-600" />;
            default:
                return <BookOpen size={20} className="text-blue-600" />;
        }
    };

    return (
        <header className="sticky top-0 bg-white shadow-sm z-50">

            <div className="h-1 bg-blue-600"></div>

            <div className="max-w-7xl mx-auto h-16 sm:h-20 flex justify-between items-center px-4 sm:px-6">

                {/* LOGO */}

                <a href="/" className="flex items-center gap-3">
                    <img
                        src="/favicon.png"
                        alt=""
                        className="h-18"
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-9">

                    {links.map((item, index) => (

                        item.label === "Solutions" ?

                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setShowMega(true)}
                                onMouseLeave={() => setShowMega(false)}
                            >

                                <button className="flex items-center gap-1 font-bold text-lg text-black hover:text-blue-600 transition-colors">

                                    {item.label}

                                    <ChevronDown size={17} />

                                </button>
                                {/* SOLUTIONS DROPDOWN WITH FEATURE CARDS AND CATEGORIES */}
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${showMega
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-3"
                                        }`}
                                >



                                    <div className="w-5 h-5 bg-white rotate-45 absolute top-3 left-[435px] shadow-sm border-l border-t"></div>

                                    <div className="w-[900px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl overflow-hidden border">

                                        {/* FEATURE CARDS */}

                                        <div className="grid grid-cols-2 gap-4 p-4">

                                            {solutionMenu.cards.map((card, i) => (

                                                <div
                                                    key={i}
                                                    href={card.link || "#"}
                                                    className="relative rounded-2xl overflow-hidden h-40 group cursor-pointer"
                                                >

                                                    <img
                                                        src={card.image}
                                                        alt=""
                                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

                                                    <div className="relative z-10 p-5 h-full flex flex-col justify-end">

                                                        {i === 0 ? (
                                                            <Sparkles
                                                                className="absolute top-6 left-6 text-white"
                                                                size={24}
                                                            />
                                                        ) : (
                                                            <BriefcaseBusiness
                                                                className="absolute top-6 left-6 text-white"
                                                                size={22}
                                                            />
                                                        )}

                                                        <h2 className="text-white text-xl font-bold">

                                                            {card.title}
                                                        </h2>
                                                        <p className="text-white/90 mt-2 text-sm leading-5">
                                                            {card.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-12">
                                            {/* LEFT */}
                                            <div className="col-span-3 bg-gray-50 border-r">

                                                {solutionMenu.categories.map((cat, index) => (

                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                        setActiveCategory(index);
                                                        if (cat.link) {
                                                        setShowMega(false); // Close dropdown
                                                        navigate(cat.link); // Redirect to route
                                                        }
                                                        }}
                                                        onMouseEnter={() =>
                                                            setActiveCategory(index)
                                                        }
                                                        className={`w-full px-6 py-4 text-left text-sm transition-all duration-300

                            ${activeCategory === index
                                                                ? "bg-white font-semibold text-black border-l-4 border-blue-600"
                                                                : "hover:bg-white"
                                                            }

                            `}
                                                    >

                                                        {cat.title}

                                                    </button>

                                                ))}

                                            </div>

                                            <div className="col-span-9 p-6">

                                                <div className="grid grid-cols-2 gap-x-8 gap-y-6">

                                                    {solutionMenu.categories[
                                                        activeCategory
                                                    ].items.map((subItem, i) => (

                                                        <Link
                                                            key={i}
                                                            to={subItem.link || "#"}
                                                            onClick={() => setShowMega(false)}
                                                            className="group cursor-pointer block"
                                                        >
                                                            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                                                                {subItem.title}
                                                            </h3>
                                                            <p className="mt-2 text-gray-600 text-sm leading-6">
                                                                {subItem.desc}
                                                            </p>
                                                        </Link>
                                                    ))}

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            : item.label === "Industries" ?

                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setShowIndustriesMega(true)}
                                    onMouseLeave={() => setShowIndustriesMega(false)}
                                >

                                    <button className="flex items-center gap-1 font-bold text-lg text-black hover:text-blue-600 transition-colors">

                                        {item.label}

                                        <ChevronDown size={17} />

                                    </button>

                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${showIndustriesMega
                                            ? "opacity-100 visible translate-y-0"
                                            : "opacity-0 invisible -translate-y-3"
                                            }`}
                                    >

                                        <div className="w-5 h-5 bg-white rotate-45 absolute top-3 left-[300px] shadow-sm border-l border-t"></div>

                                        <div className="w-[660px] rounded-2xl bg-white shadow-2xl p-6 border">

                                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">

                                                {industriesMenu?.categories.map((cat, catIndex) => (
                                                    <a
                                                        key={catIndex}
                                                        href={cat.link}
                                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/60 group transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                                                {getIndustryIcon(cat.title)}
                                                            </div>
                                                            <span className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                                                {cat.title}
                                                            </span>
                                                        </div>
                                                        <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                                    </a>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                : item.label === "Insights" ?

                                    <div
                                        key={index}
                                        className="relative"
                                        onMouseEnter={() => setShowInsightsMega(true)}
                                        onMouseLeave={() => setShowInsightsMega(false)}
                                    >

                                        <button className="flex items-center gap-1 font-bold text-lg text-black hover:text-blue-600 transition-colors">

                                            {item.label}

                                            <ChevronDown size={17} />

                                        </button>

                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${showInsightsMega
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-3"
                                                }`}
                                        >

                                            <div className="w-5 h-5 bg-white rotate-45 absolute top-3 left-[210px] shadow-sm border-l border-t"></div>

                                            <div className="w-[480px] rounded-2xl bg-white shadow-2xl p-4 border space-y-2">

                                                {insightsMenu?.categories.map((cat, catIndex) => (
                                                    <a
                                                        key={catIndex}
                                                        href={cat.link}
                                                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors"
                                                    >
                                                        <div className="p-2.5 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors shrink-0 mt-0.5">
                                                            {getInsightIcon(cat.title)}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                                                {cat.title}
                                                            </h4>
                                                            <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                                                                {cat.desc}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                    : item.label === "Stefanini" ?

                                    <div
                                        key={index}
                                        className="relative"
                                        onMouseEnter={() => setShowStefaniniMega(true)}
                                        onMouseLeave={() => setShowStefaniniMega(false)}
                                    >

                                        <button className="flex items-center gap-1 font-bold text-lg text-black hover:text-blue-600 transition-colors">

                                            {item.label}

                                            <ChevronDown size={17} />

                                        </button>

                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${showStefaniniMega
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-3"
                                                }`}
                                        >

                                            <div className="w-5 h-5 bg-white rotate-45 absolute top-3 left-[210px] shadow-sm border-l border-t"></div>

                                            <div className="w-[480px] rounded-2xl bg-white shadow-2xl p-4 border space-y-2">

                                                {stefaniniMenu?.categories.map((cat, catIndex) => (
                                                    <a
                                                        key={catIndex}
                                                        href={cat.link}
                                                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors"
                                                    >
                                                        <div className="p-2.5 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors shrink-0 mt-0.5">
                                                            {getInsightIcon(cat.title)}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                                                {cat.title}
                                                            </h4>
                                                            <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                                                                {cat.desc}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                    :

                                    <a
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-1 font-bold text-lg text-black hover:text-blue-600 transition-colors"
                                    >

                                        {item.label}

                                    </a>
                                    

                    ))}

                </nav>

                <div className="hidden lg:flex gap-3 items-center">

                    <a
                        href="/contact"
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Contact
                    </a>

                    {/* LANGUAGE DROPDOWN */}
                    <div className="relative">
                        <button
                            onClick={() => setShowLangDropdown(!showLangDropdown)}
                            className="flex items-center gap-1.5 px-3 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            {currentLang}
                            <ChevronDown size={14} className={`transition-transform duration-200 ${showLangDropdown ? "rotate-180" : ""}`} />
                        </button>

                        {showLangDropdown && (
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border overflow-hidden py-1 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-blue-50 hover:text-blue-600 transition-colors ${currentLang === lang.code ? "font-bold text-blue-600 bg-blue-50/50" : "text-gray-700"
                                            }`}
                                    >
                                        <span>{lang.label}</span>
                                        {currentLang === lang.code && <Check size={14} className="text-blue-600" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* MOBILE */}

                <button
                    className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    onClick={() => {
                        setOpen(!open);
                        setMobileView("main");
                    }}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            <div className={`lg:hidden overflow-hidden border-t bg-white transition-all duration-300 ${open ? "max-h-[600px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
                <div className="px-4 py-3 space-y-1">

                    {mobileView === "main" && (
                        <>
                            {links.map((item) => (
                                <div key={item.label}>
                                    {item.mega ? (
                                        <button
                                            onClick={() => {
                                                if (item.label === "Solutions") setMobileView("solutions");
                                                if (item.label === "Industries") setMobileView("industries");
                                                if (item.label === "Insights") setMobileView("insights");
                                            }}
                                            className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-black hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight size={18} className="text-gray-400" />
                                        </button>
                                    ) : (
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-3 text-sm font-medium text-black hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}

                            <div className="flex gap-3 pt-3 border-t mt-2">
                                <a
                                    href="/contact"
                                    className="flex-1 text-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                                >
                                    Contact
                                </a>
                                <button
                                    onClick={() => setMobileView("lang")}
                                    className="flex items-center justify-center gap-1 rounded-lg border px-4 py-2.5 text-sm font-medium text-gray-700"
                                >
                                    {currentLang} <ChevronDown size={14} />
                                </button>
                            </div>
                        </>
                    )}

                    {mobileView === "solutions" && (
                        <div className="space-y-1">
                            <button
                                onClick={() => setMobileView("main")}
                                className="flex items-center gap-2 text-blue-600 font-bold px-4 py-3 text-sm hover:underline"
                            >
                                <ArrowLeft size={16} /> Voltar
                            </button>

                            <div className="font-bold text-gray-900 px-4 py-2 text-base">Solutions</div>

                            <div className="space-y-1 pb-2">
                                {solutionMenu.categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMobileActiveSolutionCat(idx)}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm  font-medium transition-colors ${mobileActiveSolutionCat === idx ? "text-blue-600 bg-blue-50 font-bold" : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>

                            <div className="border-t pt-3 space-y-3 bg-gray-50 p-4 rounded-xl">
                                {solutionMenu.categories[mobileActiveSolutionCat]?.items?.map((sub, sIdx) => (
                                    <a key={sIdx} href="#" className="block group">
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{sub.title}</h4>
                                        <p className="text-gray-500 text-xs mt-0.5">{sub.desc}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    {mobileView === "industries" && (
                        <div className="space-y-1">
                            <button
                                onClick={() => setMobileView("main")}
                                className="flex items-center gap-2 text-blue-600 font-semibold px-4 py-3 text-sm hover:underline"
                            >
                                <ArrowLeft size={16} /> Voltar
                            </button>

                            <div className="font-bold text-gray-900 px-4 py-2 text-base">Industries</div>

                            <div className="space-y-1">
                                {industriesMenu?.categories.map((cat, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 group transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                            {getIndustryIcon(cat.title)}
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                                            {cat.title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    {mobileView === "insights" && (
                        <div className="space-y-1">
                            <button
                                onClick={() => setMobileView("main")}
                                className="flex items-center gap-2 text-blue-600 font-semibold px-4 py-3 text-sm hover:underline"
                            >
                                <ArrowLeft size={16} /> Voltar
                            </button>

                            <div className="font-bold text-gray-900 px-4 py-2 text-base">Insights</div>

                            <div className="space-y-2">
                                {insightsMenu?.categories.map((cat, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 group transition-colors"
                                    >
                                        <div className="p-2.5 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors shrink-0 mt-0.5">
                                            {getInsightIcon(cat.title)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                                                {cat.title}
                                            </h4>
                                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                                                {cat.desc}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {mobileView === "lang" && (
                        <div className="space-y-1">
                            <button
                                onClick={() => setMobileView("main")}
                                className="flex items-center gap-2 text-blue-600 font-semibold px-4 py-3 text-sm hover:underline"
                            >
                                <ArrowLeft size={16} /> Voltar
                            </button>

                            <div className="font-bold text-gray-900 px-4 py-2 text-base">Select Language</div>

                            <div className="space-y-1 pt-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors ${currentLang === lang.code ? "font-bold text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span>{lang.label} ({lang.code})</span>
                                        {currentLang === lang.code && <Check size={16} className="text-blue-600" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </header>
    );
}