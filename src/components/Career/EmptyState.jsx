import React from 'react';

const EmptyState = () => {
    return (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-800">No jobs found</h3>
            <p className="mt-2 text-sm text-slate-600">Try adjusting your search or filters to discover more opportunities.</p>
        </div>
    );
};

export default EmptyState;
