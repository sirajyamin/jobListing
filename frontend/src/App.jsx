import React from "react";
import Home from "./routes/Home";
import NotFoundPage from "./routes/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import JobListing from "./components/JobListing";
import AddJobPage from "./routes/Add-Job";

function App() {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/jobs" element={<JobListing />}></Route>
            <Route path="/add-job" element={<AddJobPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
         </Routes>
      </Layout>
   );
}

export default App;
