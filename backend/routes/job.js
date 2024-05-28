// routes/jobRoutes.js
import { Router } from "express";
import { createJob, getJobs } from "../controllers/jobController.js";

const router = Router();

router.get("/", getJobs);

router.post("/", createJob);

export default router;
