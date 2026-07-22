import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import clientStories from "./clientStoriesData";
import StorySlide from "./StorySlide";
import ImageStrip from "./ImageStrip";
import Navigation from "./Navigation";
import "./styles.css";

export default function ClientStories() {
    const [activeIndex, setActiveIndex] = useState(1);
    const total = clientStories.length;

    const next = () => setActiveIndex((prev) => (prev + 1) % total);
    const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

    const getRelativePosition = (index) => {
        let diff = index - activeIndex;

        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        return diff;
    };

    const activeStory = clientStories[activeIndex];

    return (
        <section className="client-stories-section">
            <div className="client-stories-inner">
                <header className="client-stories-header">
                    <h5 className="client-stories-title">
                        Get to know Stefanini through
                        <br />
                        our clients.
                    </h5>
                </header>

                <div className="client-stories-grid">
                    <div className="side-strips side-strips-left">
                        {clientStories.map((story, index) => {
                            const pos = getRelativePosition(index);
                            if (pos !== -2 && pos !== -1) return null;
                            return (
                                <ImageStrip
                                    key={story.id}
                                    story={story}
                                    position={pos}
                                    onClick={() => setActiveIndex(index)}
                                />
                            );
                        })}
                    </div>

                    <div className="story-frame">
                        <AnimatePresence mode="wait">
                            <StorySlide key={activeStory.id} story={activeStory} />
                        </AnimatePresence>

                        <Navigation prev={prev} next={next} />
                    </div>

                    <div className="side-strips side-strips-right">
                        {clientStories.map((story, index) => {
                            const pos = getRelativePosition(index);
                            if (pos !== 1 && pos !== 2) return null;
                            return (
                                <ImageStrip
                                    key={story.id}
                                    story={story}
                                    position={pos}
                                    onClick={() => setActiveIndex(index)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}