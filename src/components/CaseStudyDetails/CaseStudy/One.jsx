import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/1.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "THE CLIENT",
    paragraphs: [
        "Recognized for its excellence and innovation, and its worldwide footprint establishes it as an iconic brand."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "Facilitating seamless communication across languages and geographic boundaries posed a growing challenge. This challenge manifested in impeded collaboration during global meetings, with over 20+ languages spoken across the workforce. Employees in HR, Legal, and Purchasing departments encountered challenges in accessing services and information efficiently. Additionally, ensuring the clear dissemination of important notices across the entire global workforce presented difficulties."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "The integration of artificial intelligent solutions into Microsoft Teams facilitates real-time translation across 20+ languages, enhancing communication efficiency. SophieX, a proactive AI virtual assistant, delivers crucial information via Teams, streamlining workflows. Tailored to specific departmental needs, SophieX optimizes user experience."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "Boosted Productivity - Clear communication improved efficiency.",
        "Empowered Decision-Making - Enhanced collaboration enabled informed choices.n",
        "Saved Costs - Streamlined operations led to savings.",
        "Enhanced Satisfaction - The AI solutions improved access, fostering inclusivity.",
        "Increased Profitability - Efficiency, cost reduction, and satisfaction drove profitability"
    ]
};

export default function One() {

    return (

        <div className="bg-white text-black">

            <Header />

            <CaseStudyImage
                title="Unveiling Beauty's Global Voice: Leveraging AI for Seamless Collaboration"
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