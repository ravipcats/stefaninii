import "./JobOverview.css";

export default function JobOverview({ job }) {

    const items = [

        {
            label: "Employment",
            value: job.employmentType
        },

        {
            label: "Duration",
            value: job.duration
        },

        {
            label: "Shift",
            value: job.shift
        },

        {
            label: "Positions",
            value: job.remainingPositions
        },

        {
            label: "Salary",
            value: job.salary
        }

    ];

    return (

        <section className="job-overview">

            <div className="overview-grid">

                {

                    items.map((item, index) => (

                        <div

                            key={index}

                            className="overview-card"

                        >

                            <small>

                                {item.label}

                            </small>

                            <h3>

                                {item.value}

                            </h3>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}