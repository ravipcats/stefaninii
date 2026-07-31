import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/5.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "Understanding the Client",
    paragraphs: [
        "Inter is a banking entity that offers the main Super App in the Americas, consolidating a wide variety of banking services, investments, credit, insurance and international transactions in a single digital ecosystem. In addition, it has a marketplace that brings together the best retailers in Brazil and the United States for its more than 30 million customers. The company was founded in Belo Horizonte in 1994 under the name Intermedium Financeira."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "Inter, recognized for its leadership in innovation and financial excellence, faced a high volume of information requests from legal professionals. This demand required a dedicated team for manual operations, creating a significant burden on the bank's human resources. The manual process consumed significant time and effort, affecting the ability to handle other tasks efficiently. This could result in inaccurate or incomplete responses, impacting the quality of customer service. To improve efficiency and avoid human errors, Inter was looking for technological solutions to streamline the process."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "To overcome these challenges, Banco Inter established a strategic partnership with Intelligenti, a Stefanini Group company specialized in innovative solutions for the legal area. Together, they implemented improvements in the process of receiving and handling trades. This included the redesign and automation of the service process, the creation of internal flows to optimize the control and coordination of activities, the development of a management control panel to monitor performance, and above all, the implementation of generative artificial intelligence (AI) to automatically read and respond to legal requests."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- AI-enabled automation resulted in a significant increase in operational efficiency, with a 75.56% decrease in demand completion time.",
        "- It also resulted in a 45% reduction in the number of repetitions in communications related to the attention of the offices.",
        "- Inter managed to raise the level of service between the institution and the requesting entity, meeting the deadlines established in the Service Level Agreement (SLA) and improving the quality of the information provided.",
    ]
};

export default function Five() {

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