import { Link } from "react-router-dom";

const ViewAllJobs = () => {
   return (
      <section className="m-auto max-w-lg my-10 px-6">
         <Link
            to="/jobs"
            className="block bg-gray-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
         >
            <span className="text-white text-2xl">View All Jobs</span>
         </Link>
      </section>
   );
};
export default ViewAllJobs;
