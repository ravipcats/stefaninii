import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Solutions from "../Solutions";
import Services from "../Services";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";

export default function ApplicationsSolutions() {
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
      <Solutions />
      <Services />
      <ScrollShowcase />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}