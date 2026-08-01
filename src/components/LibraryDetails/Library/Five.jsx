import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/Library/5.png";

import LibraryImage from "../LibraryImage";
import LibrarySection from "../LibrarySection";
import RelatedLibrary from "../RelatedLibrary";

const introduction = {

    paragraphs: [
        "Our way of working connects strategy, technology, AI, and execution to turn potential into real results.",

        "Business transformation doesn't happen simply because a new technology emerges. It happens when that technology meets strategy, context, scale, and people capable of taking change beyond words and into action.",

        "This is the vision that guides Stefanini Group's work as a Global Tech Consultancy with an AI First mindset.",

        "It rests on three pillars. The first is the AI First Mindset: artificial intelligence as a central part of decision-making, solution development, and business evolution. As a result, AI isn't an isolated solution within the portfolio. It's a principle applied across the company's different areas of work, always focused on generating concrete impact for our clients' business.",

        "The second is co-creation: the ability to develop solutions together with the client, combining technical expertise with the real-world context of each operation.",

        "The third is the One-Stop-Shop model: an integrated structure made up of seven business units that brings together, within the group itself, the capabilities needed to support the entire journey toward more and better results.",

        "It's this combination that allows us to serve a range of sectors, including manufacturing, energy, financial services, telecommunications, retail, healthcare, and the public sector, always with technical depth and business insight.",

        "Scale amplifies this capability. With more than 35,000 employees, a presence in 46 countries, and over 2,000 active clients, Stefanini Group connects local knowledge, global expertise, and consistent execution across different markets.",

        "\"Let's Make It Happen\" isn't a promise. It's how we work."
    ]

};

export default function Five() {

    return (

        <>

            <Header />

            <LibraryImage
                title="Stefanini Group reinforces its positioning as a Global Tech Consultancy with an AI First mindset"
                image={heroImage}
            />

            <LibrarySection {...introduction} />
            <RelatedLibrary currentId={1} />
            <Footer />
            <ChatBotWidget />

        </>

    );

}