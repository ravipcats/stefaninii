import { ArrowRight } from "lucide-react";

export default function BottomCard({ story }) {
    return (
        <div className="bottom-card">
            <div className="bottom-card-stat">
                <span>{story.statLabel}</span>
                <strong>{story.stat}</strong>
            </div>

            <div className="bottom-card-copy">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
            </div>

            <div className="bottom-card-action">
                <button type="button">
                    {story.button}
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}