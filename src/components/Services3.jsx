import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Reusable Swiper Slider Component
 * 
 * @param {string} title - Main section heading
 * @param {string} description - Supporting text below heading
 * @param {Array} items - Array of items to display in slides [{ title, description, icon: LucideIcon }]
 * @param {number} autoplayDelay - Delay for autoplay in milliseconds (default: 11500)
 */
export default function ReusableSlider({
    title = "Our Services",
    description = "Explore our customized solutions designed to transform your operations.",
    items = [],
    autoplayDelay = 11500
}) {
    const swiperRef = useRef(null);

    return (
        <section className="py-24 bg-[#f6f9fc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1F5B]">
                            {title}
                        </h2>
                        {description && (
                            <p className="mt-4 max-w-3xl text-gray-600 text-lg sm:text-xl">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-8 lg:mt-0">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 text-black rounded-xl border-2 border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition flex items-center justify-center cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 text-black rounded-xl border-2 border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition flex items-center justify-center cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1.1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {items.map((item, index) => {
                        const IconComponent = item.icon;

                        return (
                            <SwiperSlide key={index}>
                                <div className="group bg-white rounded-3xl m-1 shadow-md border border-gray-100 p-8 sm:p-10 h-[320px] w-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                                    <div>
                                        {/* Icon */}
                                        {IconComponent && (
                                            <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center transition-all duration-500">
                                                <IconComponent size={28} className="text-white" />
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h3 className="mt-8 text-xl sm:text-2xl font-bold text-[#10245E] group-hover:text-blue-600 transition">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>
        </section>
    );
}