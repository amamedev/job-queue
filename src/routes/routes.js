import { Router } from "express";
import jobController from "../controllers/jobController.js";

const router = Router();

router.get("/jobs", jobController.getAllJobs);
router.get("/jobs/:id", jobController.getJobById);
router.post("/jobs", jobController.postJob);

export default router;
