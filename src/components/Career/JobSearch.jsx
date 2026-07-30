import React from 'react';

const JobSearch = () => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-slate-700">Search jobs</label>
            <input
                type="text"
                placeholder="Search by title or keyword"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default JobSearch;
