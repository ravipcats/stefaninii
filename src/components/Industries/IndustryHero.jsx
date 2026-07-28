import { motion } from "framer-motion";

export default function IndustryHero({
    title,
    description,
    image,
    buttonText = "Talk to an expert",
    onButtonClick,
}) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                <div className="grid items-center gap-16 py-20 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >
                        <h1
                            className="
                text-[56px]
                leading-[1.05]
                font-bold
                text-[#0F1E5A]
                lg:text-[72px]
              "
                        >
                            {title}
                        </h1>

                        <p
                            className="
                mt-10
                max-w-[760px]
                text-[22px]
                leading-[1.65]
                text-[#394150]
              "
                        >
                            {description}
                        </p>

                        <button
                            onClick={onButtonClick}
                            className="
                mt-12
                rounded-lg
                bg-[#0068D7]
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0057b8]
                hover:shadow-xl
              "
                        >
                            {buttonText}
                        </button>
                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="
                w-full
                max-w-[560px]
                rounded-2xl
                object-cover
                shadow-sm
              "
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}