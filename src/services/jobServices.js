/**
 * Servicio para gestionar tareas
 */

import emitter from "../events/eventEmitter.js";
import { addJobs, getJobs } from "../jobs/jobDB.js";

const jobs = getJobs();
let i = 1;

const jobServices = {
  /**
   * Lógica para crear nueva tarea
   */
  createJob: () => {
    const job = {
      id: i++,
      status: "Pending",
      result: null,
    };

    addJobs(job);

    emitter.emit("createdJob", job);

    return job;
  },

  /**
   * Lógica para obtener todas las tareas
   */
  getJobs: () => {
    return jobs;
  },

  /**
   * Lógica para obtener una tarea por su ID
   */
  getJobById: (id) => {
    const job = jobs.find((el) => el.id === id);
    return job;
  },
};

export default jobServices;
