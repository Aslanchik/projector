import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateProject from "./components/projects/CreateProject";
import PrivateRoute from "./utils/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/project/:id" component={ProjectDetails} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/create-project" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
