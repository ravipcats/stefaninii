import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Solutions from "../Solutions";
import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import IndustryOverview from "./IndustryOverview";
import IndustryHero from "./IndustryHero";
import PageSectionNav from "./PageSectionNav";
import telecomImage from "../../assets/Industries/Telecom.png";
import telecomHero from "../../assets/Industries/Telecom-hero.png";

export default function Telecom() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <Header />
            <PageSectionNav
                title="Telecom, Media, Technology & Professional Services"
            />
            <IndustryHero
                title={
                    <>
                        Telecom, Media,
                        <br />
                        Technology & Professional
                        <br />
                        Services
                    </>
                }
                description="Telecom, media, technology, and professional services face intense competition, tech disruption, and 5G/data/cyber demands. Stefanini uses AI, analytics, automation, and Cloud to optimize processes, spark innovation, and elevate customer experience."
                image={telecomImage}
                buttonText="Talk to an expert"
                onButtonClick={() =>
                    document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            />
            <section id="services">
                <Services />
            </section>
            <IndustryOverview
                title="Cutting-Edge Technology for Efficiency, Intelligence, and Customer Experience"

                introLeft="The telecommunications, media, technology, and professional services industries face high competitiveness, accelerated disruption, regulatory requirements, and pressure for sustainability, with 5G, data, and streaming."

                introRight="Stefanini combines industry expertise and cutting-edge technology with AI, analytics, automation, and cloud to optimize operations, support intelligent decisions, and elevate customer experience."

                image={telecomHero}

                features={[
                    {
                        title: "Operational efficiency and scale",
                        description:
                            "We apply automation and cloud computing to simplify operations, increase efficiency, reduce costs, and ensure scalability in complex, dynamic, and highly competitive environments.",
                    },
                    {
                        title: "Data-driven decisions",
                        description:
                            "We use advanced analytics and artificial intelligence to transform large volumes of data into actionable insights, anticipate trends, and support strategic decisions with more precision and agility.",
                    },
                    {
                        title: "Customer Experience",
                        description:
                            "We develop digital solutions that elevate customer experience, accelerate the creation of new business models and drive continuous innovation, strengthening long-term competitiveness.",
                    },
                ]}
            />

            <section id="results">
                <ClientStories
                    subtitle="Success Stories"
                    title={
                        <>
                            Cases that transform
                            <br />
                            businesses.
                        </>
                    }
                />
            </section>
            <section id="contact">
                <MultiStepForm />
            </section>
            <Footer />
            <ChatBotWidget />
        </>
    );
}