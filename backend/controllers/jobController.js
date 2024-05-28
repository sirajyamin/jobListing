import dbConnect from "../db.js";
import { Job } from "../models/jobModel.js";

export const createJob = async (req, res) => {
   const {
      title,
      type,
      location,
      description,
      salary,
      companyName,
      companyDescription,
      contactEmail,
      contactPhone,
   } = req.body;
   console.log(req.body);

   try {
      await dbConnect();
      const newJob = await Job.create({
         title,
         type,
         location,
         description,
         salary,
         companyName,
         companyDescription,
         contactEmail,
         contactPhone,
      });
      res.status(201).json(newJob);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

export const getJobs = async (req, res) => {
   try {
      const jobs = await Job.find({}).sort({ createdAt: -1 });
      res.status(200).json(jobs);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};
