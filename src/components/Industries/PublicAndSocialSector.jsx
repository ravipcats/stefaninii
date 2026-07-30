import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";

import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import IndustryOverview from "./IndustryOverview";
import IndustryHero from "./IndustryHero";
import PageSectionNav from "./PageSectionNav";
import publicandsocialsector from "../../assets/Industries/PublicAndSocialSector.png";
import publicandsocialsectorhero from "../../assets/Industries/PublicAndSocialSector-hero.png";

export default function PublicAndSocialSector() {
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
                        Public and Social Sector
                        <br />
                        Industry
                    </>
                }
                description="We support the public sector in all stages of digital transformation, with solutions that drive mobility, automation, and efficiency, reducing costs and elevating the citizen experience with modern and intuitive service standards."
                image={publicandsocialsector}
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
                title="Digital Transformation of Government"

                introLeft="Governments still have the lowest levels of digital maturity when compared to other sectors. To move forward, it is essential to align technology with the strategic objectives of the public sector, deeply understanding the citizens' experience, needs, expectations, and journeys.

                Society experiences simple and personalized digital"

                introRight="experiences in the private sector, as such, the expectation for equally accessible, collaborative, and value-generating public services is growing. The intuitive digital experience has become indispensable to ensure citizen satisfaction, engagement, and trust throughout their interaction with the government."

                image={publicandsocialsectorhero}

                features={[
                    {
                        title: "Citizen Experience",
                        description:
                            "Intuitive, integrated, omnichannel digital services that increase access, transparency, and citizen satisfaction.",
                    },
                    {
                        title: "Efficiency and cost reduction",
                        description:
                            "Digitalization, automation, and mobility to optimize processes, increase productivity, and improve the management of public resources.",
                    },
                    {
                        title: "Digital transformation",
                        description:
                            "Scalable solutions that accompany governments through every stage of digital maturity, from planning to continuous innovation.",
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