import { motion } from "framer-motion";

export default function NewsArticleContent({
  title,
  paragraphs = [],
}) {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="
            mb-10
            text-[42px]
            font-bold
            leading-[1.15]
            tracking-tight
            text-[#061B5E]
          "
        >
          {title}
        </motion.h2>

        <div className="space-y-10">

          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              className="
                text-[26px]
                leading-[1.75]
                text-[#333]
              "
            >
              {paragraph}
            </motion.p>
          ))}

        </div>

      </div>
    </section>
  );
}