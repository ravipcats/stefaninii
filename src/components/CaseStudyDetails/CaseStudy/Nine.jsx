import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/9.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "Understanding the Client",
    paragraphs: [
        "Known for quality and innovation, the client is a global leader in automotive manufacturing. Its global presence and commitment to sustainability make it an iconic brand."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "Substance management in the automotive sector has always represented a critical challenge, with significant economic and regulatory implications. Across the industry, processes for mapping the regulatory environment are often conducted in an archaic, manual, and inaccurate way.",
        "To make informed decisions about products incorporated into cars, products present in parts, and products used in the production process, automotive companies need to be able to constantly assess risks, legislation, and regulations that may impact their complex environment."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Co-creating with the client, Stefanini trained AI models to predict future regulations. The data that feeds the solution comes from a variety of sources, including academic research, new legislation, regulatory institutes, technical standards, and even social listening. After extracting data from more than 66,000 critical components, machine learning algorithms are used to find patterns and make predictions, allowing the client to make more confident, assertive business decisions."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- Millions of dollars saved in operational and administrative costs by anticipating R&D for materials used in production",
        "- A central location to access relevant business data and monitor decision flows",
        "- Shutdowns avoided on the production line, which could otherwise result in losses of $22 to 50 thousand per minute and negative impact on the brand",

    ]
};

export default function Nine() {

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