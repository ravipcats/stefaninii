import { useState } from "react";
import { useParams } from "react-router-dom";

import { getJobById } from "../../utils/storage";

import JobHeader from "../../components/CareerDetails/JobHeader";
import JobOverview from "../../components/CareerDetails/JobOverview";
import JobDescription from "../../components/CareerDetails/JobDescription";
import JobRequirements from "../../components/CareerDetails/JobRequirements";
import AboutCompany from "../../components/CareerDetails/AboutCompany";
import ContactCard from "../../components/CareerDetails/ContactCard";
import RelatedJobs from "../../components/CareerDetails/RelatedJobs";
import ApplyModal from "../../components/JobApply/ApplyModal";

import "./CareerDetails.css";

export default function CareerDetails() {

    const { id } = useParams();

    const job = getJobById(id);

    const [openApply, setOpenApply] = useState(false);

    if (!job) {
        return <h2 style={{ padding: "100px" }}>Job Not Found</h2>;
    }

    return (
        <>

            <JobHeader job={job} />

            <JobOverview job={job} />

            <div className="career-details-layout">

                <div className="career-main">

                    <JobDescription job={job} />

                    <JobRequirements job={job} />

                    <AboutCompany job={job} />

                </div>

                <div className="career-sidebar">

                    <ContactCard
                        job={job}
                        onApply={() => setOpenApply(true)}
                    />

                </div>

            </div>

            <RelatedJobs currentId={job.id} />

            <ApplyModal
                open={openApply}
                onClose={() => setOpenApply(false)}
                job={job}
            />

        </>
    );
}