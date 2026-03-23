const jobs = [];

const addJob = (job) => {
  jobs.push(job);
};

const getJobs = () => jobs;

export { addJob, getJobs };
