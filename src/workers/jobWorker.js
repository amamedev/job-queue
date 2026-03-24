// Worker para procesar tareas
const createdJob = async (job) => {
  console.log("Procesando tarea...");

  // Simular trabajo con asincronía
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`${i * 10}% procesado`);
  }

  job.status = "procesada";
  job.result = "resuelta";

  console.log("Tarea procesada");
};

export { createdJob };
