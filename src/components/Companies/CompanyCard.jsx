import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function CompanyCard({ company, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group"
    >
      {/* Image */}

      <div className="overflow-hidden rounded-3xl">
        <img
          src={company.image}
          alt={company.name}
          className="
            w-full
            h-[350px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="pt-5">

        <h3 className="text-2xl font-semibold text-[#3b3b3b]">
          {company.name}
        </h3>

        <p className="mt-3 text-[18px] leading-8 text-gray-600">
          {company.description}
        </p>

        <a
          href={company.website}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-[18px]
            text-[#444]
            transition
            hover:text-[#003E91]
          "
        >
          Visit website

          <FiExternalLink size={16} />
        </a>

      </div>
    </motion.article>
  );
}