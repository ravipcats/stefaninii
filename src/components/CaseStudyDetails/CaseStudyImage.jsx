import "./CaseStudyImage.css";

export default function CaseStudyImage({ title, image }) {
    return (
        <section className="case-study-hero">

            <div className="case-study-container">

                <h1 className="case-study-title">
                    {title}
                </h1>

                <div className="case-study-divider"></div>

                <img
                    src={image}
                    alt={title}
                    className="case-study-image"
                />

            </div>

        </section>
    );
}