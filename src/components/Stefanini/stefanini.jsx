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
import GlobalTechBanner from "../GlobalTechBanner";
import RecognitionsSection from "../RecognitionsSection";
import JoinTeamBanner from "../JoinTeamBanner";

const customServices = [
    {
        title: "Technology",
        description: "AI, cloud, hybrid infrastructure, UX, CX, development and evolution of digital products, and much more.",
        icon: Smile,
    },
    {
        title: "Operations",
        description: "Automation, predictive logistics, self-service, and industrial efficiency.",
        icon: Zap,
    },
    {
        title: "Data & Analytics",
        description: "Data architecture and engineering, governance, data science, and transformation-driven solutions.",
        icon: ShieldAlert,
    },
    {
        title: "Manufacturing",
        description: "Engineering, automation, data, and AI to optimize industrial applications, production processes, robotics, control, supply chain, and logistics.",
        icon: ShieldAlert,
    },
    {
        title: "Marketing",
        description: "Brand creation, CRM, insights, e-commerce, media, content, design, and analytics with data, technology, and AI to strengthen relationships.",
        icon: ShieldAlert,
    },
    {
        title: "Financial Tech",
        description: "Financial channels, payments, security, investments, and digital experiences, combining technology and AI for efficiency, protection, and innovation in the financial sector.",
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
            <GlobalTechBanner 
        title="Hello, we are Stefanini"
        subtitle="We co-create AI-powered solutions to accelerate results and transform businesses."
        bannerImage="https://stefanini.com/wp-content/uploads/2026/04/1304x604-1.png"
      />
            <RecognitionsSection 
        title="Our Recognitions"
        subtitle="Our passion for driving business with technology is backed by global experts and institutions."
        recognitions={[
          "Gartner Magic Quadrant 2025",
          "IT Executive of the Year Award 2024",
          "People’s Choice Stevie® Award 2024",
          "ISG Star of Excellence™ 2023",
          "+ 96 awards"
        ]}
        quoteText="Technology only has value when it creates the future,and we anticipate it by co-creating with innovation and purpose."
        authorName="Marco Stefanini"
        authorTitle="– Founder and Global CEO"
        authorImage="https://stefanini.com/wp-content/uploads/2025/12/Stefanini2-1.png"
        />
            <Services2 
                                                    title="One-stop-shop." 
                                                    subtitle="We are the technology partner your business needs, with the right people and tools to help you achieve your goals from start to finish."
                                                    services={customServices}
                                                />
            <JoinTeamBanner 
            title="Join the Stefanini team"
            linkText="Careers->"
            linkUrl="/careers"
            graphicImage="https://stefanini.com/wp-content/uploads/2026/04/544X672-1.png"
        />                                    
            <Footer />
            <ChatBotWidget />
        </>
    );
}