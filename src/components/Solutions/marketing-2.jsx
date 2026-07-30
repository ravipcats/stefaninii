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
import Companies from "../Companies/Companies";

const customServices = [
    {
        title: "CRM & Loyalty",
        description: "We offer solutions to strengthen brands and customer relationships, using data, strategy, content, and technology, with AI and digital experiences to generate results.",
        icon: Smile,
    },
    {
        title: "Agile Research & Insights",
        description: "We help companies generate strategic consumer and market insights using research, social media, ethnographic data, and AI, optimizing campaigns and experiences to increase revenue.",
        icon: Zap,
    },
    {
        title: "Commerce & DXP",
        description: "Our DXP solutions unify digital channels, personalize experiences, and integrate systems such as ERP and CRM, optimizing journeys, conversion, and sustainable growth.",
        icon: ShieldAlert,
    },
    {
        title: "Advertising",
        description: "We highlight brands with authentic, data-driven campaigns, combining creativity and technology to generate conversion, loyalty, and sustainable growth.",
        icon: ShieldAlert,
    },
    {
        title: "Content & Social",
        description: "We help brands stay relevant with multichannel strategies, AI, automation, and content, capturing and maintaining audience attention on key platforms.",
        icon: ShieldAlert,
    },
    {
        title: "Design",
        description: "Our design services reimagine the customer journey, uniting UX, Design System, and Business Design to generate innovation, engagement, efficiency, and concrete results.",
        icon: ShieldAlert,
    },
    {
        title: "Digital Product",
        description: "We help clients define digital product strategies, create MLPs with prototyping and testing, and apply Product Growth to generate continuous and agile value.",
        icon: ShieldAlert,
    },
    {
        title: "Full Funnel Media",
        description: "A modular marketing and performance solution that integrates strategy, media, data, and automation, covering the entire funnel and placing the consumer at the center for sustainable results.",
        icon: ShieldAlert,
    },
    {
        title: "Influence & Community",
        description: "We connect brands with authentic creators and communities, transforming audience into loyalty and conversion with data-driven and creative influence strategies.",
        icon: ShieldAlert,
    },
    {
        title: "Martech & Analytics",
        description: "We maximize martech platforms, implementing advanced solutions and analytics, creating a data-driven culture to increase efficiency, customer satisfaction, and growth.",
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
        title="Commerce & Marketing Solutions"
        subtitle="Commerce & Marketing Solutions"
        heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-23.jpg"
        bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304x217-15.jpg"
        description1="Many organizations suffer from siloed teams, limiting innovation and growth. Our approach connects Customer Experience, Business Intelligence, Digital Strategy, and Marketing Technology, aligning objectives to maximize results. We unite business and"
        description2="technology, helping marketing understand digital solutions and IT generate tangible impact. B2C, retail, telecom, finance, and healthcare companies unlock opportunities, optimize personalization, and create experiences that drive sustainable growth."
        />
      <Services2
                                  title="Our services" 
                                  subtitle="With over 35 years of global expertise, our Commerce & Marketing services unlock opportunities, optimize personalization, and create experiences that drive sustainable growth."
                                  services={customServices}
                              />
       <Companies/>                       
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}