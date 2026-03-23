import { addJob, getJobs } from "../jobs/jobQueue.js";
import emitter from "../events/eventEmitter.js";

const jobs = getJobs();
let i = 1;

const jobService = {
  // Crea un nuevo trabajo y lo agrega a la cola
  createJob: () => {
    const job = {
      id: i++,
      status: "pending",
      result: null,
    };

    addJob(job);

    emitter.emit("jobCreated", job);

    return job;
  },

  // Obtiene un trabajo por su ID
  getJobById: (id) => {
    const job = jobs.find((el) => el.id === id);
    return job;
  },

  // Obtiene todos los trabajos
  getAllJobs: () => {
    return jobs;
  },
};

export default jobService;
