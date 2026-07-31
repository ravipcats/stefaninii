import { useMemo, useState } from "react";

import CaseStudiesHero from "../../components/CaseStudies/CaseStudiesHero";
import DropdownFilter from "../../components/CaseStudies/DropdownFilter";
import CaseStudyGrid from "../../components/CaseStudies/CaseStudyGrid";
import caseStudies from "../../data/caseStudiesData";
import "./CaseStudies.css";

export default function CaseStudies() {

    const [selectedSolutions, setSelectedSolutions] = useState([]);

    const [selectedIndustries, setSelectedIndustries] = useState([]);

    const solutions = [

        ...new Set(

            caseStudies.map(item => item.solution)

        )

    ].sort();

    const industries = [

        ...new Set(

            caseStudies.map(item => item.industry)

        )

    ].sort();

    const filtered = useMemo(() => {

        return caseStudies.filter(item => {

            const solutionMatch =

                selectedSolutions.length === 0 ||

                selectedSolutions.includes(item.solution);

            const industryMatch =

                selectedIndustries.length === 0 ||

                selectedIndustries.includes(item.industry);

            return solutionMatch && industryMatch;

        });

    }, [

        selectedSolutions,

        selectedIndustries

    ]);

    return (

        <>
            <div className="case-studies-page">
                <CaseStudiesHero />

                <div className="case-filter-bar">

                    <DropdownFilter

                        title="Solutions"

                        items={solutions}

                        selected={selectedSolutions}

                        setSelected={setSelectedSolutions}

                    />

                    <DropdownFilter

                        title="Industries"

                        items={industries}

                        selected={selectedIndustries}

                        setSelected={setSelectedIndustries}

                    />

                </div>

                <CaseStudyGrid

                    data={filtered}

                />
            </div>
        </>

    );

}