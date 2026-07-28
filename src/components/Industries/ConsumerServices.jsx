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
import consumerServicesImage from "../../assets/Industries/consumerServices.png";
import consumerServiceshero from "../../assets/Industries/consumer-hero.png";

export default function ConsumerServices() {
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
                title="Consumer Services Industry"
            />
            <IndustryHero
                title={
                    <>
                        Consumer Services
                        <br />
                        Industry
                    </>
                }
                description="Consumer services face shifting consumer habits, regulatory pressure, and omnichannel complexity. Stefanini uses AI, automation, IoT, and data analytics to optimize operations, cut costs, and elevate customer experience."
                image={consumerServicesImage}
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
                title="Personalization, Agility, and Connection Across Channels"

                introLeft="The key to success in customer service lies in delivering memorable and personalized experiences. With journey mapping and customer behavior analysis, we help brands identify critical points, optimize interactions, and increase satisfaction and loyalty across all channels."

                introRight="We modernize the digital ecosystem of companies with intelligent platforms, tailored applications and agile methodologies that accelerate innovation, reduce response time and elevate the experience of customers and employees in highly competitive markets."

                image={consumerServiceshero}

                features={[
                    {
                        title: "Customer experience",
                        description:
                            "End-to-end mapping, omnichannel, and personalization to increase engagement and loyalty.",
                    },
                    {
                        title: "Platforms and Applied AI",
                        description:
                            "Systems modernization, automation, IoT, and AI for real-time decisions and hyper-personalization.",
                    },
                    {
                        title: "Agility and efficiency",
                        description:
                            "Digital work environments, SophieX, and transformation consulting to scale innovation and productivity.",
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