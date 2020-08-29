import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateProject from "./components/projects/CreateProject";
import PrivateRoute from "./utils/privateRoute";
import PublicRoute from "./utils/publicRoute";
import AllProjects from "./components/projects/AllProjects";
import Profile from "./components/user/Profile";
import NotFound from "./components/shared/NotFound";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/project/:id" component={ProjectDetails} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PrivateRoute
            exact
            path="/create-project"
            component={CreateProject}
          />
          <PrivateRoute exact path="/all-projects" component={AllProjects} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PublicRoute path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
