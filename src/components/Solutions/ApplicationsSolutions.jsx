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
        title: "Application Development and Maintenance",
        description: "AMS 8x5/24x7 with AI, Agile methodologies and DevOps, SRE and AIOps. Complete software lifecycle management, with high efficiency, quality and security, reducing the number of incidents by up to 3x.",
        icon: Smile,
    },
    {
        title: "Application Modernization",
        description: "Agile transformation of legacy systems into modern architectures, with AI and automation. Lower costs and fewer failures, greater agility, compliance, and service continuity.",
        icon: Zap,
    },
    {
        title: "Application Performance",
        description: "Complete management of application performance with AIOps and SRE, anticipating problems, optimizing costs, and ensuring a smooth user experience.",
        icon: ShieldAlert,
    },
    {
        title: "Architecture, APIs, and Integrations",
        description: "Development of intelligent and scalable applications with AI, connected to the real needs of users, accelerating time-to-market without sacrificing quality.",
        icon: ShieldAlert,
    },
    {
        title: "Product and Platform Engineering",
        description: "Complete management of application performance with AIOps and SRE, anticipating problems, optimizing costs, and ensuring a smooth user experience.",
        icon: ShieldAlert,
    },
    {
        title: "Quality and Testing Engineering",
        description: "We guarantee end-to-end quality throughout the entire development pipeline, with automation, security, and performance to ensure stable environments.",
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
                title="Applications Solutions"
                subtitle="Applications Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-18.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-1.jpg"
                description1="We develop AI-First solutions covering the entire software engineering lifecycle: discovery, design, development, testing, operation, and evolution. With code assistants, AI agents, automation, and proprietary data, we orchestrate modernization, cloud, and digital products in a multi-capable, results-"
                description2="oriented delivery model. In all our offerings, we guarantee efficiency, reliability, and innovation that impacts revenue, customer experience, and time-to-market, with governance and increased digital maturity."
      />
      <Services2 
                title="Our services" 
                subtitle="With over 35 years of global expertise, our AI-First Applications services cover the entire software engineering lifecycle for guaranteed efficiency, reliability, and innovation."
                services={customServices}
            />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}