import { motion } from "framer-motion";

export default function NewsroomHero({
    title = "Newsroom",
    description = "Stay up to date with the latest official announcements, corporate news, media coverage, and key updates from the Stefanini Group.",
    buttonText = "Media Contacts",
    onButtonClick,
}) {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold tracking-tight text-[#071B5C] md:text-6xl lg:text-7xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-[#434A5B] md:text-2xl"
                >
                    {description}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    onClick={onButtonClick}
                    className="mt-12 rounded-lg bg-[#0068D7] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#0057B8] hover:shadow-lg"
                >
                    {buttonText}
                </motion.button>

            </div>
        </section>
    );
}


{/* <NewsroomHero
    title="Media Center"
    description="Read the latest company announcements, blogs, press releases and technology insights."
    buttonText="Read News"
/> */}