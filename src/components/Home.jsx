import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Home() {

    return (
        <section id="home" className="relative min-h-[60vh] overflow-hidden bg-slate-50 sm:min-h-[70vh] lg:min-h-screen">
            <article className="relative z-10 w-full">
                <div className="relative w-full">
                    <div className="relative z-10">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 10000 }}
                            pagination={{
                                clickable: true,
                                renderBullet: (index, className) => `<span class="${className} swiper-pagination-bullet-custom"></span>`,
                            }}
                            loop={true}
                            className="!pb-10 sm:!pb-12 lg:!pb-14"
                        >
                            {[
                                { img: "4.png", title: "Stefanini Group", desc: "Reinforces its positioning as a global tech consultancy with an AI-first mindset", link: "https://www.stefanini.com/en-us/news/stefanini-reinforces-its-positioning-as-a-global-tech-consultancy-with-an-ai-first-mindset/" },
                                { img: "3.png", title: "Stefanini Group", desc: "Global tech consulting with an AI-first focus to accelerate results", link: "https://www.stefanini.com/en-us/news/stefanini-reinforces-its-positioning-as-a-global-tech-consultancy-with-an-ai-first-mindset/" },
                                { img: "2.png", title: "How Ford & Stefanini", desc: "Co-created a digital experience customers love", link: "https://www.stefanini.com/en-us/news/stefanini-reinforces-its-positioning-as-a-global-tech-consultancy-with-an-ai-first-mindset/" },
                                { img: "1.png", title: "The Cost of Inaction", desc: "Modernize now or pay later", link: "https://www.stefanini.com/en-us/news/stefanini-reinforces-its-positioning-as-a-global-tech-consultancy-with-an-ai-first-mindset/" },
                            ].map((slide, i) => (
                                <SwiperSlide key={i}>
                                    <div className="w-full overflow-hidden bg-white shadow-sm sm:bg-transparent sm:shadow-none">
                                        <div className="relative ml-0 overflow-hidden rounded-[10px] sm:ml-0 sm:rounded-none sm:w-full aspect-[5/4] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] xl:aspect-[16/6]">
                                            <div className="mx-auto w-full sm:w-full">
                                                <img
                                                    src={`/images/Home/${slide.img}`}
                                                    alt={slide.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:bg-none" />
                                            <div className="absolute bottom-4 left-3 right-3 max-w-3xl desktop-overlay md:bottom-6 md:left-6 md:right-6 lg:bottom-8 lg:left-8 lg:right-8 xl:bottom-10 xl:left-12 xl:right-12 2xl:left-20 2xl:right-20">
                                                <h2 className="text-base font-bold leading-tight text-white sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                                                    {slide.title}
                                                </h2>

                                                <p className="mt-2 text-sm leading-relaxed text-white/95 sm:mt-3 sm:text-base md:mt-4 md:text-lg lg:text-xl">
                                                    {slide.desc}
                                                </p>
                                                <a
                                                    href={slide.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-3 inline-block rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:mt-4 sm:px-4 sm:py-2.5 sm:text-base md:mt-5 md:px-5 md:py-3"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 mobile-overlay px-4 pb-4 pt-16">
                                            <div className="rounded-[12px] border border-white/30 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-slate-700/80 p-4 shadow-lg backdrop-blur-sm">
                                                <h2 className="text-lg font-semibold leading-tight text-white">
                                                    {slide.title}
                                                </h2>
                                                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                                                    {slide.desc}
                                                </p>
                                                <a
                                                    href={slide.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-3 inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </article>

            {/* Animations and Pagination Styles */}
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
                :global(.swiper-pagination) {
                    bottom: 20px !important;
                    right: 20px !important;
                    left: auto !important;
                    width: auto !important;
                    display: flex !important;
                    gap: 8px !important;
                    align-items: center !important;
                    padding: 8px 12px !important;
                    background: rgba(255, 255, 255, 0.15) !important;
                    backdrop-filter: blur(10px) !important;
                    border-radius: 20px !important;
                    border: 1px solid rgba(255, 255, 255, 0.25) !important;
                }
                :global(.swiper-pagination-bullet) {
                    width: 8px !important;
                    height: 8px !important;
                    border-radius: 50% !important;
                    background: rgba(255, 255, 255, 0.4) !important;
                    opacity: 1 !important;
                    margin: 0 2px !important;
                    transition: all 0.3s ease !important;
                }
                :global(.swiper-pagination-bullet-active) {
                    background: #3b82f6 !important;
                    width: 24px !important;
                    border-radius: 4px !important;
                }
                /* 900px breakpoint: phone theme below, desktop theme above */
                @media (min-width: 900px) {
                    .desktop-overlay {
                        display: block !important;
                    }
                    .mobile-overlay {
                        display: none !important;
                    }
                }
                @media (max-width: 899px) {
                    .desktop-overlay {
                        display: none !important;
                    }
                    .mobile-overlay {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Home;