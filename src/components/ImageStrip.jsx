import { motion } from "framer-motion";

export default function ImageStrip({ story, position, onClick }) {
    if (!story) return null;

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="image-strip-card"
        >
            <img src={story.image} alt={story.company} className="image-strip-card-img" />

            <div className="image-strip-card-overlay">
                {/* <span className="image-strip-card-label">
                    {position < 0 ? "Previous" : position > 0 ? "Next" : "Current"}
                </span> */}
                {/* <h4 className="image-strip-card-title">{story.company}</h4> */}
            </div>

            <div className="image-strip-card-border" />
        </motion.button>
    );
}