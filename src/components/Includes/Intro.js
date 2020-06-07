import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
   return (
      <div className="pt-24 pl-20 float-right">
         <div className="pt-20">
            <h3 className="text-4xl">Hi</h3>
            <p className="text-2xl font-light">
               I'm Vishnunath
               <br />
               A Freelance digital product designer based in
               <br />
               Bangalore, India working with entrepreneurs from
               <br />
               all around the world
            </p>
         </div>
         <ul className="mt-16">
            <li>
               <Link to="./projectList.html" className="text-2xl font-light">
                  UI/UX Projects
               </Link>
            </li>
            <li className="mt-6">
               <Link to="./creatives.html" className="text-2xl font-light">
                  Creatives
               </Link>
            </li>
            <li className="mt-6">
               <Link to="#" className="text-2xl font-light">
                  Concepts
               </Link>
            </li>
            <li className="mt-6">
               <Link to="./contact.html" className="text-2xl font-light">
                  Contact
               </Link>
            </li>
         </ul>
         <div className="mt-20">
            <Link to="#" className="p-3 border-2">
               <i className="fab fa-linkedin-in text-xl"></i>
            </Link>
            <Link to="#" className="p-3 border-2 ml-6">
               <i className="fab fa-dribbble text-xl"></i>
            </Link>
            <Link to="#" className="p-3 border-2 ml-6">
               <i className="fab fa-behance text-xl"></i>
            </Link>
            <Link to="#" className="p-3 border-2 ml-6">
               <i className="fab fa-twitter text-xl"></i>
            </Link>
         </div>
      </div>
   );
}
