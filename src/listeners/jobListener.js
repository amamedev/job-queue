/**
 * Listener para escuchar eventos de creación de tareas
 */
import emitter from "../events/eventEmitter.js";
import { createdJob } from "../workers/jobWorker.js";

emitter.on("createdJob", async (job) => {
  try {
    await createdJob(job);
  } catch (error) {
    job.status = "failed";
    job.result = null;
    console.error(`Error procesando la tarea ${job.id}${error}`);
  }
});
