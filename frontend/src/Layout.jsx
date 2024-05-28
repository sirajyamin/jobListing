import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
   return (
      <div className="min-h-screen bg-gray-900 text-white">
         <Navbar />
         <main className="container mx-auto px-4 py-8">{children}</main>
         <footer className="bg-gray-800 text-center py-4">
            <p>&copy; 2024 React Jobs. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Layout;
