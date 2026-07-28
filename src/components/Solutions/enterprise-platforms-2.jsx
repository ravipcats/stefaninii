import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Solutions from "../Solution1";
import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";

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
      <Services />
      <ScrollShowcase />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}