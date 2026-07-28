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
                title="Hybrid Infrastructure Solutions"
                subtitle="Hybrid Infrastructure Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-11.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304x217-11.jpg"
                description1="In a world of constant technological evolution, organizations seek solutions that integrate the best of local, private, and public environments with efficiency and security. Stefanini offers hybrid infrastructure services that balance costs, complexity, and data"
                description2="control, providing scalability and performance. Using AI, we optimize automation, management, and decision-making, helping companies achieve their strategic objectives with greater agility and intelligence."
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