import "./CaseStudiesHero.css";

export default function CaseStudiesHero() {

    return (

        <section
            className="case-hero"
            style={{
                backgroundImage: "url('/images/case/hero.jpg')"
            }}
        >

            <div className="case-overlay">

                <div className="case-container">

                    <span className="case-tag">

                        Insights

                    </span>

                    <h1>

                        Case Studies

                    </h1>

                    <p>

                        Discover how our solutions help organizations
                        achieve measurable business outcomes through
                        AI, Cloud, Digital Workplace, Manufacturing,
                        Data & Analytics and Enterprise Platforms.

                    </p>

                </div>

            </div>

        </section>

    );

}