const Hero = ({
   title = "Become a React Dev",
   subtitle = "Find the React job that fits your skill set",
}) => {
   return (
      <section className="pt-20 mb-4">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center">
               <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">{title}</span>
               </h1>
               <p className="my-4 text-xl text-gray-300">{subtitle}</p>
            </div>
         </div>
      </section>
   );
};

export default Hero;
