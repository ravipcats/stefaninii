import { motion } from "framer-motion";
import mediaContacts from ".././NewsRoom/mediaContactData.js";

export default function MediaContacts() {
    const { title, description, contact, regions } = mediaContacts;

    return (
        <section className="bg-[#f8f8f8] py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-20 px-6 lg:flex-row lg:items-center">

                {/* LEFT */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="flex-1"
                >
                    <h2 className="text-[54px] font-bold leading-none text-[#061B5E]">
                        {title}
                    </h2>

                    <p className="mt-8 max-w-md text-[20px] leading-9 text-[#2d2d2d]">
                        {description}
                    </p>
                </motion.div>

                {/* RIGHT */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="w-full max-w-[800px] rounded-3xl bg-white p-10 shadow-sm"
                >
                    <div className="border-b border-gray-200 pb-6">

                        <h4 className="mb-4 text-lg font-semibold text-[#061B5E]">
                            Contact
                        </h4>

                        <a
                            href={`mailto:${contact.email}`}
                            className="text-[#0068D7] underline transition hover:text-[#004fa8]"
                        >
                            {contact.email}
                        </a>

                    </div>

                    {regions.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 py-7 last:border-none"
                        >
                            <h5 className="mb-3 text-xl font-bold uppercase text-[#061B5E]">
                                {item.title}
                            </h5>

                            <p className="text-lg text-[#3d3d3d]">
                                {item.person}
                            </p>
                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}