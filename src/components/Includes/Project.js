import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Project() {
   return (
      <div className="sm:w-3/4 md:w-3/4 lg:w-5/6 fixed top-0 right-0 bottom-0 top-0 h-screen">
         <PerfectScrollbar>
            <div className="flex pt-20">
               <img
                  src="/images/Image 1@2x.png"
                  alt=""
                  className="w-full object-cover"
               ></img>

               <div className="pl-20 pr-48">
                  <div className="text-xl mb-12">Create New Task</div>
                  <div className="mb-48 text-sm">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </div>
                  <div className="text-right mb-0">Next Project</div>
               </div>
            </div>
         </PerfectScrollbar>
      </div>
   );
}
