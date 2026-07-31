import { useParams } from "react-router-dom";

import caseStudies from "../../data/caseStudiesData";

import CaseStudyHero from "../../components/CaseStudyDetails/CaseStudyHero";
import CaseStudyContent from "../../components/CaseStudyDetails/CaseStudyContent";
import RelatedCaseStudies from "../../components/CaseStudyDetails/RelatedCaseStudies";

export default function CaseStudyDetails() {

    const { slug } = useParams();

    const study = caseStudies.find(

        item => item.slug === slug

    );

    if (!study) {

        return (

            <h1 style={{ padding: 100 }}>

                Case Study Not Found

            </h1>

        );

    }

    return (

        <>

            <CaseStudyHero

                study={study}

            />

            <CaseStudyContent

                study={study}

            />

            <RelatedCaseStudies

                currentId={study.id}

            />

        </>

    );

}