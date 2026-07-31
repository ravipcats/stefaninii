import "./JobDescription.css";

export default function JobDescription({ job }) {

    return (

        <section className="job-description">

            <h2>

                Job Description

            </h2>

            <p>

                {job.description}

            </p>

            <h2>

                Responsibilities

            </h2>

            <ul>

                {

                    job.responsibilities.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))

                }

            </ul>

        </section>

    );

}