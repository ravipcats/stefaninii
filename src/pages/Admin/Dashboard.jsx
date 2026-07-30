import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import JobTable from "../../components/Admin/JobTable";
import JobModal from "../../components/Admin/JobModal";

import {
    getJobs,
    addJob,
    updateJob,
    deleteJob
} from "../../utils/storage";

import {
    logout,
    isAuthenticated
} from "../../utils/auth";

import "./Dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();

    // =======================
    // State
    // =======================

    const [jobs, setJobs] = useState(getJobs());
    const [open, setOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [search, setSearch] = useState("");

    // =======================
    // Filtered Jobs
    // =======================

    const filteredJobs = useMemo(() => {

        return jobs.filter(job =>
            job.title.toLowerCase().includes(search.toLowerCase())
        );

    }, [jobs, search]);

    // =======================
    // Authentication
    // =======================

    if (!isAuthenticated()) {
        return <Navigate to="/admin/login" replace />;
    }

    // =======================
    // Save Job
    // =======================

    const handleSave = (job) => {

        if (editingJob) {

            updateJob(job);

            toast.success("Job Updated Successfully");

        } else {

            addJob({

                ...job,

                id: Date.now(),

                posted: new Date()
                    .toISOString()
                    .split("T")[0],

                active: true,

                applyUrl: "#"

            });

            toast.success("Job Added Successfully");

        }

        setJobs(getJobs());

        setOpen(false);

        setEditingJob(null);

    };

    // =======================
    // Delete Job
    // =======================

    const handleDelete = (id) => {

        if (!window.confirm("Delete this job?")) return;

        deleteJob(id);

        toast.success("Job Deleted Successfully");

        setJobs(getJobs());

    };

    // =======================
    // Logout
    // =======================

    const handleLogout = () => {

        logout();

        navigate("/admin/login");

    };

    return (

        <div className="dashboard">

            <div className="dashboard-header">

                <div>

                    <h1>Careers Dashboard</h1>

                    <p>Manage all jobs</p>

                </div>

                <button
                    className="logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

            {/* Dashboard Cards */}

            <div className="dashboard-cards">

                <div className="dash-card">

                    <h2>{jobs.length}</h2>

                    <span>Total Jobs</span>

                </div>

                <div className="dash-card">

                    <h2>

                        {jobs.filter(job => job.active).length}

                    </h2>

                    <span>Active Jobs</span>

                </div>

                <div className="dash-card">

                    <h2>

                        {

                            [...new Set(jobs.map(job => job.country))].length

                        }

                    </h2>

                    <span>Countries</span>

                </div>

                <div className="dash-card">

                    <h2>

                        {

                            [...new Set(jobs.map(job => job.category))].length

                        }

                    </h2>

                    <span>Categories</span>

                </div>

            </div>

            {/* Toolbar */}

            <div className="dashboard-toolbar">

                <input

                    type="text"

                    placeholder="Search Job..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                <button

                    className="add-job"

                    onClick={() => {

                        setEditingJob(null);

                        setOpen(true);

                    }}

                >

                    + Add Job

                </button>

            </div>

            {/* Table */}

            <JobTable

                jobs={filteredJobs}

                onEdit={(job) => {

                    setEditingJob(job);

                    setOpen(true);

                }}

                onDelete={handleDelete}

            />

            {/* Modal */}

            <JobModal

                open={open}

                initialData={editingJob}

                onClose={() => {

                    setOpen(false);

                    setEditingJob(null);

                }}

                onSubmit={handleSave}

            />

        </div>

    );

}