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
      title="Digital Workplace Services Solutions "
        subtitle="Digital Workplace Services Solutions"
        heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-7.jpg"
        bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-7.jpg"
        description1="Digital transformation is essential in today’s market landscape. Stefanini's Digital Workplace Services drives the evolution of the work environment with intelligent solutions that prioritize user experience. We guide organizations through a roadmap to digital"
        description2="maturity, anticipating trends, and continuously optimizing services. Our model guarantees flexibility, proactivity, and return on investment, making it an intelligent and constantly evolving ecosystem."
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