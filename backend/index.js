import express from "express";
import router from "./routes/job.js";
import { getJobs, createJob } from "./controllers/jobController.js";
import dotenv from "dotenv";
import dbConnect from "./db.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.use("/api", router);

router.get("/", getJobs);
router.post("/", createJob);


dbConnect()
   .then(() => {
      app.listen(port, () => {
         console.log(`Server is running on http://localhost:${port}`);
      });
   })
   .catch((error) => {
      console.log(error);
   });
