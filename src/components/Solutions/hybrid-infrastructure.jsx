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
        title: "Private and Hybrid Cloud Services",
        description: "Integration and optimization of private and hybrid cloud infrastructures, with secure data, application migration, and efficient resource management.",
        icon: Smile,
    },
    {
        title: "Data Center Services",
        description: "Data Center services for managing and optimizing client infrastructure, both on-premises and in the cloud. Hosting services, management, and optimization of client infrastructure.",
        icon: Zap,
    },
    {
        title: "Database & Middleware Services",
        description: "Database and middleware management with support for high data volumes. We work with Oracle, SQL, PostgreSQL, MongoDB, Kafka and more.",
        icon: ShieldAlert,
    },
    {
        title: "Edge Computing",
        description: "Complete support in distributed architectures: consulting, development and support to optimize data in real time with greater efficiency and agility.",
        icon: ShieldAlert,
    },
    {
        title: "Hybrid Infrastructure Operations",
        description: "IT operations and support services that ensure IT continuity and quality with monitoring, support, automation and AI in servers, storage, backup and virtualization.",
        icon: ShieldAlert,
    },
    {
        title: "Intelligent Network and Telecommunications Operations",
        description: "Integration, operation, and support services for data and telecommunications networks, optimizing performance and ensuring communication availability.",
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
                    title="Hybrid Infrastructure Solutions"
                    subtitle="Hybrid Infrastructure Solutions"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-11.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304x217-11.jpg"
                    description1="In a world of constant technological evolution, organizations seek solutions that integrate the best of local, private, and public environments with efficiency and security. Stefanini offers hybrid infrastructure services that balance costs, complexity, and data"
                    description2="control, providing scalability and performance. Using AI, we optimize automation, management, and decision-making, helping companies achieve their strategic objectives with greater agility and intelligence."
                    />
      <Services2 
                                              title="Our services" 
                                              subtitle="With over 35 years of global expertise, our Hybrid Infrastructure services integrate the best local, private, and public environments with efficiency and security."
                                              services={customServices}
                                          />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}