import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

const JobListing = ({ isHome = false }) => {
   const [allJobs, setAllJobs] = useState([]);

   useEffect(() => {
      const getJobs = async () => {
         const response = await axios.get("http://localhost:4000/api");
         console.log(response);
         setAllJobs(response.data);
      };
      getJobs();
   }, []);

   const jobs = isHome ? allJobs.slice(0, 3) : allJobs;
   return (
      <section className="bg-gray-900 px-4 py-10">
         <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
               Browse Jobs
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
               {jobs.map((job, index) => (
                  <JobCard job={job} key={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default JobListing;
