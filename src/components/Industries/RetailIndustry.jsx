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
import retail from "../../assets/Industries/Retail.png";
import retailhero from "../../assets/Industries/Retail-hero.png";

export default function RetailIndustry() {
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
                title="Public and Social Sector Industry"
            />
            <IndustryHero
                title={
                    <>
                        Retail
                        <br />
                        Industry
                    </>
                }
                description="The retail sector faces competition, fraud, and changing consumer habits. Stefanini uses AI, IoT, and analytics to optimize operations, create secure and innovative experiences, increase efficiency, and strengthen retail competitiveness."
                image={retail}
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
                title="Digital Solutions for More Agile and Connected Retail"

                introLeft="The retail industry faces growing challenges, such as the expansion of e-commerce, the pressure for seamless omnichannel experiences, and increasingly demanding consumers. To remain competitive, it is essential to respond with agility to changes in behavior and new market demands..

                Society experiences simple and personalized digital"

                introRight="With more complex supply chains and intense global competition, continuous innovation becomes a strategic differentiator. Stefanini supports retailers in the adoption of technologies that optimize operations, create great customer experiences, and strengthen the connection with the consumer at all points of contact."

                image={retailhero}

                features={[
                    {
                        title: "Omnichannel experience",
                        description:
                            "We create fluid, personalized, and consistent journeys that connect physical and digital channels, ensuring a unified experience across all consumer touchpoints.",
                    },
                    {
                        title: "Operational and logistics efficiency",
                        description:
                            "We apply smart technologies to reduce disruptions, delays, and costs in the supply chain, increasing predictability, agility, and operational efficiency.",
                    },
                    {
                        title: "Data-driven innovation",
                        description:
                            "We use AI, advanced analytics, and automation to support real-time decisions, drive continuous innovation, and ensure sustainable growth in retail.",
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