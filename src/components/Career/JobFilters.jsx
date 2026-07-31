import React from 'react';

const JobFilters = () => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Filters</h3>
            <div className="space-y-3">
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
                    <option>All departments</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Operations</option>
                </select>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
                    <option>Any location</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                </select>
            </div>
        </div>
    );
};

export default JobFilters;
