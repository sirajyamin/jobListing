import { useState } from "react";
import { FaMapMarkerAlt, FaRegClock, FaMoneyBillWave } from "react-icons/fa";

const JobCard = ({ job }) => {
   const [showFullDescription, setShowFullDescription] = useState(false);

   return (
      <div className="bg-gray-800 rounded-xl shadow-md relative">
         <div className="p-4">
            <div className="mb-6">
               <div className="flex items-center text-gray-400 my-2">
                  <FaRegClock className="mr-2" />
                  {job.type}
               </div>
               <h3 className="text-xl font-bold text-white">{job.title}</h3>
            </div>

            <div
               className={`mb-5 overflow-hidden transition-all duration-500 ease-in-out`}
               style={{ maxHeight: showFullDescription ? "1000px" : "5rem" }}
            >
               <p className="text-gray-300">
                  {showFullDescription
                     ? job.description
                     : job.description.substring(0, 130) + "..."}
               </p>
            </div>
            <button
               onClick={() => setShowFullDescription(!showFullDescription)}
               className="text-indigo-400 underline"
            >
               {showFullDescription ? "Show Less" : "Show More"}
            </button>
            <div className="flex items-center text-indigo-400 mb-2">
               <FaMoneyBillWave className="mr-2" />
               {job.salary} / Month
            </div>

            <div className="border border-gray-700 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
               <div className="flex items-center text-orange-500 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  {job.companyName}
               </div>
               <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
               >
                  Read More
               </a>
            </div>
         </div>
      </div>
   );
};

export default JobCard;
