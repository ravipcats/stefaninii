import { motion } from "framer-motion";
import "./JobHeader.css";

export default function JobHeader({ job }) {

    return (

        <section className="job-header">

            <div className="job-header-container">

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                >

                    <span className="job-category">

                        {job.category}

                    </span>

                    <h1>

                        {job.title}

                    </h1>

                    <p>

                        {job.location} • {job.country}

                    </p>

                </motion.div>

            </div>

        </section>

    );

}