import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
import financialServicesImage from "../../assets/Industries/financialServices.png";
import financialServicesHero from "../../assets/Industries/financialServices-hero.png";

export default function FinancialServices() {
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
                title="Financial Services
Industry"
            />
            <IndustryHero
                title={
                    <>
                        Financial Services
                        <br />
                        Industry
                    </>
                }
                description="We drive digital transformation in financial services with end‑to‑end solutions, from digital bank creation to automation and operational security. Our ecosystem integrates Cloud, AI, RPA, and cybersecurity to boost efficiency, innovation, and CX"
                image={financialServicesImage}
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
                title="Transforming the Financial World in the Digital Age"

                introLeft="Financial digital transformation requires efficiency, security, and great experiences. Stefanini supports institutions from the modernization of systems to the creation of complete digital banks."

                introRight="With cloud, instant payments via Topaz, RPA, and cybersecurity, we help institutions scale operations, grow their customer base, and deliver secure, personalized, and compliant journeys.

"

                image={financialServicesHero}

                features={[
                    {
                        title: "Agility in the creation of services",
                        description:
                            "Our Box Banking model accelerates the launch and expansion of digital solutions with less complexity and reduced time-to-market.",
                    },
                    {
                        title: "More convenience",
                        description:
                            "Instant payments, card issuance, and 24x7 digital services, ensure seamless operations and a better customer experience.",
                    },
                    {
                        title: "Regulatory compliance",
                        description:
                            "Flexible solutions for different business models, with a high level of security, adherence to standards and support for sustainable growth",
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