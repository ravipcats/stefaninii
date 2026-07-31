import {
    Mail,
    Phone,
    CircleDollarSign,
    MapPin,
    Briefcase,
    Clock
} from "lucide-react";

import "./ContactCard.css";

export default function ContactCard({

    job,

    onApply

}) {

    return (

        <aside className="contact-card">

            <button
                className="apply-btn"
                onClick={onApply}
            >
                Apply Now
            </button>

            <div className="contact-section">

                <h3>Recruiter</h3>

                <p>{job.contact?.name || "HR Team"}</p>

            </div>

            <div className="contact-item">

                <Phone size={18} />

                <span>

                    {job.contact?.phone || "Not Available"}

                </span>

            </div>

            <div className="contact-item">

                <Mail size={18} />

                <span>

                    {job.contact?.email || "Not Available"}

                </span>

            </div>

            <div className="contact-item">

                <MapPin size={18} />

                <span>

                    {job.location}

                </span>

            </div>

            <div className="contact-item">

                <Briefcase size={18} />

                <span>

                    {job.employmentType}

                </span>

            </div>

            <div className="contact-item">

                <Clock size={18} />

                <span>

                    {job.duration}

                </span>

            </div>

            <div className="salary-box">

                <CircleDollarSign size={24} />

                <div>

                    <small>

                        Salary

                    </small>

                    <h4>

                        {job.salary}

                    </h4>

                </div>

            </div>

        </aside>

    );

}