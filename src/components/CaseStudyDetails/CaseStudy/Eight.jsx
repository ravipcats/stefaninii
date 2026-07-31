import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/8.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

// const client = {
//     title: "Understanding the Client",
//     paragraphs: [
//         "A prominent global financial services company offering business and personal payment tools, services, and fintech programs."
//     ]
// };

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "The advent of digital and open banking created a major shift in the industry, with more than 80% of banks turning to virtual assistants to support the new banking experience. But with the call for personalized experiences being heard across industries, modern banks must be willing to embrace the latest advancements in technology to improve UX and strengthen the customer-bank bond. This raises the question: how can banks bridge the gap between the human touch of physical services and the convenience of digital channels?"
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Stefanini and its subsidiary, Topaz, created a solution using artificial intelligence that combines the personal touch of physical banking with the efficiency of digital banking. Using customer data, conversational AI maps consumer behavior to act as a trusted advisor, offering personalized financial advice and support. This AI can assist with money transfers, inform customers about upcoming charges, recommend investment strategies based on transactional history, and more. Moreover, it is able to identify user sentiments and tone of voice, approaching the customer in a humane, empathetic way."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- Cost reduction through operational efficiency gains with the use of AI",
        "- Increased customer engagement and loyalty through streamlined, technologically enhanced UX",
        "- Generation of new business through proactive, personalized product recommendations",
    ]
};

export default function Eight() {

    return (

        <div className="bg-white text-black">

            <Header />

            <CaseStudyImage
                title="Artificial Intelligence Powers Global Workforce Connectivity In Finance"
                image={heroImage}
            />

            {/* <CaseStudySection {...client} /> */}

            <CaseStudySection {...challenge} />

            <CaseStudySection {...solution} />

            <CaseStudySection {...results} />

            <RelatedCaseStudies currentId={1} />

            <Footer />

            <ChatBotWidget />

        </div>

    );

}