import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Creatives from "./Creatives";
import CreativeDetails from "./CreativeDetails";
import Contact from "./Contact";

export default function Routes(props) {
   return (
      <Router>
         <div className="block flex md:flex md:h-screen text-gray-700">
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/projects" component={Projects} />
               <Route path="/projectdetails/:id" component={ProjectDetails} />
               <Route path="/creatives" component={Creatives} />
               <Route path="/creativedetails/:id" component={CreativeDetails} />
               <Route path="/contact" component={Contact} />
            </Switch>
         </div>
      </Router>
   );
}
