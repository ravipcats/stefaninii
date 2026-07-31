import "./CaseStudySection.css";

export default function CaseStudySection({
    title,
    paragraphs,
    bullets
}) {
    return (
        <section className="case-study-section">

            <div className="case-study-content">

                <h2>{title}</h2>

                {paragraphs?.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}

                {bullets && (
                    <ul>
                        {bullets.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}

            </div>

        </section>
    );
}