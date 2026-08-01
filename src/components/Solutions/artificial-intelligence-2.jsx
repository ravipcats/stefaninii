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
        title: "SAI APP",
        description: "In application development, we integrate intelligent automation, agentic AI, and predictive analytics to accelerate deliveries, enhance security, and personalize experiences.",
        icon: Smile,
    },
    {
        title: "SAI ES",
        description: "We use artificial intelligence to monitor, optimize, and protect hybrid environments, anticipating failures and automating incident response.",
        icon: Zap,
    },
    {
        title: "SAI Cloud",
        description: "We leverage the cloud with intelligent automation, AI-powered scalability, and real-time cost and resource optimization.",
        icon: ShieldAlert,
    },
    {
        title: "Digital Workplace",
        description: "We transform the work environment with virtual assistants, task automation, engagement analytics, and personalized employee experience.",
        icon: ShieldAlert,
    },
    {
        title: "Operations",
        description: "We automate operational processes, anticipate bottlenecks, and optimize resources, making operations more agile, efficient, and resilient.",
        icon: ShieldAlert,
    },
    {
        title: "Data & Analytics",
        description: "We transform data into actionable insights in real time, using AI to predict trends, identify opportunities, and support strategic decisions.",
        icon: ShieldAlert,
    },
    {
        title: "Cyber",
        description: "We proactively and autonomously detect, prevent, and respond to cyber threats, raising the organization's security level.",
        icon: ShieldAlert,
    },
    {
        title: "Manufacturing",
        description: "We optimize production with predictive maintenance, automated quality control, and AI-based operational decisions, reducing costs and increasing efficiency.",
        icon: ShieldAlert,
    },
    {
        title: "Marketing",
        description: "We create hyper-personalized campaigns, using customer behavior analysis and content automation, boosting engagement and conversion.",
        icon: ShieldAlert,
    },
    {
        title: "Financial Tech",
        description: "Automation, personalization, and predictive analytics for financial services, improving customer experience and operational efficiency.",
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
                title="Artificial Intelligence Solutions"
                subtitle="Artificial Intelligence Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-18.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-18.jpg"
                description1="The future of Artificial Intelligence starts with a partner who understands your business challenges. The SAI – Stefanini Artificial Intelligence - ecosystem combines specialized consulting, dedicated squads and a complete ecosystem of tools to accelerate real results. We help your business identify opportunities, scale"
                description2="solutions securely, and drive impact ahead of the competition. With global expertise and AI applied to the right context, we reduce costs, overcome adoption barriers, and transform ambitions into intelligent solutions, tailored to your business."
            />

            <Services2 
                            title="Our services" 
                            subtitle="With over 35 years of global expertise, the Stefanini Artificial Intelligence ecosystem combines specialized consulting, dedicated squads, and a complete toolset to accelerate results.
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