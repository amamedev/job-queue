/**
 * Base de datos para almacenar las tareas
 */
let jobs = [];

/**
 * Añade una tarea a la base de datos
 */
const addJobs = (job) => {
  jobs.push(job);
};

/**
 * Obtiene todas las tareas de la base de datos
 */
const getJobs = () => jobs;

export { addJobs, getJobs };
