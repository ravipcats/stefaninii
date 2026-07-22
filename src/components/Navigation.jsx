import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({ prev, next }) {
    return (
        <>
            <button
                onClick={prev}
                className="story-nav story-nav-left"
                aria-label="Previous story"
            >
                <ChevronLeft size={26} className="text-[#0b2358]" />
            </button>

            <button
                onClick={next}
                className="story-nav story-nav-right"
                aria-label="Next story"
            >
                <ChevronRight size={26} className="text-[#0b2358]" />
            </button>
        </>
    );
}