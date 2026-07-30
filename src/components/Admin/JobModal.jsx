import JobForm from "./JobForm";
import "./JobModal.css";

export default function JobModal({

    open,

    onClose,

    initialData,

    onSubmit

}) {

    if (!open) return null;

    return (

        <div className="modal-backdrop">

            <div className="job-modal">

                <div className="modal-header">

                    <h2>

                        {

                            initialData

                                ? "Edit Job"

                                : "Add New Job"

                        }

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <JobForm

                    initialData={initialData}

                    onSubmit={onSubmit}

                />

            </div>

        </div>

    );

}