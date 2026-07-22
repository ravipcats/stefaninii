import { motion } from "framer-motion";
import BottomCard from "./BottomCard";

export default function StorySlide({ story }) {
    return (
        <motion.div
            layout
            layoutId={`story-${story.id}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45 }}
            className="story-card"
        >
            <img src={story.image} alt={story.title} className="story-card-bg" />

            <div className="story-card-overlay" />
            <div className="story-card-highlight" />

            <div className="story-card-logo">
                <div className="story-card-logo-circle">
                    <img src={story.logo} alt={story.company} />
                </div>
            </div>

            <button type="button" className="story-card-mute" aria-label="Mute toggle">
                <span className="story-card-mute-icon">•</span>
            </button>

            <div className="story-card-headline">
                <span className="story-card-subtitle">{story.subtitle}</span>
                <div className="story-card-title">/{story.company.toLowerCase()}</div>
            </div>

            <BottomCard story={story} />
        </motion.div>
    );
}