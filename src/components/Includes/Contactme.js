import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Contactme() {
   return (
      <div className="sm:w-3/4 md:w-3/4 lg:w-5/6 fixed top-0 right-0 bottom-0 top-0 h-screen">
         <PerfectScrollbar>
            <div className="flex pt-20 ml-64">
               <img
                  src="/images/Image 13.png"
                  alt=""
                  className="w-full object-cover"
               ></img>

               <div className="pl-32 pr-48">
                  <div className="text-xl font-bold mb-12">
                     Im availbale for work!!
                  </div>
                  <div className="mb-12 text-sm">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </div>
                  <div className="mb-20">
                     <input
                        type="text"
                        className="px-3 py-3 border-2 border-gray-700 outline-none"
                        placeholder="Email address"
                     />
                     <button className="bg-gray-700 text-white px-6 py-3 border-2 border-gray-700 ">
                        Submit
                     </button>
                  </div>
                  <div className="mb-12">
                     It has survived not only five centuries, but also the leap
                     into electronic typesetting, remaining essentially
                     unchanged. It was popularised in the 1960s with the release
                     of Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus
                     PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div className="text-xl font-bold mb-4">
                     Or Let's Connect through
                  </div>
                  <div className="flex">
                     <div className="flex mr-12">
                        <pre className="bg-gray-700 rounded-full h-4 w-4 mt-1 mr-1"></pre>
                        <div className="text-lg">Linkedin</div>
                     </div>
                     <div className="flex">
                        <pre className="bg-gray-700 rounded-full h-4 w-4 mt-1 mr-1"></pre>
                        <div className="text-lg">Facebook</div>
                     </div>
                  </div>
               </div>
            </div>
         </PerfectScrollbar>
      </div>
   );
}
