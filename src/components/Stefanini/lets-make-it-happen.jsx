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
import CaseStudiesCarousel from "../CaseStudiesCarousel";
import CompanyStatsSection from "../CompanyStatsSection";
import ContactFormSection from "../ContactFormSection";
import TechConsultingHero from "../TechConsultingHero";
import WhatWeBelieveIn from "../WhatWeBelieveIn";
import Services3 from "../Services3";
//import ReusableSlider from "../ReusableSlider";
import ReusableSlider from "../Services3"; // Make sure to import your reusable slider component

// IMPORT ALL ICONS USED IN techSolutions HERE:
import { Cpu, Settings2, ShieldCheck, Globe } from "lucide-react";

const techSolutions = [
    {
      title: "Technology",
      description: "AI solutions, cloud computing, hybrid infrastructure, UX, digital product development.",
      icon: Cpu,
    },
    {
      title: "Operations",
      description: "Automation solutions, predictive analytics, self-service, and industrial efficiency.",
      icon: Settings2,
    },
    {
      title: "Data & Analytics",
      description: "Data architecture and engineering, governance, data science, and transformation-driven approaches.",
      icon: ShieldCheck,
    },
    {
      title: "Cybersecurity",
      description: "Protection of applications, cloud, OT and IoT, data and infrastructure, with continuous monitoring.",
      icon: Globe,
    },
    {
      title: "Manufacturing",
      description: "Engineering, automation, data, and AI to optimize industrial processes, supply chain, and logistics.",
      icon: Globe,
    },
  ];

  const customStatsData = [
    {
      id: 1,
      image: "https://stefanini.com/wp-content/uploads/2026/07/blocks-2000-1.png", 
      alt: "2,000",
      text: "clients around the world"
    },
    {
      id: 2,
      image: "https://stefanini.com/wp-content/uploads/2026/07/blocks-35000-1.png", 
      alt: "35,000",
      text: "employees"
    },
    {
      id: 3,
      image: "https://stefanini.com/wp-content/uploads/2026/07/blocks-46-1.png", 
      alt: "46",
      text: "presence in 46 countries."
    },
    {
      id: 4,
      image: "https://stefanini.com/wp-content/uploads/2026/07/blocks-40-1.png", 
      alt: "40",
      text: "years in the market"
    }
  ];

  const handleFormSubmit = (data) => {
    console.log("Custom submission handler triggered:", data);
    // Add your API call here (e.g., fetch / axios)
  };

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
             <TechConsultingHero 
                headingPrefix="LET'S MAKE IT HAPPEN"
                subtitle="Global Tech Consulting Company"
                title="For 40 years, we’ve been transforming technology into business results."
                youtubeVideoId="36YnV9STBqc"
                thumbnailUrl="https://stefanini.com/wp-content/uploads/2026/07/lmh-video-thumb-1.png"
                watchText="Watch the campaign film"
            />
            <CompanyStatsSection 
            badgeText="WHO WE ARE"
            heading="Stefanini Group"
            description="We are 7 business units with an AI-first mindset, a co-creation instinct, and a one-stop-shop structure."
            stats={customStatsData}
            />
            <WhatWeBelieveIn/>
             <CaseStudiesCarousel 
                sectionBadge="CASES"    
                sectionTitle="After 40 years of execution and delivery, it’s time to share the results."
                sectionDescription="What we've achieved with our partners, pillar by pillar."
            />
            <ReusableSlider 
            title="7 Business Units, One Single Partner."
            description="No matter the challenge, we have the expertise and resources to co-create end-to-end solutions in any area."
            items={techSolutions}
            />
            <ContactFormSection 
            badgeText="CONTACT US"
            title="Let’s build it together?"
            description="Tell us about what your business needs. A specialist will be in touch so we can build it together."
            submitButtonText="Enviar"
            onSubmit={handleFormSubmit}
            />
            <Footer />
            <ChatBotWidget />
        </>
    );
}