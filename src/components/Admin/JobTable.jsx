import { Pencil, Trash2 } from "lucide-react";
import "./JobTable.css";

export default function JobTable({
    jobs = [],
    onEdit,
    onDelete,
}) {
    return (
        <div className="job-table-wrapper">

            <table className="job-table">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Category</th>
                        <th>Employment</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {jobs.length === 0 ? (

                        <tr>

                            <td
                                colSpan={6}
                                className="no-data"
                            >
                                No jobs found.
                            </td>

                        </tr>

                    ) : (

                        jobs.map((job) => (

                            <tr key={job.id}>

                                <td>{job.id}</td>

                                <td>
                                    <strong>{job.title}</strong>
                                </td>

                                <td>{job.country}</td>

                                <td>{job.category}</td>

                                <td>{job.employmentType}</td>

                                <td className="action-buttons">

                                    <button
                                        className="edit-btn"
                                        onClick={() => onEdit(job)}
                                        title="Edit Job"
                                    >
                                        <Pencil size={16} />
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => onDelete(job.id)}
                                        title="Delete Job"
                                    >
                                        <Trash2 size={16} />
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}