import { motion } from "framer-motion";

export default function IndustryOverview({
    title,
    introLeft,
    introRight,
    image,
    features,
}) {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-[960px] px-8">

                {/* Heading */}

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="text-[44px] lg:text-[56px] font-bold leading-tight text-[#071B5C]"
                >
                    {title}
                </motion.h2>

                {/* Intro */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="mt-10 grid gap-10 md:grid-cols-2"
                >
                    <p className="text-[16px] leading-8 text-[#3E4757]">
                        {introLeft}
                    </p>

                    <p className="text-[16px] leading-8 text-[#3E4757]">
                        {introRight}
                    </p>
                </motion.div>

                {/* Image */}

                <motion.div
                    initial={{ opacity: 0, scale: .96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mt-14 overflow-hidden rounded-2xl"
                >
                    <img
                        src={image}
                        alt=""
                        className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                </motion.div>

                {/* Features */}

                <div className="mt-16 grid gap-12 md:grid-cols-3">

                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .15,
                            }}
                        >
                            <h3 className="text-[30px] font-bold text-[#071B5C]">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-[17px] leading-8 text-[#3E4757]">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}