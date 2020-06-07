import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
   return (
      <div className="py-24 pl-20 w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/6 md:h-screen float-left fixed">
         <Link className="text-2xl font-light" to="#">
            Vishnunath CR
         </Link>
         <ul className="mt-20">
            <li>
               <Link to="/projects" className="text-2xl font-hairline">
                  UI/UX Projects
               </Link>
            </li>
            <li className="mt-6">
               <Link to="/creatives" className="text-2xl font-hairline">
                  Creatives
               </Link>
            </li>
            <li className="mt-6">
               <Link to="#" className="text-2xl font-hairline">
                  Concepts
               </Link>
            </li>
            <li className="mt-6">
               <Link to="/contact" className="text-2xl font-hairline">
                  Contact
               </Link>
            </li>
         </ul>
         <div className="mb-20 absolute bottom-0">
            <Link to="#" className="p-2 border-2">
               <i className="fab fa-linkedin-in text-sm"></i>
            </Link>
            <Link to="#" className="p-2 border-2 ml-3">
               <i className="fab fa-dribbble text-sm"></i>
            </Link>
            <Link to="#" className="p-2 border-2 ml-3">
               <i className="fab fa-behance text-sm"></i>
            </Link>
            <Link to="#" className="p-2 border-2 ml-3">
               <i className="fab fa-twitter text-sm"></i>
            </Link>
         </div>
      </div>
   );
}
