import caseStudies from "../../data/caseStudiesData";
import CaseStudyCard from "../CaseStudies/CaseStudyCard";

import "./RelatedCaseStudies.css";

export default function RelatedCaseStudies({ currentId }) {

    const related = caseStudies
        .filter(item => item.id !== currentId)
        .slice(0, 4);

    return (

        <section className="related-case-studies">

            <div className="related-container">

                <h2 className="related-title">

                    Get inspired by other

                    <span> case studies</span>

                </h2>

                <div className="related-grid">

                    {

                        related.map(study => (

                            <CaseStudyCard
                                key={study.id}
                                study={study}
                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}