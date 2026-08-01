import "./LibrarySection.css";

export default function LibrarySection({

    title,

    paragraphs,

    bullets

}) {

    return (

        <section className="library-section">

            <div className="library-section-container">

                <h2>

                    {title}

                </h2>

                {

                    paragraphs?.map(

                        (item, index) =>

                            <p key={index}>

                                {item}

                            </p>

                    )

                }

                {

                    bullets &&

                    <ul>

                        {

                            bullets.map(

                                (item, index) =>

                                    <li key={index}>

                                        {item}

                                    </li>

                            )

                        }

                    </ul>

                }

            </div>

        </section>

    );

}