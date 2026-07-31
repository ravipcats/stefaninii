import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/6.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "Understanding the Client",
    paragraphs: [
        "A prominent global company specializing in the production, development, and sale of paints, coatings, and related products."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "Across industries, production efficiency is a top priority. In this context, the Overall Equipment Effectiveness (OEE) indicator is a crucial metric, providing a comprehensive view of the efficiency and effectiveness of the production process.",
        "The impact of OEE is vast, but there are challenges associated with it, including inconsistent or inaccessible data, lack of technical ability to interpret data, and the overall complexity of industrial processes. For this reason, the client was seeking a partner to incorporate new technologies into their environment, looking for a consultant-integrator who could guide them in adopting Industry 4.0 and fostering an innovation mindset."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Combining a business understanding of the industrial environment with Stefanini’s technical expertise, supported by computational models in AI (using Machine Learning techniques and algorithms), a comprehensive solution was developed to optimize the client’s business processes, with an adaptive scheduling tool, automated algorithms, and more.",
        "Co-creating with the client, Stefanini’s multidisciplinary team created a platform that optimizes production planning by observing constraints, business rules, and data inputs (including real-time variabilities) while allowing for manual customization and adjustments."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- Nearly a 10% increase in production capacity due to the 40% reduction in downtime",
        "- Economic savings and operational efficiency gains from optimized raw material consumption, batching, and shipping",
        "- Standardization and quality increased by reducing human dependency in tasks and procedures, reducing process variances",
    ]
};

export default function Six() {

    return (

        <div className="bg-white text-black">

            <Header />

            <CaseStudyImage
                title="Artificial Intelligence Powers Global Workforce Connectivity In Finance"
                image={heroImage}
            />

            <CaseStudySection {...client} />

            <CaseStudySection {...challenge} />

            <CaseStudySection {...solution} />

            <CaseStudySection {...results} />

            <RelatedCaseStudies currentId={1} />

            <Footer />

            <ChatBotWidget />

        </div>

    );

}