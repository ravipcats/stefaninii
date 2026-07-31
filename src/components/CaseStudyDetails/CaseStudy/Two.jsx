import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/2.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "Understanding the Client",
    paragraphs: [
        "A prominent global financial services company offering business and personal payment tools, services, and fintech programs."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "With an underperforming ITSM incumbent, the client was experiencing inadequate device access, high IT support dependency, and a lack of integration across its global workforce. These challenges impacted the business by disrupting collaboration and communication, which resulted in decreased productivity. Due to this, the client identified a need to update the existing digital workplace with a greater focus on the user experience."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "To improve employee experiences while fostering a culture of collaboration and innovation, Stefanini supported the client in several ways, tackling field services, enterprise & engineering services, asset inventory management, and more. Using artificial intelligence, a solution was created to provide personalized, persona-based support tailored to each user’s unique needs, building a more intelligent, connected workforce."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- 34% decrease in requests for user support",
        "- 14% reduction in costs per user for IT support",
        "- Enhanced user experiences with a 95% user satisfaction rate",
        "- More than $3.2 million saved through software reclamation and procurement services"
    ]
};

export default function Two() {

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