import libraryData from "../../data/libraryData";

import LibraryCard from "../Library/LibraryCard";

import "./RelatedLibrary.css";

export default function RelatedLibrary({

    currentId

}) {

    const related =

        libraryData

            .filter(

                item => item.id !== currentId

            )

            .slice(0, 4);

    return (

        <section className="related-library">

            <div className="related-library-container">

                <h2>

                    Related <span>content</span>

                </h2>

                <div className="related-library-grid">

                    {

                        related.map(item => (

                            <LibraryCard

                                key={item.id}

                                item={item}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}