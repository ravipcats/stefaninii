import "./LibraryImage.css";

export default function LibraryImage({

    title,
    image

}) {

    return (

        <section className="library-detail-image">

            <div className="library-detail-container">

                <h1>

                    {title}

                </h1>

                <div className="library-divider"></div>

                <img

                    src={image}

                    alt={title}

                />

            </div>

        </section>

    );

}