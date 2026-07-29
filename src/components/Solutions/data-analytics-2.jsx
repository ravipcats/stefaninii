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
        title: "Data Architecture & Engineering",
        description: "We structure the technological and operational foundation for the strategic use of data at scale, with modern, scalable, and resilient architectures that enable reliable and high-performance collection, storage, transformation, and delivery of data — enabling analytics, artificial intelligence, and data-driven decisions across any organization.",
        icon: Smile,
    },
    {
        title: "Data Governance",
        description: "Our Data Governance offering ensures organizational data is reliable, accessible, secure, and used ethically and efficiently. We establish policies, processes, roles, and technologies that enable governance of the complete data lifecycle—from definition, quality, and classification to traceability, access, and responsible use. We implement practical and scalable governance frameworks, focusing on enabling data-driven decision-making, supporting the responsible adoption of AI, and ensuring compliance with regulations and other industry requirements. Our approach balances control and agility, promoting engagement from business areas and sustaining a data-driven culture.",
        icon: Zap,
    },
    {
        title: "Data Science",
        description: "We deliver AI and machine learning-based solutions to solve real business problems. We operate end-to-end across the data science value chain: from data exploration and the construction of predictive models and algorithms, to operationalizing and monitoring results in production.We transform raw data into actionable insights and reliable predictions, always focusing on performance, explainability, and tangible impact. We support companies in anticipating demands, detecting patterns, automating decisions, and generating a continuous competitive advantage.",
        icon: Smile,
    },
    {
        title: "Data-driven Transformation",
        description: "Our offering builds a truly data-driven culture, structure, and operation. We help organizations evolve from a piecemeal or fragmented use of data to a model where data, intelligence, and automation are integrated into decision-making processes and the design of products, services, and operations.We combine technology, strategy, cultural change, and governance to make data a continuous strategic asset, driving efficiency, innovation, and competitive advantage. Our work ranges from diagnosing analytical maturity to implementing acceleration programs, business-integrated data strategies, and creating structures such as Data Offices and centers of excellence.",
        icon: Smile,
    },
    {
        title: "Insights & Data Democratization",
        description: "We structure democratization journeys through the implementation of self-service tools, the creation of analytical personas, continuous training, and the structuring of communities of practice. We also integrate data into accessible and understandable layers, always respecting governance and compliance policies. In this way, intelligence becomes a collective asset. The goal is to ensure that data and insights are accessible, understandable, and usable by all areas of the organization, with security, governance, and scalability. We help companies evolve from a centralized, IT-dependent model to an environment where people have the autonomy to explore, analyze, and make data-driven decisions.",
        icon: Smile,
    },
    {
        title: "Proprietary Products | Stefanini Data & Analytics - Alice.AI",
        description: "ALICE.AI is a modular, open-source platform that manages the entire AI lifecycle, from business to operations, accelerating the AI journey with efficiency, governance, and impact.",
        icon: Smile,
    },
    {
        title: "Proprietary Products | Stefanini Data & Analytics - Dora",
        description: "DORA is a platform for managing large volumes of data that reduces costs, ensures retention, and transforms inactive data into strategic and valuable insights.",
        icon: Smile,
    },
    {
        title: "Proprietary Products | Stefanini Data & Analytics - Improve",
        description: "IMPROVE is a scalable solution for variable compensation management, combining technology and services that guarantee automation, flexibility, traceability, and efficiency.",
        icon: Smile,
    },
    {
        title: "Proprietary Products | Stefanini Data & Analytics - Lore",
        description: "LORE is a DaaS solution that offers ready-to-use, reliable, and up-to-date market data, simplifying strategic decisions and driving competitiveness and innovation.",
        icon: Smile,
    },
    {
        title: "Proprietary Products | Stefanini Data & Analytics - Maya",
        description: "MAYA is a comprehensive and integrated solution in the form of a managed services hub for developing the architecture, processes, and culture of Observability, supported by the use of its large volume and variety of data, advanced AI models, and automation.",
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
                    title="Data & Analytics Solutions"
                    subtitle="Data & Analytics Solutions"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-5.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-5.jpg"
                    description1="Data is the engine of digital transformation. Our Data and Analytics solutions redefine strategic decision-making with a modern, data-first approach that automates and accelerates access to reliable information. We foster a data-driven culture with"
                    description2="scalable, secure, and collaborative solutions. We apply advanced analytics and predictive models to generate real value and competitive advantage, making data the cornerstone of sustainable growth and business innovation."
                    />
      <Services2 
                                                    title="Our services" 
                                                    subtitle="With over 35 years of global expertise, our Data and Analytics services redefine strategic decision-making with a modern, data-first approach."
                                                    services={customServices}
                                                />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}