import "./AboutCompany.css";

export default function AboutCompany({ job }) {

    return (

        <section className="job-description">

            <h2>

                About Stefanini

            </h2>

            <p>

                {job.about}

            </p>

        </section>

    );

}