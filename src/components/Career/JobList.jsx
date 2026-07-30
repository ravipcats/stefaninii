import JobCard from "./JobCard";
import "./JobList.css";

export default function JobList({ jobs }) {

    if (jobs.length === 0) {

        return (

            <div className="empty-jobs">

                No Jobs Found.

            </div>

        );

    }

    return (

        <section className="job-list">

            <div className="job-grid">

                {

                    jobs.map(job => (

                        <JobCard

                            key={job.id}

                            job={job}

                        />

                    ))

                }

            </div>

        </section>

    );

}