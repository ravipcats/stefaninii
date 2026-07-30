import { useEffect, useState } from "react";
import "./ApplyModal.css";

export default function ApplyModal({
    open,
    onClose,
    job
}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        if (open) {

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");

        }

    }, [open]);

    if (!open) return null;

    const handleSubmit = (e) => {

        e.preventDefault();

        // EmailJS code will go here later

        console.log({
            job,
            name,
            email,
            phone,
            message
        });

        alert("Application Submitted!");

        onClose();

    };

    return (

        <div className="apply-overlay">

            <div className="apply-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2>Apply for this Position</h2>

                <div className="job-info">

                    <h3>{job.title}</h3>

                    <p>{job.location}</p>

                    <p>{job.category}</p>

                </div>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <textarea
                        rows="5"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className="apply-actions">

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">

                            Send Application

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}