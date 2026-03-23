import processJob from "../workers/jobWorker.js";
import emitter from "../events/eventEmitter.js";

emitter.on("jobCreated", async (job) => {
  try {
    await processJob(job);
  } catch (error) {
    job.status = "failed";
    job.result = null;
    console.error("Error procesando job:", error);
  }
});
