import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/Library/4.png";

import LibraryImage from "../LibraryImage";
import LibrarySection from "../LibrarySection";
import RelatedLibrary from "../RelatedLibrary";

const introduction = {
    title: "Reinforcing its position as a leading business transformation and technology partner",

    paragraphs: [
        "Stefanini proudly announces its recognition at the ABSL Romania Awards 2026, where the company achieved 3rd place among leading organizations in the Romanian business services industry.",

        "This achievement marks an important milestone for Stefanini in Romania and reflects the dedication, expertise, and collaborative mindset of its teams, whose work continues to generate meaningful impact for clients and communities. It further reinforces the company’s position as a trusted business and technology partner, committed to innovation, operational excellence, customer-centric transformation, and market leadership."
    ]

};

const challenge = {

    title: "Recognition from a Leading Industry Authority",

    paragraphs: [
        "Organized by the Association of Business Service Leaders in Romania (ABSL), the ABSL Romania Awards recognize organizations that demonstrate excellence across innovation, digital transformation, customer experience, talent development, and workplace culture.",

        "ABSL is one of the most respected associations in the business services sector, bringing together leading companies operating across Shared Services Centers (SSC), Business Process Outsourcing (BPO), Information Technology Outsourcing (ITO), and Research & Development (R&D)."
    ]

};

const solution = {

    title: "Acknowledged in Five Strategic Categories",

    paragraphs: [
        "Stefanini was shortlisted in five categories, reflecting the breadth of its transformation capabilities:",

        "• Innovator in Business Transformation\n• Promoter in AI & Process Automation\n• Champion of Customer Experience\n• Leader in Talent Growth & Education – One Journey Program DWS\n• Promoter of Vibrant Work Culture – Employee Challenges with the Stefanini Attitudes",

        "These nominations reflect Stefanini’s integrated approach to transformation, bringing together AI, technology, intelligent automation, customer experience, talent development, and workplace culture to help organizations modernize operations, improve performance, and drive innovation at scale."
    ]

};


export default function Four() {

    return (

        <>

            <Header />

            <LibraryImage

                title="Stefanini Celebrates Its 3rd Place Recognition at ABSL Romania Awards 2026"

                image={heroImage}

            />

            <LibrarySection {...introduction} />
            <LibrarySection {...challenge} />
            <LibrarySection {...solution} />
            <RelatedLibrary currentId={1} />
            <Footer />
            <ChatBotWidget />

        </>

    );

}