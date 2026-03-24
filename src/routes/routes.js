/**
 * Rutas para la API
 */
import Router from "express";
import jobController from "../controllers/jobController.js";

const router = Router();

router.get("/", jobController.welcome);
router.get("/jobs", jobController.getJobs);
router.get("/jobs/:id", jobController.getJobById);
router.post("/jobs", jobController.postJob);

export default router;
