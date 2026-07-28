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
import consumerGoodsImage from "../../assets/Industries/consumerGoods.png";
import consumerGoodshero from "../../assets/Industries/consumerGoods-hero.png";

export default function ConsumerGoods() {
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
                // description="Consumer services face shifting consumer habits, regulatory pressure, and omnichannel complexity. Stefanini uses AI, automation, IoT, and data analytics to optimize operations, cut costs, and elevate customer experience."
                image={consumerGoodsImage}
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
                title="Agility, Conversion, and Operational Efficiency"

                introLeft="With intelligent AI-powered solutions, we help brands reduce lead time, increase sales conversions, and optimize operational costs, ensuring quick responses to market trends and more sustainable operations."

                introRight="By integrating automation, real-time data, and personalization at scale, companies gain supply chain efficiencies, improve customer experience, and strengthen their competitiveness in an evolving market."

                image={consumerGoodshero}

                features={[
                    {
                        title: "–25%",
                        description:
                            "Reduction in delivery time. Supply chain optimization with AI, IoT, and intelligent automation, ensuring greater predictability, fewer stockouts, and faster responses to demand.",
                    },
                    {
                        title: "+30%",
                        description:
                            "In sales conversion. Highly personalized experiences with advanced analytics and AI-based recommendation engines increase engagement and conversion rate.",
                    },
                    {
                        title: "–40%",
                        description:
                            "Lower operating costs. Process automation and intelligent use of data to reduce waste, optimize resources, and promote operational efficiency with a focus on sustainability.",
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