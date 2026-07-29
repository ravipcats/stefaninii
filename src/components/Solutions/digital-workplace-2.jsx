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
        title: "Service Desk",
        description: "Solution with global support in 44+ languages combining AI, automation, prediction, and empowerment, resulting in an innovative and enhanced customer service experience.",
        icon: Smile,
    },
    {
        title: "ITSM & SIAM Services",
        description: "Integrated management of support services for the technological environment, through consultative processes, unified performance metrics, and a focus on business value.",
        icon: Zap,
    },
    {
        title: "IT Asset Management",
        description: "Complete management of IT assets, ensuring accurate inventory, compliance, preservation and optimization of assets, and generating business value at all stages.",
        icon: ShieldAlert,
    },
    {
        title: "Managed Endpoint Services",
        description: "Centralized control and management of devices, with automation, security, updates, and support for multiple platforms.",
        icon: ShieldAlert,
    },
    {
        title: "Workplace Automation",
        description: "Service designed to optimize digital workplace operations, predict and solve problems, increasing productivity, reducing costs, and leveraging innovation for a better user experience.",
        icon: ShieldAlert,
    },
    {
        title: "Collaboration & Communication Services",
        description: "Facilitating and enhancing our clients' collaborative platforms and tools, promoting interaction and continuous productivity improvement across an organization's global workforce.",
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
      title="Digital Workplace Services Solutions "
        subtitle="Digital Workplace Services Solutions"
        heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-7.jpg"
        bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-7.jpg"
        description1="Digital transformation is essential in today’s market landscape. Stefanini's Digital Workplace Services drives the evolution of the work environment with intelligent solutions that prioritize user experience. We guide organizations through a roadmap to digital"
        description2="maturity, anticipating trends, and continuously optimizing services. Our model guarantees flexibility, proactivity, and return on investment, making it an intelligent and constantly evolving ecosystem."
        />
      <Services2 
                                  title="Our services" 
                                  subtitle="With over 35 years of global expertise, our Digital Workplace Services drives the evolution of work with intelligent solutions that prioritize user experience.
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