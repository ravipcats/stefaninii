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
import { Smile, Zap, ShieldAlert } from "lucide-react";

const customServices = [
    {
        title: "New Business Possibilities",
        description: "We connect strategy, design, and technology to transform ideas into desirable, viable, and scalable products, using design thinking practices, with a focus on user experience.",
        icon: Smile,
    },
    {
        title: "Advisory and Digital Strategy",
        description: "We help companies define and implement digital strategies that stimulate innovation and optimize processes.",
        icon: Zap,
    },
    {
        title: "Change Management",
        description: "We support companies in driving changes in technologies, processes, and culture in a strategic manner, engaging employees, reducing impacts, and strengthening adaptation to the market.",
        icon: ShieldAlert,
    },
    {
        title: "New Business Possibilities",
        description: "nnovation services foster a creative culture, using workshops, ideation, rapid prototyping, and training teams in Open Innovation to generate disruptive solutions.",
        icon: ShieldAlert,
    },
    {
        title: "Technology Strategy and Transformation",
        description: "Identify ideal technological solutions to transform investments into results, promoting innovation, efficiency, risk management, and accelerated growth.",
        icon: ShieldAlert,
    },
    {
        title: "Benchmarking & Diagnosis",
        description: "We assess technology, processes, and organizational capabilities to identify gaps, risks, and opportunities, generating strategic recommendations and an implementation roadmap aligned with business priorities.",
        icon: ShieldAlert,
    },
    {
        title: "Business Efficiency",
        description: "Automation of business processes with the support of Artificial Intelligence, generation of strategic insights and optimization of operations in finance, HR, logistics and customer service.",
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
                title="Consulting Services Solutions"
                subtitle="Consulting Services Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-19.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-19.jpg"
                description1="We transform the way companies innovate and evolve in dynamic markets, aligning technology with business objectives to drive growth and efficiency. Our solutions guide strategic sectors such as manufacturing, consumer goods, financial services, healthcare, and retail in their digital strategies. We facilitate the"
                description2="adoption of new technologies with change management, apply agile methodologies, create digital products, and enhance strategies with automation, AI, and open innovation, generating cost reduction, process optimization, greater competitiveness, and sustainable transformation."
            />

            <Services2 
                            title="Our services" 
                            subtitle="With over 35 years of global expertise, we offer Consulting Services for organizational and technological transformation.
"
                            services={customServices}
                        />
            <ClientStories />
            <MultiStepForm />
            <Footer />
            <ChatBotWidget />
        </>
    );
}