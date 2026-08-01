import { useState } from "react";

import LibraryCard from "./LibraryCard";

import "./LibraryGrid.css";

export default function LibraryGrid({ data }) {

    const [visible, setVisible] = useState(9);

    const featured = data.slice(0, 3);

    const remaining = data.slice(3, visible);

    return (

        <section className="library-grid-section">

            <div className="library-container">

                {/* Featured */}

                {

                    featured.length >= 3 && (

                        <div className="library-featured">

                            <div className="featured-left">

                                <LibraryCard

                                    item={featured[0]}

                                />

                            </div>

                            <div className="featured-right">

                                <LibraryCard

                                    item={featured[1]}

                                />

                                <LibraryCard

                                    item={featured[2]}

                                />

                            </div>

                        </div>

                    )

                }

                {/* Remaining */}

                <div className="library-grid">

                    {

                        remaining.map(item => (

                            <LibraryCard

                                key={item.id}

                                item={item}

                            />

                        ))

                    }

                </div>

                {

                    visible < data.length && (

                        <div className="library-load">

                            <button

                                onClick={() =>

                                    setVisible(

                                        prev => prev + 6

                                    )

                                }

                            >

                                Load More

                            </button>

                        </div>

                    )

                }

            </div>

        </section>

    );

}