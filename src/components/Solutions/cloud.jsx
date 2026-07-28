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
                title="Cloud Solutions"
                subtitle="Cloud Solutions"
                heroImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-1_640X447-1.jpg"
                bannerImage="https://stefanini.com/wp-content/uploads/2025/10/BANNER-2_1304X217-1.jpg"
                description1="In the digital age, the cloud is fundamental for innovation and productivity. Hybrid cloud connects public and private environments..."
                description2="Redundancy and reducing dependency. Our portfolio helps clients optimize resources, select the ideal solutions, and accelerate digital transformation securely and efficiently."
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