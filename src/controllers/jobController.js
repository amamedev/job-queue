/**
 * Controlador de peticiones y respuestas para las tareas
 */
import jobServices from "../services/jobServices.js";

const jobController = {
  // Bienvenida
  welcome: (req, res, next) => {
    try {
      res.json({
        status: 200,
        message: "Bienvenido",
      });
    } catch (error) {
      next(error);
    }
  },

  // Crear nueva tarea
  postJob: (req, res, next) => {
    try {
      const createdJob = jobServices.createJob();
      if (!createdJob) {
        return res.status(500).json({
          status: 500,
          message: "No se pudo crear la tarea",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Tarea creada correctamente",
        data: createdJob,
      });
    } catch (error) {
      next(error);
    }
  },

  // Obtener todas las tareas
  getJobs: (req, res, next) => {
    try {
      const jobs = jobServices.getJobs();
      if (!jobs) {
        return res.status(500).json({
          status: 500,
          message: "No se puedieron obtener las tareas",
        });
      } else if (jobs.length === 0) {
        return res.sendStatus(204);
      }
      res.status(200).json({
        status: 200,
        message: "Tareas obtenidas",
        data: jobs,
      });
    } catch (error) {
      next(error);
    }
  },

  // Obrener tarea por id
  getJobById: (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const job = jobServices.getJobById(id);
      if (!job) {
        return res.status(404).json({
          status: 404,
          message: "No se encontró niguna tarea",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Tarea obtenida",
        data: job,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default jobController;
