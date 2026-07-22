import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Home() {
    const status = [
        { value: '100+', label: 'Happy Clients' },
        { value: '150+', label: 'Services' },
        { value: '80+', label: 'Projects' },
        { value: '25+', label: 'Years' }
    ];

    return (
        <section id="home" className="relative  min-h-[90vh] flex items-center overflow-hidden bg-slate-50">

            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-[20%] -left-[5%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-3xl"></div>
            </div>

            <article className="container mx-auto px-3 py-1 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-[40%] text-left">

                        <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
                            Digital Transformation
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
                            Your Technology <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Partner for Growth
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-600 mb-8">
                            We build smart automation, CCTV, AI, and software solutions to scale your business faster.
                        </p>

                        <div className="flex gap-3 mb-8">
                            <a href="#services" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm">
                                Discover Services
                            </a>
                            <a href="#products" className="px-5 py-2.5 bg-gray-600 text-white rounded-lg text-sm">
                                View Products
                            </a>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {status.map((obj, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold text-blue-600">
                                        {obj.value}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {obj.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="lg:w-[60%] w-full relative">

                        {/* Background effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-[2rem] opacity-20 scale-105 animate-float-slow"></div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-400 to-cyan-400 rounded-[2rem] opacity-20 scale-110 animate-float-slower"></div>

                        <div className="relative z-20">

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden"
                            >

                                {/* Slide Template */}
                                {[
                                    { img: "ai.png", title: "Artificial Intelligence", desc: "Smart AI solutions for automation & insights" },
                                    { img: "auto.png", title: "Automation Systems", desc: "Transform workflows with intelligent automation" },
                                    { img: "cctv.png", title: "CCTV Surveillance", desc: "Secure your business with advanced monitoring" },
                                    { img: "chip.png", title: "Embedded Systems", desc: "Custom hardware & IoT solutions" },
                                    { img: "software.png", title: "Software Development", desc: "Scalable & customized digital solutions" }
                                ].map((slide, i) => (

                                    <SwiperSlide key={i}>
                                        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[600px]">

                                            {/* ✅ FIXED IMAGE */}
                                            <img
                                                src={`/images/Home/${slide.img}`}
                                                alt={slide.title}
                                                className="w-full h-full object-contain md:object-cover bg-white"
                                            />

                                            {/* Gradient */}
                                            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white/90 to-transparent"></div>

                                            {/* Text */}
                                            <div className="absolute top-0 left-0 w-full p-4 md:p-6">
                                                <h2 className="text-lg md:text-2xl font-bold text-blue-700">
                                                    {slide.title}
                                                </h2>
                                                <p className="text-xs md:text-sm text-blue-600">
                                                    {slide.desc}
                                                </p>
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                ))}

                            </Swiper>

                            {/* Floating Card */}
                            <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-lg hidden md:block z-30">
                                <p className="font-bold text-green-600 text-sm">Trusted Products</p>
                                <small className="text-gray-500 text-xs">High-quality solutions you can rely on</small>
                            </div>

                        </div>
                    </div>

                </div>
            </article>

            {/* Animations */}
            <style jsx>{`
                @keyframes floatSlow {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0); }
                }
                @keyframes floatSlower {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }
                .animate-float-slow {
                    animation: floatSlow 8s ease-in-out infinite;
                }
                .animate-float-slower {
                    animation: floatSlower 12s ease-in-out infinite;
                }
            `}</style>

        </section>
    );
}

export default Home;