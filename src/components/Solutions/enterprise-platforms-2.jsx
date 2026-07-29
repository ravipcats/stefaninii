import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Solutions from "../Solution";
import Services from "../Services";
import Services2 from "../Services2";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import { Smile, Zap, ShieldAlert } from "lucide-react";

const customServices = [
    {
        title: "AMS and Improvement",
        description: "A support environment for continuous operation and evolution of SAP systems, 24/7 support and proprietary AI platform reduce manual effort, with 99% compliance and SLA.",
        icon: Smile,
    },
    {
        title: "Advisory",
        description: "Tailored SAP solutions consulting, from roadmap to execution, focusing on digital transformation, compliance and platform integration.",
        icon: Zap,
    },
    {
        title: "Implementation",
        description: "Stefanini SAP implementation: proprietary AI solutions for Greenfield, Brownfield and Bluefield projects with an agile approach, BTP/CPI/GRC integration, Clean Core and tax compliance.",
        icon: ShieldAlert,
    }
    
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
            title="Enterprise Platforms Solutions"
              subtitle="Enterprise Platforms Solutions"
              heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-9.jpg"
              bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304x217-9.jpg"
              description1="Accelerate your digital transformation with strategic migration to SAP S/4HANA Cloud.<br /> <br /> Stefanini helps companies plan and execute the transition in an agile and secure way, minimizing disruptions and maximizing ROI. We offer strategic"
              description2="assessment, risk mitigation, license optimization, and infrastructure cost reduction. Our scalable approach integrates generative AI to support all phases of the project, ensuring accuracy, efficiency, and business continuity."
              />
      <Services2 
                                        title="Our services" 
                                        subtitle="With over 35 years of global expertise, our Enterprise Platforms accelerates your cloud migration with strategic, AI-powered services built to maximize ROI."
                                        services={customServices}
                                    />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}