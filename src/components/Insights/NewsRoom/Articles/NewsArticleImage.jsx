import { motion } from "framer-motion";

export default function NewsArticleImage({
    image,
    alt,
    className = "",
}) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">

                <motion.img
                    src={image}
                    alt={alt}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className={`
                        mx-auto
                        w-full
                        max-w-[980px]
                        rounded-2xl
                        object-cover
                        shadow-sm
                        ${className}
                    `}
                />

            </div>
        </section>
    );
}