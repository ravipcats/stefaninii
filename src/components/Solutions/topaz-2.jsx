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
import Topaz from  "./components/Topaz/topaz"

const customServices = [
    {
        title: "FinChannels",
        description: "Solutions for physical and digital financial channels, ensuring a consistent and high-quality experience.",
        icon: Smile,
    },
    {
        title: "FinancialCore",
        description: "Agnostic and scalable core offering flexibility, service integration, and on-demand expansion.",
        icon: Zap,
    },
    {
        title: "TechPay",
        description: "We manage card payments, SPB, and PIX, ensuring fast, secure, and efficient transactions.",
        icon: Smile,
    },
    {
        title: "BankingTools",
        description: "Tools that automate processes, accelerate launches, drive innovation, and ensure compliance.",
        icon: Smile,
    },
    {
        title: "SecureJourney",
        description: "Modular platform that secures transactions, prevents fraud and money laundering with total control.",
        icon: Smile,
    },
    {
        title: "Techinvest",
        description: "We offer access to diverse investments, simplifying management, and expanding diversification with technology.",
        icon: Smile,
    },
    {
        title: "FinXperience",
        description: "Personalized banking experience with open banking and AI, offering better deals and more products.",
        icon: Smile,
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
                    title="Financial Technology Solutions TOPAZ"
                    subtitle="Financial Technology Solutions TOPAZ"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640x447-22.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/10/Solucao-2-1.png"
                    description1="Topaz developed Topaz One, the world’s first full banking platform, offering a comprehensive ecosystem of integrated, secure, and highly available solutions, including a full banking core and microfinance core, fraud prevention and detection, physical and digital channels, AML/FTP and compliance, instant payments, regulatory solutions, investments, and customer"
                    description2="engagement for banks and financial institutions in general, impacting more than 550 million end users every day.Topaz is positioned as a benchmark in digital business technology and is recognized by Gartner®, Forrester®, and Celent®."
                    />
      <Services2 
                                                    title="Our services" 
                                                    subtitle="With over 35 years of global expertise, our Financial Tech services deliver secure, intelligent, and seamless experiences across every channel."
                                                    services={customServices}
                                                />
      <Topaz/>                                        
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}