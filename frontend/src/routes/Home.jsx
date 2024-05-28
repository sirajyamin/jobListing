import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

function Home() {
   return (
      <>
         <Hero />
         <HomeCards />
         <JobListing isHome="true" />
         <ViewAllJobs />
      </>
   );
}

export default Home;
