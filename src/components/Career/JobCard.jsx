import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    MapPin,
    Calendar,
    Briefcase,
    ArrowRight
} from "lucide-react";

import "./JobCard.css";

export default function JobCard({ job }) {

    return (

        <motion.div

            className="job-card"

            whileHover={{ y: -6 }}

            transition={{ duration: .25 }}

        >

            <div className="job-top">

                <span className="job-category">

                    {job.category}

                </span>

                <span
                    className={`employment-badge ${job.employmentType
                        ?.toLowerCase()
                        .replace(/\s+/g, "-")}`}
                >
                    {job.employmentType}
                </span>

            </div>

            <h3>

                {job.title}

            </h3>

            <div className="job-info">

                <div>

                    <MapPin size={16} />

                    {job.location}

                </div>

                <div>

                    <Calendar size={16} />

                    {job.posted}

                </div>

                <div>

                    <Briefcase size={16} />

                    {job.salary}

                </div>

            </div>

            <Link

                to={`/careers/${job.id}`}

                className="job-link"

            >

                Job Details

                <ArrowRight size={18} />

            </Link>

        </motion.div>

    );

}