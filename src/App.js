import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/project/:id" component={ProjectDetails} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute path="/create-project" component={CreateProject} />
          <PrivateRoute path="/all-projects" component={AllProjects} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
