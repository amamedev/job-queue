import jobService from "../services/jobService.js";

const jobController = {
  postJob: (req, res, next) => {
    try {
      const job = jobService.createJob();
      if (!job) {
        return res.status(500).json({
          success: false,
          message: "Error al crear el job",
        });
      }
      res.json({
        success: true,
        message: "Job creado correctamente",
        data: job,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllJobs: (req, res, next) => {
    try {
      const jobs = jobService.getAllJobs();
      console.log(jobs);
      if (jobs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No hay jobs",
          data: jobs,
        });
      }
      res.json({
        success: true,
        message: "Jobs obtenidos correctamente",
        data: jobs,
      });
    } catch (error) {
      next(error);
    }
  },

  getJobById: (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
      const job = jobService.getJobById(id);
      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job no encontrado",
        });
      }
      res.json({
        success: true,
        message: "Job obtenido correctamente",
        data: job,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default jobController;
