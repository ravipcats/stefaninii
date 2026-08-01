import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./LibraryCard.css";

export default function LibraryCard({ item }) {

    return (

        <motion.article

            className="library-card"

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .45 }}

        >

            <Link

                to={item.link}

                className="library-card-link"

            >

                <div className="library-card-image">

                    <img

                        src={item.image}

                        alt={item.title}

                    />

                </div>

                <div className="library-card-content">

                    <div className="library-card-meta">

                        <span>

                            {item.type}

                        </span>

                        <span>•</span>

                        <span>

                            {item.industry}

                        </span>

                    </div>

                    <h3>

                        {item.title}

                    </h3>

                </div>

            </Link>

        </motion.article>

    );

}

