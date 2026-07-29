import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
    Cpu,
    Settings2,
    BarChart3,
    ShieldCheck,
    Factory,
} from "lucide-react";

// Default data can be overridden by props if needed
const defaultServices = [
    {
        title: "Application Development and Maintenance",
        description:
            "AMS 8x5/24x7 with AI, Agile methodologies and DevOps, SRE and AIOps. Complete software lifecycle management, with high efficiency, quality and security, reducing the number of incidents by up to 3x.",
        icon: Cpu,
    },
    {
        title: "Application Modernization",
        description:
            "Agile transformation of legacy systems into modern architectures, with AI and automation. Lower costs and fewer failures, greater agility, compliance, and service continuity.",
        icon: Settings2,
    },
    {
        title: "Application Performance",
        description:
            "Complete management of application performance with AIOps and SRE, anticipating problems, optimizing costs, and ensuring a smooth user experience.",
        icon: BarChart3,
    },
    {
        title: "Cybersecurity",
        description:
            "Protection of applications, cloud, infrastructure, OT and IoT environments.",
        icon: ShieldCheck,
    },
    {
        title: "Manufacturing",
        description:
            "Engineering, automation, AI, industrial optimization and supply chain.",
        icon: Factory,
    },
];

export default function Services({
    title = "Our services",
    subtitle = "With over 35 years of global expertise, our AI-First Applications services cover the entire software engineering lifecycle for guaranteed efficiency, reliability, and innovation.",
    services = defaultServices,
}) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Layout Grid: Left Header, Right Scrollable List matching the image layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Sticky/Fixed Header Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F5B] tracking-tight">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Right Vertical Scrollable List Column */}
                    <div className="lg:col-span-7 h-[600px] overflow-y-auto pr-3 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-[#f8fafc] rounded-3xl border border-gray-100 p-8 w-full cursor-pointer transition-all duration-300 hover:shadow-lg"
                                >
                                    {/* Icon & Title Row */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-500 shadow-sm">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#0B1F5B]">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}