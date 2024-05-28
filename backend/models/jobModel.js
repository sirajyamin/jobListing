import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   salary: {
      type: String,
      required: true,
   },
   companyName: {
      type: String,
      required: true,
   },
   companyDescription: {
      type: String,
      required: true,
   },
   contactEmail: {
      type: String,
      required: true,
   },
   contactPhone: {
      type: String,
      required: true,
   },
});

export const Job = mongoose.model("Job", jobSchema);
