import { useState } from "react";

import CaseStudyCard from "./CaseStudyCard";

import "./CaseStudyGrid.css";

export default function CaseStudyGrid({ data }) {

    const [visible, setVisible] = useState(9);

    return (

        <section className="case-grid-section">

            <div className="case-grid">

                {

                    data
                        .slice(0, visible)
                        .map(study => (

                            <CaseStudyCard
                                key={study.id}
                                study={study}
                            />

                        ))

                }

            </div>

            {

                visible < data.length && (

                    <div className="case-load-more">

                        <button
                            onClick={() => setVisible(prev => prev + 6)}
                        >
                            Load More
                        </button>

                    </div>

                )

            }

        </section>

    );

}