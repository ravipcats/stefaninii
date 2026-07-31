import "./JobRequirements.css";

export default function JobRequirements({ job }) {

    return (

        <section className="job-description">

            <h2>

                Requirements

            </h2>

            <ul>

                {

                    job.requirements.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))

                }

            </ul>

        </section>

    );

}