import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NewsCard({ article }) {
    const navigate = useNavigate();
    const targetPath = article.link?.startsWith("/") ? article.link : `/${article.link || ""}`;

    return (
        <motion.article
            layout
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(targetPath)}
            className="group cursor-pointer"
        >
            <div className="overflow-hidden rounded-xl">

                <img
                    src={article.image}
                    alt={article.title}
                    className="
            h-[210px]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
                />

            </div>

            <div className="mt-4">

                <h3
                    className="
            text-[18px]
            font-semibold
            leading-7
            text-[#071B5C]
            transition-colors
            duration-300
            group-hover:text-[#0068D7]
            line-clamp-3
          "
                >
                    {article.title}
                </h3>

                <div
                    className="
            mt-3
            flex
            items-center
            gap-2
            text-[14px]
            text-gray-500
          "
                >
                    <span>{article.region}</span>

                    <span>•</span>

                    <span>Published {article.published}</span>
                </div>

            </div>
        </motion.article>
    );
}