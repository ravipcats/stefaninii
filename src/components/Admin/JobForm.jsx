import { useEffect, useState } from "react";
import DynamicList from "./DynamicList";
import "./JobForm.css";

export default function JobForm({
    initialData,
    onSubmit
}) {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [duration, setDuration] = useState("");
    const [shift, setShift] = useState("");
    const [remainingPositions, setRemainingPositions] = useState(1);
    const [description, setDescription] = useState("");
    const [about, setAbout] = useState("");

    const [responsibilities, setResponsibilities] = useState([""]);
    const [requirements, setRequirements] = useState([""]);

    const [contactName, setContactName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    useEffect(() => {

        if (initialData) {

            setTitle(initialData.title || "");
            setCategory(initialData.category || "");
            setCountry(initialData.country || "");
            setCity(initialData.city || "");
            setLocation(initialData.location || "");
            setSalary(initialData.salary || "");
            setEmploymentType(initialData.employmentType || "");
            setDuration(initialData.duration || "");
            setShift(initialData.shift || "");
            setRemainingPositions(initialData.remainingPositions || 1);
            setDescription(initialData.description || "");
            setAbout(initialData.about || "");

            setResponsibilities(
                initialData.responsibilities?.length
                    ? initialData.responsibilities
                    : [""]
            );

            setRequirements(
                initialData.requirements?.length
                    ? initialData.requirements
                    : [""]
            );

            setContactName(initialData.contact?.name || "");
            setContactPhone(initialData.contact?.phone || "");
            setContactEmail(initialData.contact?.email || "");

        } else {

            setTitle("");
            setCategory("");
            setCountry("");
            setCity("");
            setLocation("");
            setSalary("");
            setEmploymentType("");
            setDuration("");
            setShift("");
            setRemainingPositions(1);
            setDescription("");
            setAbout("");

            setResponsibilities([""]);
            setRequirements([""]);

            setContactName("");
            setContactPhone("");
            setContactEmail("");

        }

    }, [initialData]);

    const submit = (e) => {

        e.preventDefault();

        if (!title.trim()) {
            alert("Job Title is required.");
            return;
        }

        if (!category.trim()) {
            alert("Category is required.");
            return;
        }

        if (!country.trim()) {
            alert("Country is required.");
            return;
        }

        if (!location.trim()) {
            alert("Location is required.");
            return;
        }

        if (!description.trim()) {
            alert("Job Description is required.");
            return;
        }

        onSubmit({

            ...(initialData || {}),

            title,
            category,
            country,
            city,
            location,
            salary,
            employmentType,
            duration,
            shift,
            remainingPositions,
            description,
            about,

            responsibilities: responsibilities.filter(
                item => item.trim() !== ""
            ),

            requirements: requirements.filter(
                item => item.trim() !== ""
            ),

            contact: {

                name: contactName,
                phone: contactPhone,
                email: contactEmail

            }

        });

    };

    return (

        <form
            className="job-form"
            onSubmit={submit}
        >

            <h2>Job Information</h2>

            <div className="form-grid">

                <input
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    placeholder="Employment Type"
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                />

                <input
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <input
                    placeholder="Shift"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                />

                <input
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Remaining Positions"
                    value={remainingPositions}
                    onChange={(e) =>
                        setRemainingPositions(Number(e.target.value))
                    }
                />

            </div>

            <textarea
                rows="6"
                placeholder="Job Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <DynamicList
                title="Responsibilities"
                items={responsibilities}
                setItems={setResponsibilities}
            />

            <DynamicList
                title="Requirements"
                items={requirements}
                setItems={setRequirements}
            />

            <textarea
                rows="5"
                placeholder="About Company"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
            />

            <h2>Recruiter Information</h2>

            <div className="form-grid">

                <input
                    placeholder="Recruiter Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                />

                <input
                    placeholder="Phone"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                />

            </div>

            <div className="job-actions">

                <button
                    type="submit"
                    className="save-btn"
                >

                    {initialData ? "Update Job" : "Save Job"}

                </button>

            </div>

        </form>

    );

}