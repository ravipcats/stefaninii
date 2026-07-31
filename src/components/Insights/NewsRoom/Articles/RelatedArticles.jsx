import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import newsroomData from "../newsroomData";
import NewsCard from "../NewsCard";

export default function RelatedArticles({
    currentId,
}) {

    const articles = newsroomData.filter(
        article => article.id !== currentId
    );

    return (

        <section className="py-24 bg-white">

            <div className="mx-auto max-w-[1700px] px-6">

                <h2 className="mb-12 text-5xl font-bold">

                    <span className="text-[#0072CE]">
                        Conteúdos
                    </span>{" "}

                    relacionados

                </h2>

                <Swiper

                    modules={[Navigation]}

                    navigation

                    spaceBetween={30}

                    slidesPerView={4}

                    breakpoints={{

                        0: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 3,
                        },

                        1500: {
                            slidesPerView: 4,
                        },

                    }}

                >

                    {articles.map(article => (

                        <SwiperSlide key={article.id}>

                            <NewsCard article={article} />

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>

    );

}