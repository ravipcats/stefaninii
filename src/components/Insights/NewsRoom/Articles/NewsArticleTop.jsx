import { motion } from "framer-motion";

export default function NewsArticleTop({
  category,
  date,
  title,
  image,
  imageAlt,
}) {
  return (
    <section className="bg-white pt-20 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Category */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-5 flex justify-center items-center gap-2 text-sm text-gray-500"
        >
          <span>{category}</span>
          <span>•</span>
          <span>{date}</span>
        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            max-w-5xl
            text-center
            font-bold
            text-[#061B5E]
            leading-[1.08]
            tracking-tight
            text-4xl
            md:text-5xl
            lg:text-[58px]
          "
        >
          {title}
        </motion.h1>

        {/* Hero Image */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-16"
        >
          <img
            src={image}
            alt={imageAlt || title}
            className="
              mx-auto
              w-full
              max-w-[980px]
              rounded-2xl
              object-cover
            "
          />
        </motion.div>

      </div>
    </section>
  );
}