import React from "react";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function ProjectList(props) {
   const creatives = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
   return (
      <div className="sm:w-3/4 md:w-3/4 lg:w-5/6 fixed top-0 bottom-0 right-0 float-right">
         <PerfectScrollbar>
            <div className="flex flex-wrap mt-20">
               {creatives.map((obj, index) => (
                  <Link
                     to="/projectdetails/1"
                     key={index}
                     style={{ width: "32%" }}
                  >
                     <img
                        src="images/Image 1.png"
                        alt="creatives"
                        style={{ width: "100%" }}
                     />
                  </Link>
               ))}
            </div>
         </PerfectScrollbar>
      </div>
   );
}
