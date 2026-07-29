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
        title: "Business Process Outsourcing",
        description: "Analytical and transactional automation of repetitive tasks, digital document capture and analysis, AI-based decision-making, and a governance layer for orchestrating business rules, optimizing operational cycles.",
        icon: Smile,
    },
    {
        title: "AI Customer Services",
        description: "Transform customer service into a loyalty driver, enhancing virtual and human agents with AI adoption for personalized interactions.",
        icon: Zap,
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
                    title="Operations Solutions"
                    subtitle="Operations Solutions"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-1_640x447-9.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-2_1304x217-9.jpg"
                    description1="More than outsourcing, we offer technological solutions that utilize Artificial Intelligence applied to automation and excellence. Our personalized approach serves all corporate, administrative, and operational areas, including customer services, human resources,"
                    description2="legal, and others. We guarantee flexibility, scalability, and continuous improvement. Focusing on efficiency, quality, and customer experience, we help companies evolve towards intelligent operations, driving competitiveness and sustainable growth."
                    />
      <Services2 
                                                    title="Our services" 
                                                    subtitle="With over 35 years of global expertise, our Operations services deliver efficiency, quality, and growth across every area of business."
                                                    services={customServices}
                                                />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}