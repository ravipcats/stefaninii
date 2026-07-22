import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
    ArrowLeft,
    ArrowRight,
    Cpu,
    Settings2,
    BarChart3,
    ShieldCheck,
    Factory,
} from "lucide-react";

const services = [
    {
        title: "Technology",
        description:
            "AI solutions, cloud computing, hybrid infrastructure, UX, digital product development.",
        icon: Cpu,
    },
    {
        title: "Operations",
        description:
            "Automation solutions, predictive analytics, self-service and industrial efficiency.",
        icon: Settings2,
    },
    {
        title: "Data & Analytics",
        description:
            "Data architecture, engineering, governance, science and AI transformation.",
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

export default function Services() {
    const swiperRef = useRef(null);

    return (
        <section className="py-24 bg-[#f6f9fc] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14">

                    <div>

                        <h2 className="text-5xl font-bold text-[#0B1F5B]">
                            Our Services
                        </h2>

                        <p className="mt-4 max-w-3xl text-gray-600 text-xl">
                            With over 35 years of global expertise, we offer customized
                            services to transform your infrastructure and drive results.
                        </p>

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-3 mt-8 lg:mt-0">

                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 text-black rounded-xl border-2 border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition"
                        >
                            <ArrowLeft className="mx-auto" size={22} />
                        </button>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 text-black rounded-xl border-2 border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition"
                        >
                            <ArrowRight className="mx-auto" size={22} />
                        </button>

                    </div>

                </div>

                {/* Slider */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{
                        delay: 11500,
                        disableOnInteraction: false,
                    }}
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (

                            <SwiperSlide key={index} >

                                <div className="group bg-white rounded-3xl m-1 shadow-md border border-gray-100 p-10 h-[320px] w-full cursor-pointer transition-all duration-100 hover:-translate-y-1 hover:shadow-xl">

                                    {/* Icon */}

                                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-500">

                                        <Icon
                                            size={28}
                                            className="text-white"
                                        />

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-10 text-2xl font-bold text-[#10245E] group-hover:text-blue-600 transition">

                                        {service.title}

                                    </h3>

                                    {/* Description */}

                                    <p className="mt-2 text-gray-600 leading-5">

                                        {service.description}

                                    </p>

                                </div>

                            </SwiperSlide>

                        );

                    })}

                </Swiper>

            </div>

        </section>
    );
}