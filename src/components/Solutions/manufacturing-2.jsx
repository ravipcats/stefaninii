import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Services from "../Services";
import Services2 from "../Services2";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import Solutions from "../Solution";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import { Smile, Zap, ShieldAlert } from "lucide-react";

const customServices = [
    {
        title: "Manufacturing Applications & Analytics",
        description: "Stefanini IHM’s services and software combine engineering, data, and AI to optimize control systems, increasing production and quality, and reducing variability with data-driven decisions.",
        icon: Smile,
    },
    {
        title: "Automation & Robotics",
        description: "Stefanini IHM’s automation services automate machines, lines, and robotics, with AI such as Plant Assistant and E4R, enhancing customer results and decisions.",
        icon: Zap,
    },
    {
        title: "Manufacturing Services and Optimization",
        description: "Stefanini IHM's SCADA, DCS, and SAI Smart Loop solutions control industrial processes, integrate production and ERP systems, and manage plants with MES, PIMS, LIMS, and MOM.",
        icon: ShieldAlert,
    },
    {
        title: "Supply Chain Services and Optimization",
        description: "SAI Smart Logistics centralizes and integrates logistics processes with modular implementation. The Locus module tracks goods, automates picking/drop, and updates ERP/WMS.",
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
                    title="Smart Manufacturing & Supply Chain Solutions"
                    subtitle="Smart Manufacturing & Supply Chain Solutions"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-13.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304x217-13.jpg"
                    description1="Digital transformation in manufacturing doesn't follow a linear path. Systems have evolved organically, generating disconnected data and platforms. Stefanini offers scalable, non-intrusive, AI-powered solutions"
                    description2="that provide real-time visibility into industrial plants, modernizing operations without replacing existing applications and intelligently integrating data to accelerate digitization and operational efficiency."
                    />
      <Services2 
                                              title="Our services" 
                                              subtitle="With over 35 years of global expertise, Smart Manufacturing & Supply Chain services offer scalable, non-intrusive, AI-powered solutions that surface data-driven insights and improve efficiency."
                                              services={customServices}
                                          />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}