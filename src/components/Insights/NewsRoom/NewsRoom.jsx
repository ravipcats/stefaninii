import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./newsroom.css";
import Header from "../../Header";
import ScrollShowcase from "../../ScrollShowcase";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";
// import NewsroomHero from "./NewsroomHero";
import NewsroomHero from "./NewsroomHero";
import NewsroomGrid from "./NewsroomGrid";
import MediaContacts from "./MediaContacts";





export default function NewsRoom() {
    const mediaRef = useRef(null);

    const scrollToMedia = () => {
        mediaRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

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
            <NewsroomHero
                onButtonClick={scrollToMedia}
            />

            <NewsroomGrid />

            <div ref={mediaRef}>
                <MediaContacts />
            </div>

            <Footer />
            <ChatBotWidget />
        </>
    );
}