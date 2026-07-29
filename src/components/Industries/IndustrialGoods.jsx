import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import industrialHeroImage from "../../assets/Industries/industrial-hero.png";
import industriesGoodImage from "../../assets/Industries/IndustriesGood.png";

import Header from "../Header";
import Solutions from "../Solution";
import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import IndustryOverview from "./IndustryOverview";
import IndustryHero from "./IndustryHero";
import PageSectionNav from "./PageSectionNav";

export default function IndustrialGoods() {
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
                title="Industrial Goods Industry"
            />
            <IndustryHero
                title={
                    <>
                        Industrial
                        <br />
                        Goods Industry
                    </>
                }
                description="Industrial Goods faces pressures on efficiency, productivity, and sustainability. We combine IoT, AI, and automation, predictive maintenance, connected factories, and training, to optimize processes, cut costs, and boost innovation and competitiveness."
                image={industrialHeroImage}
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
                title="Supply Chain Continuity and Efficiency"

                introLeft="Avoid supply chain disruptions with IoT platforms and predictive analytics that increase operational visibility, anticipate risk, and ensure more accurate and reliable deliveries."

                introRight="By integrating real-time data, automation, and analytics, we help industrial goods companies respond quickly to variations in demand, reduce inefficiencies, and strengthen the resilience of operations."

                image={industriesGoodImage}

                features={[
                    {
                        title: "Smart logistics",
                        description:
                            "We apply IoT and predictive analytics to ensure real-time visibility, anticipate failures, reduce disruptions, and increase predictability across the supply chain.",
                    },
                    {
                        title: "Digital workforce",
                        description:
                            "We empower teams with AR/VR, smart dashboards, and digital tools that support decision-making, increase productivity, and keep operations smooth and secure.",
                    },
                    {
                        title: "Connected factory",
                        description:
                            "We use AI, automation, and smart sensors to optimize inventory, production, and energy consumption, promoting operational efficiency, cost reduction, and sustainability.",
                    },
                ]}
            />

            <section id="results">
                <ClientStories
                    subtitle="Success Stories"
                    title={
                        <>
                            Results we can
                            <br />
                            achieve together.
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