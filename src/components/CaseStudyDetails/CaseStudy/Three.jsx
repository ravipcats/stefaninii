import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/CaseStudy/3.png";

import CaseStudySection from "../CaseStudySection";
import RelatedCaseStudies from "../RelatedCaseStudies";
import CaseStudyImage from "../CaseStudyImage";

const client = {
    title: "THE CLIENT",
    paragraphs: [
        "A leading global manufacturer of passenger vehicles, motorcycles and energy products. The company stands out for its commitment to sustainability and research into green technologies."
    ]
};

const challenge = {
    title: "CONTEXT AND CHALLENGES",
    paragraphs: [
        "In the era of the automotive revolution, companies must reinvent themselves to meet evolving market demands. The rise of disruptive technologies redefines not only the way we travel, but also consumer expectations. In this scenario, connectivity and customer experience are essential. A global automaker stands out by investing in connected car solutions, in partnership with Stefanini. This collaboration results in innovation and an exceptional customer experience, reinforcing its leadership in the automotive industry."
    ]
};

const solution = {
    title: "SOLUTION",
    paragraphs: [
        "Co-creating with the client, Stefanini created a solution that provides complete car control in the palm of your hand, transforming the automotive shopping experience. Our multi-discplinary team developed an application with more than 37 features, including car finder, remote lock, tracking, and collision alert, offering one of the most complete solutions on the market."
    ]
};

const results = {
    title: "RESULTS",
    bullets: [
        "- 50,000 vehicles shipped with the app in 2023 (90% of the fleet sold by Oct. ‘23)",
        "- Increased customer loyalty after purchasing a vehicle",
        "- Increased customer retention through continuous identification with the brand",
        "- Monthly subscription (new revenue streams) for full access to the app"
    ]
};

export default function Three() {

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