const processJob = async (job) => {
  console.log(`Procesando job: ${job.id}`);
  job.status = "processing";

  await new Promise((resolve) => setTimeout(resolve, 8000));

  job.status = "completed";
  job.result = `Resultado del job ${job.id}`;

  console.log(`Job ${job.id} completado`);
};

export default processJob;
