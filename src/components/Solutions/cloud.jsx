import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Solutions from "../Solution";
import Services2 from "../Services2";
import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import { Smile, Zap, ShieldAlert } from "lucide-react";

const customServices = [
    {
        title: "Cloud Adoption",
        description: "Cloud adoption is an ongoing organizational transformation, with strategic planning, governance, and flexible models (public, private, or hybrid) tailored to the business.",
        icon: Smile,
    },
    {
        title: "Cloud Advisory",
        description: "Strategic support to organize and plan cloud technologies, aligning cloud adoption and optimization with business objectives.",
        icon: Zap,
    },
    {
        title: "Cloud Management and Optimization Services",
        description: "Cloud management and optimization services that guarantee efficiency, security, and cost reduction, with monitoring, automation, and continuous improvement of the environment.",
        icon: ShieldAlert,
    },
    {
        title: "Cloud Migration",
        description: "Agile and secure migration of applications to public, private, or hybrid clouds, with detailed planning, risk mitigation, and operational continuity.",
        icon: ShieldAlert,
    },
    {
        title: "Cloud Modernization",
        description: "Services that transform legacy applications and infrastructure into modern cloud architectures, maximizing business value and innovation.",
        icon: ShieldAlert,
    },
    {
        title: "Cloud-Native Applications",
        description: "Solutions for creating scalable, resilient, and agile apps, with containers, microservices, and automation, accelerating innovation and development.",
        icon: ShieldAlert,
    },
];

export default function Solution() {
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
            <Solutions
                title="Cloud Solutions"
                subtitle="Cloud Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-1_640X447-1.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-2_1304X217-1.jpg"
                description1="In the digital age, the cloud is fundamental for innovation and productivity. Hybrid cloud connects public and private environments..."
                description2="Redundancy and reducing dependency. Our portfolio helps clients optimize resources, select the ideal solutions, and accelerate digital transformation securely and efficiently."
            />

            <Services2 
                            title="Our services" 
                            subtitle="With over 35 years of global expertise, our customized Cloud services transform your infrastructure, accelerate digital transformation securely and efficiently, and drive results.
"
                            services={customServices}
                        />
            <ClientStories />
            <MultiStepForm />
            <Footer />
            <ChatBotWidget />
        </>
    );
}