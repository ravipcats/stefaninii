import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./CaseStudyCard.css";

export default function CaseStudyCard({ study }) {

    return (

        <motion.article
            className="case-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >

            <Link
                to={study.link}
                className="case-card-link"
            >

                <div className="case-card-image">

                    <img
                        src={study.image}
                        alt={study.title}
                    />

                </div>

                <div className="case-card-content">

                    <h3>
                        {study.title}
                    </h3>

                    <p>
                        {study.solution}

                        <span>•</span>

                        {study.industry}
                    </p>

                </div>

            </Link>

        </motion.article>

    );

}