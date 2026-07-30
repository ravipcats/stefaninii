import { getJobs } from "../../utils/storage";
import JobCard from "../Career/JobCard";

import "./RelatedJobs.css";

export default function RelatedJobs({ currentId }) {

    const jobs = getJobs()
        .filter(job => job.id !== currentId)
        .slice(0, 3);

    return (

        <section className="related-jobs">

            <div className="related-container">

                <h2>

                    Related Jobs

                </h2>

                <div className="related-grid">

                    {

                        jobs.map(job => (

                            <JobCard

                                key={job.id}

                                job={job}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}