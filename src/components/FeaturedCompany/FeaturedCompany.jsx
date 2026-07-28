import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import featuredCompany from "./featuredCompanyData";

export default function FeaturedCompany() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-[1320px] px-6">
                <div className="grid items-center gap-14 lg:grid-cols-[58%_42%]">
                    {/* Left Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="overflow-hidden rounded-[28px]"
                    >
                        <img
                            src={featuredCompany.image}
                            alt={featuredCompany.title}
                            className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                        />
                    </motion.div>

                    {/* Right Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <h2 className="text-[64px] font-bold leading-none text-[#474A54]">
                            {featuredCompany.title}
                        </h2>

                        <p className="mt-8 max-w-xl text-[32px] font-semibold leading-[1.45] text-[#505050]">
                            {featuredCompany.description}
                        </p>

                        <a
                            href={featuredCompany.website}
                            className="mt-10 inline-flex items-center gap-2 text-[24px] text-[#5b5b5b] transition hover:text-[#0068D7]"
                        >
                            Visit website

                            <FiExternalLink className="text-base" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}