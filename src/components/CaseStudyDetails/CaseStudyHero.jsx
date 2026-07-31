import "./CaseStudyHero.css";

export default function CaseStudyHero({

    study

}) {

    return (

        <section className="case-hero">

            <img

                src={study.image}

                alt={study.title}

            />

            <div className="case-overlay">

                <span>

                    {study.solution}

                </span>

                <h1>

                    {study.title}

                </h1>

                <p>

                    {study.industry}

                </p>

            </div>

        </section>

    );

}