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
import naturalResourcesImage from "../../assets/Industries/NaturalResources.png";
import naturalResourcesHero from "../../assets/Industries/NaturalResources-hero.png";

export default function NaturalResources() {
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
                title="Natural Resources Industry"
            />
            <IndustryHero
                title={
                    <>
                        Natural Resources
                        <br />
                        Industry
                    </>
                }
                description="The Natural Resources sector faces sustainability, infrastructure, and price‑volatility headwinds. We apply AI, IoT, and data analytics to boost productivity, cut costs, and scale sustainable operations, driving efficiency and innovation."
                image={naturalResourcesImage}
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
                title="Transforming Natural Resources with Efficiency, Sustainability, and Technological Innovation"

                introLeft="Digital transformation in the Natural Resources sector is essential to increase operational efficiency, reduce environmental impact, and ensure safer, more resilient, and sustainable operations. With advanced technologies, we help companies integrate data, people, and assets in increasingly complex environments."

                introRight="By combining automation, advanced analytics, IoT, and artificial intelligence, we drive productivity, optimize the use of natural resources, and support data-driven strategic decisions, accelerating the transition to more sustainable and innovative operating models."

                image={naturalResourcesHero}

                features={[
                    {
                        title: "Efficiency at scale",
                        description:
                            "Automation, predictive maintenance, and real-time monitoring reduce costs, failures, and unplanned downtime.",
                    },
                    {
                        title: "Environmental compliance",
                        description:
                            "Digital technologies monitor impact, reduce waste, optimize energy consumption, and meet regulatory requirements.",
                    },
                    {
                        title: "Data-driven innovation",
                        description:
                            "AI, analytics, and integrated platforms for more accurate forecasting, agile decision-making, and greater long-term competitiveness.",
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