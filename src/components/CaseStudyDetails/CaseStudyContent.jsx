import "./CaseStudyContent.css";

export default function CaseStudyContent({

    study

}) {

    return (

        <section className="case-content">

            <div className="container">

                <h2>

                    Overview

                </h2>

                <p>

                    {study.description}

                </p>

                {

                    study.paragraphs.map(

                        (item, index) => (

                            <p key={index}>

                                {item}

                            </p>

                        )

                    )

                }

            </div>

        </section>

    );

}