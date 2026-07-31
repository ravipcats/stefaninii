import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/4.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "The Client",
    paragraphs: [
        "A leading financial institution in Mexico, offering a wide range of financial products and services, including retail banking, corporate banking, investment banking, and insurance."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "To mitigate risk and ensure stability, financial institutions must have up-to-date technology that complies with regulatory requirements. The client’s Human Resources intranet, home to over 100 services for employees, required significant updates to align with current technological and regulatory standards. The 20-year-old legacy system was creating multiple challenges, including persistent performance issues, poor user experience, and costly maintenance. To overcome these challenges quickly, the client sought a partner to update the system, reduce security vulnerabilities, and improve the internal user experience."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Stefanini leveraged the power of artificial intelligence to update the system, migrating legacy code faster, with higher accuracy and lower cost, than human developers alone could provide. Our proprietary SAI APP platform discovered and translated obsolete code while also generating documentation and accelerating QA processes with fewer defects in testing. The end result was a modernized, secure intranet that allowed employees to safely and simply carry out essential HR transactions online."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- 50% Faster Migration - AI-powered automation accelerated code migration by 40-50%, reducing project timelines significantly.",
        "- 50% Fewer Security Vulnerabilities - Strengthened system security through encryption, regular updates, and industry-standard compliance.",
        "- Improved Performance - Optimized code and modern infrastructure boosted system response times, enhancing productivity and user satisfaction.",
    ]
};

export default function Four() {

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