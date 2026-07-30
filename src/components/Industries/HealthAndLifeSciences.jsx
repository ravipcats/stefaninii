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
import healthandlifescience from "../../assets/Industries/HealthAndLifeScience.png";
import healthandlifesciencehero from "../../assets/Industries/HealthAndLifeScience-hero.png";

export default function HealthAndLifeSciences() {
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
                title="Health and Life Sciences Industry"
            />
            <IndustryHero
                title={
                    <>
                        Health and Life Sciences
                        <br />
                        Industry
                    </>
                }
                description="Stefanini delivers digital health services that power decentralized and hybrid clinical trials worldwide. Our advanced, human-centric solutions connect patients, healthcare providers, and research organizations so studies run efficiently and in compliance. As your strategic partner, we boost patient engagement, streamline logistics, and ensure inspection readiness, freeing your teams to focus on science while we manage delivery and support."
                image={healthandlifescience}
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
                title="Accelerate your next clinical trial with Stefanini"

                introLeft="With extensive global clinical study experience, Stefanini helps organizations adopt, validate, and manage digital health technologies (DHTs) across decentralized and hybrid trials so every connected device, including wearables, point-of-care, and other medical devices, meet the highest standards of reliability and oversight."

                introRight="Through intelligent monitoring, predictive analytics, and regulatory-grade processes, our modular digital health ecosystem keeps clinical operations compliant, shortens startup, prevents regulatory delays, resolves issues early, and streamlines execution."

                image={healthandlifesciencehero}

                features={[
                    {
                        title: "Computerized Systems Validation & Compliance",
                        description:
                            "We specialize in validating computerized systems, qualifying IT infrastructure, ensuring data integrity, and remediating gaps in compliance. Whether it’s FDA 21 CFR Part 11 or EU Annex 11, we’ll help you navigate regulations, address deficiencies, and achieve seamless digital transformation with confidence.",
                    },
                    {
                        title: "Global Provisioning & Logistics Management",
                        description:
                            "Ensure compliant, cross-border distribution of DHTs and connected medical devices. Including: import/export, customs documentation, localized labeling, IFU translation, device reuse programs, traceability systems, logistics dashboards, GDP/GSP-aligned operations.",
                    },
                    {
                        title: "Trial Retention Outsourcing (TRO) Services",
                        description:
                            "We offer a comprehensive service portfolio, from patient screening and recruitment to post-study support, ensuring a seamless healthcare journey and enhancing clinical trial outcomes with adaptive study coaching.",
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