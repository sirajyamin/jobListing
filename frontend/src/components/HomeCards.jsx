import Card from "./Card";

const HomeCards = () => {
   return (
      <section className="py-2 bg-gray-900">
         <div className="container mx-auto flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-lg max-w-screen-xl">
               <Card className="w-full bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white">
                     For Developers
                  </h2>
                  <p className="mt-2 mb-4 text-gray-300">
                     Browse our React jobs and start your career today
                  </p>
                  <a
                     href="/jobs"
                     className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                  >
                     Browse Jobs
                  </a>
               </Card>
               <Card className="w-full bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white">
                     For Employers
                  </h2>
                  <p className="mt-2 mb-4 text-gray-300">
                     List your job to find the perfect developer for the role
                  </p>
                  <a
                     href="/add-job"
                     className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                  >
                     Add Job
                  </a>
               </Card>
            </div>
         </div>
      </section>
   );
};

export default HomeCards;
