import defaultJobs from "../data/defaultJobs";

const STORAGE_KEY = "career_jobs";

/**
 * Initialize storage with default jobs
 * (Runs only the first time)
 */
export function initializeJobs() {
    const jobs = localStorage.getItem(STORAGE_KEY);

    if (!jobs) {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(defaultJobs)
        );
    }
}

/**
 * Get all jobs
 */
export function getJobs() {
    const jobs = localStorage.getItem(STORAGE_KEY);

    return jobs ? JSON.parse(jobs) : [];
}

/**
 * Save all jobs
 */
export function saveJobs(jobs) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(jobs)
    );
}

/**
 * Get one job by ID
 */
export function getJobById(id) {
    const jobs = getJobs();

    return jobs.find(job => job.id === Number(id));
}

/**
 * Add Job
 */
export function addJob(job) {

    const jobs = getJobs();

    jobs.push(job);

    saveJobs(jobs);
}

/**
 * Update Job
 */
export function updateJob(updatedJob) {

    const jobs = getJobs();

    const newJobs = jobs.map(job =>
        job.id === updatedJob.id
            ? updatedJob
            : job
    );

    saveJobs(newJobs);
}

/**
 * Delete Job
 */
export function deleteJob(id) {

    const jobs = getJobs();

    const filtered = jobs.filter(
        job => job.id !== Number(id)
    );

    saveJobs(filtered);
}