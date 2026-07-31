import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/7.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "THE CLIENT",
    paragraphs: [
        "A leading company in the natural resources and mining sector, playing a significant role in the global supply chain of minerals and metals. As a major producer of iron, nickel, and other materials, the company is one of the largest mining organizations in the world, headquartered in Brazil and operating around the globe."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "The client company was facing a major challenge in the management and maintenance of its mine and tailing pipelines. Though several techniques exist for detecting leaks in pipes and ducts, these methods rely on characteristics commonly found in large pipelines. For this reason, leak detection was a slow and manual process, requiring field technicians to examine the entire length of the pipeline – sometimes upwards of 60 miles in length – to identify the specific location of the leak, leading to the loss of valuable materials and the potential for negative environmental impact."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Stefanini designed a solution using artificial intelligence to streamline leak detection, building a computational model driven by machine learning algorithms to monitor variables from sensors across lengthy pipelines. When abnormalities arise, the system issues automated alerts to a central monitoring dashboard, pinpointing the specific section of the pipe with the leak to be addressed."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- Reduced risk by limiting team exposure to potentially hostile environments",
        "- Minimized environmental impact by identifying and correcting leaks more efficiently",
        "- 8% increase in operational efficiency due to avoided waste and the reduction of pipeline downtime",
        "- 300% reduction in maintenance costs due to gains in operating speed"
    ]
};

export default function Seven() {

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