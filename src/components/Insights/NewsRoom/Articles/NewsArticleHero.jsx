import { motion } from "framer-motion";

export default function NewsArticleHero({
    category,
    date,
    title,
    image,
    imageAlt,
}) {
    return (
        <section className="bg-white pt-16 pb-24">
            <div className="mx-auto max-w-6xl px-6">

                {/* Category */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex justify-center gap-3 text-sm text-gray-500"
                >
                    <span>{category}</span>
                    <span>•</span>
                    <span>{date}</span>
                </motion.div>

                {/* Title */}

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-5xl text-center text-[56px] font-bold leading-[1.08] tracking-tight text-[#061B5E]"
                >
                    {title}
                </motion.h1>

                {/* Image */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-16"
                >
                    <img
                        src={image}
                        alt={imageAlt || title}
                        className="mx-auto w-full max-w-[980px] rounded-2xl object-cover shadow-sm"
                    />
                </motion.div>

            </div>
        </section>
    );
}